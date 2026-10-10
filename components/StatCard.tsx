export default function StatCard({
  nilai,
  label,
}: {
  nilai: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zamrud-100 p-6 text-center">
      <p className="text-3xl sm:text-4xl font-extrabold text-zamrud-700">{nilai}</p>
      <p className="mt-1 text-sm text-slate-500 font-medium">{label}</p>
    </div>
  );
}
