// OpenRouter API integration for AI functionality
// Documentation: https://openrouter.ai/docs

interface OpenRouterResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const generateAIResponse = async (prompt: string): Promise<string> => {
  try {
    const apiKey = process.env.REACT_APP_OPENROUTER_API_KEY;
    
    if (!apiKey) {
      console.error('OpenRouter API key is missing');
      return 'Sorry, AI functionality is currently unavailable.';
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': window.location.origin,
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o', // Can be configured based on needs
        messages: [
          {
            role: 'system',
            content: 'You are a helpful dental assistant providing information about dental procedures, care, and answering patient questions.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json() as OpenRouterResponse;
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    return 'Sorry, there was an error processing your request.';
  }
};

// Function to handle patient questions
export const handlePatientQuestion = async (question: string): Promise<string> => {
  return generateAIResponse(question);
};

// Function for treatment recommendations
export const getTreatmentInfo = async (treatmentType: string): Promise<string> => {
  return generateAIResponse(`Provide information about ${treatmentType} dental treatment.`);
};

// Function for post-procedure care instructions
export const getPostProcedureCare = async (procedure: string): Promise<string> => {
  return generateAIResponse(`What are the care instructions after a ${procedure}?`);
};
