import SectionHeading from "@/components/SectionHeading";
import { PROGRAM_UNGGULAN } from "@/data/konten";

export const metadata = { title: "Program Unggulan" };

export default function Program() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Program Unggulan" sub="Akademik" />
      <div className="grid gap-4 sm:grid-cols-2">
        {PROGRAM_UNGGULAN.map((p) => (
          <div
            key={p.judul}
            className="bg-white rounded-2xl border border-zamrud-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-zamrud-600 text-white flex items-center justify-center font-bold text-xl">
              {p.judul.charAt(0)}
            </div>
            <h3 className="mt-4 text-lg font-bold text-zamrud-800">{p.judul}</h3>
            <p className="mt-2 text-slate-600 leading-relaxed">{p.deskripsi}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-6">
        [placeholder] daftar program usulan — konfirmasi ke sekolah
      </p>
    </div>
  );
}
