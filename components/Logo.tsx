import Image from "next/image";
import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: Props) {
  const src = variant === "light" ? "/logo-wit.png" : "/logo.png";
  return (
    <Link
      href="/"
      aria-label="GymOps – automation platform"
      className={`inline-block ${className}`}
    >
      <Image
        src={src}
        alt="GymOps"
        width={400}
        height={125}
        priority
        className="h-12 w-auto"
      />
    </Link>
  );
}

export function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gymops-gear-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3E788E" />
          <stop offset="100%" stopColor="#66B3A3" />
        </linearGradient>
      </defs>

      <g fill="url(#gymops-gear-grad)">
        <rect x="29" y="0.5" width="6" height="9" rx="1" />
        <rect x="29" y="0.5" width="6" height="9" rx="1" transform="rotate(45 32 32)" />
        <rect x="29" y="0.5" width="6" height="9" rx="1" transform="rotate(90 32 32)" />
        <rect x="29" y="0.5" width="6" height="9" rx="1" transform="rotate(135 32 32)" />
        <rect x="29" y="0.5" width="6" height="9" rx="1" transform="rotate(180 32 32)" />
        <rect x="29" y="0.5" width="6" height="9" rx="1" transform="rotate(225 32 32)" />
        <rect x="29" y="0.5" width="6" height="9" rx="1" transform="rotate(270 32 32)" />
        <rect x="29" y="0.5" width="6" height="9" rx="1" transform="rotate(315 32 32)" />
      </g>

      <circle cx="32" cy="32" r="22.5" fill="url(#gymops-gear-grad)" />
      <circle cx="32" cy="32" r="10.5" fill="#ffffff" />

      <g stroke="#ffffff" strokeWidth="0.9" fill="#ffffff" strokeLinecap="round" opacity="0.92">
        <line x1="32" y1="11" x2="32" y2="20.5" />
        <circle cx="32" cy="11" r="1.3" />
        <line x1="43.5" y1="32" x2="52" y2="32" />
        <circle cx="52" cy="32" r="1.3" />
        <line x1="20.5" y1="32" x2="12" y2="32" />
        <circle cx="12" cy="32" r="1.3" />
        <line x1="40.2" y1="23.8" x2="46.5" y2="17.5" />
        <circle cx="46.5" cy="17.5" r="1.3" />
        <line x1="23.8" y1="40.2" x2="17.5" y2="46.5" />
        <circle cx="17.5" cy="46.5" r="1.3" />
      </g>

      <g
        stroke="url(#gymops-gear-grad)"
        strokeWidth="1.3"
        fill="url(#gymops-gear-grad)"
        strokeLinecap="round"
      >
        <line x1="49" y1="15" x2="58" y2="6" />
        <circle cx="58" cy="6" r="1.6" />
        <line x1="56" y1="49" x2="62" y2="55" />
        <circle cx="62" cy="55" r="1.6" />
      </g>
    </svg>
  );
}
