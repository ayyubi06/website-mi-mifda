export default function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-zamrud-50 border-2 border-dashed border-zamrud-200 rounded-2xl flex items-center justify-center ${className}`}
    >
      <span className="text-xs text-zamrud-700/60 font-medium px-4 text-center">
        [placeholder] {label}
      </span>
    </div>
  );
}
