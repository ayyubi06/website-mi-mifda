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

export type NavChild = { href: string; label: string; icon?: LucideIcon };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

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
