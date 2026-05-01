import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-navy text-white">
      <div className="container-page py-2.5 flex items-center justify-center gap-4 text-sm flex-wrap">
        <span>Wil je langskomen? We zien je graag op ons volgende evenement</span>
        <Link
          href="#"
          className="border border-accent text-white hover:bg-accent/20 rounded-full px-3 py-1 text-xs font-semibold transition-colors"
        >
          Bekijk evenementen →
        </Link>
      </div>
    </div>
  );
}
