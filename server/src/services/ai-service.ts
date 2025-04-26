import { Groq } from 'groq-sdk';
import { config } from '../config';
import logger from '../utils/logger';
import { v4 as uuidv4 } from 'uuid';

/**
 * AI Service for interacting with Groq API
 */
class AIService {
  private groq: Groq;
  
  constructor() {
    this.groq = new Groq({
      apiKey: config.groqApiKey
    });
    
    if (!config.groqApiKey) {
      logger.warn('GROQ_API_KEY is not set. API calls will fail.');
    }
  }
  
  /**
   * Generates a conventional commit message from an informal description
   * @param description The informal commit description
   * @param includeEmoji Whether to include emojis in the commit message
   * @returns The formatted conventional commit message
   */
  async generateCommitMessage(description: string, includeEmoji = false): Promise<string> {
    try {
      const requestId = uuidv4();
      logger.info(`Generating commit message`, { requestId, description });
      
      // Build the system prompt
      let systemPrompt = `
You are a helpful Git commit message formatter with deep expertise in Conventional Commits standard.

Your task is to convert informal commit descriptions into properly formatted, professional Conventional Commit messages.

## Guidelines:
1. Always follow the Conventional Commits standard (type(scope): description)
2. Choose the most appropriate type (feat, fix, docs, style, refactor, perf, test, chore)
3. Identify an appropriate scope from the description if possible
4. Keep the commit message concise but descriptive (under 70 characters)
5. Use the imperative mood for the description (e.g., "add feature" not "added feature")
6. Format breaking changes with ! and BREAKING CHANGE footer when needed`;

      // Add emoji instruction if requested
      if (includeEmoji) {
        systemPrompt += `
7. Include an appropriate emoji at the beginning of the commit message`;
      } else {
        systemPrompt += `
7. Do not include emojis unless explicitly requested`;
      }
      
      systemPrompt += `

## Examples:
Input: "Added new login button to the auth page"
Output: feat(auth): add login button to auth page

Input: "Fixed the bug where API crashes with large inputs"
Output: fix(api): prevent crash with large inputs

Input: "Updated documentation for installation"
Output: docs: update installation documentation

Input: "Refactored the user service to use new database schema, breaks API compatibility"
Output: refactor(user-service)!: use new database schema

BREAKING CHANGE: API responses now use the new schema format

## Your Response:
Return ONLY the formatted commit message without explanations, comments, or additional text.

Prompt Version: 1.0.0
Last Updated: 2025-04-26`;
      
      // Create the completion
      const completion = await this.groq.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: description }
        ],
        model: config.commitMessageConfig.model,
        temperature: config.commitMessageConfig.temperature,
        max_tokens: config.commitMessageConfig.max_tokens,
        top_p: config.commitMessageConfig.top_p,
        stop: config.commitMessageConfig.stop
      });
      
      const commitMessage = completion.choices[0].message.content?.trim() || '';
      logger.info(`Successfully generated commit message`, { requestId });
      
      return commitMessage;
    } catch (error) {
      logger.error('Error generating commit message', { error });
      throw new Error('Failed to generate commit message');
    }
  }
}

export default new AIService(); 