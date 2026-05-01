import { Check } from "lucide-react";
import Button from "./Button";

type Props = {
  name: string;
  price: string;
  period: string;
  tag: string;
  description: string;
  processingPin: string;
  processingIncasso: string;
  support: string;
  cta: string;
  ctaVariant: "primary" | "outline";
  note: string;
  highlighted: boolean;
  features: string[];
};

export default function PricingCard({
  name,
  price,
  period,
  tag,
  description,
  processingPin,
  processingIncasso,
  support,
  cta,
  ctaVariant,
  note,
  highlighted,
  features,
}: Props) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 shadow-sm flex flex-col ${
        highlighted ? "border-4 border-primary" : "border border-gray-200"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
          {note}
        </span>
      )}
      <p className="text-xs tracking-wider text-primary font-bold">{tag}</p>
      <h3 className="font-black text-2xl text-dark mt-1">{name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-5xl font-black text-dark">{price}</span>
        {period && <span className="text-gray-500 text-lg">{period}</span>}
      </div>
      <p className="mt-3 text-gray-600 min-h-[60px]">{description}</p>
      <div className="mt-6 space-y-3 text-sm">
        <div>
          <p className="text-xs tracking-wider text-primary font-bold">Verwerkingstarief</p>
          <p className="text-dark font-medium">{processingPin}</p>
          <p className="text-dark font-medium">{processingIncasso}</p>
        </div>
        <div>
          <p className="text-xs tracking-wider text-primary font-bold">Support</p>
          <p className="text-gray-600">{support}</p>
        </div>
      </div>
      <div className="mt-6">
        <Button variant={ctaVariant} href="/demo" className="w-full">
          {cta}
        </Button>
        {!highlighted && note && (
          <p className="text-center text-primary font-semibold mt-3 text-sm">{note}</p>
        )}
      </div>
      <ul className="mt-8 space-y-3 border-t border-gray-100 pt-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
            <Check className="h-5 w-5 text-accent flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
