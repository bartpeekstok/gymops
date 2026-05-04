import Badge from "../ui/Badge";
import Button from "../ui/Button";
import DashboardMockup from "../DashboardMockup";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container-page py-20">
        <div className="text-left max-w-5xl">
          <Badge>Alles-in-één gym automation platform</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-dark mt-6 break-words [hyphens:none]">
            Het beste CRM systeem op de markt, gebouwd voor en door gym-owners
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          <div>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Je bent als coach geen sportschool begonnen om de hele dag administratieve taken
              te doen. We willen mensen fitter, gezonder en blijer maken en geloven in onze
              aanpak. GymOps helpt je om meer tijd en energie aan je leden te besteden en
              tegelijkertijd veel meer te doen.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="primary" href="/demo">
                Plan een demo
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
