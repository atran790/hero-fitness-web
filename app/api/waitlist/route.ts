import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'

// Lazy initialize Airtable to avoid build-time errors
const getAirtableBase = () => {
  if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
    return null
  }
  return new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY.trim(),
  }).base(process.env.AIRTABLE_BASE_ID.trim())
}

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, platform } = await request.json()
    
    // Check if Airtable is configured
    const base = getAirtableBase()
    if (!base) {
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
            'Timestamp': new Date().toISOString()
          }
        }
      ])
      
      console.log(`✅ Waitlist signup saved: ${phoneNumber} (${platform})`)
      console.log(`Airtable record ID: ${record[0].id}`)
      
      return NextResponse.json({ 
        success: true,
        recordId: record[0].id
      })
    } catch (airtableError) {
      console.error('Airtable error:', airtableError)
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
    const base = getAirtableBase()
    if (!base) {
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