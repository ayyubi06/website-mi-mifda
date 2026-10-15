import Link from "next/link";

export default function BeritaCard({
  slug,
  judul,
  tanggal,
  ringkasan,
  kategori,
  gambar,
}: {
  slug: string;
  judul: string;
  tanggal: string;
  ringkasan: string;
  kategori?: string;
  gambar?: string;
}) {
  return (
    <Link
      href={`/berita/${slug}`}
      className="block bg-white rounded-2xl border border-zamrud-100 overflow-hidden hover:shadow-sm transition-shadow"
    >
      <div className="relative h-40 bg-zamrud-50 flex items-center justify-center border-b border-zamrud-100 overflow-hidden">
        {gambar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={gambar} alt={judul} className="h-full w-full object-cover" />
        ) : (
          <span className="text-xs text-zamrud-700/60 font-medium px-4 text-center">
            [placeholder] FOTO: ilustrasi berita
          </span>
        )}
        {kategori && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zamrud-600 text-white text-xs font-semibold">
            {kategori}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs text-emas-600 font-semibold">{tanggal}</p>
        <h3 className="mt-1 font-bold text-zamrud-800 leading-snug">{judul}</h3>
        <p className="mt-2 text-sm text-slate-500 line-clamp-2">{ringkasan}</p>
      </div>
    </Link>
  );
}
