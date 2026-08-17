import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import logo from "@/assets/logo-mark.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#produtos", label: "Produtos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-navy-foreground/10 bg-navy-deep/90 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Eletrotécnica Universal"
            width={48}
            height={48}
            className="h-11 w-11 shrink-0 rounded-full object-contain sm:h-12 sm:w-12"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-extrabold uppercase tracking-widest text-brand-red sm:text-[0.8rem]">
              Eletrotécnica
            </span>
            <span className="block truncate font-display text-lg font-extrabold text-navy-foreground sm:text-xl">
              Universal
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 xl:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href={whatsappLink("Olá! Vim pelo site e gostaria de um atendimento.")}>
              WhatsApp
            </a>
          </Button>

          <Button asChild variant="glass" size="icon" aria-label="Ligar agora" className="sm:hidden">
            <a href={SITE.phoneHref}>
              <Phone />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="glass" size="icon" aria-label="Abrir menu" className="xl:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-navy-foreground/10 bg-navy-deep text-navy-foreground">
              <SheetTitle className="font-display text-lg text-navy-foreground">Menu</SheetTitle>
              <ul className="mt-6 space-y-1">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-navy-foreground/85 transition-colors hover:bg-navy-foreground/10 hover:text-navy-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="xl" className="mt-6 w-full">
                <a href={whatsappLink("Olá! Vim pelo site e gostaria de um atendimento.")}>
                  Falar no WhatsApp
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
