import { useEffect, useRef, useState } from "react";

/**
 * Revela elementos suavemente quando entram na viewport.
 * À prova de falhas: se o IntersectionObserver não existir (ou nunca disparar),
 * o conteúdo é exibido mesmo assim — nunca fica invisível.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let observer: IntersectionObserver | undefined;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer?.disconnect();
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
      );
      observer.observe(el);
    } catch {
      setVisible(true);
      return;
    }

    // Rede de segurança: se por algum motivo o observer não disparar,
    // o conteúdo aparece de qualquer forma.
    const fallback = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      window.clearTimeout(fallback);
      observer?.disconnect();
    };
  }, []);

  return { ref, visible };
}
