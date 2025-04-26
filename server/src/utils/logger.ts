import winston from 'winston';
import { config } from '../config';

/**
 * Logger configuration
 */
const logger = winston.createLogger({
  level: config.logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'git-n-go-server' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

// Add file transport in production
if (config.nodeEnv === 'production') {
  logger.add(
    new winston.transports.File({ 
      filename: 'error.log', 
      level: 'error' 
    })
  );
  logger.add(
    new winston.transports.File({ 
      filename: 'combined.log' 
    })
  );
}

export default logger; 