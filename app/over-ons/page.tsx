import Button from "@/components/ui/Button";
import { founders, investors } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary uppercase tracking-wider font-bold text-sm">
              Gymsoftware gebouwd door gymeigenaren
            </p>
            <h1 className="text-5xl font-black text-dark mt-3 leading-tight">
              Hallo! Wij zijn GymOps!
            </h1>
            <p className="text-gray-600 mt-5 leading-relaxed">
              Placeholder missie-tekst. Vervang met je eigen verhaal over wat GymOps is en
              waarom het bestaat.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Placeholder vervolg-paragraaf over de toekomst en AI-aangedreven gymbeheer.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl h-80 w-full" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex -space-x-3">
              {["A", "B", "C", "D", "E"].map((letter, i) => (
                <div
                  key={i}
                  className="h-12 w-12 rounded-full border-4 border-white bg-navy text-white flex items-center justify-center font-bold text-sm shadow"
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark text-center">Ontmoet de Oprichters</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {founders.map((f, i) => (
              <div key={f.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <div
                  className={`h-24 w-24 rounded-full flex items-center justify-center font-black text-2xl ${
                    i === 0 ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                  }`}
                >
                  {f.initials}
                </div>
                <h3 className="font-black text-xl text-dark mt-5">
                  {f.name} <span className="text-gray-500 font-medium text-base">— {f.role}</span>
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{f.bio}</p>
                <p className="text-sm text-gray-500 mt-4 italic">{f.history}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark text-center">Onze Partners in Groei</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
            Placeholder tekst over investeerders en lange-termijn missie. Vervang met eigen
            content.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {investors.map((name) => (
              <div
                key={name}
                className="bg-gray-50 border border-gray-100 rounded-xl h-24 flex items-center justify-center text-gray-400 font-bold uppercase tracking-wider text-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-black max-w-3xl mx-auto leading-snug">
            Werk samen met een team dat begrijpt hoe een gym runt.
          </h2>
          <p className="text-off-white/80 mt-4 max-w-xl mx-auto">
            Placeholder slotzin. Vervang met je eigen call-to-action.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="/demo" className="bg-accent hover:bg-accent/90 text-dark">
              Plan een demo
            </Button>
            <Button variant="outline" href="/klanten" className="border-white text-white hover:bg-white/10">
              Bekijk onze klanten
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
