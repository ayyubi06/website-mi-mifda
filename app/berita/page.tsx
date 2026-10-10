import SectionHeading from "@/components/SectionHeading";
import BeritaCard from "@/components/BeritaCard";
import { BERITA_TERBARU } from "@/data/konten";

export const metadata = { title: "Berita" };

export default function Berita() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Berita Sekolah" sub="Kabar Madrasah" />
      <div className="grid gap-4 md:grid-cols-3">
        {BERITA_TERBARU.map((b) => (
          <BeritaCard key={b.slug} {...b} />
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-6">
        [placeholder] berita contoh — akan diganti berita asli
      </p>
    </div>
  );
}
