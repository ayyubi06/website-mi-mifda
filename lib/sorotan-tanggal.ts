// Logika tanggal untuk sorotan "baru" — fungsi murni (bisa diuji tanpa peramban).
// Semua perbandingan memakai tanggal lokal (tengah malam) agar "hari ini"
// berarti hari ini di zona waktu pengunjung, bukan UTC.

export const BULAN_ID: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, Mei: 4, Jun: 5,
  Jul: 6, Agu: 7, Sep: 8, Okt: 9, Nov: 10, Des: 11,
};

// "2026-11-19" -> Date tengah malam lokal. "" bila format tak dikenal.
export function parseISO(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return isNaN(d.getTime()) ? null : d;
}

// Agenda menyimpan tanggal/bulan/tahun terpisah ("12", "Okt", "2026") -> ISO.
export function isoDariAgenda(tanggal: string, bulan: string, tahun: string): string {
  const b = BULAN_ID[bulan.trim()];
  const t = Number(tanggal);
  const y = Number(tahun);
  if (b === undefined || !Number.isInteger(t) || t < 1 || t > 31 || !Number.isInteger(y)) return "";
  return `${tahun}-${String(b + 1).padStart(2, "0")}-${String(t).padStart(2, "0")}`;
}

export function hariIniLocal(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function selisihHari(dariISO: string, hariIni: Date): number | null {
  const d = parseISO(dariISO);
  if (!d) return null;
  return Math.round((hariIni.getTime() - d.getTime()) / 86400000);
}

// Pengumuman: kuning bila diterbitkan dalam 7 hari terakhir (hari ini = hari ke-0).
// Tanggal di masa depan atau tak dikenal -> putih (normal).
export function apakahBaruPengumuman(tanggalISO: string, hariIni: Date = hariIniLocal()): boolean {
  const s = selisihHari(tanggalISO, hariIni);
  return s !== null && s >= 0 && s <= 7;
}

// Agenda: kuning bila tanggal acara belum lewat (acara hari ini masih kuning).
// Tanggal tak dikenal -> putih (normal).
export function apakahAgendaAktif(tanggalISO: string, hariIni: Date = hariIniLocal()): boolean {
  const d = parseISO(tanggalISO);
  return d !== null && d.getTime() >= hariIni.getTime();
}
