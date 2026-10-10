import SectionHeading from "@/components/SectionHeading";
import { UNDUHAN } from "@/data/konten";

export const metadata = { title: "Download" };

export default function Download() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading judul="Download" sub="Berkas" />
      <div className="space-y-3">
        {UNDUHAN.map((u) => (
          <div
            key={u.nama}
            className="flex items-center justify-between gap-4 bg-white rounded-2xl border border-zamrud-100 p-5"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-zamrud-50 text-zamrud-700 flex items-center justify-center font-bold text-xs">
                {u.format}
              </div>
              <p className="font-medium text-zamrud-800 truncate">{u.nama}</p>
            </div>
            <span className="shrink-0 text-sm text-slate-400">[placeholder] tautan unduhan</span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-6">
        [placeholder] daftar berkas contoh — tautan aktif setelah berkas asli tersedia
      </p>
    </div>
  );
}
