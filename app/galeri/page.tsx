import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = { title: "Galeri" };

export default function Galeri() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Galeri Kegiatan" sub="Galeri" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <PlaceholderImage key={i} label={`FOTO: kegiatan ${i}`} className="h-44" />
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-6">
        [placeholder] foto asli menyusul — hubungi admin untuk mengunggah galeri
      </p>
    </div>
  );
}
