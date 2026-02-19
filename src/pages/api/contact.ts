import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  // Honeypot check
  const honeypot = formData.get('website');
  if (honeypot) {
    // Bot detected — return success silently
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const company = formData.get('company')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';
  const service = formData.get('service')?.toString().trim() || '';
  const message = formData.get('message')?.toString().trim() || '';
  const gdpr = formData.get('gdpr');

  // Validation
  if (!name || !email || !gdpr) {
    return new Response(
      JSON.stringify({ error: 'Namn, e-post och GDPR-samtycke krävs.' }),
      { status: 400 },
    );
  }

  // TODO: Integrate with an email service (Resend, SendGrid, etc.)
  // For now, log the submission and return success.
  // Replace this with your preferred email provider:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(import.meta.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'Verit Kontaktformulär <noreply@verit.se>',
  //   to: 'kontakt@verit.se',
  //   subject: `Kontaktförfrågan från ${name}`,
  //   text: `Namn: ${name}\nOrganisation: ${company}\nE-post: ${email}\nTelefon: ${phone}\nIntresseområde: ${service}\n\nMeddelande:\n${message}`,
  // });

  console.log('Contact form submission:', { name, email, company, phone, service, message });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
