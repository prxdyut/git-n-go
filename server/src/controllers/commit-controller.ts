import { Request, Response } from 'express';
import { CommitFormatRequest, CommitFormatResponse } from '@git-n-go/common';
import aiService from '../services/ai-service';
import logger from '../utils/logger';
import { v4 as uuidv4 } from 'uuid';

/**
 * Controller for commit-related endpoints
 */
export const commitController = {
  /**
   * Formats an informal commit description into a conventional commit message
   */
  async formatCommit(req: Request<{}, {}, CommitFormatRequest>, res: Response): Promise<void> {
    const requestId = uuidv4();
    const { description, emoji = false } = req.body;
    console.log(description)
    try {
      logger.info('Received commit format request', { requestId, description });
      
      if (!description || typeof description !== 'string') {
        logger.warn('Invalid request: missing or invalid description', { requestId });
        res.status(400).json({
          error: {
            message: 'Description is required and must be a string',
            code: 'INVALID_INPUT',
            requestId
          }
        });
        return;
      }
      
      // Generate commit message using AI service
      const commit = await aiService.generateCommitMessage(description, emoji);
      
      // Return formatted commit
      const response: CommitFormatResponse = { commit };
      logger.info('Successfully formatted commit', { requestId });
      res.status(200).json(response);
    } catch (error) {
      logger.error('Error formatting commit', { requestId, error });
      res.status(500).json({
        error: {
          message: 'An error occurred while formatting the commit message',
          code: 'SERVER_ERROR',
          requestId
        }
      });
    }
  }
}; 