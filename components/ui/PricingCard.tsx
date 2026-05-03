import { Check } from "lucide-react";
import Button from "./Button";

type Props = {
  productLabel: string;
  status: string;
  name: string;
  price: string;
  period: string;
  disclaimer: string;
  yearlyOption: string;
  cta: string;
  ctaVariant: "primary" | "outline";
  highlighted: boolean;
  comingSoon: boolean;
  features: string[];
};

export default function PricingCard({
  productLabel,
  status,
  name,
  price,
  period,
  disclaimer,
  yearlyOption,
  cta,
  ctaVariant,
  highlighted,
  comingSoon,
  features,
}: Props) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 shadow-sm flex flex-col ${
        comingSoon
          ? "border-2 border-dashed border-gray-300"
          : highlighted
            ? "border-4 border-primary"
            : "border border-gray-200"
      }`}
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="text-sm font-bold text-primary">{productLabel}</span>
        <span
          className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${
            comingSoon ? "bg-gray-100 text-gray-500" : "bg-accent-light text-primary"
          }`}
        >
          {status}
        </span>
      </div>

      <h3 className={`font-black text-3xl ${comingSoon ? "text-gray-500" : "text-dark"}`}>
        {name}
      </h3>

      {comingSoon ? (
        <div className="mt-4">
          <span className="text-3xl font-black text-gray-400 uppercase tracking-wider">
            {period}
          </span>
        </div>
      ) : (
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-5xl font-black text-dark">{price}</span>
          <span className="text-gray-500 text-lg">{period}</span>
        </div>
      )}

      <div className="flex-grow">
        {disclaimer && (
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">{disclaimer}</p>
        )}
        {yearlyOption && (
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{yearlyOption}</p>
        )}
      </div>

      <div className="mt-6">
        <Button variant={ctaVariant} href="/demo" className="w-full">
          {cta}
        </Button>
      </div>

      <ul className="mt-8 space-y-3 border-t border-gray-100 pt-6">
        {features.map((f) => (
          <li
            key={f}
            className={`flex items-start gap-2 text-sm ${
              comingSoon ? "text-gray-500" : "text-gray-700"
            }`}
          >
            <Check
              className={`h-5 w-5 flex-shrink-0 ${comingSoon ? "text-gray-400" : "text-accent"}`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
