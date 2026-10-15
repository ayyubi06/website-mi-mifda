import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";
import { getSekolah } from "@/data/konten";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const SEKOLAH = getSekolah();

export const metadata: Metadata = {
  title: {
    default: SEKOLAH.nama,
    template: `%s | ${SEKOLAH.nama}`,
  },
  description: `${SEKOLAH.nama} — ${SEKOLAH.tagline}.`,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Navbar namaSekolah={SEKOLAH.nama} />
        <main className="flex-1">{children}</main>
        <Footer />
        <WAFloat />
      </body>
    </html>
  );
}
