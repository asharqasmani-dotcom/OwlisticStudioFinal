import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  type?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const type = (body.type || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !type || !message) {
    return NextResponse.json(
      { error: "Name, email, project type and message are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL || "ashar@owlisticstudio.com";
  const fromAddress = process.env.CONTACT_FROM_EMAIL || "Owlistic Studio <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set. Logging submission instead of sending.",
      { name, email, company, type, message },
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email service is not configured yet. Add RESEND_API_KEY to .env.local to enable delivery.",
      },
      { status: 503 },
    );
  }

  const subject = `New project enquiry from ${name}`;
  const lines = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Project Type", type],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#1a1a1a">
      <h2 style="margin:0 0 16px;color:#fe6037">New Project Enquiry</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
        ${lines
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 10px 6px 0;color:#666;width:140px">${escapeHtml(k)}</td><td style="padding:6px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <div style="background:#fefaf6;border-left:3px solid #fe6037;padding:14px 16px;border-radius:8px">
        <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">Message</div>
        <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
      </div>
    </div>
  `;

  const text =
    `New Project Enquiry\n\n` +
    lines.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nMessage:\n${message}\n`;

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text().catch(() => "");
      console.error("[contact] Resend error", resendRes.status, detail);
      return NextResponse.json(
        { ok: false, error: "Could not send email. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Network error", err);
    return NextResponse.json(
      { ok: false, error: "Network error while sending. Please try again." },
      { status: 500 },
    );
  }
}
