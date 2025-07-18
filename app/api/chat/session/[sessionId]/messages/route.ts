import { NextRequest, NextResponse } from 'next/server';

const BUDPAL_API_BASE = process.env.BASE_BUDPAL_API || 'https://bud-pal.vercel.app';

// Enable CORS for all origins (you may want to restrict this in production)
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, ngrok-skip-browser-warning',
  'Access-Control-Max-Age': '86400',
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;
    
    // Proxy the request to BudPal API
    const response = await fetch(`${BUDPAL_API_BASE}/api/chat/session/${sessionId}/messages`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Chat session messages proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chat messages' },
      { 
        status: 500,
        headers: corsHeaders,
      }
    );
  }
} 