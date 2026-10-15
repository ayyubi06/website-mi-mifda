import Link from "next/link";
import { getSekolah } from "@/data/konten";

export default function TopBar() {
  const SEKOLAH = getSekolah();
  return (
    <div className="bg-zamrud-900 text-zamrud-100 text-xs sm:text-sm">
      <div className="mx-auto max-w-6xl px-4 h-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <a
            href={`tel:${SEKOLAH.telp.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors truncate"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />
            </svg>
            <span className="truncate">{SEKOLAH.telp}</span>
          </a>
          <a
            href={`mailto:${SEKOLAH.email}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors truncate"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            <span className="truncate">{SEKOLAH.email}</span>
          </a>
        </div>
        <Link
          href="/ppdb"
          className="shrink-0 px-4 py-1.5 rounded-lg bg-emas-500 text-zamrud-900 font-bold hover:bg-emas-400 transition-colors"
        >
          PENDAFTARAN
        </Link>
      </div>
    </div>
  );
}
