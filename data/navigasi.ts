// Struktur navigasi — modul murni (aman diimpor Client Components).
// Jangan taruh akses fs di sini; konten CMS ada di @/data/konten.

import type { LucideIcon } from "lucide-react";
import {
  School,
  User,
  Users,
  Mail,
  Sparkles,
  CalendarDays,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/program", label: "Program" },
  { href: "/galeri", label: "Galeri" },
  { href: "/berita", label: "Berita" },
  { href: "/ppdb", label: "PPDB" },
  { href: "/kontak", label: "Kontak" },
];

export const NAV_LAINNYA = [
  { href: "/ppdb", label: "Pendaftaran" },
  { href: "/download", label: "Download" },
  { href: "/berita", label: "Berita" },
  { href: "/galeri", label: "Galeri" },
];

export const IKON_MENU: Record<string, LucideIcon> = {
  "Sekolah": School,
  "Pengguna": User,
  "Grup": Users,
  "Email": Mail,
  "Bintang": Sparkles,
  "Kalender": CalendarDays,
};

export type NavChild = { href: string; label: string; icon?: LucideIcon };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

// Bentuk data mentah dari CMS (content/navigasi.json) — ikon masih string,
// di-resolve ke LucideIcon via IKON_MENU saat dirender.
export type NavChildCMS = { href: string; label: string; icon?: string };
export type NavItemCMS = { label: string; href?: string; children?: NavChildCMS[] };
export type FooterLink = { href: string; label: string };

export const NAV_MENU: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    children: [
      { href: "/profil", label: "Profil Sekolah", icon: School },
      { href: "/profil/kepala-sekolah", label: "Kepala Madrasah", icon: User },
      { href: "/profil/guru", label: "Daftar Guru", icon: Users },
      { href: "/kontak", label: "Kontak Kami", icon: Mail },
    ],
  },
  {
    label: "Akademik",
    children: [
      { href: "/program", label: "Program Unggulan", icon: Sparkles },
      { href: "/akademik", label: "Kalender Akademik", icon: CalendarDays },
    ],
  },
  { label: "Download", href: "/download" },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
  { label: "PPDB", href: "/ppdb" },
];
