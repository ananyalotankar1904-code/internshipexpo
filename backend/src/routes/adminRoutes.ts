import { Router } from 'express';
import { loginAdmin, getAllApplicants } from '../controllers/adminController';
import rateLimit from 'express-rate-limit';

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many login attempts. Try again in 15 minutes.' }
});

router.post('/login', loginLimiter, loginAdmin);
router.get('/applicants', getAllApplicants);

export default router;
