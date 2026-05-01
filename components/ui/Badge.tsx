import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-block bg-accent-light text-primary rounded-full px-4 py-1 text-sm font-semibold ${className}`}
    >
      {children}
    </span>
  );
}
