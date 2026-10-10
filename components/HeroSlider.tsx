"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HERO_SLIDES, SEKOLAH } from "@/data/konten";

export default function HeroSlider() {
  const [aktif, setAktif] = useState(0);
  const banyak = HERO_SLIDES.length > 1;

  useEffect(() => {
    if (!banyak) return;
    const t = setInterval(() => setAktif((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [banyak]);

  return (
    <section className="relative text-white overflow-hidden bg-gradient-to-br from-zamrud-800 via-zamrud-700 to-zamrud-600">
      {/* Slides — jika foto belum tersedia, gradien di atas jadi latar cadangan */}
      {/* Slides */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === aktif ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}
      {/* Overlay hijau zamrud */}
      <div className="absolute inset-0 bg-gradient-to-r from-zamrud-900/90 via-zamrud-900/60 to-zamrud-900/30" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="text-emas-400 font-semibold text-sm uppercase tracking-widest">
          Madrasah Ibtidaiyah
        </p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-tight max-w-2xl">
          {SEKOLAH.nama}
        </h1>
        <p className="mt-4 text-zamrud-100 text-lg max-w-xl">{SEKOLAH.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/ppdb"
            className="px-6 py-3 rounded-xl bg-emas-500 text-zamrud-900 font-bold hover:bg-emas-400 transition-colors"
          >
            Info PPDB
          </Link>
          <Link
            href="/profil"
            className="px-6 py-3 rounded-xl border-2 border-white/40 font-semibold hover:bg-white/10 transition-colors"
          >
            Lihat Profil
          </Link>
        </div>
      </div>

      {/* Kontrol slider — hanya jika > 1 foto */}
      {banyak && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setAktif(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === aktif ? "w-8 bg-emas-400" : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
