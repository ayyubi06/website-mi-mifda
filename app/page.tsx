import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import BeritaCard from "@/components/BeritaCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import {
  SEKOLAH,
  STATISTIK,
  PROGRAM_UNGGULAN,
  BERITA_TERBARU,
} from "@/data/konten";

export default function Beranda() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-zamrud-800 via-zamrud-700 to-zamrud-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-emas-400 font-semibold text-sm uppercase tracking-widest">
              Madrasah Ibtidaiyah
            </p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-tight">
              {SEKOLAH.nama}
            </h1>
            <p className="mt-4 text-zamrud-100 text-lg">{SEKOLAH.tagline}</p>
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
          <PlaceholderImage
            label="FOTO: gedung / kegiatan sekolah"
            className="h-64 sm:h-80 !bg-white/10 !border-white/30"
          />
        </div>
      </section>

      {/* STATISTIK */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATISTIK.map((s) => (
            <StatCard key={s.label} nilai={s.nilai} label={s.label} />
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-3">
          [placeholder] angka di atas contoh — akan diganti data asli
        </p>
      </section>

      {/* SAMBUTAN */}
      <section className="bg-zamrud-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-8 md:grid-cols-3 items-center">
          <PlaceholderImage
            label="FOTO: kepala madrasah"
            className="h-72"
          />
          <div className="md:col-span-2">
            <SectionHeading judul="Sambutan Kepala Madrasah" sub="Sambutan" />
            <p className="text-slate-600 leading-relaxed">
              [placeholder] Assalamu&apos;alaikum warahmatullahi wabarakatuh.
              Selamat datang di website resmi {SEKOLAH.nama}. Website ini
              kami hadirkan sebagai jendela informasi bagi wali murid dan
              masyarakat...
            </p>
            <p className="mt-4 font-bold text-zamrud-800">
              [placeholder] Nama Kepala Madrasah
            </p>
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
              className="bg-white rounded-2xl border border-zamrud-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-zamrud-600 text-white flex items-center justify-center font-bold text-lg">
                {p.judul.charAt(0)}
              </div>
              <h3 className="mt-4 font-bold text-zamrud-800">{p.judul}</h3>
              <p className="mt-1 text-sm text-slate-500">{p.deskripsi}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-3">
          [placeholder] daftar program usulan — konfirmasi ke sekolah
        </p>
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

      {/* GALERI CUPLIKAN */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading judul="Galeri Kegiatan" sub="Galeri" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <PlaceholderImage
              key={i}
              label={`FOTO: kegiatan ${i}`}
              className="h-44"
            />
          ))}
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
