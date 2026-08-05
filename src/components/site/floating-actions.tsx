import { useEffect, useState } from "react";
import { ArrowUp, Instagram, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      <button
        type="button"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "grid size-11 place-items-center rounded-full border border-navy-foreground/20 bg-navy text-navy-foreground shadow-lift transition-all duration-300 hover:bg-navy-deep",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="size-5" aria-hidden="true" />
      </button>

      <a
        href={SITE.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram da Eletrotécnica Universal"
        className="grid size-12 place-items-center rounded-full bg-brand-red text-brand-red-foreground shadow-lift transition-transform duration-300 hover:scale-110"
      >
        <Instagram className="size-5" aria-hidden="true" />
      </a>

      <a
        href={whatsappLink("Olá! Vim pelo site da Eletrotécnica Universal.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-whats text-navy-foreground shadow-lift transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>
    </div>
  );
}
