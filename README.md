# Website MI Miftahul Huda Bulaksari

Website profil resmi MI Miftahul Huda Bulaksari (Bulaksari, Kesugihan, Cilacap).

## Tech stack

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**
- Static generation — cepat & gratis di Vercel
- `app/api/` dicadangkan untuk fitur backend (cek tagihan SPP, PPDB online)

## Mulai

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # verifikasi production build
```

## Struktur

```
app/            # routing (beranda, profil, program, galeri, berita, ppdb, kontak)
components/     # Navbar, Footer, Hero, kartu, dll.
data/konten.ts  # SELURUH teks & data — [placeholder] wajib diganti data asli
content/berita/ # berita dalam Markdown (fase 2)
public/         # aset statis
```

## Konten

Semua data bertanda `[placeholder]` di `data/konten.ts` harus diganti
dengan data asli dari sekolah sebelum publikasi. Jangan mengarang data
faktual (angka, nama, sejarah).

## Deploy

Hubungkan repo ini ke Vercel (import project) — setiap push ke `main`
otomatis deploy.
