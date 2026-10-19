"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { HeroSlide } from "@/data/konten";

export default function HeroSlider({
  slides,
  namaSekolah,
  tagline,
}: {
  slides: HeroSlide[];
  namaSekolah: string;
  tagline: string;
}) {
  const [aktif, setAktif] = useState(0);
  const banyak = slides.length > 1;

  useEffect(() => {
    if (!banyak) return;
    // Hormati prefers-reduced-motion: slider tidak auto-advance.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setAktif((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [banyak, slides.length]);

  return (
    <section className="relative text-white overflow-hidden bg-gradient-to-br from-zamrud-800 via-zamrud-700 to-zamrud-600">
      {/* Slides */}
      {slides.map((s, i) => (
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
          {namaSekolah}
        </h1>
        <p className="mt-4 text-zamrud-100 text-lg max-w-xl">{tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/ppdb"
            className="px-6 py-3 rounded-xl bg-emas-500 text-zamrud-900 font-bold hover:bg-emas-400 active:scale-[0.97] transition-[transform,background-color]"
          >
            Info PPDB
          </Link>
          <Link
            href="/profil"
            className="px-6 py-3 rounded-xl border-2 border-white/40 font-semibold hover:bg-white/10 active:scale-[0.97] transition-[transform,background-color]"
          >
            Lihat Profil
          </Link>
        </div>
      </div>

      {/* Kontrol slider — hanya jika > 1 foto */}
      {banyak && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setAktif(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 w-8 rounded-full origin-left transition-transform duration-300 ${
                i === aktif ? "scale-x-100 bg-emas-400" : "scale-x-25 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
