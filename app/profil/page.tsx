import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getSekolah, getProfil } from "@/data/konten";

export const metadata = { title: "Profil Sekolah" };

export default function Profil() {
  const SEKOLAH = getSekolah();
  const PROFIL = getProfil();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Profil Sekolah" sub="Profil" />

      <div className="grid gap-8 md:grid-cols-2 items-start">
        {PROFIL.fotoGedung ? (
          <img
            src={PROFIL.fotoGedung}
            alt={`Gedung ${SEKOLAH.nama}`}
            className="h-72 w-full rounded-2xl object-cover"
          />
        ) : (
          <PlaceholderImage label="FOTO: gedung madrasah" className="h-72" />
        )}
        <div>
          <h3 className="font-bold text-zamrud-800 text-lg">Sejarah Singkat</h3>
          <p className="mt-2 text-slate-600 leading-relaxed">
            {PROFIL.sejarah || "—"}
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="bg-zamrud-50/60 rounded-2xl border border-zamrud-100 p-6">
          <h3 className="font-bold text-zamrud-800 text-lg">Visi</h3>
          <p className="mt-2 text-slate-600 leading-relaxed">
            {PROFIL.visi || "—"}
          </p>
        </div>
        <div className="bg-zamrud-50/60 rounded-2xl border border-zamrud-100 p-6">
          <h3 className="font-bold text-zamrud-800 text-lg">Misi</h3>
          {PROFIL.misi.length > 0 ? (
            <ul className="mt-2 text-slate-600 leading-relaxed list-disc pl-5 space-y-1">
              {PROFIL.misi.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-slate-600 leading-relaxed">—</p>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-bold text-zamrud-800 text-lg mb-4">Identitas Madrasah</h3>
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ["Nama Madrasah", SEKOLAH.nama],
            ["Alamat", SEKOLAH.alamat || "-"],
            ["NPSN", PROFIL.npsn || "-"],
            ["Akreditasi", PROFIL.akreditasi || "-"],
            ["Telepon", SEKOLAH.telp || "-"],
            ["Email", SEKOLAH.email || "-"],
          ].map(([k, v]) => (
            <div key={k} className="bg-white rounded-xl border border-zamrud-100 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">{k}</dt>
              <dd className="mt-1 font-medium text-zamrud-800">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
