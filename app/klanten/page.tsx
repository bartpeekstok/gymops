import Button from "@/components/ui/Button";
import TestimonialCard from "@/components/ui/TestimonialCard";
import {
  shortQuotes,
  customerStories,
  supportQuotes,
  featuredKlantQuotes,
} from "@/lib/data";

export default function CustomersPage() {
  const doubledQuotes = [...shortQuotes, ...shortQuotes];

  return (
    <>
      <section className="bg-navy text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 h-40 w-40 rounded-full border border-accent" />
          <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full border border-primary" />
          <div className="absolute top-1/2 left-1/2 h-24 w-24 rounded-full border border-accent -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-page relative z-10">
          <p className="text-accent tracking-wider font-bold text-sm">
            Slimme gymsoftware voor slimme gymeigenaren
          </p>
          <h1 className="text-4xl lg:text-5xl font-black mt-3 max-w-3xl mx-auto leading-tight">
            5000+ gyms kozen GymOps om hun fitnessonderneming te stroomlijnen en te laten groeien.
          </h1>
          <p className="text-off-white/90 mt-5 max-w-2xl mx-auto">
            5.000+ gyms kozen GymOps om hun fitnessonderneming te stroomlijnen en te laten
            groeien. Sluit je aan voor fantastische resultaten en een betere klantervaring.
          </p>
          <div className="mt-8">
            <Button variant="primary" href="/demo">
              Plan een demo
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-accent-light py-8 overflow-hidden">
        <div className="overflow-hidden">
          <div className="flex quote-scroll whitespace-nowrap w-max">
            {doubledQuotes.map((q, i) => (
              <span key={i} className="text-dark font-medium mx-8 text-sm">
                <span className="italic">&ldquo;{q.quote}&rdquo;</span>
                <span className="text-gray-500 ml-2">— {q.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            {featuredKlantQuotes.map((q) => (
              <div key={q.name}>
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="font-bold text-dark mt-4">— {q.name}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl h-96 w-full" />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark text-center">
            Verhalen van onze klanten
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {customerStories.map((story) => (
              <article
                key={story.title}
                className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
              >
                <div className="bg-gradient-to-br from-primary to-accent h-48" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-dark text-lg">{story.title}</h3>
                  <p className="text-gray-600 mt-2 flex-1">{story.body}</p>
                  <a href="#" className="text-primary font-semibold mt-4 inline-block">
                    Lees meer →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <h2 className="text-3xl font-black text-dark text-center max-w-3xl mx-auto">
            Onze klanten houden van onze software, maar ze houden nog meer van onze support
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-100">
              <span className="text-accent text-7xl leading-none font-serif block">&ldquo;</span>
              <p className="text-xl font-medium text-dark -mt-4 leading-relaxed">
                Jouw behulpzame support en eenvoudig platform zorgen samen voor een echt
                uitstekend product!
              </p>
              <p className="mt-6 font-bold text-dark">— Tiffany R., Stroller Strong Moms</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {supportQuotes.map((q) => (
                <TestimonialCard key={q.name} quote={q.quote} name={q.name} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-16 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-black">
            Fitnessondernemingen over de hele wereld bedienen
          </h2>
          <p className="text-off-white/80 mt-4 max-w-2xl mx-auto">
            Probeer GymOps gratis en zie zelf het verschil. Beheer je fitnessonderneming
            efficiënter met toonaangevende gymsoftware én een ervaren team dat je ondersteunt.
          </p>
          <div className="mt-8">
            <Button variant="primary" href="/demo" className="bg-accent hover:bg-accent/90 text-dark">
              Plan een demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
