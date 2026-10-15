import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getBerita, getBeritaBySlug } from "@/data/konten";
import { markdownKeHtml } from "@/lib/markdown";

export function generateStaticParams() {
  return getBerita().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const berita = getBeritaBySlug(slug);
  return { title: berita ? berita.judul : "Berita" };
}

export default async function BeritaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const berita = getBeritaBySlug(slug);
  if (!berita) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      {berita.kategori && (
        <span className="inline-block px-3 py-1 rounded-full bg-zamrud-600 text-white text-xs font-semibold">
          {berita.kategori}
        </span>
      )}
      <p className="text-sm font-semibold text-emas-600 mt-3">{berita.tanggal}</p>
      <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-zamrud-800 leading-tight">
        {berita.judul}
      </h1>
      {berita.gambar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={berita.gambar} alt={berita.judul} className="rounded-2xl mt-6 w-full" />
      ) : (
        <PlaceholderImage label="FOTO: ilustrasi berita" className="h-72 mt-6" />
      )}
      <div
        className="mt-6 text-slate-600 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: markdownKeHtml(berita.isi || berita.ringkasan) }}
      />
      <Link
        href="/berita"
        className="mt-8 inline-block px-6 py-2.5 rounded-xl border-2 border-zamrud-600 text-zamrud-700 font-semibold hover:bg-zamrud-600 hover:text-white transition-colors"
      >
        ← Kembali ke Berita
      </Link>
    </article>
  );
}
