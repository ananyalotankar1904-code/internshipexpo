import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../index';
import jwt from 'jsonwebtoken';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

if (!ADMIN_USERNAME || !ADMIN_PASSWORD || !JWT_SECRET) {
  console.warn('WARNING: Admin credentials or JWT secret are missing from environment variables.');
}

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = loginSchema.parse(req.body);

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = jwt.sign({ role: 'admin' }, JWT_SECRET!, { expiresIn: '8h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Validation failed' });
  }
};

export const getAllApplicants = async (req: Request, res: Response): Promise<void> => {
  try {
    // JWT auth check
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET!) as any;
      if (decoded.role !== 'admin') {
        res.status(403).json({ error: 'Forbidden: Admin access required' });
        return;
      }
    } catch (e) {
      res.status(401).json({ error: 'Invalid or expired token' });
      return;
    }

    const students = await prisma.student.findMany({
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
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.status(200).json({ applicants: students });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
