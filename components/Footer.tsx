import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, SEKOLAH } from "@/data/konten";

const LAINNYA = [
  { href: "/ppdb", label: "Pendaftaran" },
  { href: "/download", label: "Download" },
  { href: "/berita", label: "Berita" },
  { href: "/galeri", label: "Galeri" },
];

export default function Footer() {
  return (
    <footer className="bg-zamrud-900 text-zamrud-100">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-bold text-white text-lg">Tentang Kami</p>
          <p className="mt-3 text-sm leading-relaxed">
            [placeholder] {SEKOLAH.nama} adalah madrasah ibtidaiyah di
            Bulaksari, Kesugihan, Cilacap yang berkomitmen {SEKOLAH.tagline.toLowerCase()}.
          </p>
          <Link
            href="/profil"
            className="mt-4 inline-block px-4 py-2 rounded-lg bg-emas-500 text-zamrud-900 text-sm font-bold hover:bg-emas-400 transition-colors"
          >
            TENTANG KAMI
          </Link>
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
          <p className="font-semibold text-white mb-3">Lainnya</p>
          <ul className="space-y-2 text-sm">
            {LAINNYA.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-emas-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Kontak Kami</p>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} strokeWidth={1.8} className="shrink-0 mt-0.5 text-emas-400" />
              <span>{SEKOLAH.alamat}</span>
            </li>
            <li>
              <a href={`mailto:${SEKOLAH.email}`} className="flex items-center gap-2.5 hover:text-emas-400 transition-colors">
                <Mail size={16} strokeWidth={1.8} className="shrink-0 text-emas-400" />
                {SEKOLAH.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${SEKOLAH.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emas-400 transition-colors"
              >
                <Phone size={16} strokeWidth={1.8} className="shrink-0 text-emas-400" />
                WhatsApp: {SEKOLAH.wa}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={16} strokeWidth={1.8} className="shrink-0 text-emas-400" />
              <span>{SEKOLAH.jamLayanan}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-center text-zamrud-200">
          Copyright 2026 {SEKOLAH.nama}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
