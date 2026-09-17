import { Router } from 'express';
import { startApplication, updateStep, submitApplication, verifyResume } from '../controllers/applicationController';

const router = Router();

router.post('/start', startApplication);
router.patch('/step', updateStep);
router.post('/verify-resume', verifyResume);
router.post('/submit', submitApplication);

export default router;
