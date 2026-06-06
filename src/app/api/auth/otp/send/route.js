import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const SECRET_KEY = process.env.ADMIN_PASSWORD || 'dwqpfftchgtspqdx';

function generateSignature(code, expires) {
  return crypto
    .createHmac('sha256', SECRET_KEY)
    .update(`${code}:${expires}`)
    .digest('hex');
}

async function sendOtpEmail(otpCode, recipientEmail) {
  const user = process.env.SMTP_USER || 'jaychudasama2611@gmail.com';
  const pass = process.env.SMTP_PASS || 'dwqpfftchgtspqdx';
  
  if (!user || !pass) {
    console.log("\n========================================================");
    console.log(`[SMTP NOT CONFIGURED] OTP for ${recipientEmail} is: ${otpCode}`);
    console.log("========================================================\n");
    return { sent: false, logged: true };
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT) || 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: `"Prime Stock Research Support" <${user}>`,
    to: recipientEmail,
    subject: `Your One-Time Password (OTP) for Compliance Admin Panel`,
    text: `Your One-Time Password (OTP) for logging into the Prime Stock Research Compliance Admin Panel is: ${otpCode}\n\nThis OTP is valid for 5 minutes. Please do not share this code with anyone.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 10px;">
        <h2 style="color: #0A1F44; text-align: center; border-bottom: 2px solid #008B9B; padding-bottom: 10px; font-family: 'Poppins', sans-serif;">Admin Gateway Authentication</h2>
        <p>Dear Administrator,</p>
        <p>You requested a One-Time Password (OTP) to log into the <strong>Prime Stock Research Compliance Admin Panel</strong>.</p>
        <div style="background-color: #f4f6f8; border: 1px dashed #008B9B; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px;">
          <span style="font-size: 28px; font-weight: bold; letter-spacing: 6px; color: #0A1F44; font-family: monospace;">${otpCode}</span>
        </div>
        <p style="color: #666; font-size: 13px; leading-height: 1.5;">This OTP code is valid for <strong>5 minutes</strong>. If you did not make this request, please ignore this email or contact support.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 11px; color: #999; text-align: center;">© Prime Stock Research. Private & Confidential.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  return { sent: true };
}

export async function POST(request) {
  try {
    const { email } = await request.json();
    const adminEmail = process.env.ADMIN_EMAIL || 'jaychudasama2611@gmail.com';
    
    if (email !== adminEmail) {
      return NextResponse.json({ error: 'Access denied: Unauthorized email' }, { status: 403 });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 5 * 60 * 1000; // 5 minutes

    const hash = generateSignature(otpCode, expires);
    const signature = `${expires}:${hash}`;

    const emailStatus = await sendOtpEmail(otpCode, adminEmail);

    return NextResponse.json({ 
      success: true, 
      signature,
      message: emailStatus.sent ? 'OTP sent to your email.' : 'OTP logged to server console.' 
    });

  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
