import SectionHeading from "@/components/SectionHeading";
import { AGENDA } from "@/data/konten";

export const metadata = { title: "Kalender Akademik" };

export default function Akademik() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading judul="Kalender Akademik" sub="Akademik" />
      <p className="text-center text-slate-600 -mt-6 mb-10">
        Tahun Ajaran 2026/2027 <span className="text-slate-400">[placeholder]</span>
      </p>
      <div className="space-y-4">
        {AGENDA.map((a) => (
          <div
            key={a.judul}
            className="flex gap-4 bg-white rounded-2xl border border-zamrud-100 p-5 hover:shadow-md transition-shadow"
          >
            <div className="shrink-0 w-16 text-center rounded-xl bg-zamrud-600 text-white py-2 h-fit">
              <p className="text-2xl font-extrabold leading-none">{a.tanggal}</p>
              <p className="text-xs mt-1">
                {a.bulan} {a.tahun}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-zamrud-800">{a.judul}</h3>
              <p className="mt-1 text-sm text-slate-500">{a.tempat}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-6">
        [placeholder] kalender contoh — akan diganti data asli
      </p>
    </div>
  );
}
