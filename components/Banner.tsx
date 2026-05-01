import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-navy text-white">
      <div className="container-page py-2.5 flex items-center justify-center gap-2 text-sm flex-wrap text-center">
        <span>
          <span className="font-bold text-accent">Nieuw:</span> GymOps AI beantwoordt 60% van je
          ledenvragen automatisch
        </span>
        <Link
          href="#"
          className="text-accent hover:text-white transition-colors font-semibold"
        >
          Ontdek hoe →
        </Link>
      </div>
    </div>
  );
}
