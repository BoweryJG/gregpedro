# Netlify Deployment Guide

This document provides comprehensive guidance for deploying and maintaining the Dr. Greg Pedro website on Netlify, including configuration details, environment variable setup, and troubleshooting common deployment issues.

## Deployment Overview

The website is deployed on Netlify, which provides:
- Hosting for the static React application
- Serverless functions for backend operations
- Environment variable management
- Continuous deployment from Git

## Netlify Configuration

### netlify.toml

The `netlify.toml` file in the project root configures the Netlify deployment:

```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18.16.0"
  NPM_VERSION = "9.5.1"

# Define functions for backend proxy to OpenRouter
[functions]
  directory = "netlify/functions"
```

Key configuration sections:

1. **Build Configuration**:
   - `command`: The command to build the project (runs `npm run build`)
   - `publish`: The directory to publish (React builds to the `build` directory)

2. **Environment Variables**:
   - `NODE_VERSION`: Specifies Node.js version for the build environment
   - `NPM_VERSION`: Specifies npm version for the build environment

3. **Functions Configuration**:
   - `directory`: Specifies the directory containing serverless functions

> **Important Note**: The functions configuration must use `[functions]` (singular) syntax. Using `[[functions]]` will cause deployment errors.

### Functions Directory Structure

The serverless functions are organized in the `netlify/functions` directory:

```
netlify/
└── functions/
    └── ai-chat.js    # OpenRouter proxy function
```

Each function is a standalone JavaScript file that exports a handler function.

## Deployment Process

### Initial Deployment

1. **Connect Repository to Netlify**:
   - Log in to the Netlify dashboard
   - Click "New site from Git"
   - Select the repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `build`

2. **Configure Environment Variables**:
   - In the Netlify dashboard, navigate to Site settings > Build & deploy > Environment
   - Add required environment variables (see Environment Variables section below)

3. **Deploy the Site**:
   - Trigger a manual deploy or push to the connected Git repository

### Continuous Deployment

Once set up, Netlify will automatically deploy when changes are pushed to the connected branch:

1. Push changes to the connected branch
2. Netlify detects the changes and starts a new build
3. Build process runs `npm run build`
4. Netlify deploys the contents of the `build` directory
5. Serverless functions are deployed from the `netlify/functions` directory

## Environment Variables

### Required Environment Variables

The following environment variables must be set in the Netlify dashboard:

| Variable Name | Description | Required For |
|---------------|-------------|-------------|
| `OPENROUTER_API_KEY` | API key for OpenRouter | AI chatbot functionality |
| `TWILIO_ACCOUNT_SID` | Twilio account SID | Twilio functions |
| `TWILIO_AUTH_TOKEN` | Twilio auth token | Twilio functions |

### Setting Environment Variables

1. In the Netlify dashboard, navigate to Site settings > Build & deploy > Environment
2. Click "Edit variables"
3. Add each required variable and its value
4. Select "All scopes" to make the variable available in both build and functions

### Local Development Environment Variables

For local development, create a `.env.local` file based on the provided `.env.example`:

```
# OpenRouter API Key for AI Chatbot
REACT_APP_OPENROUTER_API_KEY=your_openrouter_key_here
```

## Serverless Functions

### Function Deployment

Serverless functions are automatically deployed from the `netlify/functions` directory. Each function should:

1. Export a handler function
2. Accept event and context parameters
3. Return a response object with statusCode and body properties

Example:

```javascript
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from the function" })
  };
};
```

### Function URLs

Once deployed, serverless functions are available at:

```
https://[your-site-name].netlify.app/.netlify/functions/[function-name]
```

For example, the AI chat function would be accessible at:
```
https://dr-greg-pedro.netlify.app/.netlify/functions/ai-chat
```

The Twilio drgregpedro update function is available at:
```
https://dr-greg-pedro.netlify.app/.netlify/functions/update-twilio-drgregpedro
```
Send a POST request with `phoneNumberSid` and `drgregpedro` in the body to update a Twilio number.

### Accessing Functions from the Frontend

The frontend code should use relative paths to access functions:

```javascript
fetch('/.netlify/functions/ai-chat', {
  method: 'POST',
  body: JSON.stringify(data)
})
```

## Common Deployment Issues and Solutions

### 1. Module Not Found Errors

**Symptom**: Build fails with "Module not found" error.

**Causes**:
- Missing dependencies in `package.json`
- Incorrect import paths
- Case sensitivity issues in import statements

**Solutions**:
- Verify that all imported modules are listed in `package.json`
- Check for typos in import paths
- Ensure case matches exactly in import statements

### 2. ESLint Errors Causing Build Failures

**Symptom**: Build fails with ESLint warnings treated as errors.

**Causes**:
- In CI environments (like Netlify), React treats ESLint warnings as errors
- Common issues include unused variables, imports out of order, etc.

**Solutions**:
- Fix ESLint issues in the code:
  - Move imports to the top of files
  - Remove unused variables or add appropriate ESLint disable comments
  - Fix other linting issues flagged in the build log

### 3. Netlify Configuration Syntax Errors

**Symptom**: Build fails with Netlify configuration errors.

**Causes**:
- Incorrect syntax in `netlify.toml`
- Using array syntax (`[[functions]]`) instead of object syntax (`[functions]`)

**Solutions**:
- Use correct syntax in `netlify.toml`:
  ```toml
  [functions]
  directory = "netlify/functions"
  ```
- Validate the TOML syntax using an online validator

### 4. Environment Variable Access Issues

**Symptom**: Serverless functions fail with API key errors.

**Causes**:
- Missing environment variables
- Environment variables not accessible to functions

**Solutions**:
- Verify environment variables are set in the Netlify dashboard
- Ensure variables are scoped to include functions
- Check for typos in environment variable names

### 5. CORS Issues

**Symptom**: API calls from the frontend to serverless functions fail with CORS errors.

**Causes**:
- Missing CORS headers in function responses

**Solutions**:
- Add appropriate CORS headers to function responses:
  ```javascript
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    },
    body: JSON.stringify(data)
  };
  ```

## Monitoring and Debugging

### Function Logs

Access function logs in the Netlify dashboard:

1. Navigate to Functions > your-function-name
2. View the recent invocations and their logs
3. Check for errors or unexpected behavior

### Deploy Previews

Netlify creates deploy previews for pull requests:

1. Make changes in a feature branch
2. Create a pull request
3. Netlify automatically builds a preview deployment
4. Test the changes in the preview environment before merging

### Rollbacks

If a deployment causes issues:

1. Navigate to the Deploys section in the Netlify dashboard
2. Find the last working deployment
3. Click "Publish deploy" on that deployment
4. The site will roll back to that version

## Best Practices

### CI/CD Optimization

1. **Dependency Caching**:
   - Netlify automatically caches dependencies between builds
   - Use lockfiles (`package-lock.json`) for consistent dependency versions

2. **Build Optimization**:
   - Keep build times short by optimizing the build process
   - Consider using Netlify's build plugins for additional optimization

### Security

1. **Environment Variables**:
   - Never commit sensitive environment variables to the repository
   - Use Netlify's environment variable management

2. **API Keys**:
   - Restrict API keys to specific domains in the service provider's dashboard
   - Use serverless functions to proxy requests to external APIs

### Monitoring

1. **Status Notifications**:
   - Configure Netlify to send notifications for failed deployments
   - Integrate with Slack or email for team notifications

2. **Performance Monitoring**:
   - Use Netlify Analytics to monitor site performance and traffic
   - Consider adding application monitoring tools
