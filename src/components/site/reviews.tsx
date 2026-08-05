import { Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";



const TESTIMONIALS = [
  { name: "Cliente Google", text: "Excelente atendimento, com rapidez. Problema resolvido." },
  { name: "Cliente Google", text: "Atendimento excelente, recomendo." },
  { name: "Cliente Google", text: "Ótimo atendimento e preço justo." },
];

function Stars({ className = "size-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-amber-400 text-amber-400`} />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Avaliações"
          title="Nota 5,0 na avaliação dos clientes"
          description="Baseado em dezenas de avaliações de clientes de Nova Esperança e região."
        />

        <Reveal className="mx-auto mt-12 max-w-md">
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Avaliação geral
            </p>
            <p className="mt-2 font-display text-6xl font-extrabold text-navy">5,0</p>
            <div className="mt-3 flex justify-center">
              <Stars className="size-6" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Dezenas de avaliações</p>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal as="li" key={item.text} delay={i * 110}>
              <figure className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Stars />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy">
                  “{item.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full surface-navy text-xs font-bold">
                    ★
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">{item.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
