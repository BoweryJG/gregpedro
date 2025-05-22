// Generic OpenRouter service with model selection
// This service allows different parts of the application to use different AI models

export type OpenRouterModel = 
  | 'openai/gpt-4o' 
  | 'openai/gpt-4-turbo' 
  | 'openai/gpt-3.5-turbo'
  | 'anthropic/claude-3-opus'
  | 'anthropic/claude-3-sonnet'
  | 'anthropic/claude-3-haiku'
  | 'google/gemini-pro'
  | 'meta-llama/llama-3-70b-instruct';

export interface ModelConfig {
  model: OpenRouterModel;
  temperature?: number;
  maxTokens?: number;
  topP?: number;
}

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ModelResponse {
  content: string;
  success: boolean;
  error?: string;
  metadata?: any;
}

const DEFAULT_CONFIG: ModelConfig = {
  model: 'openai/gpt-4o',
  temperature: 0.7,
  maxTokens: 500,
  topP: 0.9
};

/**
 * Generate a response from the selected AI model via OpenRouter
 */
export const generateModelResponse = async (
  messages: Message[],
  config: Partial<ModelConfig> = {}
): Promise<ModelResponse> => {
  try {
    const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
    
    if (!apiKey) {
      console.error('OpenRouter API key is missing');
      return {
        success: false,
        content: 'API key is missing',
        error: 'OpenRouter API key not configured'
      };
    }

    // Merge default config with provided config
    const finalConfig: ModelConfig = {
      ...DEFAULT_CONFIG,
      ...config
    };

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.origin,
      },
      body: JSON.stringify({
        model: finalConfig.model,
        messages,
        max_tokens: finalConfig.maxTokens,
        temperature: finalConfig.temperature,
        top_p: finalConfig.topP
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    return {
      success: true,
      content: data.choices[0].message.content,
      metadata: {
        model: data.model,
        usage: data.usage,
        id: data.id
      }
    };
  } catch (error) {
    console.error('Error generating model response:', error);
    return {
      success: false,
      content: error instanceof Error ? error.message : 'Unknown error',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Specialized module configurations
export const MODULE_CONFIGS: Record<string, ModelConfig> = {
  'chatbot': {
    model: 'openai/gpt-4o',
    temperature: 0.7,
    maxTokens: 500
  },
  'treatment-analyzer': {
    model: 'anthropic/claude-3-opus',
    temperature: 0.2,
    maxTokens: 1000
  },
  'appointment-recommender': {
    model: 'openai/gpt-4o',
    temperature: 0.5,
    maxTokens: 300
  },
  'insurance-verifier': {
    model: 'anthropic/claude-3-haiku',
    temperature: 0.3,
    maxTokens: 400
  },
  'educational-content': {
    model: 'anthropic/claude-3-sonnet',
    temperature: 0.8,
    maxTokens: 1500
  }
};

/**
 * Get a response using a specific module's configuration
 */
export const getModuleResponse = async (
  moduleName: keyof typeof MODULE_CONFIGS | string,
  messages: Message[],
  customConfig?: Partial<ModelConfig>
): Promise<ModelResponse> => {
  // Check if module has a predefined configuration
  const moduleConfig = moduleName in MODULE_CONFIGS 
    ? MODULE_CONFIGS[moduleName as keyof typeof MODULE_CONFIGS]
    : DEFAULT_CONFIG;
  
  // Merge module config with any custom config
  const finalConfig = {
    ...moduleConfig,
    ...customConfig
  };
  
  return generateModelResponse(messages, finalConfig);
};
