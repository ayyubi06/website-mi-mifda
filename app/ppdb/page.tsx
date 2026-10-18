import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { getSekolah, getPpdb } from "@/data/konten";

export const metadata = { title: "PPDB" };

export default function Ppdb() {
  const SEKOLAH = getSekolah();
  const PPDB = getPpdb();
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading judul="Penerimaan Peserta Didik Baru" sub="PPDB" />

      <div className="rounded-3xl bg-gradient-to-r from-emas-500 to-emas-400 p-8 text-center">
        <h2 className="text-2xl font-extrabold text-zamrud-900">
          PPDB Tahun Ajaran {PPDB.tahunAjaran}
        </h2>
        <p className="mt-2 text-zamrud-900/80 font-medium">
          {PPDB.infoGelombang}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="bg-white rounded-2xl border border-zamrud-100 p-6">
          <h3 className="font-bold text-zamrud-800">Syarat Pendaftaran</h3>
          <ul className="mt-2 text-slate-600 text-sm list-disc pl-5 space-y-1">
            {PPDB.syarat.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-2xl border border-zamrud-100 p-6">
          <h3 className="font-bold text-zamrud-800">Alur Pendaftaran</h3>
          <ol className="mt-2 text-slate-600 text-sm list-decimal pl-5 space-y-1">
            {PPDB.alur.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-slate-600">
          Ada pertanyaan? Hubungi panitia PPDB melalui WhatsApp.
        </p>
        <a
          href={`https://wa.me/${SEKOLAH.wa}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin bertanya tentang PPDB " + SEKOLAH.nama)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-8 py-3 rounded-xl bg-zamrud-700 text-white font-bold hover:bg-zamrud-600 transition-colors"
        >
          Hubungi via WhatsApp
        </a>
      </div>
    </div>
  );
}
