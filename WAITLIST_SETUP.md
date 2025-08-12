# Waitlist Setup Guide

## Quick Start Options (Choose One)

### Option 1: **Google Sheets** (Easiest, Free) ✅ RECOMMENDED
1. **Create a Google Form** with these fields:
   - **Phone Number** - Short answer text (Required)
   - **Platform** - Multiple choice with options: "iOS", "Android" (Required)
   - Optional: Add timestamp field (Google Forms does this automatically)

2. **Link to Google Sheets**:
   - Go to Form → Responses tab
   - Click the Sheets icon to create a new spreadsheet
   - This auto-syncs all responses

3. **Get the form submission URL**:
   - Click the eye icon to Preview the form
   - Right-click → View Page Source
   - Search for "formResponse"
   - Copy the full URL (looks like: `https://docs.google.com/forms/u/0/d/e/XXXXX/formResponse`)

4. **Find the field IDs**:
   - In the page source, search for "entry."
   - Find the Phone Number field: `entry.1234567890`
   - Find the Platform field: `entry.0987654321`
   - These are unique numbers for each field

5. **Update your environment variables** (see below)

### Option 2: **Airtable** (Best UI, Free tier)
1. Sign up at [airtable.com](https://airtable.com)
2. Create a new base called "Hero Fitness Waitlist"
3. Create fields:
   - Phone (Phone number type)
   - Joined (Date/time)
   - Shared (Checkbox)
4. Get your API key from Account → API
5. Get your Base ID from API docs
6. Uncomment Airtable code in `/app/api/waitlist/route.ts`

### Option 3: **Supabase** (Most features, Free tier)
1. Sign up at [supabase.com](https://supabase.com)
2. Create a new project
3. In SQL Editor, run:
```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  phone VARCHAR(20) NOT NULL,
  joined_at TIMESTAMP DEFAULT NOW(),
  shared BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```
4. Get your project URL and service key from Settings → API
5. Install Supabase client: `npm install @supabase/supabase-js`
6. Uncomment Supabase code in `/app/api/waitlist/route.ts`

### Option 4: **Local JSON** (Testing only)
- Just uncomment the JSON file code in `/app/api/waitlist/route.ts`
- Creates a `waitlist.json` file in your project root
- ⚠️ Don't use in production!

## Environment Variables

Create a `.env.local` file in your project root:

```bash
# For Google Sheets (Recommended)
GOOGLE_FORM_URL=https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse
GOOGLE_FORM_PHONE_FIELD=entry.1234567890  # Replace with your phone field ID
GOOGLE_FORM_PLATFORM_FIELD=entry.0987654321  # Replace with your platform field ID

# For Airtable
AIRTABLE_API_KEY=your_key_here
AIRTABLE_BASE_ID=appXXXXXXXXXX
AIRTABLE_TABLE_NAME=Waitlist

# For Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=your_service_key_here
```

## Quick Setup for Google Sheets (Step-by-Step)

1. **Go to [Google Forms](https://forms.google.com)**
2. **Create new form** → Blank form
3. **Add questions**:
   - Question 1: "Phone Number" (Short answer, Required)
   - Question 2: "Platform" (Multiple choice: iOS, Android, Required)
4. **Link to Sheets**: Responses tab → Create Spreadsheet icon
5. **Get your IDs**:
   - Click Preview (eye icon)
   - Right-click → View Page Source
   - Find and copy:
     - Form URL containing `/formResponse`
     - Phone field: `entry.XXXXXXXXX`
     - Platform field: `entry.YYYYYYYYY`
6. **Create `.env.local`** file with your values
7. **Test it!**

## Testing

After setting up, test by:
1. Opening your site
2. Clicking iOS download button → Submit phone
3. Clicking Android download button → Submit different phone
4. Check your Google Sheet - you should see both entries with correct platforms!

## Tracking Shares

To track who shared for priority access, you'll need to:
1. Generate unique referral codes
2. Add a `referrer` field to track who invited whom
3. Update the share URL to include the referral code

## Export Data

- **Google Sheets**: Already in a spreadsheet
- **Airtable**: Export as CSV from the UI
- **Supabase**: Use SQL queries or export from dashboard
- **JSON**: Already a file you can read

## SMS Integration (Future)

When ready to notify users, integrate with:
- **Twilio**: Most popular, good docs
- **TextMagic**: Simple API
- **AWS SNS**: Cost-effective at scale
