import SectionHeading from "@/components/SectionHeading";
import { getProgramUnggulan } from "@/data/konten";

export const metadata = { title: "Program Unggulan" };

export default function Program() {
  const daftar = getProgramUnggulan();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Program Unggulan" sub="Akademik" />
      <div className="grid gap-4 sm:grid-cols-2">
        {daftar.map((p) => (
          <div
            key={p.judul}
            className="group bg-white rounded-2xl border border-zamrud-100 p-6 hover:shadow-sm hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-zamrud-600 text-white flex items-center justify-center group-hover:bg-emas-500 group-hover:text-zamrud-900 group-hover:-translate-y-1 transition-all duration-300">
              <p.icon size={24} strokeWidth={1.8} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-zamrud-800">{p.judul}</h3>
            <p className="mt-2 text-slate-600 leading-relaxed">{p.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
