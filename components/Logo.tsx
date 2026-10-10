export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Logo MI Miftahul Huda"
      className="rounded-full"
    >
      <circle cx="24" cy="24" r="23" fill="#0e6b4d" />
      <circle cx="24" cy="24" r="19" fill="none" stroke="#c9a227" strokeWidth="2" />
      {/* Kubah + menara sederhana */}
      <path
        d="M24 10c-5 4-8 8-8 13h16c0-5-3-9-8-13z"
        fill="#c9a227"
      />
      <rect x="22.5" y="6" width="3" height="6" rx="1.5" fill="#c9a227" />
      <rect x="15" y="23" width="18" height="12" rx="2" fill="#ffffff" opacity="0.92" />
      <rect x="21" y="27" width="6" height="8" rx="3" fill="#0e6b4d" />
      <text
        x="24"
        y="43"
        textAnchor="middle"
        fontSize="7"
        fontWeight="bold"
        fill="#ffffff"
        fontFamily="sans-serif"
      >
        MI
      </text>
    </svg>
  );
}
