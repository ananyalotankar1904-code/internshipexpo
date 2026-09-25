import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { prisma } from '../index';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
if (!process.env.JWT_SECRET) {
  throw new Error('FATAL ERROR: JWT_SECRET environment variable is missing.');
}
const JWT_SECRET = process.env.JWT_SECRET;

type StudentTokenPayload = {
  email: string;
  role: 'student';
};

const startSchema = z.object({
  email: z.string().email().trim().max(255),
  rollNo: z.string().trim().max(50),
  fullName: z.string().min(1).max(100).trim(),
  branch: z.string().min(1).max(50).trim(),
  year: z.number().int().min(1).max(4),
});

export const startApplication = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = startSchema.parse(req.body);

    let student = await prisma.student.findUnique({
      where: { email: data.email }
    });

    if (student) {
      if (student.status === 'SUBMITTED') {
        res.status(403).json({ error: 'Application already submitted for this email.' });
        return;
      }
      // DRAFT exists, update details just in case
      student = await prisma.student.update({
        where: { email: data.email },
        data: {
          rollNo: data.rollNo,
          fullName: data.fullName,
          branch: data.branch,
          year: data.year,
        }
      });
    } else {
      student = await prisma.student.create({
        data: {
          email: data.email,
          rollNo: data.rollNo,
          fullName: data.fullName,
          branch: data.branch,
          year: data.year,
        }
      });
    }

    const sessionToken = jwt.sign({ email: student.email, role: 'student' }, JWT_SECRET, { expiresIn: '2h' });
    res.status(200).json({ student, sessionToken });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.issues });
    } else if ((error as any).code === 'P2002') {
      res.status(400).json({ error: 'Roll number or email is already registered.' });
    } else {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const verifyStudentSession = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized: No session token provided' });
    return;
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as StudentTokenPayload;
    
    if (decoded.role !== 'student' || !decoded.email) {
      res.status(401).json({ error: 'Unauthorized: Invalid token role' });
      return;
    }
    
    (req as any).studentEmail = decoded.email;
    next();
  } catch (e) {
    res.status(401).json({ error: 'Unauthorized: Session expired or invalid' });
  }
};

const updateSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  lastStepCompleted: z.number().int().min(1).max(5),
});

export const updateStep = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = updateSchema.parse(req.body);
    const sessionEmail = (req as any).studentEmail;

    if (data.email !== sessionEmail) {
      res.status(403).json({ error: 'Email mismatch with session' });
      return;
    }

    const student = await prisma.student.update({
      where: { email: data.email },
      data: {
        ...(data.phone && { phone: data.phone }),
        lastStepCompleted: data.lastStepCompleted,
      }
    });

    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const verifySchema = z.object({
  email: z.string().email(),
  driveLink: z.string().url(),
});

export const verifyResume = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, driveLink } = verifySchema.parse(req.body);
    const sessionEmail = (req as any).studentEmail;

    if (email !== sessionEmail) {
      res.status(403).json({ error: 'Email mismatch with session' });
      return;
    }

    if (!driveLink.includes('drive.google.com') && !driveLink.includes('docs.google.com')) {
      res.status(400).json({ error: 'Invalid Google Drive link format.' });
      return;
    }

    // TODO: Authenticate using googleapis and credentials.json to check file metadata
    // For now, we simulate a successful validation.

    await prisma.student.update({
      where: { email },
      data: { resumeLink: driveLink }
    });

    res.status(200).json({ success: true, message: 'Resume verified and saved.' });
  } catch (error: any) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: 'Validation failed', details: (error as ZodError).issues });
      return;
    }
    res.status(400).json({ error: error.message || 'Validation failed' });
  }
};

const submitSchema = z.object({
  email: z.string().email(),
  applications: z.array(z.object({
    positionId: z.string().uuid(),
    taskLink: z.string().url().optional().or(z.literal('')),
    priority: z.number().int().optional()
  })).max(3).min(1),
});

export const submitApplication = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, applications } = submitSchema.parse(req.body);
    const sessionEmail = (req as any).studentEmail;

    if (email !== sessionEmail) {
      res.status(403).json({ error: 'Email mismatch with session' });
      return;
    }

    // Run transaction
    const result = await prisma.$transaction(async (tx: any) => {
      // 1. Check the student row
      const student = await tx.student.findUnique({
        where: { email }
      });

      if (!student) {
        throw new Error('Student not found');
      }

      if (student.status === 'SUBMITTED') {
        throw new Error('Application already submitted');
      }

      // 2. Create applications
      for (const app of applications) {
        await tx.application.create({
          data: {
            studentId: student.id,
            positionId: app.positionId,
            taskLink: app.taskLink || null,
            priority: app.priority || 0,
          }
        });
      }

      // 3. Mark as SUBMITTED
      await tx.student.update({
        where: { id: student.id },
        data: { status: 'SUBMITTED' }
      });

      return { success: true, student };
    }, {
      maxWait: 15000,
      timeout: 30000
    });

    // Send confirmation email
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });

        await transporter.sendMail({
          from: `"TEDxCRCE Internship Expo" <${process.env.SMTP_USER}>`,
          to: email,
          subject: 'Application Submitted Successfully - TEDxCRCE Internship Expo',
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #d1121c;">Application Submitted Successfully!</h2>
              <p>Hi ${result.student.fullName},</p>
              <p>Your application for the TEDxCRCE Internship Expo has been successfully recorded in our central recruiter pool.</p>
              <p>Your selected roles have been securely logged.</p>
              <p>Thank you for applying, and we look forward to seeing you at the expo!</p>
              <p>Best regards,<br/>TEDxCRCE Team</p>
            </div>
          `
        });
      } catch (err) {
        console.error('Failed to send email:', err);
      }
    }

    res.status(200).json({ success: true });
  } catch (error: any) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: 'Validation failed', details: (error as ZodError).issues });
      return;
    }
    const knownErrors = ['Student not found', 'Application already submitted'];
    const message = knownErrors.includes(error.message) ? error.message : (error.message || 'Submission failed');
    res.status(400).json({ error: message });
  }
};

export const getCurrentStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const sessionEmail = (req as any).studentEmail;

    const student = await prisma.student.findUnique({
      where: { email: sessionEmail },
      include: {
        applications: {
          include: {
            position: {
              include: {
                company: true
              }
            }
          }
        }
      }
    });

    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }

    if (student.status !== 'SUBMITTED') {
      res.status(403).json({ error: 'Application not submitted' });
      return;
    }

    res.status(200).json({
      success: true,
      student: {
        id: student.id,
        email: student.email,
        fullName: student.fullName,
        rollNo: student.rollNo,
        branch: student.branch,
        year: student.year,
        phone: student.phone,
        resumeLink: student.resumeLink,
        status: student.status,
        lastStepCompleted: student.lastStepCompleted
      },
      applications: student.applications
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};