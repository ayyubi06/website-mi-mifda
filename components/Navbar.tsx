"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { NAV_MENU } from "@/data/navigasi";

function isActive(pathname: string, href?: string, children?: { href: string }[]) {
  if (href && pathname === href) return true;
  if (children && children.some((c) => pathname === c.href)) return true;
  return false;
}

export default function Navbar({ namaSekolah }: { namaSekolah: string }) {
  const [buka, setBuka] = useState(false);
  const [subBuka, setSubBuka] = useState<string | null>(null);
  const pathname = usePathname();

  const linkCls = (aktif: boolean) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      aktif
        ? "bg-zamrud-50 text-zamrud-700"
        : "text-slate-600 hover:text-zamrud-700 hover:bg-zamrud-50"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-zamrud-100">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={40} />
          <div className="leading-tight">
            <p className="font-bold text-zamrud-800 text-sm sm:text-base">
              {namaSekolah}
            </p>
            <p className="text-xs text-slate-500 hidden sm:block">
              Bulaksari, Kesugihan, Cilacap
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_MENU.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className={`${linkCls(isActive(pathname, undefined, item.children))} flex items-center gap-1`}
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block">
                  <div className="w-52 rounded-xl border border-zamrud-100 bg-white shadow-lg py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`group/item flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                          pathname === c.href
                            ? "bg-zamrud-50 text-zamrud-700 font-medium"
                            : "text-slate-600 hover:bg-zamrud-50 hover:text-zamrud-700"
                        }`}
                      >
                        {c.icon && (
                          <c.icon
                            size={16}
                            strokeWidth={1.8}
                            className="shrink-0 text-zamrud-500 group-hover/item:translate-x-0.5 transition-transform"
                          />
                        )}
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={linkCls(pathname === item.href)}
              >
                {item.label}
              </Link>
            )
          )}
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

      {/* Mobile */}
      {buka && (
        <nav className="md:hidden border-t border-zamrud-100 bg-white px-4 py-2 max-h-[70vh] overflow-y-auto">
          {NAV_MENU.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setSubBuka(subBuka === item.label ? null : item.label)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(pathname, undefined, item.children)
                      ? "bg-zamrud-50 text-zamrud-700"
                      : "text-slate-600"
                  }`}
                >
                  {item.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`transition-transform ${subBuka === item.label ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {subBuka === item.label && (
                  <div className="pl-4 pb-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setBuka(false)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${
                          pathname === c.href
                            ? "bg-zamrud-50 text-zamrud-700 font-medium"
                            : "text-slate-600"
                        }`}
                      >
                        {c.icon && (
                          <c.icon size={16} strokeWidth={1.8} className="shrink-0 text-zamrud-500" />
                        )}
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setBuka(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  pathname === item.href
                    ? "bg-zamrud-50 text-zamrud-700"
                    : "text-slate-600 hover:bg-zamrud-50"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
