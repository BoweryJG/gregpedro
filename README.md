# Staten Island Implant Dr - Website

## Overview

This is the official website for Dr. Greg Pedro's dental practice, Staten Island Implant Dr. The website is built with React, Material UI, and integrates with Supabase for the backend and Open Router for AI functionality.

## Features

- **Modern UI**: Built with Material UI for a clean, professional design
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **AI Chat Assistant**: Integrated with Open Router to provide patients with immediate responses to common questions
- **Patient Portal**: Secure area for patients to access their information and communicate with the practice
- **Appointment Booking**: Online scheduling system for patient convenience
- **Treatment Information**: Detailed pages about dental services and procedures

## Technology Stack

- **Frontend**: React with TypeScript
- **UI Framework**: Material UI
- **Animations**: Framer Motion
- **Routing**: React Router
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **AI Integration**: Open Router API
- **Deployment**: Render

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account
- Open Router API key

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd dr-greg-pedro-site
```

2. Install dependencies

```bash
npm install
```

3. Copy the provided `.env.example` file to `.env` and replace the placeholder values:

```
REACT_APP_SUPABASE_URL=<your_supabase_url>
REACT_APP_SUPABASE_ANON_KEY=<your_supabase_anon_key>
REACT_APP_OPENROUTER_API_KEY=<your_openrouter_api_key>
```

4. Start the development server

```bash
npm start
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── AI/          # AI-related components
│   ├── Layout/      # Layout components (Header, Footer)
│   └── UI/          # UI components (ServiceCard, TestimonialCard, etc.)
├── pages/           # Page components
├── services/        # API and service integrations
├── theme/           # Theme configuration
├── utils/           # Utility functions
├── hooks/           # Custom React hooks
└── assets/          # Static assets
```

## Deployment

The website is configured for deployment on Render with a Supabase backend.

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For any inquiries about this project, please contact:

- **Dr. Greg Pedro**: [info@statenislandimplantdr.com](mailto:info@statenislandimplantdr.com)
