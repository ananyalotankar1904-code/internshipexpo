import { Router } from 'express';
import { startApplication, updateStep, submitApplication, verifyResume, verifyStudentSession } from '../controllers/applicationController';

const router = Router();

router.post('/start', startApplication);
router.patch('/step', verifyStudentSession, updateStep);
router.post('/verify-resume', verifyStudentSession, verifyResume);
router.post('/submit', verifyStudentSession, submitApplication);

export default router;
