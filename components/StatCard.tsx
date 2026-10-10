import type { LucideIcon } from "lucide-react";
import CountUp from "@/components/CountUp";

export default function StatCard({
  nilai,
  label,
  icon: Icon,
}: {
  nilai: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zamrud-100 p-6 text-center hover:-translate-y-1 hover:shadow-sm transition-all duration-300">
      <div className="mx-auto w-11 h-11 rounded-full bg-zamrud-50 text-zamrud-600 flex items-center justify-center">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-zamrud-700">
        <CountUp nilai={nilai} />
      </p>
      <p className="mt-1 text-sm text-slate-500 font-medium">{label}</p>
    </div>
  );
}
