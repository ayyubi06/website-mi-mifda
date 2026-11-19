"use client";

import { useEffect, useState, type ReactNode } from "react";
import { apakahAgendaAktif, apakahBaruPengumuman } from "@/lib/sorotan-tanggal";

// Pembungkus card yang memberi latar kuning muda bila itemnya "baru".
// Perhitungan tanggal HANYA sesudah mount (useEffect): saat SSG prerender,
// tanggal "hari ini" masih tanggal build — bila dihitung saat render, hasil
// server (tanggal build) dan klien (tanggal buka halaman) bisa berbeda dan
// menimbulkan galat hidrasi. Keadaan awal selalu putih (sama dengan server),
// lalu efek memperbarui latar begitu komponen terpasang di peramban.
// Saat tersorot, akar juga mendapat kelas penanda `sorot-aktif` (bersama
// `group`) supaya isi card bisa ikut menggelap lewat varian
// `group-[.sorot-aktif]:...` — dipakai ikon + tanggal pengumuman (item 18).
export default function Sorotan({
  tanggalISO,
  jenis,
  className = "",
  children,
}: {
  tanggalISO: string;
  jenis: "pengumuman" | "agenda";
  className?: string;
  children: ReactNode;
}) {
  const [sorot, setSorot] = useState(false);
  useEffect(() => {
    setSorot(
      jenis === "pengumuman"
        ? apakahBaruPengumuman(tanggalISO)
        : apakahAgendaAktif(tanggalISO),
    );
  }, [tanggalISO, jenis]);
  return (
    <div
      className={`group ${sorot ? "bg-kuning-muda sorot-aktif" : "bg-white"} ${className}`}
    >
      {children}
    </div>
  );
}
