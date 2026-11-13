import SectionHeading from "@/components/SectionHeading";
import SaranForm from "@/components/SaranForm";
import { getSekolah } from "@/data/konten";

export const metadata = { title: "Kotak Saran" };

// Normalisasi nomor WhatsApp ke format wa.me: buang spasi/tanda hubung,
// "0..." -> "62...", "62..." dibiarkan apa adanya.
function normalisasiWa(nomor: string): string {
  const bersih = nomor.replace(/[\s-]/g, "");
  if (bersih.startsWith("0")) return "62" + bersih.slice(1);
  return bersih;
}

export default function Saran() {
  const SEKOLAH = getSekolah();
  const wa = normalisasiWa(SEKOLAH.wa);
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading judul="Kotak Saran" sub="Saran & Masukan" />
      <p className="-mt-6 mb-8 text-center text-slate-600">
        Kotak ini untuk saran, kritik, pertanyaan, dan laporan dari wali murid
        dan masyarakat. Pesan Anda akan dikirim lewat WhatsApp ke nomor resmi
        sekolah.
      </p>
      <SaranForm wa={wa} />
    </div>
  );
}
