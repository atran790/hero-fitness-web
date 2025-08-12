import { NextResponse } from 'next/server'
import Airtable from 'airtable'

export async function GET() {
  try {
    const hasApiKey = !!process.env.AIRTABLE_API_KEY
    const hasBaseId = !!process.env.AIRTABLE_BASE_ID
    const apiKeyLength = process.env.AIRTABLE_API_KEY?.length || 0
    const baseIdLength = process.env.AIRTABLE_BASE_ID?.length || 0
    
    let airtableTest = null
    if (hasApiKey && hasBaseId) {
      try {
        const base = new Airtable({
          apiKey: (process.env.AIRTABLE_API_KEY || '').trim(),
        }).base((process.env.AIRTABLE_BASE_ID || '').trim())
        
        // Try to list records (read-only test)
        const records = await base('Waitlist').select({
          maxRecords: 1,
          fields: []
        }).firstPage()
        
        airtableTest = {
          connection: 'success',
          recordCount: records.length,
          canRead: true
        }
      } catch (airtableError: unknown) {
        const error = airtableError as { message?: string; error?: string; statusCode?: number }
        airtableTest = {
          connection: 'failed',
          error: error.message || String(airtableError),
          errorType: error.error || 'unknown',
          statusCode: error.statusCode || 'unknown'
        }
      }
    }
    
    return NextResponse.json({
      environment: process.env.NODE_ENV,
      airtable: {
        hasApiKey,
        hasBaseId,
        apiKeyLength,
        baseIdLength,
        configured: hasApiKey && hasBaseId,
        test: airtableTest
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
