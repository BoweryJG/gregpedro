# Secure Credentials Document

⚠️ **SECURITY WARNING** ⚠️

This document originally contained sensitive credentials that should **NEVER** be committed to version control or shared publicly. All actual values have been replaced with placeholders. Credentials must be stored securely outside of source control. This file should be:

1. Stored in a secure location
2. Accessible only to authorized personnel
3. Encrypted when possible
4. Regularly updated when credentials change

## Social Media Credentials

### Instagram

- **Account**: @gregpedromd
- **Username**: gregpedromd
- **Password**: PASSWORD_HERE
- **Email**: [Add email associated with account]
- **Recovery Phone**: [Add recovery phone]

### Facebook

- **Page**: Dr. Greg Pedro Dental
- **Admin Username**: [Add username]
- **Admin Password**: [Add password]

### LinkedIn

- **Profile**: Dr. Greg Pedro
- **Username**: [Add username]
- **Password**: [Add password]

## Content Management System

- **Username**: [Add username]
- **Password**: [Add password]
- **URL**: [Add CMS URL]

## Third-Party Services

### OpenRouter (AI Chatbot)

- **API Key**: [Add API key - should be stored as environment variable]

### Netlify (Hosting)

- **Account Email**: [Add email]
- **Password**: [Add password]

## Environment Variables

Environment variables should be set in the Netlify dashboard and in the `.env.local` file for local development (but never committed to git).

### Current Environment Variables

- `OPENROUTER_API_KEY` - OpenRouter API key for AI chatbot
- `INSTAGRAM_ACCESS_TOKEN` - Instagram API access token
- `TWILIO_ACCOUNT_SID` - Twilio account SID for phone management
- `TWILIO_AUTH_TOKEN` - Twilio auth token for phone management

## Security Practices

1. **Rotate Passwords**: All passwords should be rotated quarterly
2. **Limit Access**: Only share credentials with team members who need them
3. **Use Password Manager**: Consider using a team password manager
4. **Enable 2FA**: Two-factor authentication should be enabled on all accounts
5. **Monitor Usage**: Regularly check for unusual account activity

## In Case of Compromise

If you suspect any credentials have been compromised:

1. Immediately change the password
2. Check account activity for unauthorized actions
3. Revoke and regenerate any API keys
4. Notify the website administrator
5. Document the incident and response

---

Last Updated: May 22, 2025
