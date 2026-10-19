import Link from "next/link";
import { Megaphone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import BeritaCard from "@/components/BeritaCard";
import AgendaCard from "@/components/AgendaCard";
import HeroSlider from "@/components/HeroSlider";
import PlaceholderImage from "@/components/PlaceholderImage";
import {
  getSekolah,
  getKepalaMadrasah,
  getStatistik,
  getProgramUnggulan,
  getBerita,
  getPengumuman,
  getAgenda,
  getHeroSlides,
  getGaleri,
} from "@/data/konten";

export default function Beranda() {
  const SEKOLAH = getSekolah();
  const KEPALA = getKepalaMadrasah();
  const STATISTIK = getStatistik();
  const PROGRAM_UNGGULAN = getProgramUnggulan();
  const BERITA_TERBARU = getBerita().slice(0, 3);
  const PENGUMUMAN = getPengumuman().slice(0, 3);
  const AGENDA = getAgenda().slice(0, 3);
  const HERO_SLIDES = getHeroSlides();
  const GALERI = getGaleri().filter((g) => g.jenis === "foto").slice(0, 4);

  return (
    <>
      <HeroSlider slides={HERO_SLIDES} namaSekolah={SEKOLAH.nama} tagline={SEKOLAH.tagline} />

      {/* STATISTIK */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATISTIK.map((s) => (
            <StatCard key={s.label} nilai={s.nilai} label={s.label} icon={s.icon} />
          ))}
        </div>
      </section>

      {/* SAMBUTAN */}
      <section className="bg-zamrud-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-8 md:grid-cols-3 items-center">
          {KEPALA.foto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={KEPALA.foto} alt={KEPALA.nama} className="h-72 w-full object-cover rounded-2xl" />
          ) : (
            <PlaceholderImage label="FOTO: kepala madrasah" className="h-72" />
          )}
          <div className="md:col-span-2">
            <SectionHeading judul="Sambutan Kepala Madrasah" sub="Sambutan" />
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
              {KEPALA.sambutan}
            </p>
            <p className="mt-4 font-bold text-zamrud-800">{KEPALA.nama}</p>
            <p className="text-sm text-slate-500">Kepala {SEKOLAH.nama}</p>
          </div>
        </div>
      </section>

      {/* PROGRAM UNGGULAN */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading judul="Program Unggulan" sub="Program" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_UNGGULAN.map((p) => (
            <div
              key={p.judul}
              className="group bg-white rounded-2xl border border-zamrud-100 p-6 hover:shadow-sm hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-zamrud-600 text-white flex items-center justify-center group-hover:bg-emas-500 group-hover:text-zamrud-900 group-hover:-translate-y-1 transition-[transform,background-color,color] duration-300">
                <p.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 font-bold text-zamrud-800">{p.judul}</h3>
              <p className="mt-1 text-sm text-slate-500">{p.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section className="bg-zamrud-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading judul="Berita Terbaru" sub="Kabar Madrasah" />
          <div className="grid gap-4 md:grid-cols-3">
            {BERITA_TERBARU.map((b) => (
              <BeritaCard key={b.slug} {...b} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/berita"
              className="inline-block px-6 py-2.5 rounded-xl border-2 border-zamrud-600 text-zamrud-700 font-semibold hover:bg-zamrud-600 hover:text-white transition-colors"
            >
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* PENGUMUMAN & AGENDA */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading judul="Pengumuman" sub="Informasi" align="left" />
            <div className="space-y-4">
              {PENGUMUMAN.map((p) => (
                <div
                  key={p.slug}
                  className="flex gap-4 bg-white rounded-2xl border border-zamrud-100 p-5 hover:shadow-sm transition-shadow"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-emas-100 text-emas-600 flex items-center justify-center">
                    <Megaphone size={18} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-emas-600">{p.tanggal}</p>
                    <h3 className="mt-1 font-bold text-zamrud-800 leading-snug">
                      {p.judul}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{p.ringkasan}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/pengumuman"
                className="inline-block px-6 py-2.5 rounded-xl border-2 border-zamrud-600 text-zamrud-700 font-semibold hover:bg-zamrud-600 hover:text-white transition-colors"
              >
                Lihat Semua Pengumuman
              </Link>
            </div>
          </div>
          <div>
            <SectionHeading judul="Agenda Sekolah" sub="Agenda" align="left" />
            <div className="space-y-4">
              {AGENDA.map((a) => (
                <AgendaCard key={a.judul} {...a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERI CUPLIKAN */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading judul="Galeri Kegiatan" sub="Galeri" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALERI.length > 0 ? (
            GALERI.map((g, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={g.gambar} alt={g.judul} className="h-44 w-full object-cover rounded-2xl" />
            ))
          ) : (
            [1, 2, 3, 4].map((i) => (
              <PlaceholderImage key={i} label={`FOTO: kegiatan ${i}`} className="h-44" />
            ))
          )}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/galeri"
            className="inline-block px-6 py-2.5 rounded-xl border-2 border-zamrud-600 text-zamrud-700 font-semibold hover:bg-zamrud-600 hover:text-white transition-colors"
          >
            Lihat Galeri
          </Link>
        </div>
      </section>

      {/* BANNER PPDB */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-gradient-to-r from-emas-500 to-emas-400 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zamrud-900">
            Pendaftaran Peserta Didik Baru
          </h2>
          <p className="mt-2 text-zamrud-900/80 font-medium">
            Tahun Ajaran 2026/2027 — kuota terbatas
          </p>
          <Link
            href="/ppdb"
            className="mt-6 inline-block px-8 py-3 rounded-xl bg-zamrud-800 text-white font-bold hover:bg-zamrud-700 transition-colors"
          >
            Lihat Info PPDB
          </Link>
        </div>
      </section>
    </>
  );
}
