import {
  CookingPot,
  Fan,
  Microwave,
  Droplets,
  Plug,
  Settings2,
  WashingMachine,
  KeyRound,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";
import { whatsappLink } from "@/lib/site";

const SERVICES = [
  { icon: WashingMachine, title: "Conserto de Lavadoras", text: "Diagnóstico completo, troca de placas, motores e reparo de vazamentos." },
  { icon: Microwave, title: "Conserto de Micro-ondas", text: "Reparo de magnetron, painel eletrônico e componentes internos." },
  { icon: KeyRound, title: "Chaveiro", text: "Cópias de chaves, chaves codificadas e abertura com segurança." },
  { icon: CookingPot, title: "Conserto de Fornos Elétricos", text: "Resistências, termostatos e ajustes de temperatura precisos." },
  { icon: Droplets, title: "Conserto de Chuveiros", text: "Resistência, fiação, pressostato e instalação com segurança." },
  { icon: Plug, title: "Conserto de Eletrodomésticos", text: "Liquidificadores, ventiladores, aspiradores e muito mais." },
  { icon: Settings2, title: "Assistência Técnica em Geral", text: "Ferramentas elétricas e equipamentos diversos com laudo técnico." },
  { icon: Fan, title: "Manutenção Preventiva", text: "Revisão periódica que evita paradas e aumenta a vida útil." },
];

export function Services() {
  return (
    <section id="servicos" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="O que fazemos pela sua casa e pelo seu negócio"
          description="Equipe técnica preparada para diagnosticar, reparar e manter seus equipamentos funcionando como novos."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 4) * 90}>
              <a
                href={whatsappLink(`Olá! Gostaria de saber sobre: ${service.title}.`)}
                className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-secondary text-navy transition-colors duration-300 group-hover:bg-brand-red group-hover:text-brand-red-foreground">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Solicitar →
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
