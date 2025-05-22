# Dr. Greg Pedro Dental Practice Website

Modern React-based website for Dr. Greg Pedro's dental practice, featuring information about specialized services like Yomi robotic dental implants, TMJ treatments, and EM face procedures.

## Purpose

This website aims to provide comprehensive information about Dr. Greg Pedro's dental services, emphasizing the cutting-edge Yomi robotic technology for dental implants, which offers greater precision and faster recovery times.

## Documentation

Comprehensive documentation is available in the `/docs` directory:

- [System Architecture](./docs/01-system-architecture.md)
- [AI Integration](./docs/02-ai-integration.md)
- [Netlify Deployment](./docs/03-netlify-deployment.md)
- [Documentation Index](./docs/index.md)

## Architecture Overview

This project uses:
- React with TypeScript
- Material UI for component styling
- React Router for navigation
- Supabase for backend storage (optional)
- Serverless functions for secure API communication
- OpenRouter for AI chatbot functionality

### Detailed Architecture Explanation

- **React with TypeScript**: Provides a robust framework for building interactive user interfaces with type safety.
- **Material UI**: Ensures consistent and modern styling across components.
- **React Router**: Manages navigation and routing within the application.
- **Supabase**: Optional backend storage for managing patient data securely.
- **Serverless Functions**: Enables secure communication with external services without exposing API keys.
- **OpenRouter**: Powers the AI chatbot, providing users with instant dental information.

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

### Common Setup Issues & Solutions

- **Missing Dependencies**: Ensure all dependencies are installed by running `npm install`.
- **Environment Variables**: Double-check the `.env.local` file for any missing or incorrect variables.

## Deployment

This project is deployed on Netlify with serverless functions.

### Environment Variables

Set the following environment variables in your Netlify dashboard:

- `OPENROUTER_API_KEY` - Your OpenRouter API key for AI chatbot functionality

### Deployment Process

1. Commit your changes to the main branch.
2. Netlify will automatically build and deploy the changes.
3. Monitor the deployment status in the Netlify dashboard.

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

### Visual Aids

Consider adding diagrams or flowcharts to illustrate the architecture and workflows.

## Contribution Guidelines

- Follow the coding standards outlined in the [Coding Standards](./docs/coding-standards.md) document.
- Ensure all new features are accompanied by tests.
- Submit pull requests for any changes, and ensure they pass all CI checks before merging.

## Troubleshooting

- **Deployment Failures**: Check the Netlify logs for any build errors.
- **API Errors**: Ensure serverless functions are correctly configured and API keys are valid.
