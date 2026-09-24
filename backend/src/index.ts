import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import applicationRoutes from './routes/applications';
import companyRoutes from './routes/companies';
import adminRoutes from './routes/adminRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Prisma Singleton Pattern
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

app.set('trust proxy', 1);
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PATCH'],
  credentials: true,
}));
app.use(express.json({ limit: '100kb' }));

app.use('/api/applications', applicationRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/admin', adminRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Only listen on a port if not running on Vercel
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export the app for Vercel Serverless Functions
export default app;
