import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { DAFTAR_GURU } from "@/data/konten";

export const metadata = { title: "Daftar Guru" };

export default function Guru() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Daftar Guru & Tendik" sub="Profil" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DAFTAR_GURU.map((g) => (
          <div
            key={g.jabatan}
            className="bg-white rounded-2xl border border-zamrud-100 p-4 text-center hover:shadow-md transition-shadow"
          >
            <PlaceholderImage label="FOTO" className="h-32 !rounded-xl" />
            <p className="mt-3 font-bold text-zamrud-800 text-sm">{g.nama}</p>
            <p className="text-xs text-slate-500">{g.jabatan}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-6">
        [placeholder] daftar guru contoh — akan diganti data asli
      </p>
    </div>
  );
}
