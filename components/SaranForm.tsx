"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

const KATEGORI = ["Saran", "Kritik", "Pertanyaan", "Laporan"] as const;

const inputKelas =
  "w-full rounded-xl border border-zamrud-100 bg-white px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-zamrud-600";

export default function SaranForm({ wa }: { wa: string }) {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState<string>("Saran");
  const [pesan, setPesan] = useState("");
  const [galat, setGalat] = useState("");

  function kirim(e: FormEvent) {
    e.preventDefault();
    if (pesan.trim() === "") {
      setGalat("Isi pesan wajib diisi.");
      return;
    }
    setGalat("");
    const teks = [
      "Kotak Saran MI Miftahul Huda Bulaksari",
      `Nama: ${nama.trim() || "Anonim"}`,
      `Kategori: ${kategori}`,
      `Pesan: ${pesan.trim()}`,
    ].join("\n");
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(teks)}`, "_blank");
  }

  if (!wa) {
    return (
      <div className="rounded-2xl border border-zamrud-100 bg-white p-6 text-center text-slate-600">
        Nomor WhatsApp sekolah belum diatur. Silakan hubungi madrasah
        langsung.
      </div>
    );
  }

  return (
    <form
      onSubmit={kirim}
      className="space-y-5 rounded-2xl border border-zamrud-100 bg-white p-6"
    >
      <div>
        <label
          htmlFor="saran-nama"
          className="mb-1 block text-sm font-semibold text-zamrud-800"
        >
          Nama (opsional)
        </label>
        <input
          id="saran-nama"
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Boleh dikosongkan"
          className={inputKelas}
        />
      </div>

      <div>
        <label
          htmlFor="saran-kategori"
          className="mb-1 block text-sm font-semibold text-zamrud-800"
        >
          Kategori
        </label>
        <select
          id="saran-kategori"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className={inputKelas}
        >
          {KATEGORI.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="saran-pesan"
          className="mb-1 block text-sm font-semibold text-zamrud-800"
        >
          Isi Pesan
        </label>
        <textarea
          id="saran-pesan"
          rows={5}
          value={pesan}
          onChange={(e) => {
            setPesan(e.target.value);
            if (galat) setGalat("");
          }}
          aria-invalid={galat !== ""}
          aria-describedby={galat ? "saran-pesan-galat" : undefined}
          className={inputKelas}
        />
        {galat && (
          <p id="saran-pesan-galat" className="mt-1 text-sm text-red-600">
            {galat}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zamrud-700 px-8 py-3 font-bold text-white transition-colors hover:bg-zamrud-600 sm:w-auto"
      >
        <MessageCircle size={18} />
        Kirim via WhatsApp
      </button>

      <p className="text-sm text-slate-500">
        Pesan akan dibuka di WhatsApp — tidak disimpan di website.
      </p>
    </form>
  );
}
