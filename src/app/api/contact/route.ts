import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/* ---------------------------------------
   Simple in-memory rate limiter
   (sufficient for portfolio / low traffic)
---------------------------------------- */
const RATE_LIMIT = new Map<string, { count: number; time: number }>();
const LIMIT = 5; // max requests per window
const WINDOW = 60_000; // 1 minute

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, category, message, company } = body;

    /* ---------------------------------------
       Honeypot (silent success)
    ---------------------------------------- */
    if (company) {
      return NextResponse.json({ success: true });
    }

    /* ---------------------------------------
       Basic validation
    ---------------------------------------- */
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    /* ---------------------------------------
       Rate limiting (IP-based)
    ---------------------------------------- */
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

    const now = Date.now();
    const entry = RATE_LIMIT.get(ip);

    if (entry && now - entry.time < WINDOW) {
      if (entry.count >= LIMIT) {
        return NextResponse.json(
          { success: false, message: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      entry.count++;
    } else {
      RATE_LIMIT.set(ip, { count: 1, time: now });
    }

    /* ---------------------------------------
       SMTP setup
    ---------------------------------------- */
    const port = Number(process.env.SMTP_PORT);
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* ---------------------------------------
       Single inbox (all categories)
    ---------------------------------------- */
    const destination = process.env.EMAIL_TO;

    /* ---------------------------------------
       Resume attachment (hire only)
    ---------------------------------------- */
    const attachments =
      category === 'hire'
        ? [
            {
              filename: 'Brian-Njata-Resume.pdf',
              path: `${process.cwd()}/public/Brian-Njata-resume.pdf`,
            },
          ]
        : [];

    /* ---------------------------------------
       Main email to you
    ---------------------------------------- */
    await transporter.sendMail({
      from: `"BrianNjata.org" <${process.env.EMAIL_USER}>`,
      to: destination,
      replyTo: email,
      subject: `[${category?.toUpperCase() || 'CONTACT'}] ${name}`,
      text: `
Name: ${name}
Email: ${email}
Category: ${category || 'Not specified'}
IP: ${ip}

Message:
${message}
      `.trim(),
      attachments,
    });

    /* ---------------------------------------
       Category-aware auto reply
    ---------------------------------------- */
    const AUTO_REPLIES: Record<string, string> = {
      hire:
        'Thanks for reaching out regarding a role. I’ve received your message and will review it shortly.',
      project:
        'Thanks for the project details. I’ll review your proposal and respond soon.',
      collaboration:
        'Appreciate the collaboration interest. I’ll get back to you after reviewing.',
      general:
        'Thanks for your message. I’ll be in touch shortly.',
    };

    await transporter.sendMail({
      from: `"Brian Njata" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Message received',
      text:
        AUTO_REPLIES[category] ||
        'Thanks for reaching out. I’ll respond shortly.',
    });

    return NextResponse.json({
      success: true,
      message: 'Message delivered successfully.',
    });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error.' },
      { status: 500 }
    );
  }
}
