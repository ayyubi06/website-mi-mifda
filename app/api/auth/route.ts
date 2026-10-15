// OAuth proxy minimal untuk Decap CMS (backend github).
// GET /api/auth            -> redirect ke GitHub (mulai login)
// GET /api/auth?code=...   -> tukar code jadi token, kirim balik ke Decap via postMessage
// Butuh env: GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_CLIENT_SECRET (di Vercel, bukan di kode).

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "node:crypto";

const STATE_COOKIE = "decap_oauth_state";

export async function GET(req: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new NextResponse("OAuth belum dikonfigurasi (GITHUB_OAUTH_CLIENT_ID/SECRET kosong).", { status: 500 });
  }

  const url = new URL(req.url);
  const origin = `${url.protocol}//${url.host}`;
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  // ---- Langkah 1: mulai login -> redirect ke GitHub ----
  if (!code) {
    const stateBaru = crypto.randomBytes(16).toString("hex");
    (await cookies()).set(STATE_COOKIE, stateBaru, {
      httpOnly: true, secure: url.protocol === "https:", sameSite: "lax",
      maxAge: 600, path: "/api/auth",
    });
    const authorize = new URL("https://github.com/login/oauth/authorize");
    authorize.searchParams.set("client_id", clientId);
    authorize.searchParams.set("redirect_uri", `${origin}/api/auth`);
    authorize.searchParams.set("scope", "repo");
    authorize.searchParams.set("state", stateBaru);
    return NextResponse.redirect(authorize.toString());
  }

  // ---- Langkah 2: GitHub redirect balik -> tukar code jadi token ----
  const stateCookie = (await cookies()).get(STATE_COOKIE)?.value;
  if (!state || !stateCookie || state !== stateCookie) {
    return new NextResponse("State OAuth tidak cocok.", { status: 400 });
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: clientId, client_secret: clientSecret, code,
      redirect_uri: `${origin}/api/auth`,
    }),
  });
  const tokenJson = (await tokenRes.json()) as { access_token?: string; error?: string };
  const token = tokenJson.access_token;

  // Kirim hasil ke jendela Decap lewat postMessage (protokol standar Decap).
  const payload = token
    ? `authorization:github:success:${JSON.stringify({ token, provider: "github" })}`
    : `authorization:github:error:${JSON.stringify({ provider: "github", error: tokenJson.error || "gagal" })}`;

  const html = `<!doctype html><html><body><script>
(function() {
  function kirim(e) {
    window.opener.postMessage(${JSON.stringify(payload)}, e.origin);
    window.close();
  }
  window.addEventListener("message", kirim, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script></body></html>`;

  return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
