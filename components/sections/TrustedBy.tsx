import Image from "next/image";

const logos = [
  { src: "/logo-cfa.png", h: "h-10" },
  { src: "/logo-cfn.png", h: "h-12" },
  { src: "/logo-cfc.png", h: "h-12" },
  { src: "/logo-cfl.png", h: "h-10" },
  { src: "/logo-gymbox.png", h: "h-9" },
  { src: "/logo-unscared.jpg", h: "h-12" },
];

export default function TrustedBy() {
  const doubled = [...logos, ...logos];
  return (
    <section className="border-y border-line py-12 overflow-hidden">
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10">
        <p className="text-center text-slate text-[14px] font-semibold mb-9">
          Vertrouwd door coaching gyms in heel Nederland
        </p>
      </div>
      <div className="relative">
        <div className="flex w-max marquee gap-20 items-center">
          {doubled.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt=""
              width={200}
              height={80}
              className={`${logo.h} w-auto logo-tint`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
