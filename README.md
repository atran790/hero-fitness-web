# Hero Fitness AI - Landing Page

Modern landing page for Hero Fitness AI, an AI-powered workout builder mobile app with waitlist functionality.

## Features

✅ **Modern Landing Page** - Clean, responsive design with Framer Motion animations  
✅ **Waitlist System** - Phone number collection with Airtable integration  
✅ **Share Tracking** - Users can skip ahead by sharing the waitlist  
✅ **Platform Detection** - Tracks iOS vs Android user preferences  
✅ **Legal Pages** - Complete Privacy Policy and Terms & Conditions  
✅ **Pre-commit Hooks** - Automated code quality checks  

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Backend:** Airtable API
- **Deployment:** Vercel

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm run start
```

## Waitlist Setup

See [AIRTABLE_SETUP.md](./AIRTABLE_SETUP.md) for complete instructions on setting up the Airtable waitlist integration.

## Code Quality

This project includes automated pre-commit hooks. See [PRE_COMMIT_HOOK.md](./PRE_COMMIT_HOOK.md) for details.

## API Endpoints

- `POST /api/waitlist` - Add user to waitlist
- `POST /api/waitlist/track-share` - Track when users share

## Deployment

This project is configured for automatic deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set up environment variables (see AIRTABLE_SETUP.md)
3. Deploy with automatic builds on push to main branch

## Environment Variables

Required for production:
```bash
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

## Project Status

✅ Landing page complete  
✅ Waitlist system functional  
✅ Production deployment live  
✅ Share tracking implemented  

## Repository

[GitHub Repository](https://github.com/atran790/hero-fitness-web)