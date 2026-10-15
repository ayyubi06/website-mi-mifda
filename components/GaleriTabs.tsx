"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { GaleriItem } from "@/data/konten";

function youtubeEmbed(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

export default function GaleriTabs({ fotos, videos }: { fotos: GaleriItem[]; videos: GaleriItem[] }) {
  const [tab, setTab] = useState<"foto" | "video">("foto");

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeading judul="Galeri Kegiatan" sub="Galeri" />

      <div className="flex justify-center gap-2 mb-8">
        {(["foto", "video"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              tab === t
                ? "bg-zamrud-600 text-white"
                : "border-2 border-zamrud-600 text-zamrud-700 hover:bg-zamrud-50"
            }`}
          >
            {t === "foto" ? "Foto" : "Video"}
          </button>
        ))}
      </div>

      {tab === "foto" ? (
        fotos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fotos.map((f, i) => (
              <figure key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.gambar} alt={f.judul} className="h-44 w-full object-cover rounded-2xl" />
                {f.judul && <figcaption className="mt-1 text-xs text-slate-500 text-center">{f.judul}</figcaption>}
              </figure>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <PlaceholderImage key={i} label={`FOTO: kegiatan ${i}`} className="h-44" />
            ))}
          </div>
        )
      ) : videos.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {videos.map((v, i) => {
            const embed = youtubeEmbed(v.tautan);
            return embed ? (
              <div key={i} className="rounded-2xl overflow-hidden border border-zamrud-100">
                <iframe
                  src={embed}
                  title={v.judul}
                  className="w-full h-64"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <a
                key={i}
                href={v.tautan}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-zamrud-100 p-6 text-zamrud-700 font-semibold hover:bg-zamrud-50 transition-colors text-center"
              >
                {v.judul || "Tonton video"}
              </a>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="relative rounded-2xl border-2 border-dashed border-zamrud-200 bg-zamrud-50/60 h-56 flex items-center justify-center"
            >
              <span className="text-xs text-zamrud-700/60 font-medium px-4 text-center">
                [placeholder] VIDEO: kegiatan {i}
              </span>
              <span className="absolute w-14 h-14 rounded-full bg-zamrud-600/90 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
