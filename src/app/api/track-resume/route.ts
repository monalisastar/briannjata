import { NextResponse } from 'next/server';

function getClientIp(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const ip = getClientIp(req);

    let location = 'Unknown';

    // Geo lookup (safe + optional)
    if (ip !== 'unknown' && process.env.IPINFO_TOKEN) {
      try {
        const geoRes = await fetch(
          `https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`
        );
        const geo = await geoRes.json();

        location = [
          geo.city,
          geo.region,
          geo.country,
        ]
          .filter(Boolean)
          .join(', ');
      } catch {
        location = 'Geo lookup failed';
      }
    }

    const message = {
      username: 'Portfolio Alerts',
      embeds: [
        {
          title: '📄 Resume Downloaded',
          color: 0x5865f2,
          fields: [
            {
              name: 'Source',
              value: body.source || 'unknown',
              inline: true,
            },
            {
              name: 'IP Address',
              value: ip,
              inline: true,
            },
            {
              name: 'Location',
              value: location,
              inline: false,
            },
            {
              name: 'Time',
              value: new Date().toISOString(),
              inline: false,
            },
          ],
        },
      ],
    };

    await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Tracking error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
