import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import { BERITA_TERBARU, SEKOLAH } from "@/data/konten";

export function generateStaticParams() {
  return BERITA_TERBARU.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const berita = BERITA_TERBARU.find((b) => b.slug === slug);
  return { title: berita ? berita.judul : "Berita" };
}

export default async function BeritaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const berita = BERITA_TERBARU.find((b) => b.slug === slug);
  if (!berita) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-sm font-semibold text-emas-600">{berita.tanggal}</p>
      <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zamrud-800 leading-tight">
        {berita.judul}
      </h1>
      <PlaceholderImage label="FOTO: ilustrasi berita" className="h-72 mt-6" />
      <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
        <p>{berita.ringkasan}</p>
        <p>
          [placeholder] Isi lengkap berita ditulis di sini. Ganti dengan
          liputan asli kegiatan {SEKOLAH.nama}.
        </p>
      </div>
      <Link
        href="/berita"
        className="mt-8 inline-block px-6 py-2.5 rounded-xl border-2 border-zamrud-600 text-zamrud-700 font-semibold hover:bg-zamrud-600 hover:text-white transition-colors"
      >
        ← Kembali ke Berita
      </Link>
    </article>
  );
}
