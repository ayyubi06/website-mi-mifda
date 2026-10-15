import SectionHeading from "@/components/SectionHeading";
import BeritaCard from "@/components/BeritaCard";
import { getBerita } from "@/data/konten";

export const metadata = { title: "Berita" };

export default function Berita() {
  const daftar = getBerita();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Berita Sekolah" sub="Kabar Madrasah" />
      <div className="grid gap-4 md:grid-cols-3">
        {daftar.map((b) => (
          <BeritaCard key={b.slug} {...b} />
        ))}
      </div>
    </div>
  );
}
