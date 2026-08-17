import { Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Eletrotécnica Universal"
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 rounded-full object-contain"
              />
              <span className="font-display text-xl font-extrabold">Eletrotécnica Universal</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              Assistência técnica especializada em eletrodomésticos, ferramentas elétricas e
              equipamentos diversos em Nova Esperança - PR e região.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Eletrotécnica Universal"
                className="grid size-10 place-items-center rounded-full border border-navy-foreground/20 transition-colors hover:border-brand-red hover:bg-brand-red"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </a>
              <a
                href={SITE.phoneHref}
                aria-label="Ligar para a Eletrotécnica Universal"
                className="grid size-10 place-items-center rounded-full border border-navy-foreground/20 transition-colors hover:border-brand-red hover:bg-brand-red"
              >
                <Phone className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Links rápidos">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-brand-red">
              Links rápidos
            </h3>
            <ul className="mt-5 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-brand-red">
              Atendimento
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-navy-foreground/70">
              {SITE.hours.map((h) => (
                <li key={h.day}>
                  <span className="font-semibold text-navy-foreground">{h.day}</span>
                  <br />
                  {h.time}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-2 text-sm text-navy-foreground/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-red" aria-hidden="true" />
              {SITE.address}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Eletrotécnica Universal. Todos os direitos reservados.
          </p>
          <p>{SITE.phoneLabel} · {SITE.city}</p>
        </div>
      </div>
    </footer>
  );
}
