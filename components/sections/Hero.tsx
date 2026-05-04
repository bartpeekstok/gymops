import Badge from "../ui/Badge";
import Button from "../ui/Button";
import DashboardMockup from "../DashboardMockup";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge>Alles-in-één gym automation platform</Badge>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.1] text-dark mt-4 break-words">
            Het beste CRM systeem op de markt, gebouwd voor en door coaching gym-owners
          </h1>
          <p className="text-lg text-gray-600 mt-5 max-w-lg leading-relaxed">
            Het complete systeem voor de beste ledenervaring, leadopvolging en team-aansturing.{" "}
            <strong>Gebouwd voor en door coaching gym owners.</strong>
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
    </section>
  );
}
