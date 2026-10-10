export default function SectionHeading({
  judul,
  sub,
  align = "center",
}: {
  judul: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const rata = align === "left" ? "text-left" : "text-center";
  const garis = align === "left" ? "" : "mx-auto";
  return (
    <div className={`${rata} mb-10`}>
      <p className="text-emas-600 font-semibold text-sm uppercase tracking-widest mb-2">
        {sub}
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-zamrud-800">{judul}</h2>
      <div className={`mt-3 ${garis} w-16 h-1 rounded bg-emas-500`} />
    </div>
  );
}
