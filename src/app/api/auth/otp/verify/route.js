import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const authFilePath = path.join(process.cwd(), 'src/data/auth.json');

async function readOtp() {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const res = await fetch(`${process.env.KV_REST_API_URL}/get/otp_code`, {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`
        },
        cache: 'no-store'
      });
      if (res.ok) {
        const json = await res.json();
        if (json.result) return JSON.parse(json.result);
      }
    } catch (e) {
      console.error("Vercel KV get OTP error:", e);
    }
  }

  try {
    if (fs.existsSync(authFilePath)) {
      const fileContent = fs.readFileSync(authFilePath, 'utf8');
      const json = JSON.parse(fileContent);
      return json.otp;
    }
  } catch (e) {
    console.error("Local file get OTP error:", e);
  }
  return null;
}

async function saveSession(sessionData) {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const res = await fetch(`${process.env.KV_REST_API_URL}/set/admin_session`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`
        },
        body: JSON.stringify(JSON.stringify(sessionData))
      });
      if (res.ok) return true;
    } catch (e) {
      console.error("Vercel KV set session error:", e);
    }
  }

  try {
    const dir = path.dirname(authFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    let existing = {};
    if (fs.existsSync(authFilePath)) {
      existing = JSON.parse(fs.readFileSync(authFilePath, 'utf8'));
    }
    existing.session = sessionData;
    fs.writeFileSync(authFilePath, JSON.stringify(existing, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error("Local file set session error:", e);
    return false;
  }
}

export async function POST(request) {
  try {
    const { code } = await request.json();
    
    if (!code) {
      return NextResponse.json({ error: 'OTP code is required' }, { status: 400 });
    }

    const savedOtp = await readOtp();

    if (!savedOtp) {
      return NextResponse.json({ error: 'No active OTP request found. Please send a new OTP.' }, { status: 400 });
    }

    if (Date.now() > savedOtp.expires) {
      return NextResponse.json({ error: 'This OTP has expired. Please request a new code.' }, { status: 400 });
    }

    if (savedOtp.code !== code.trim()) {
      return NextResponse.json({ error: 'Invalid verification code. Please try again.' }, { status: 400 });
    }

    // Generate secure session token
    const sessionToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
    const sessionExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    await saveSession({ token: sessionToken, expires: sessionExpires });

    return NextResponse.json({ 
      success: true, 
      token: sessionToken 
    });

  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
