"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { NAV_LINKS, SEKOLAH } from "@/data/konten";

export default function Navbar() {
  const [buka, setBuka] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-zamrud-100">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={40} />
          <div className="leading-tight">
            <p className="font-bold text-zamrud-800 text-sm sm:text-base">
              {SEKOLAH.nama}
            </p>
            <p className="text-xs text-slate-500 hidden sm:block">
              Bulaksari, Kesugihan, Cilacap
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "bg-zamrud-50 text-zamrud-700"
                  : "text-slate-600 hover:text-zamrud-700 hover:bg-zamrud-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg text-zamrud-800 hover:bg-zamrud-50"
          onClick={() => setBuka(!buka)}
          aria-label="Buka menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {buka ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {buka && (
        <nav className="md:hidden border-t border-zamrud-100 bg-white px-4 py-2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setBuka(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                pathname === l.href
                  ? "bg-zamrud-50 text-zamrud-700"
                  : "text-slate-600 hover:bg-zamrud-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
