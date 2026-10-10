"use client";

import { useEffect, useRef, useState } from "react";

// Animasi angka naik dari 0 ke target saat masuk layar.
// nilai: "350+" -> angka 350 + akhiran "+"
export default function CountUp({ nilai }: { nilai: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [tampil, setTampil] = useState(0);
  const mulai = useRef(false);

  const cocok = nilai.match(/^(\d+)(.*)$/);
  const target = cocok ? parseInt(cocok[1], 10) : 0;
  const akhiran = cocok ? cocok[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !mulai.current) {
          mulai.current = true;
          const awal = performance.now();
          const durasi = 1400;
          const jalan = (nu: number) => {
            const p = Math.min((nu - awal) / durasi, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setTampil(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(jalan);
          };
          requestAnimationFrame(jalan);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {tampil.toLocaleString("id-ID")}
      {akhiran}
    </span>
  );
}
