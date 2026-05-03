import Image from "next/image";
import { trustedLogos } from "@/lib/data";

export default function TrustedBy() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="container-page">
        <h2 className="text-center font-bold text-lg text-gray-700">Onze klanten</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {trustedLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-20"
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
