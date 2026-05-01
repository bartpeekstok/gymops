import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

type Props = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const styles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark rounded-lg px-6 py-3 font-bold transition-colors inline-flex items-center justify-center gap-2",
  outline:
    "border-2 border-primary text-primary hover:bg-accent-light rounded-lg px-6 py-3 font-bold transition-colors inline-flex items-center justify-center gap-2",
  ghost:
    "text-primary underline hover:text-primary-dark font-medium transition-colors inline-flex items-center gap-1",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type = "button",
}: Props) {
  const cls = `${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
