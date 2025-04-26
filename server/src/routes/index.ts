import { Router } from 'express';
import commitRoutes from './commit-routes';

const router = Router();

// Commit routes
router.use('/commit', commitRoutes);

export default router; 