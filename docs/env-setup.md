# Environment Variables Setup

This document explains how to properly set up environment variables for the Dr. Greg Pedro website, particularly for the AI chatbot functionality.

## Local Development

For local development, create a `.env.local` file in the root of the project. This file should include:

```
# OpenRouter API key for AI functionality
REACT_APP_OPENROUTER_API_KEY=your_openrouter_api_key

# Backend URL for API connections (optional - defaults to Netlify functions)
REACT_APP_BACKEND_URL=/.netlify/functions

# Other environment variables as needed
```

## Netlify Deployment

When deploying to Netlify, you need to set up environment variables in the Netlify dashboard:

1. Go to your Netlify dashboard
2. Select your site
3. Go to Site settings > Build & deploy > Environment
4. Add the following environment variables:

| Key | Value | Description |
|-----|-------|-------------|
| `OPENROUTER_API_KEY` | `your_openrouter_api_key` | The API key for OpenRouter |

## Important Notes

- **Never commit sensitive API keys to the repository**
- Environment variables prefixed with `REACT_APP_` are accessible in the frontend code
- For Netlify functions, use regular environment variable names (no prefix)
- The chatbot is configured to look for either `OPENROUTER_API_KEY` or `REACT_APP_OPENROUTER_API_KEY`
- For security best practices, it's better to use `OPENROUTER_API_KEY` for Netlify functions

## Troubleshooting

If the chatbot is showing error messages like "I'm having trouble connecting right now", check:

1. That your OpenRouter API key is properly set in Netlify environment variables
2. That the API key is valid and has enough credits
3. Check Netlify function logs for more detailed error messages
