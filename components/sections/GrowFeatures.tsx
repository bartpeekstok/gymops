import { Megaphone, Send, Star } from "lucide-react";
import Button from "../ui/Button";
import { GearIcon } from "../Logo";
import { growColumns } from "@/lib/data";

const iconMap = {
  megaphone: Megaphone,
  send: Send,
  star: Star,
} as const;

export default function GrowFeatures() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-page">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 justify-center">
            <GearIcon className="h-12 w-12" />
            <span className="text-3xl font-bold tracking-wider">
              GymOps <span className="text-primary">Flow</span>
            </span>
          </div>
          <h2 className="text-4xl font-black text-dark mt-3">Verander leads in leden</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Laat potentiële leden niet door de vingers glippen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {growColumns.map((col) => {
            const Icon = iconMap[col.icon as keyof typeof iconMap];
            return (
              <div key={col.title} className="pt-5 border-t-4 border-primary">
                <div className="flex items-start gap-3">
                  <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark text-lg">{col.title}</h3>
                    <p className="text-gray-600 mt-2 whitespace-pre-line">{col.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" href="/leadopvolging">
            Meer informatie
          </Button>
        </div>
      </div>
    </section>
  );
}
