import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";

const ITEMS = [
  "Atendimento rápido",
  "Profissionais qualificados",
  "Garantia dos serviços",
  "Peças de qualidade",
  "Preço justo",
  "Atendimento personalizado",
  "Empresa bem avaliada pelos clientes",
];

export function Differentials() {
  return (
    <section className="relative isolate overflow-hidden surface-navy py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/2 -z-10 size-[28rem] -translate-y-1/2 rounded-full bg-brand-red/20 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Diferenciais"
          title="Por que escolher a Eletrotécnica Universal"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item} delay={(i % 3) * 90}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-navy-foreground/15 bg-navy-foreground/10 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-brand-red/60 hover:bg-navy-foreground/15">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-red">
                  <Check className="size-4 text-brand-red-foreground" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-navy-foreground sm:text-base">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
