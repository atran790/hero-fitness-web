import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const hasApiKey = !!process.env.AIRTABLE_API_KEY
    const hasBaseId = !!process.env.AIRTABLE_BASE_ID
    const apiKeyLength = process.env.AIRTABLE_API_KEY?.length || 0
    const baseIdLength = process.env.AIRTABLE_BASE_ID?.length || 0
    
    return NextResponse.json({
      environment: process.env.NODE_ENV,
      airtable: {
        hasApiKey,
        hasBaseId,
        apiKeyLength,
        baseIdLength,
        configured: hasApiKey && hasBaseId
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Debug endpoint failed', details: String(error) },
      { status: 500 }
    )
  }
}
