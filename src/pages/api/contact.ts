import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  // Honeypot check
  const honeypot = formData.get('website');
  if (honeypot) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const company = formData.get('company')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';
  const service = formData.get('service')?.toString().trim() || '';
  const message = formData.get('message')?.toString().trim() || '';
  const gdpr = formData.get('gdpr');

  if (!name || !email || !gdpr) {
    return new Response(
      JSON.stringify({ error: 'Namn, e-post och GDPR-samtycke krävs.' }),
      { status: 400 },
    );
  }

  const relayUrl = import.meta.env.MAIL_RELAY_URL;
  const relayKey = import.meta.env.MAIL_RELAY_KEY;
  const relaySender = import.meta.env.MAIL_RELAY_SENDER;

  if (!relayUrl || !relayKey) {
    console.error('Mail Relay is not configured (MAIL_RELAY_URL / MAIL_RELAY_KEY)');
    return new Response(
      JSON.stringify({ error: 'E-posttjänsten är inte konfigurerad.' }),
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
        subject: `Ny kontaktförfrågan från ${name}`,
        body: mailBody,
        isHtml: false,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Mail Relay error:', response.status, errorBody);
      return new Response(
        JSON.stringify({ error: 'Kunde inte skicka meddelandet. Försök igen senare.' }),
        { status: 500 },
      );
    }
  } catch (err) {
    console.error('Mail Relay request failed:', err);
    return new Response(
      JSON.stringify({ error: 'Kunde inte skicka meddelandet. Försök igen senare.' }),
      { status: 500 },
    );
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
