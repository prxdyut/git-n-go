import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/**
 * Server configuration
 */
export const config = {
  // Server settings
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // CORS settings
  allowedOrigins: (process.env.ALLOWED_ORIGINS || 'http://localhost:3000,http://localhost:5000')
    .split(','),
  
  // API keys
  groqApiKey: process.env.GROQ_API_KEY || '',
  
  // Logging
  logLevel: process.env.LOG_LEVEL || 'info',
  
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },
  
  // Model configuration for commit message generation
  commitMessageConfig: {
    model: "llama3-70b-8192",
    temperature: 0.1,
    max_tokens: 300,
    top_p: 0.9,
    stop: ["\n\n"]
  },
  
  // Model configuration for development steps generation
  devStepsConfig: {
    model: "llama3-70b-8192",
    temperature: 0.4,
    max_tokens: 1000,
    top_p: 0.95
  }
}; 