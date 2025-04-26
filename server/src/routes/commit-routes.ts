import { Router } from 'express';
import { commitController } from '../controllers/commit-controller';

const router = Router();

/**
 * @route   POST /api/commit/format
 * @desc    Format an informal commit description into a conventional commit message
 * @access  Public
 */
router.post('/format', commitController.formatCommit);

export default router; 