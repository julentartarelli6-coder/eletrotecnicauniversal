import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";
import { cn } from "@/lib/utils";

type Category = "todos" | "ferramentas" | "eletrodomesticos" | "outros";

const FILTERS: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "ferramentas", label: "Ferramentas" },
  { key: "eletrodomesticos", label: "Eletrodomésticos" },
  { key: "outros", label: "Outros" },
];

const BRANDS: { name: string; category: Category }[] = [
  { name: "Makita", category: "ferramentas" },
  { name: "DeWalt", category: "ferramentas" },
  { name: "MUELLER", category: "outros" },
  { name: "Jacto", category: "outros" },
  { name: "Bosch", category: "ferramentas" },
  { name: "FISCHER", category: "outros" },
  { name: "Black+Decker", category: "ferramentas" },
  { name: "Stanley", category: "ferramentas" },
  { name: "Colormaq", category: "eletrodomesticos" },
  { name: "Zagonel", category: "eletrodomesticos" },
  { name: "Britânia", category: "eletrodomesticos" },
  { name: "Lorenzetti", category: "eletrodomesticos" },
  { name: "Suggar", category: "eletrodomesticos" },
  { name: "Wanke", category: "outros" },
];

export function Brands() {
  const [active, setActive] = useState<Category>("todos");
  const filtered = active === "todos" ? BRANDS : BRANDS.filter((b) => b.category === active);

  return (
    <section id="marcas" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="MARCAS AUTORIZADAS"
          title="Assistência Técnica Autorizada"
          description="Peças, acessórios e manutenção autorizada para as melhores marcas."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActive(filter.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === filter.key
                  ? "bg-navy text-white"
                  : "border border-border bg-card text-muted-foreground hover:text-navy",
              )}
              aria-pressed={active === filter.key}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((brand, i) => (
            <Reveal as="li" key={brand.name} delay={(i % 4) * 80}>
              <div className="card-lift grid h-24 place-items-center rounded-2xl border border-border bg-card px-4 text-center shadow-soft">
                <span className="font-display text-lg font-extrabold uppercase tracking-tight text-navy sm:text-xl">
                  {brand.name}
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
