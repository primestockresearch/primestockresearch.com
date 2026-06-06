import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const filePath = path.join(process.cwd(), 'src/data/complaints.json');

// Default fallback data
const defaultData = {
  currentMonthName: "May 2026",
  currentMonthData: [
    { sl: 1, receivedFrom: 'Directly from Investors', pendingLastMonth: 0, received: 0, resolved: 0, pendingLessThan3: 0, pendingMoreThan3: 0, avgResolutionTime: '0 days' },
    { sl: 2, receivedFrom: 'SEBI (SCORES)', pendingLastMonth: 0, received: 0, resolved: 0, pendingLessThan3: 0, pendingMoreThan3: 0, avgResolutionTime: '0 days' },
    { sl: 3, receivedFrom: 'Other Sources (if any)', pendingLastMonth: 0, received: 0, resolved: 0, pendingLessThan3: 0, pendingMoreThan3: 0, avgResolutionTime: '0 days' }
  ],
  monthlyTrendData: [
    { month: 'June 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'July 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'August 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'September 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'October 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'November 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'December 2025', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'January 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'February 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'March 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'April 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 },
    { month: 'May 2026', carriedForward: 0, received: 0, resolved: 0, pending: 0 }
  ],
  annualTrendData: [
    { year: '2025-26', carriedForward: 0, received: 0, resolved: 0, pending: 0 }
  ]
};

async function getPersistedData() {
  // Check Vercel KV environment variables
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const res = await fetch(`${process.env.KV_REST_API_URL}/get/complaints`, {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`
        },
        cache: 'no-store'
      });
      if (res.ok) {
        const json = await res.json();
        if (json.result) {
          return JSON.parse(json.result);
        }
      }
    } catch (e) {
      console.error("Failed to read from Vercel KV, falling back to local file:", e);
    }
  }

  // Fallback to local JSON file
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (e) {
    console.error("Failed to read local complaints file:", e);
  }

  return defaultData;
}

async function savePersistedData(data) {
  // Check Vercel KV environment variables
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const res = await fetch(`${process.env.KV_REST_API_URL}/set/complaints`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`
        },
        body: JSON.stringify(JSON.stringify(data)) // Vercel KV set API expects string value
      });
      if (res.ok) {
        return true;
      }
    } catch (e) {
      console.error("Failed to write to Vercel KV:", e);
    }
  }

  // Fallback to local JSON file (works in local dev)
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error("Failed to write local complaints file:", e);
    return false;
  }
}

const SECRET_KEY = process.env.ADMIN_PASSWORD || 'dwqpfftchgtspqdx';

function verifySessionToken(token) {
  if (!token) return null;
  const parts = token.split(':');
  if (parts.length !== 3) return null;
  
  const [email, expiresStr, hash] = parts;
  const expires = parseInt(expiresStr, 10);
  if (isNaN(expires)) return null;
  if (Date.now() > expires) return null; // expired
  
  const expectedHash = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(`${email}:${expires}`)
    .digest('hex');
    
  const hashBuf = Buffer.from(hash, 'hex');
  const expectedBuf = Buffer.from(expectedHash, 'hex');
  if (hashBuf.length !== expectedBuf.length) return null;
  if (!crypto.timingSafeEqual(hashBuf, expectedBuf)) return null;
  
  return { email, expires };
}

export async function GET() {
  const data = await getPersistedData();
  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Auth check using dynamic session token
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized: Missing session token' }, { status: 401 });
    }
    
    const token = authHeader.substring(7);
    const session = verifySessionToken(token);

    if (!session) {
      return NextResponse.json({ error: 'Session expired or invalid. Please login again.' }, { status: 401 });
    }

    // Check if Vercel KV is not configured when running in production
    const isProd = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
    const hasKV = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;
    if (isProd && !hasKV) {
      return NextResponse.json({ 
        error: 'Database connection not configured. Please link a Vercel KV database in the Vercel dashboard to save disclosures.' 
      }, { status: 503 });
    }

    const success = await savePersistedData(body);
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
    }
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
