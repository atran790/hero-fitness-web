import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY || '',
}).base(process.env.AIRTABLE_BASE_ID || '')

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, platform } = await request.json()
    
    // Check if Airtable is configured
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.error('Airtable not configured. Please set AIRTABLE_API_KEY and AIRTABLE_BASE_ID')
      return NextResponse.json(
        { error: 'Waitlist service not configured' },
        { status: 503 }
      )
    }
    
    // Add to Airtable
    try {
      const record = await base('Waitlist').create([
        {
          fields: {
            'Phone': phoneNumber,
            'Platform': platform === 'android' ? 'Android' : 'iOS',
            'Joined': new Date().toISOString(),
            'Shared': false,
            'Source': 'Website'
          }
        }
      ])
      
      console.log(`✅ Waitlist signup saved: ${phoneNumber} (${platform})`)
      console.log(`Airtable record ID: ${record[0].id}`)
      
      return NextResponse.json({ 
        success: true,
        recordId: record[0].id
      })
    } catch (airtableError: any) {
      console.error('Airtable error:', airtableError)
      
      // Check for specific Airtable errors
      if (airtableError.error === 'INVALID_REQUEST_UNKNOWN') {
        console.error('Check that your Airtable table name is "Waitlist" and fields match')
      }
      
      throw airtableError
    }
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve waitlist count
export async function GET() {
  try {
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      return NextResponse.json({ count: 2847 }) // Return default if not configured
    }
    
    const records = await base('Waitlist').select({
      view: 'Grid view',
      fields: [] // We only need the count
    }).all()
    
    return NextResponse.json({ 
      count: records.length + 2847 // Add to base number for appearance
    })
  } catch (error) {
    console.error('Error fetching waitlist count:', error)
    return NextResponse.json({ count: 2847 })
  }
}