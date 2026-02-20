import type { APIRoute } from 'astro';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[\d\s\-+().]{7,20}$/;
const VALID_SERVICES = ['nis2','iso27001','ciso','riskhantering','utbildning','gdpr','securapilot','annat'];

type Locale = 'sv' | 'en';

const messages: Record<Locale, Record<string, string>> = {
  sv: {
    name: 'Ange ditt namn (minst 2 tecken).',
    company: 'Ange organisationens namn.',
    emailRequired: 'Ange din e-postadress.',
    emailInvalid: 'Ange en giltig e-postadress.',
    phone: 'Ange ett giltigt telefonnummer.',
    service: 'Välj ett intresseområde.',
    gdpr: 'Du behöver godkänna behandlingen av personuppgifter.',
    formError: 'Formuläret innehåller fel.',
    mailNotConfigured: 'E-posttjänsten är inte konfigurerad.',
    sendFailed: 'Kunde inte skicka meddelandet. Försök igen senare.',
    subject: 'Ny kontaktförfrågan från',
  },
  en: {
    name: 'Please enter your name (at least 2 characters).',
    company: 'Please enter your organisation name.',
    emailRequired: 'Please enter your email address.',
    emailInvalid: 'Please enter a valid email address.',
    phone: 'Please enter a valid phone number.',
    service: 'Please select an area of interest.',
    gdpr: 'You need to consent to the processing of personal data.',
    formError: 'The form contains errors.',
    mailNotConfigured: 'Email service is not configured.',
    sendFailed: 'Could not send the message. Please try again later.',
    subject: 'New contact enquiry from',
  },
};

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const locale: Locale = formData.get('locale')?.toString() === 'en' ? 'en' : 'sv';
  const msg = messages[locale];

  // Honeypot check
  const honeypot = formData.get('website');
  if (honeypot) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  const name = formData.get('name')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const company = formData.get('company')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';
  const service = formData.get('service')?.toString().trim() || '';
  const message = formData.get('message')?.toString().trim() || '';
  const gdpr = formData.get('gdpr');

  const fields: Record<string, string> = {};

  if (name.length < 2) {
    fields.name = msg.name;
  }
  if (company.length < 2) {
    fields.company = msg.company;
  }
  if (!email) {
    fields.email = msg.emailRequired;
  } else if (!EMAIL_RE.test(email)) {
    fields.email = msg.emailInvalid;
  }
  if (phone && !PHONE_RE.test(phone)) {
    fields.phone = msg.phone;
  }
  if (!VALID_SERVICES.includes(service)) {
    fields.service = msg.service;
  }
  if (!gdpr) {
    fields.gdpr = msg.gdpr;
  }

  if (Object.keys(fields).length > 0) {
    return new Response(
      JSON.stringify({ error: msg.formError, fields }),
      { status: 400 },
    );
  }

  const relayUrl = process.env.MAIL_RELAY_URL;
  const relayKey = process.env.MAIL_RELAY_KEY;
  const relaySender = process.env.MAIL_RELAY_SENDER;

  if (!relayUrl || !relayKey) {
    console.error('Mail Relay is not configured (MAIL_RELAY_URL / MAIL_RELAY_KEY)');
    return new Response(
      JSON.stringify({ error: msg.mailNotConfigured }),
      { status: 500 },
    );
  }

  const mailBody = [
    `Namn: ${name}`,
    company && `Organisation: ${company}`,
    `E-post: ${email}`,
    phone && `Telefon: ${phone}`,
    service && `Intresseområde: ${service}`,
    '',
    message && `Meddelande:\n${message}`,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const response = await fetch(relayUrl, {
      method: 'POST',
      headers: {
        'X-API-Key': relayKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: relaySender || 'api@securapilot.com',
        to: 'info@verit.se',
        subject: `${msg.subject} ${name}`,
        body: mailBody,
        isHtml: false,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Mail Relay error:', response.status, errorBody);
      return new Response(
        JSON.stringify({ error: msg.sendFailed }),
        { status: 500 },
      );
    }
  } catch (err) {
    console.error('Mail Relay request failed:', err);
    return new Response(
      JSON.stringify({ error: msg.sendFailed }),
      { status: 500 },
    );
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
