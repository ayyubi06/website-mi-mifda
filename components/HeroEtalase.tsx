"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";

// Foto hero dengan fallback: kalau src gagal dimuat, tampilkan
// PlaceholderImage berdesain (pola polish UI).
function FotoEtalase({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [gagal, setGagal] = useState(false);
  if (gagal) return <PlaceholderImage label={alt} className={className} />;
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        onError={() => setGagal(true)}
        className="object-cover"
      />
    </div>
  );
}

export default function HeroEtalase({
  tagline,
  chipSiswa,
  chipTahun,
}: {
  tagline: string;
  chipSiswa: string;
  chipTahun: string;
}) {
  const [masuk, setMasuk] = useState(false);
  const [statis, setStatis] = useState(false);

  useEffect(() => {
    setStatis(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMasuk(true))
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  // Entrance: fade+rise 600ms ease-out, stagger via transitionDelay.
  // Reduced motion: tanpa animasi, tampil statis.
  const fadeNaik = (tundaMs: number) =>
    statis
      ? ""
      : `transition-[opacity,transform] duration-[600ms] ease-out ${
          masuk ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`;
  const gayaTunda = (tundaMs: number) =>
    statis ? undefined : { transitionDelay: `${tundaMs}ms` };

  // Clip reveal untuk foto: terbuka dari bawah + fade.
  const bukaKlip = (tundaMs: number) =>
    statis
      ? ""
      : `transition-[clip-path,opacity] duration-[600ms] ease-out ${
          masuk
            ? "[clip-path:inset(0_0_0%_0)] opacity-100"
            : "[clip-path:inset(0_0_100%_0)] opacity-0"
        }`;

  return (
    <section className="relative overflow-hidden bg-[#062e22] text-white">
      {/* Radial glow emas di kanan atas */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,transparent_65%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 grid gap-14 min-[900px]:grid-cols-2 min-[900px]:items-center">
        {/* Kolom teks */}
        <div>
          <p
            className={`text-emas-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] ${fadeNaik(40)}`}
            style={gayaTunda(40)}
          >
            Madrasah Ibtidaiyah — Cilacap
          </p>
          <h1
            className={`mt-4 text-4xl sm:text-5xl font-extrabold leading-[1.1] ${fadeNaik(120)}`}
            style={gayaTunda(120)}
          >
            Sekolahnya anak Bulaksari.{" "}
            <span className="text-emas-400">Kebanggaan orang tuanya.</span>
          </h1>
          <p
            className={`mt-5 text-lg text-white/80 max-w-xl ${fadeNaik(200)}`}
            style={gayaTunda(200)}
          >
            {tagline}
          </p>
          <div className={`mt-8 flex flex-wrap gap-3 ${fadeNaik(280)}`} style={gayaTunda(280)}>
            <Link
              href="/ppdb"
              className="px-7 py-3.5 rounded-xl bg-emas-500 text-[#062e22] font-bold hover:bg-emas-400 active:scale-[0.97] transition-[transform,background-color]"
            >
              Daftar Sekarang
            </Link>
            <Link
              href="/galeri"
              className="px-7 py-3.5 rounded-xl border-2 border-white/40 font-semibold hover:bg-white/10 active:scale-[0.97] transition-[transform,background-color]"
            >
              Lihat Galeri
            </Link>
          </div>
        </div>

        {/* Kolom kolase foto */}
        <div className="relative h-[420px] sm:h-[480px]">
          {/* Foto 1: gedung */}
          <div
            className={`absolute left-0 top-0 w-[62%] ${bukaKlip(160)}`}
            style={gayaTunda(160)}
          >
            <FotoEtalase
              src="/uploads/foto-gedung.jpg"
              alt="Gedung MI Miftahul Huda Bulaksari"
              className="aspect-[4/5] -rotate-2 rounded-2xl shadow-2xl"
            />
          </div>
          {/* Foto 2: apel pagi */}
          <div
            className={`absolute right-0 bottom-0 w-[58%] ${bukaKlip(260)}`}
            style={gayaTunda(260)}
          >
            <FotoEtalase
              src="/uploads/galeri-apel-pagi.jpg"
              alt="Kegiatan apel pagi siswa MI Miftahul Huda Bulaksari"
              className="aspect-[4/3] rotate-[2.5deg] rounded-2xl shadow-2xl"
            />
          </div>
          {/* Chip kaca 1 */}
          <div
            className={`absolute left-[6%] bottom-[10%] rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md px-5 py-3 shadow-xl ${fadeNaik(340)}`}
            style={gayaTunda(340)}
          >
            <p className="text-2xl font-extrabold text-emas-400 tabular-nums">{chipSiswa}</p>
            <p className="text-xs text-white/80 font-medium">siswa aktif</p>
          </div>
          {/* Chip kaca 2 */}
          <div
            className={`absolute right-[4%] top-[6%] rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md px-5 py-3 shadow-xl ${fadeNaik(420)}`}
            style={gayaTunda(420)}
          >
            <p className="text-2xl font-extrabold text-emas-400 tabular-nums">{chipTahun}</p>
            <p className="text-xs text-white/80 font-medium">berdiri sejak</p>
          </div>
        </div>
      </div>
    </section>
  );
}
