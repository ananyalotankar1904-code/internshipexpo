import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import applicationRoutes from './routes/applications';
import companyRoutes from './routes/companies';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
export const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/api/applications', applicationRoutes);
app.use('/api/companies', companyRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
