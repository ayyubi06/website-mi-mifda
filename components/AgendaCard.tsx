import { MapPin } from "lucide-react";

type Props = {
  judul: string;
  tanggal: string;
  bulan: string;
  tahun: string;
  tempat: string;
};

export default function AgendaCard({ judul, tanggal, bulan, tahun, tempat }: Props) {
  return (
    <div className="flex gap-4 bg-white rounded-2xl border border-zamrud-100 p-4 hover:shadow-sm transition-shadow">
      <div className="shrink-0 w-16 text-center rounded-xl bg-zamrud-600 text-white py-2">
        <p className="text-2xl font-extrabold leading-none">{tanggal}</p>
        <p className="text-xs mt-1">
          {bulan} {tahun}
        </p>
      </div>
      <div className="min-w-0">
        <h3 className="font-bold text-zamrud-800 leading-snug">{judul}</h3>
        <p className="mt-1 text-sm text-slate-500 flex items-center gap-1.5">
          <MapPin size={14} strokeWidth={1.8} className="shrink-0 text-zamrud-500" />
          {tempat}
        </p>
      </div>
    </div>
  );
}
