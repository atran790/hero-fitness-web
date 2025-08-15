# Vercel Environment Variables Setup

## Required Environment Variables for Production

Add these Supabase environment variables in your Vercel project settings:

1. Go to your Vercel dashboard
2. Select your `hero-fitness-web` project
3. Go to Settings → Environment Variables
4. Add the following variables:

### Supabase (for Password Reset)
- `NEXT_PUBLIC_SUPABASE_URL`: `https://qolnxmlwrufqfksxpbpy.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvbG54bWx3cnVmcWZrc3hwYnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MDE2NzksImV4cCI6MjA2NTI3NzY3OX0.DCjWidR8qPx92fNBl89e1-N0TyivJvpCUlSrr588WyQ`

## Features That Use These Variables

- **Waitlist API** (`/api/waitlist`): Saves phone numbers to Airtable
- **Share Tracking** (`/api/waitlist/track-share`): Updates Airtable when users share
- **Password Reset** (`/reset-password`): Allows users to reset their Hero Fitness password

## Important Notes

- The `NEXT_PUBLIC_` prefix is required for client-side variables (Supabase)
- Airtable variables are only used server-side (no prefix needed)
- After adding variables, redeploy your project for changes to take effect
