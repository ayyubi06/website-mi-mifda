import SectionHeading from "@/components/SectionHeading";
import { PENGUMUMAN } from "@/data/konten";

export const metadata = { title: "Pengumuman" };

export default function Pengumuman() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading judul="Pengumuman" sub="Informasi" />
      <div className="space-y-4">
        {PENGUMUMAN.map((p) => (
          <div
            key={p.judul}
            className="bg-white rounded-2xl border border-zamrud-100 p-6 hover:shadow-sm transition-shadow"
          >
            <p className="text-xs font-semibold text-emas-600">{p.tanggal}</p>
            <h3 className="mt-1 text-lg font-bold text-zamrud-800 leading-snug">
              {p.judul}
            </h3>
            <p className="mt-2 text-slate-600">{p.ringkasan}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-6">
        [placeholder] pengumuman contoh — akan diganti pengumuman asli
      </p>
    </div>
  );
}
