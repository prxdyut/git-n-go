/**
 * Types for commit message operations
 */

export interface CommitFormatRequest {
  /** The informal commit description provided by the user */
  description: string;
  /** Whether to include emojis in the formatted commit message */
  emoji?: boolean;
}

export interface CommitFormatResponse {
  /** The formatted conventional commit message */
  commit: string;
}

/**
 * Types for development steps operations
 */

export interface DevStepsRequest {
  /** The feature description provided by the user */
  feature: string;
}

export interface DevStepsResponse {
  /** Brief summary of the feature */
  summary: string;
  /** List of development steps */
  steps: string[];
  /** Testing recommendations */
  testing: string[];
  /** Potential edge cases to consider */
  edgeCases: string[];
}

/**
 * Error response types
 */

export interface ErrorResponse {
  error: {
    /** User-friendly error message */
    message: string;
    /** Error code for identifying the type of error */
    code: string;
    /** Unique request ID for tracking */
    requestId: string;
  };
} 