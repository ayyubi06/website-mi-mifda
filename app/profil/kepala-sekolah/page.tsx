import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getKepalaMadrasah, getSekolah } from "@/data/konten";

export const metadata = { title: "Kepala Madrasah" };

export default function KepalaSekolah() {
  const kepala = getKepalaMadrasah();
  const sekolah = getSekolah();
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading judul="Kepala Madrasah" sub="Profil" />
      <div className="grid gap-8 md:grid-cols-3 items-start">
        {kepala.foto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={kepala.foto} alt={kepala.nama} className="h-80 w-full object-cover rounded-2xl" />
        ) : (
          <PlaceholderImage label="FOTO: kepala madrasah" className="h-80" />
        )}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-zamrud-800">{kepala.nama}</h3>
          <p className="text-sm text-slate-500">Kepala {sekolah.nama}</p>
          <p className="mt-4 text-slate-600 leading-relaxed whitespace-pre-line">
            {kepala.sambutan}
          </p>
        </div>
      </div>
    </div>
  );
}
