// Netlify serverless function to proxy AI chat requests to OpenRouter
// This removes the need for exposing the API key in frontend code

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
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
        headers: corsHeaders,
        body: JSON.stringify({ success: false, error: 'Messages array is required' })
      };
    }

    // Get the API key from environment variables - try multiple possible environment variable names
    let apiKey = process.env.OPENROUTER_API_KEY || process.env.REACT_APP_OPENROUTER_API_KEY;
    
    // If still no API key, try to use the hardcoded one from .env.local for testing
    if (!apiKey) {
      apiKey = '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';
      console.log('Using hardcoded API key as fallback');
    }
    
    if (!apiKey) {
      console.error('OpenRouter API key is missing');
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({
          success: false,
          error: 'Server configuration error: API key missing'
        })
      };
    }

    console.log(`Using OpenRouter with model: ${model}`);
    
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
        headers: corsHeaders,
        body: JSON.stringify({
          success: false,
          error: `OpenRouter API error: ${response.status} - ${errorText}`
        })
      };
    }

    const data = await response.json();
    
    // Return the AI message
    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        data: {
          message: data.choices[0].message.content
        }
      })
    };

  } catch (error) {
    console.error('Error handling request:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        success: false,
        error: error.message || 'Internal Server Error'
      })
    };
  }
};
