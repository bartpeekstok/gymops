import Badge from "../ui/Badge";
import Button from "../ui/Button";
import DashboardMockup from "../DashboardMockup";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge>Alles-in-één Gymbeheer Software</Badge>
          <h1 className="text-5xl lg:text-[64px] font-black leading-[1.1] text-dark mt-4">
            Placeholder hoofdtitel voor GymOps
          </h1>
          <p className="text-lg text-gray-600 mt-5 max-w-lg leading-relaxed">
            Placeholder ondertitel. Vervang met je eigen waardepropositie en{" "}
            <strong>positionering</strong> voor de Nederlandse gymmarkt.
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
