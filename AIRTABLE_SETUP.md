# 📊 Airtable Waitlist Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Your Airtable Account
1. Go to [airtable.com](https://airtable.com/signup)
2. Sign up for free (no credit card needed)

### Step 2: Create Your Waitlist Base
1. Click **"Start from scratch"**
2. Name it **"Hero Fitness Waitlist"**
3. Rename the default table from "Table 1" to **"Waitlist"** (exact spelling matters!)

### Step 3: Set Up Your Fields
Delete all default fields and create these exact fields:

| Field Name | Field Type | Notes |
|------------|------------|-------|
| **Phone** | Phone number | Primary field |
| **Platform** | Single select | Options: iOS, Android |
| **Joined** | Date & time | Include time, use GMT |
| **Shared** | Checkbox | Default unchecked |
| **Source** | Single line text | Default "Website" |

### Step 4: Get Your API Credentials

#### Get Your API Key:
1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Click **"Create new token"**
3. Name it: "Hero Fitness Waitlist"
4. Add these scopes:
   - `data.records:read`
   - `data.records:write`
5. Add your base: Select "Hero Fitness Waitlist"
6. Click **"Create token"**
7. **Copy the token** (you won't see it again!)

#### Get Your Base ID:
1. Go to [airtable.com/api](https://airtable.com/api)
2. Click on your "Hero Fitness Waitlist" base
3. Look for the Base ID in the introduction (starts with `app`)
4. It looks like: `appXXXXXXXXXXXXXX`

### Step 5: Add to Environment Variables

Create or update your `.env.local`:
```bash
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

### Step 6: Add to Vercel
```bash
# Using CLI (recommended)
vercel env add AIRTABLE_API_KEY
# Paste your API key

vercel env add AIRTABLE_BASE_ID  
# Paste your Base ID
```

Or add manually in Vercel Dashboard → Settings → Environment Variables

## Testing Your Setup

1. Restart your dev server: `npm run dev`
2. Click a download button on your site
3. Submit a phone number
4. Check your Airtable base - you should see the entry!

## View Your Data

- **Airtable Dashboard**: [airtable.com](https://airtable.com) - Visual spreadsheet view
- **Export**: Click the "..." menu → Download CSV
- **Share**: Invite team members to view/edit

## Troubleshooting

### "Waitlist service not configured"
- Make sure both `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` are in `.env.local`
- Restart your dev server after adding environment variables

### "Table 'Waitlist' not found"
- Your table must be named exactly "Waitlist" (case-sensitive)
- Check spelling in your Airtable base

### "Field 'Phone' cannot accept value"
- Make sure your field names match exactly (Phone, Platform, Joined, Shared, Source)
- Field types must match (Phone number, Single select, etc.)

## Why Airtable?

✅ **100% Reliable** - Direct database writes, no CORS issues
✅ **Visual Interface** - See and manage entries like a spreadsheet  
✅ **API Included** - No additional backend needed
✅ **Team Friendly** - Non-technical people can access
✅ **Free Tier** - 1,200 records free
✅ **Export Anytime** - Download as CSV whenever needed

## Next Steps

1. Set up email notifications (Airtable Automations)
2. Create views (iOS only, Android only, Shared, etc.)
3. Add more fields (email, referral source, etc.)

Your waitlist is now powered by Airtable! 🎉
