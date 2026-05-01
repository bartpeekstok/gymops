import Button from "../ui/Button";
import { GearIcon } from "../Logo";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy to-primary">
      <div className="container-page py-20 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="text-white">
          <h2 className="text-4xl font-black">Klaar wanneer jij het bent</h2>
          <p className="mt-4 text-off-white/90 max-w-md">
            Geen langlopende contracten, geen verborgen kosten, en een platform dat zich
            aanpast aan elke fitnessspecialisatie.
          </p>
          <div className="mt-6">
            <Button
              variant="primary"
              href="/demo"
              className="bg-accent hover:bg-accent/90 text-dark"
            >
              Plan een demo →
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
          <GearIcon className="h-72 w-72 opacity-20" />
        </div>
      </div>

      <GearIcon className="absolute -bottom-20 -right-20 h-96 w-96 opacity-10 pointer-events-none" />
    </section>
  );
}
