import { BadgeCheck, Clock, MessageSquareQuote, Wrench } from "lucide-react";
import hero from "@/assets/hero.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

const FLOATING = [
  { icon: Clock, label: "Atendimento rápido" },
  { icon: BadgeCheck, label: "Garantia no serviço" },
  { icon: Wrench, label: "Técnicos especializados" },
  { icon: MessageSquareQuote, label: "Orçamento sem compromisso" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden surface-navy">
      <img
        src={hero.url}
        alt="Oficina da Eletrotécnica Universal com ferramentas elétricas profissionais"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-30 sm:opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,var(--navy-deep)_18%,color-mix(in_oklab,var(--navy)_82%,transparent)_58%,transparent_100%)]"
      />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8 lg:pb-36 lg:pt-48">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-red" aria-hidden="true" />
            Nova Esperança — Paraná
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy-foreground sm:text-5xl lg:text-6xl">
            Assistência Técnica Especializada em{" "}
            <span className="text-gradient-red">Eletrodomésticos</span> e Ferramentas Elétricas
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            Há anos oferecendo serviços com qualidade, rapidez e garantia para Nova Esperança e
            toda a região.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="hero" size="xl">
              <a
                href={whatsappLink(
                  "Olá! Gostaria de solicitar um orçamento na Eletrotécnica Universal.",
                )}
              >
                Solicitar Orçamento
              </a>
            </Button>
            <Button asChild variant="whats" size="xl">
              <a href={whatsappLink("Olá! Vim pelo site e gostaria de falar com um técnico.")}>
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-4">
            {FLOATING.map((item) => (
              <li
                key={item.label}
                className="rounded-xl border border-navy-foreground/15 bg-navy-foreground/10 p-4 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
              >
                <item.icon className="size-5 text-brand-red" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold text-navy-foreground">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
