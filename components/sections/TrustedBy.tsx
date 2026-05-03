import Image from "next/image";
import { trustedLogos } from "@/lib/data";

export default function TrustedBy() {
  const doubled = [...trustedLogos, ...trustedLogos];
  return (
    <section className="bg-gray-50 py-14 overflow-hidden">
      <div className="container-page">
        <h2 className="text-center font-bold text-lg text-gray-700 mb-10">Onze klanten</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex logo-scroll w-max items-center gap-20">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center h-20 w-40 flex-shrink-0"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={80}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
