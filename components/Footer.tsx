import Link from "next/link";
import { NAV_LINKS, SEKOLAH } from "@/data/konten";

export default function Footer() {
  return (
    <footer className="bg-zamrud-900 text-zamrud-100">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-bold text-white text-lg">{SEKOLAH.nama}</p>
          <p className="mt-2 text-sm leading-relaxed">{SEKOLAH.tagline}</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Navigasi</p>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-emas-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Kontak</p>
          <ul className="space-y-2 text-sm">
            <li>{SEKOLAH.alamat}</li>
            <li>Telp: {SEKOLAH.telp}</li>
            <li>WA: {SEKOLAH.wa}</li>
            <li>{SEKOLAH.jamLayanan}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-center text-zamrud-200">
          Copyright 2024-2026 {SEKOLAH.nama}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
