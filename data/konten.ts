// Pembaca konten untuk Decap CMS.
// Semua konten editable tersimpan sebagai file di /content (markdown/JSON).
// Halaman /admin (Decap) menulis ke file-file tersebut; Vercel build ulang otomatis.
// Modul ini hanya dipakai di Server Components / route handlers.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Sunrise,
  Compass,
  Music,
  GraduationCap,
  Briefcase,
  LayoutGrid,
  Landmark,
  School,
  User,
  Users,
  Mail,
  Sparkles,
  CalendarDays,
  Megaphone,
  Image as ImageIcon,
} from "lucide-react";

const CONTENT_DIR = path.join(process.cwd(), "content");

const IKON: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  sunrise: Sunrise,
  compass: Compass,
  music: Music,
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  "layout-grid": LayoutGrid,
  landmark: Landmark,
  school: School,
  user: User,
  users: Users,
  mail: Mail,
  sparkles: Sparkles,
  "calendar-days": CalendarDays,
  megaphone: Megaphone,
  image: ImageIcon,
};

export function ikonDariNama(nama?: string): LucideIcon {
  return (nama && IKON[nama]) || Sparkles;
}

function bacaJSON<T>(namaFile: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, namaFile), "utf-8")) as T;
  } catch {
    return fallback;
  }
}

function bacaFolder(namaFolder: string): { slug: string; data: Record<string, unknown>; isi: string }[] {
  const dir = path.join(CONTENT_DIR, namaFolder);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
  } catch {
    return [];
  }
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(dir, f), "utf-8");
    const parsed = matter(raw);
    return { slug: f.replace(/\.md$/, ""), data: parsed.data as Record<string, unknown>, isi: parsed.content.trim() };
  });
}

function teks(v: unknown, dflt = ""): string {
  return typeof v === "string" ? v : dflt;
}

export function formatTanggalID(iso: string): string {
  const pendek = iso.slice(0, 10);
  const d = new Date(pendek + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(d);
}

// ---------- Pengaturan sekolah ----------

export type Sekolah = {
  nama: string; namaPendek: string; tagline: string; alamat: string;
  telp: string; wa: string; email: string; jamLayanan: string;
};

export function getSekolah(): Sekolah {
  const p = bacaJSON<Record<string, string>>("pengaturan.json", {});
  return {
    nama: p.nama || "MI Miftahul Huda Bulaksari",
    namaPendek: p.namaPendek || "MI Miftahul Huda",
    tagline: p.tagline || "",
    alamat: p.alamat || "",
    telp: p.telp || "",
    wa: p.wa || "",
    email: p.email || "",
    jamLayanan: p.jamLayanan || "",
  };
}

export function getKepalaMadrasah(): { nama: string; sambutan: string; foto: string } {
  const p = bacaJSON<Record<string, string>>("pengaturan.json", {});
  return { nama: p.kepalaNama || "", sambutan: p.kepalaSambutan || "", foto: p.kepalaFoto || "" };
}

// ---------- Koleksi ----------

export type StatItem = { nilai: string; label: string; icon: LucideIcon };
export function getStatistik(): StatItem[] {
  const j = bacaJSON<{ items?: { nilai?: string; label?: string; icon?: string }[] }>("statistik.json", {});
  return (j.items || []).map((s) => ({
    nilai: teks(s.nilai), label: teks(s.label), icon: ikonDariNama(s.icon),
  }));
}

export type HeroSlide = { src: string; alt: string };
export function getHeroSlides(): HeroSlide[] {
  const j = bacaJSON<{ slides?: { src?: string; alt?: string }[] }>("hero.json", {});
  return (j.slides || []).map((s) => ({ src: teks(s.src), alt: teks(s.alt) }));
}

export type Program = { judul: string; deskripsi: string; icon: LucideIcon };
export function getProgramUnggulan(): Program[] {
  return bacaFolder("program").map(({ data }) => ({
    judul: teks(data.judul), deskripsi: teks(data.deskripsi), icon: ikonDariNama(teks(data.icon)),
  }));
}

export type Berita = { slug: string; judul: string; tanggal: string; tanggalISO: string; kategori: string; ringkasan: string; gambar: string; isi: string };
export function getBerita(): Berita[] {
  return bacaFolder("berita")
    .map(({ slug, data, isi }) => {
      const iso = teks(data.tanggal);
      return {
        slug, judul: teks(data.judul), tanggalISO: iso,
        tanggal: iso ? formatTanggalID(iso) : "",
        kategori: teks(data.kategori), ringkasan: teks(data.ringkasan),
        gambar: teks(data.gambar), isi,
      };
    })
    .sort((a, b) => (b.tanggalISO > a.tanggalISO ? 1 : -1));
}

export function getBeritaBySlug(slug: string): Berita | undefined {
  return getBerita().find((b) => b.slug === slug);
}

export type Pengumuman = { slug: string; judul: string; tanggal: string; tanggalISO: string; ringkasan: string; isi: string };
export function getPengumuman(): Pengumuman[] {
  return bacaFolder("pengumuman")
    .map(({ slug, data, isi }) => {
      const iso = teks(data.tanggal);
      return {
        slug, judul: teks(data.judul), tanggalISO: iso,
        tanggal: iso ? formatTanggalID(iso) : "",
        ringkasan: teks(data.ringkasan), isi,
      };
    })
    .sort((a, b) => (b.tanggalISO > a.tanggalISO ? 1 : -1));
}

export type Agenda = { judul: string; tanggal: string; bulan: string; tahun: string; tempat: string };
export function getAgenda(): Agenda[] {
  return bacaFolder("agenda").map(({ data }) => ({
    judul: teks(data.judul), tanggal: teks(data.tanggal), bulan: teks(data.bulan),
    tahun: teks(data.tahun), tempat: teks(data.tempat),
  }));
}

export type Guru = { nama: string; jabatan: string; foto: string };
export function getDaftarGuru(): Guru[] {
  return bacaFolder("guru").map(({ data }) => ({
    nama: teks(data.nama), jabatan: teks(data.jabatan), foto: teks(data.foto),
  }));
}

export type GaleriItem = { judul: string; jenis: "foto" | "video"; gambar: string; tautan: string };
export function getGaleri(): GaleriItem[] {
  return bacaFolder("galeri").map(({ data }) => ({
    judul: teks(data.judul),
    jenis: teks(data.jenis) === "video" ? "video" : "foto",
    gambar: teks(data.gambar), tautan: teks(data.tautan),
  }));
}

export type Unduhan = { nama: string; berkas: string; format: string };
export function getUnduhan(): Unduhan[] {
  return bacaFolder("unduhan").map(({ data }) => {
    const berkas = teks(data.berkas);
    const format = berkas.split(".").pop()?.toUpperCase() || "FILE";
    return { nama: teks(data.nama), berkas, format };
  });
}

// Navigasi pindah ke @/data/navigasi (modul aman-client).
export { NAV_LINKS, NAV_MENU } from "./navigasi";
export type { NavChild, NavItem } from "./navigasi";
