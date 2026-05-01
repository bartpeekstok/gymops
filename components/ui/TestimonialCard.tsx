type Props = {
  quote: string;
  name: string;
  company?: string;
  className?: string;
};

export default function TestimonialCard({ quote, name, company, className = "" }: Props) {
  return (
    <div className={`bg-white rounded-xl p-5 shadow-sm ${className}`}>
      <p className="text-sm text-dark italic">&ldquo;{quote}&rdquo;</p>
      <p className="mt-2 text-xs text-gray-500 font-semibold">
        — {name}
        {company ? `, ${company}` : ""}
      </p>
    </div>
  );
}
