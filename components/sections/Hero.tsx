import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container-page py-20">
        <Badge>Voor Nederlandse micro gyms</Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-dark mt-6 break-words [hyphens:none]">
          Elke lead opgevolgd. Elk lid gezien. Elke taak gedaan.
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mt-6">
          Het systeem voor leadopvolging, ledenbehoud en team-aansturing, naadloos gekoppeld
          aan SportBit. Gebouwd voor en door gym-owners.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button variant="primary" href="/demo">
            Plan een demo
          </Button>
        </div>
      </div>
    </section>
  );
}
