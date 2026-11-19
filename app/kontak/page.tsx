import SectionHeading from "@/components/SectionHeading";
import SaranForm from "@/components/SaranForm";
import { getSekolah } from "@/data/konten";

export const metadata = { title: "Kontak Kami" };

// Normalisasi nomor WhatsApp ke format wa.me: buang spasi/tanda hubung,
// "0..." -> "62...", "62..." dibiarkan apa adanya.
function normalisasiWa(nomor: string): string {
  const bersih = nomor.replace(/[\s-]/g, "");
  if (bersih.startsWith("0")) return "62" + bersih.slice(1);
  return bersih;
}

export default function Kontak() {
  const SEKOLAH = getSekolah();
  const wa = normalisasiWa(SEKOLAH.wa);
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Kontak Kami" sub="Hubungi" />
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="space-y-4">
          {[
            ["Alamat", SEKOLAH.alamat],
            ["Telepon", SEKOLAH.telp],
            ["Email", SEKOLAH.email],
            ["WhatsApp", SEKOLAH.wa],
            ["Jam Layanan", SEKOLAH.jamLayanan],
          ].map(([k, v]) => (
            <div key={k} className="bg-white rounded-2xl border border-zamrud-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{k}</p>
              <p className="mt-1 font-medium text-zamrud-800">{v}</p>
            </div>
          ))}
        </div>
        <iframe
          title="Peta lokasi MI Miftahul Huda Bulaksari"
          src="https://maps.google.com/maps?q=-7.5577765,108.8904986&z=16&output=embed"
          className="h-96 w-full rounded-2xl border border-zamrud-100"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="mt-14">
        <SectionHeading judul="Kotak Saran" sub="Saran & Masukan" />
        <p className="-mt-6 mb-8 text-center text-slate-600">
          Kotak ini untuk saran, kritik, pertanyaan, dan laporan dari wali murid
          dan masyarakat. Pesan Anda akan dikirim lewat WhatsApp ke nomor resmi
          sekolah.
        </p>
        <div className="mx-auto max-w-4xl">
          <SaranForm wa={wa} />
        </div>
      </div>
    </div>
  );
}
