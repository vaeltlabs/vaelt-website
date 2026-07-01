// Cloudflare Pages Function — POST /api/contact

interface Env {
  AIRTABLE_API_KEY: string;
}

const AIRTABLE_URL =
  'https://api.airtable.com/v0/appUyuBcLW1yAVF5l/Website%20Submissions';

function sanitize(s: string): string {
  return s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  try {
    const body = (await request.json()) as Record<string, string>;

    // Honeypot — bots fill this, humans don't see it
    if (body.website) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    const name = (body.name ?? '').trim();
    const businessName = (body.businessName ?? '').trim();
    const email = (body.email ?? '').trim();
    const phone = (body.phone ?? '').trim();
    const message = (body.message ?? '').trim();

    if (!name || !businessName || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing required fields' }),
        { status: 400, headers },
      );
    }

    const airtableRes = await fetch(AIRTABLE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({
        fields: {
          Name: sanitize(name),
          'Business name': sanitize(businessName),
          Email: sanitize(email),
          Phone: sanitize(phone),
          Message: sanitize(message),
          'Submitted at': new Date().toISOString(),
        },
      }),
    });

    if (!airtableRes.ok) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Submission failed' }),
        { status: 500, headers },
      );
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: 'Bad request' }),
      { status: 400, headers },
    );
  }
};

export const onRequestOptions = async (): Promise<Response> => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
