import Badge from "../ui/Badge";
import Button from "../ui/Button";
import DashboardMockup from "../DashboardMockup";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge>Alles-in-één Gym Automation Platform</Badge>
          <h1 className="text-5xl lg:text-[64px] font-black leading-[1.1] text-dark mt-4">
            Ontgrendel de Kracht van jouw Fitnessonderneming
          </h1>
          <p className="text-lg text-gray-600 mt-5 max-w-lg leading-relaxed">
            Automatiseer, stroomlijn en laat je fitnessonderneming groeien met een probleemloze
            software <strong>gebouwd door gymeigenaren, voor gymeigenaren.</strong>
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="primary" href="/demo">
              Plan een Demo →
            </Button>
            <Button variant="outline" href="/prijzen">
              Gratis starten
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
