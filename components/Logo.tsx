import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
  showSubtitle?: boolean;
};

export default function Logo({ variant = "dark", showSubtitle = true }: Props) {
  const textColor = variant === "dark" ? "text-dark" : "text-white";
  const subColor = variant === "dark" ? "text-gray-500" : "text-off-white/80";
  return (
    <Link href="/" className="inline-flex flex-col items-start leading-none group">
      <span className={`flex items-center font-black text-2xl tracking-tight ${textColor}`}>
        <span>gym</span>
        <GearIcon className="mx-0.5 h-7 w-7 -translate-y-[1px]" />
        <span>ps</span>
      </span>
      {showSubtitle && (
        <span
          className={`text-[10px] uppercase tracking-[0.2em] font-medium mt-0.5 ${subColor}`}
        >
          automation platform
        </span>
      )}
    </Link>
  );
}

export function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gear-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3E788E" />
          <stop offset="100%" stopColor="#66B3A3" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gear-grad)"
        d="M16 2.4l2.1 2.4 3.1-.9 1 3.1 3.1 1-.9 3.1 2.4 2.1-2.4 2.1.9 3.1-3.1 1-1 3.1-3.1-.9L16 23l-2.1-2.4-3.1.9-1-3.1-3.1-1 .9-3.1L5.2 12l2.4-2.1-.9-3.1 3.1-1 1-3.1 3.1.9L16 2.4z"
      />
      <circle cx="16" cy="12.7" r="4.2" fill="#fff" />
      <circle cx="16" cy="12.7" r="1.5" fill="url(#gear-grad)" />
      <g stroke="#fff" strokeWidth="0.6" fill="none" opacity="0.8">
        <path d="M11 12.7H7" />
        <path d="M21 12.7h4" />
        <path d="M16 7.7V5" />
        <circle cx="7" cy="12.7" r="0.8" fill="#fff" />
        <circle cx="25" cy="12.7" r="0.8" fill="#fff" />
        <circle cx="16" cy="5" r="0.8" fill="#fff" />
      </g>
    </svg>
  );
}
