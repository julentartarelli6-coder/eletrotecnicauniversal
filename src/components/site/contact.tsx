import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { MAPS_DIRECTIONS, MAPS_EMBED, SITE, whatsappLink } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="relative isolate overflow-hidden surface-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          align="left"
          eyebrow="Contato"
          title="Fale com a Eletrotécnica Universal"
          description="Estamos no centro de Nova Esperança, prontos para atender você."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal className="space-y-4">
            <div className="flex gap-4 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/10 p-6 backdrop-blur-sm">
              <MapPin className="size-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div className="min-w-0">
                <p className="font-bold text-navy-foreground">Rua Pres. Castelo Branco, 184</p>
                <p className="text-sm text-navy-foreground/70">{SITE.city}</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/10 p-6 backdrop-blur-sm">
              <Phone className="size-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div className="min-w-0">
                <a
                  href={SITE.phoneHref}
                  className="font-bold text-navy-foreground underline-offset-4 hover:underline"
                >
                  {SITE.phoneLabel}
                </a>
                <p className="text-sm text-navy-foreground/70">Telefone fixo e atendimento</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/10 p-6 backdrop-blur-sm">
              <Clock className="size-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div className="min-w-0 space-y-1">
                {SITE.hours.map((h) => (
                  <p key={h.day} className="text-sm text-navy-foreground/80">
                    <span className="font-semibold text-navy-foreground">{h.day}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="whats" size="xl">
                <a href={whatsappLink("Olá! Gostaria de falar com a Eletrotécnica Universal.")}>
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="hero" size="xl">
                <a href={SITE.phoneHref}>
                  <Phone aria-hidden="true" />
                  Ligar Agora
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer">
                  <Navigation aria-hidden="true" />
                  Como Chegar
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-navy-foreground/15 shadow-lift">
              <iframe
                title="Mapa da Eletrotécnica Universal em Nova Esperança - PR"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
