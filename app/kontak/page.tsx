import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getSekolah } from "@/data/konten";

export const metadata = { title: "Kontak Kami" };

export default function Kontak() {
  const SEKOLAH = getSekolah();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Kontak Kami" sub="Hubungi" />
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="space-y-4">
          {[
            ["Alamat", `${SEKOLAH.alamat} [placeholder] alamat lengkap`],
            ["Telepon", `${SEKOLAH.telp} [placeholder]`],
            ["Email", `${SEKOLAH.email} [placeholder]`],
            ["WhatsApp", `${SEKOLAH.wa} [placeholder] nomor resmi`],
            ["Jam Layanan", `${SEKOLAH.jamLayanan} [placeholder]`],
          ].map(([k, v]) => (
            <div key={k} className="bg-white rounded-2xl border border-zamrud-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{k}</p>
              <p className="mt-1 font-medium text-zamrud-800">{v}</p>
            </div>
          ))}
        </div>
        <PlaceholderImage label="PETA: lokasi madrasah [placeholder]" className="h-96" />
      </div>
    </div>
  );
}
