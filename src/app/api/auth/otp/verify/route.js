import { NextResponse } from 'next/server';
import crypto from 'crypto';

const SECRET_KEY = process.env.ADMIN_PASSWORD || 'dwqpfftchgtspqdx';

function verifySignature(code, signature) {
  if (!signature || !code) return false;
  
  const parts = signature.split(':');
  if (parts.length !== 2) return false;
  
  const [expiresStr, hash] = parts;
  const expires = parseInt(expiresStr, 10);
  if (isNaN(expires)) return false;
  if (Date.now() > expires) return false; // expired
  
  const expectedHash = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(`${code.trim()}:${expires}`)
    .digest('hex');
    
  const hashBuf = Buffer.from(hash, 'hex');
  const expectedBuf = Buffer.from(expectedHash, 'hex');
  if (hashBuf.length !== expectedBuf.length) return false;
  
  return crypto.timingSafeEqual(hashBuf, expectedBuf);
}

export async function POST(request) {
  try {
    const { code, signature } = await request.json();
    
    if (!code) {
      return NextResponse.json({ error: 'OTP code is required' }, { status: 400 });
    }
    
    if (!signature) {
      return NextResponse.json({ error: 'No active OTP request found. Please send a new OTP.' }, { status: 400 });
    }

    if (!verifySignature(code, signature)) {
      return NextResponse.json({ error: 'Invalid verification code or session expired. Please try again.' }, { status: 400 });
    }

    // Generate secure session token statelessly
    const adminEmail = process.env.ADMIN_EMAIL || 'jaychudasama2611@gmail.com';
    const sessionExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    const payload = `${adminEmail}:${sessionExpires}`;
    
    const sessionHash = crypto
      .createHmac('sha256', SECRET_KEY)
      .update(payload)
      .digest('hex');
    
    const sessionToken = `${payload}:${sessionHash}`;

    return NextResponse.json({ 
      success: true, 
      token: sessionToken 
    });

  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

