import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // for port 587 (TLS)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message from ${name}`,
      text: message,
    }

    try {
      await transporter.sendMail(mailOptions)
    } catch (primaryError) {
      console.warn('Primary email failed:', primaryError)

      const fallbackEmail = process.env.EMAIL_BACKUP
      if (fallbackEmail) {
        await transporter.sendMail({ ...mailOptions, to: fallbackEmail })
      } else {
        throw new Error('Primary and fallback email failed (no backup defined).')
      }
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Error in /api/contact:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    )
  }
}

