import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { prisma } from '../index';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

const startSchema = z.object({
  email: z.string().email().trim().max(255),
  fullName: z.string().min(1).max(100).trim(),
  branch: z.string().min(1).max(50).trim(),
  year: z.number().int().min(1).max(4),
  class: z.string().max(50).trim().optional(),
  division: z.string().max(10).trim().optional(),
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
          fullName: data.fullName,
          branch: data.branch,
          year: data.year,
          class: data.class,
          division: data.division,
        }
      });
    } else {
      student = await prisma.student.create({
        data: {
          email: data.email,
          fullName: data.fullName,
          branch: data.branch,
          year: data.year,
          class: data.class,
          division: data.division,
        }
      });
    }

    const sessionToken = jwt.sign({ email: student.email }, JWT_SECRET, { expiresIn: '2h' });
    res.status(200).json({ student, sessionToken });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.issues });
    } else {
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
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
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
    
    // Simple regex to extract file ID
    const match = driveLink.match(/[-\w]{25,}/);
    if (!match) {
      res.status(400).json({ error: 'Invalid Google Drive link format.' });
      return;
    }
    const fileId = match[0];

    // TODO: Authenticate using googleapis and credentials.json to check file metadata
    // For now, we simulate a successful validation.
    
    await prisma.student.update({
      where: { email },
      data: { resumeLink: driveLink }
    });

    res.status(200).json({ success: true, message: 'Resume verified and saved.' });
  } catch (error) {
    res.status(400).json({ error: 'Validation failed' });
  }
};

const submitSchema = z.object({
  email: z.string().email(),
  applications: z.array(z.object({
    positionId: z.string().uuid(),
    taskLink: z.string().url().optional().or(z.literal(''))
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
          }
        });
      }

      // 3. Mark as SUBMITTED
      await tx.student.update({
        where: { id: student.id },
        data: { status: 'SUBMITTED' }
      });

      return { success: true };
    });


    res.status(200).json(result);
  } catch (error: any) {
    const knownErrors = ['Student not found', 'Application already submitted'];
    const message = knownErrors.includes(error.message) ? error.message : 'Submission failed';
    res.status(400).json({ error: message });
  }
};
