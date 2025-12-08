import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

// Initialize SendGrid with API key
const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) {
  sendgrid.setApiKey(apiKey);
}

// Contact form submission handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, enquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailSubject = `[Trading] New enquiry from ${name}${enquiryType ? `: ${enquiryType}` : ''}`;
    const emailText = `
New Contact Form Submission (trading.aiquantlabs.com)
=====================================================

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Enquiry Type: ${enquiryType || 'General'}

Message:
${message}

---
This email was sent from the trading.aiquantlabs.com contact form.
    `.trim();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #7c3aed, #a855f7); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; }
    .value { color: #111827; margin-top: 4px; }
    .message-box { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 15px; }
    .footer { text-align: center; color: #9ca3af; font-size: 12px; padding: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Enquiry</h2>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">trading.aiquantlabs.com</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${company || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Enquiry Type</div>
        <div class="value">${enquiryType || 'General'}</div>
      </div>
      <div class="message-box">
        <div class="label">Message</div>
        <div class="value" style="white-space: pre-wrap;">${message}</div>
      </div>
    </div>
    <div class="footer">
      Sent from trading.aiquantlabs.com contact form
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send email via SendGrid
    // Note: 'from' must be a verified sender in SendGrid (info@aiquantlabs.com)
    // The email subject and content identify this as coming from trading.aiquantlabs.com
    await sendgrid.send({
      to: 'info@aiquantlabs.com',
      from: 'info@aiquantlabs.com',
      replyTo: email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
