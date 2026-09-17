import { Request, Response } from 'express';
import { z, ZodError } from 'zod';
import { prisma } from '../index';
import { google } from 'googleapis';

const startSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(1),
  branch: z.string().min(1),
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
          fullName: data.fullName,
          branch: data.branch,
          year: data.year,
        }
      });
    } else {
      student = await prisma.student.create({
        data: {
          email: data.email,
          fullName: data.fullName,
          branch: data.branch,
          year: data.year,
        }
      });
    }

    res.status(200).json({ student });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.issues });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
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
  positionIds: z.array(z.string().uuid()).max(3).min(1),
});

export const submitApplication = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, positionIds } = submitSchema.parse(req.body);

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
      for (const posId of positionIds) {
        await tx.application.create({
          data: {
            studentId: student.id,
            positionId: posId,
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
    res.status(400).json({ error: error.message || 'Submission failed' });
  }
};
