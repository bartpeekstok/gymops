import Button from "../ui/Button";
import { GearIcon } from "../Logo";
import { growColumns } from "@/lib/data";

export default function GrowFeatures() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-page">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 justify-center">
            <GearIcon className="h-6 w-6" />
            <span className="text-sm font-bold tracking-wider">
              GymOps <span className="text-primary">Groei</span>
            </span>
          </div>
          <h2 className="text-4xl font-black text-dark mt-3">Verander prospects in leden</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Laat potentiële leden niet door de vingers glippen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {growColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-dark text-lg">{col.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{col.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" href="/producten">
            Meer informatie
          </Button>
        </div>
      </div>
    </section>
  );
}
