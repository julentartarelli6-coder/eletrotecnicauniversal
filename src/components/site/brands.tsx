import { Plus } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";

const BRANDS = [
  "Makita",
  "DeWalt",
  "Elgin",
  "Jacto",
  "Bosch",
  "NIGRO",
  "Black+Decker",
];

export function Brands() {
  return (
    <section id="marcas" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Marcas atendidas"
          title="Trabalhamos com as principais marcas do mercado"
          description="Peças, acessórios e manutenção especializada para equipamentos profissionais e domésticos."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {BRANDS.map((brand, i) => (
            <Reveal as="li" key={brand} delay={(i % 4) * 80}>
              <div className="card-lift grid h-24 place-items-center rounded-2xl border border-border bg-card px-4 text-center shadow-soft">
                <span className="font-display text-lg font-extrabold uppercase tracking-tight text-navy sm:text-xl">
                  {brand}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal as="li" delay={80}>
            <div className="grid h-24 place-items-center rounded-2xl border border-dashed border-border bg-secondary/50 px-4 text-center">
              <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Plus className="size-4 text-brand-red" aria-hidden="true" />
                E muitas outras
              </span>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
