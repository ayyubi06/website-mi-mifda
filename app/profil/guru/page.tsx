import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getDaftarGuru } from "@/data/konten";

export const metadata = { title: "Daftar Guru" };

export default function Guru() {
  const daftar = getDaftarGuru();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Daftar Guru & Tendik" sub="Profil" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {daftar.map((g) => (
          <div
            key={g.jabatan + g.nama}
            className="bg-white rounded-2xl border border-zamrud-100 p-4 text-center hover:shadow-sm transition-shadow"
          >
            {g.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={g.foto} alt={g.nama} className="h-32 w-full object-cover rounded-xl" />
            ) : (
              <PlaceholderImage label="FOTO" className="h-32 !rounded-xl" />
            )}
            <p className="mt-3 font-bold text-zamrud-800 text-sm">{g.nama}</p>
            <p className="text-xs text-slate-500">{g.jabatan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
