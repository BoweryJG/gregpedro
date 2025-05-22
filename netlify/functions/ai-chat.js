// Netlify serverless function to proxy AI chat requests to OpenRouter
// This removes the need for exposing the API key in frontend code

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: 'Method Not Allowed' })
    };
  }

  try {
    // Parse the request body
    const body = JSON.parse(event.body);
    const { messages, model = 'openai/gpt-4o', maxTokens = 500, temperature = 0.7 } = body;

    // Validate required parameters
    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: 'Messages array is required' })
      };
    }

    // Get the API key from environment variables
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error('OpenRouter API key is missing');
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          success: false, 
          error: 'Server configuration error' 
        })
      };
    }

    // Make the request to OpenRouter
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': event.headers.referer || 'https://drgregpedro.com',
        'X-Title': 'Dr. Greg Pedro Dental Practice'
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: maxTokens,
        temperature
      }),
    });

    // Handle the response
    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API error:', errorText);
      return {
        statusCode: response.status,
        body: JSON.stringify({ 
          success: false, 
          error: `API error: ${response.status}`
        })
      };
    }

    const data = await response.json();
    
    // Return the AI message
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: data.choices[0].message.content
      })
    };

  } catch (error) {
    console.error('Error handling request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        error: error.message || 'Internal Server Error'
      })
    };
  }
};
