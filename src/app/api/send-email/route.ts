import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: "StudentHub <contact@andreipau.me>",
      to: email,
      subject: "Thank you for contacting StudentHub",
      html: `
        <h2>Thank you for contacting StudentHub!</h2>
        <p>We have received your message and will get back to you soon.</p>
        <br/>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in send-email route:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 