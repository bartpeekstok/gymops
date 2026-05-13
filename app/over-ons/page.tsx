import Image from "next/image";
import Button from "@/components/ui/Button";
import { founders, values } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-20">
        <div className="container-page max-w-3xl">
          <p className="text-primary tracking-wider font-bold text-sm">
            Gebouwd door gym-eigenaren, voor gym-eigenaren
          </p>
          <h1 className="text-5xl font-black text-dark mt-3 leading-tight">
            Hallo! Wij zijn GymOps!
          </h1>
          <p className="text-gray-600 mt-5 leading-relaxed">
            GymOps is opgericht door Jeroen van Duijn (CrossFit Leiden) en Bart Peekstok
            (CrossFit Alkmaar). Onze eigen gyms draaien op het systeem en we ontwikkelen het
            dagelijks door op basis van wat in de praktijk werkt.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We bouwen GymOps voor coaching gyms zoals die van ons: in het Nederlands,
            afgestemd op hoe een gym écht werkt, en met support van mensen die hetzelfde
            pad hebben gelopen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark text-center">Ontmoet de oprichters</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {founders.map((f) => (
              <div key={f.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-black text-xl text-dark mt-5">{f.name}</h3>
                <p className="text-gray-500 font-medium text-sm mt-1">{f.role}</p>
                <p className="text-gray-600 mt-4 leading-relaxed whitespace-pre-line">
                  {f.bio}
                </p>
                {f.history && (
                  <p className="text-sm text-gray-500 mt-4 italic">{f.history}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark text-center">
            Waarden die we leven (en werken)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((v) => (
              <div key={v.number} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-5xl font-black text-primary/30">{v.number}</p>
                <h3 className="font-black text-xl text-dark mt-3">{v.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 text-center">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-black leading-snug">
            Wil je weten of GymOps voor jouw gym werkt?
          </h2>
          <p className="text-off-white/80 mt-4">
            Plan een demo, dan laten we het je zien door iemand die zelf een gym runt.
          </p>
          <div className="mt-8">
            <Button
              variant="primary"
              href="/demo"
              className="bg-accent hover:bg-accent/90 text-dark"
            >
              Plan een demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
