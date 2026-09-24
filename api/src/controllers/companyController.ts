import { Request, Response } from 'express';
import { prisma } from '../index';

export const getCompanies = async (req: Request, res: Response): Promise<void> => {
  try {
    const companies = await prisma.company.findMany({
      include: {
        positions: true,
      },
    });

    res.status(200).json({ companies });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error fetching companies.' });
  }
};
