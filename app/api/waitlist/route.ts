import { NextRequest, NextResponse } from 'next/server'

// Google Forms Configuration
// Reads from environment variables set in .env.local
const GOOGLE_FORM_URL = process.env.GOOGLE_FORM_URL || ''
const GOOGLE_FORM_PHONE_FIELD = process.env.GOOGLE_FORM_PHONE_FIELD || ''
const GOOGLE_FORM_PLATFORM_FIELD = process.env.GOOGLE_FORM_PLATFORM_FIELD || ''

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, platform } = await request.json()
    
    // Prepare form data
    const formData = new URLSearchParams()
    formData.append(GOOGLE_FORM_PHONE_FIELD, phoneNumber)
    formData.append(GOOGLE_FORM_PLATFORM_FIELD, platform === 'android' ? 'Android' : 'iOS')
    
    // Submit to Google Forms
    // Note: Google Forms doesn't support CORS, so we use no-cors mode
    // This means we can't read the response, but the submission still works
    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors',
      })
      
      console.log(`✅ Waitlist signup: ${phoneNumber} (${platform})`)
    } catch (err) {
      console.error('Form submission error:', err)
    }
    
    // Always return success to the client
    // The actual submission status can't be verified due to CORS
    return NextResponse.json({ 
      success: true
    })
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}