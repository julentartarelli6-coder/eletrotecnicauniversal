import { Handshake, ShieldCheck, Timer } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";

const PILLARS = [
  { icon: Timer, title: "Agilidade", text: "Diagnóstico rápido e prazos que respeitam a sua rotina." },
  { icon: ShieldCheck, title: "Confiança", text: "Serviço com garantia e peças de procedência." },
  { icon: Handshake, title: "Honestidade", text: "Orçamento transparente e preço justo, sempre." },
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Sobre a empresa"
              title="Referência em assistência técnica na região"
            />
            <Reveal delay={80} className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                A <strong className="text-navy">Eletrotécnica Universal</strong> é referência em
                assistência técnica especializada em Nova Esperança-PR.
              </p>
              <p>
                Atuamos com manutenção de eletrodomésticos, ferramentas elétricas e equipamentos
                diversos, sempre oferecendo atendimento rápido, qualidade, honestidade e preço
                justo.
              </p>
              <p>
                Nosso compromisso é entregar um serviço confiável para que nossos clientes tenham
                tranquilidade e segurança.
              </p>
            </Reveal>
          </div>

          <ul className="space-y-4">
            {PILLARS.map((pillar, i) => (
              <Reveal as="li" key={pillar.title} delay={i * 110}>
                <div className="card-lift flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl surface-navy">
                    <pillar.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-navy">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
