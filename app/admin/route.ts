// Halaman /admin — memuat Decap CMS. Route handler (bukan page) agar tidak
// terbungkus layout website. Konfigurasi dibaca dari /admin/config.yml
// lewat <link rel="cms-config-url">.

export async function GET() {
  const html = `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
<title>Admin Konten — MI Miftahul Huda Bulaksari</title>
</head>
<body>
<script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
