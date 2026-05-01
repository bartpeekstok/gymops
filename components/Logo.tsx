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
    <Image
      src="/gear.png"
      alt=""
      width={114}
      height={114}
      className={className}
      aria-hidden="true"
    />
  );
}
