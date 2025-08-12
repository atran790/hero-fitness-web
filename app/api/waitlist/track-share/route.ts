import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || 'YOUR_AIRTABLE_API_KEY'
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || 'YOUR_AIRTABLE_BASE_ID'
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Waitlist'

// Initialize Airtable
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)

export async function POST(request: NextRequest) {
  try {
    const { recordId } = await request.json()

    if (!recordId) {
      return NextResponse.json(
        { error: 'Record ID is required' },
        { status: 400 }
      )
    }

    // Update the record to mark it as shared
    await base(AIRTABLE_TABLE_NAME).update(recordId, {
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
