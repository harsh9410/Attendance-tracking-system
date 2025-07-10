# EmailJS Setup Guide

This guide will help you set up EmailJS to make the contact form fully functional.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Submission - {{from_name}}

Hello GeoTrack Team,

You have received a new contact form submission:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Role:** {{role}}
**Company:** {{company}}
**Selected Plan:** {{plan}}
**Message:**

{{message}}

---
This message was sent from the GeoTrack contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update ContactPage.tsx

Replace the placeholder values in `src/pages/ContactPage.tsx`:

```typescript
// Line 25: Replace YOUR_PUBLIC_KEY
emailjs.init("user_def456"); // Your actual public key

// Lines 75-77: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
const response = await emailjs.send(
  'service_abc123', // Your actual service ID
  'template_xyz789', // Your actual template ID
  templateParams
);
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email to confirm the message was received

## Free Tier Limits

- EmailJS free tier allows 200 emails per month
- For production use, consider upgrading to a paid plan

## Troubleshooting

- **"Failed to send message" error**: Check your EmailJS credentials and service configuration
- **No emails received**: Verify your email service is properly connected
- **Template variables not working**: Ensure template variable names match exactly (case-sensitive)

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS handles email sending securely through their servers
- No backend server required for this implementation 