# Dr. Greg Pedro Dental Practice Website

Modern React-based website for Dr. Greg Pedro's dental practice, featuring information about specialized services like Yomi robotic dental implants, TMJ treatments, and EM face procedures.

## Architecture Overview

This project uses:
- React with TypeScript
- Material UI for component styling
- React Router for navigation
- Supabase for backend storage (optional)
- Serverless functions for secure API communication
- OpenRouter for AI chatbot functionality

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file based on `.env.example`
4. Run the development server:
   ```
   npm start
   ```

## Deployment

This project is deployed on Netlify with serverless functions.

### Environment Variables

Set the following environment variables in your Netlify dashboard:

- `OPENROUTER_API_KEY` - Your OpenRouter API key for AI chatbot functionality

### Recent Changes

#### Enhanced AI Chatbot Security

The AI Chatbot now uses a serverless function to proxy requests to OpenRouter, improving security by:

1. Removing API keys from frontend code
2. Adding request validation in the serverless function
3. Eliminating the need for middleware like Make.com or N8N

#### API Structure

The application now uses a simplified API structure:

1. Frontend components call the API service
2. API service calls Netlify serverless functions
3. Serverless functions make secure calls to external services (OpenRouter)

## Adding New Features

### AI Chatbot

The AI chatbot uses OpenRouter with GPT-4o to provide dental information. The flow works as follows:

1. User sends a message through the chat interface
2. Message is processed by `dentalChatbot.ts` which categorizes and enhances queries
3. API request is sent to serverless function via the `api.ts` service
4. Serverless function makes a secure request to OpenRouter
5. Response is returned to the frontend and displayed to the user

### Forms and Patient Information

Patient forms (appointments, consultations, etc.) are handled through the API service.
