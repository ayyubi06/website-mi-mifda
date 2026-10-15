import SectionHeading from "@/components/SectionHeading";
import { getUnduhan } from "@/data/konten";

export const metadata = { title: "Download" };

export default function Download() {
  const daftar = getUnduhan();
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading judul="Download" sub="Berkas" />
      <div className="space-y-3">
        {daftar.map((u) => (
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
            {u.berkas ? (
              <a
                href={u.berkas}
                download
                className="shrink-0 px-4 py-2 rounded-xl bg-zamrud-600 text-white text-sm font-semibold hover:bg-zamrud-700 transition-colors"
              >
                Unduh
              </a>
            ) : (
              <span className="shrink-0 text-sm text-slate-400">segera hadir</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
