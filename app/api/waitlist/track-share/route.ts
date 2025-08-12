import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY || '',
}).base(process.env.AIRTABLE_BASE_ID || '')

export async function POST(request: NextRequest) {
  try {
    const { recordId } = await request.json()

    if (!recordId) {
      return NextResponse.json(
        { error: 'Record ID is required' },
        { status: 400 }
      )
    }

    // Check if Airtable is configured
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      console.error('Airtable not configured. Please set AIRTABLE_API_KEY and AIRTABLE_BASE_ID')
      return NextResponse.json(
        { error: 'Share tracking service not configured' },
        { status: 503 }
      )
    }

    // Update the record to mark it as shared
    await base('Waitlist').update(recordId, {
      "Shared": true,
      "Shared At": new Date().toISOString()
    })

    console.log(`✅ Share tracked for record: ${recordId}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('❌ Failed to track share:', error)
    return NextResponse.json(
      { error: 'Failed to track share' },
      { status: 500 }
    )
  }
}
