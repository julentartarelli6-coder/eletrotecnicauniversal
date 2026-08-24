import { Component, type ErrorInfo, type ReactNode } from "react";

import { reportLovableError } from "@/lib/lovable-error-reporting";

type Props = { children: ReactNode; fallback?: ReactNode };
type State = { hasError: boolean };

/**
 * Isola falhas de renderização: um erro em uma seção não derruba o site inteiro.
 */
export class SectionErrorBoundary extends Component<Props, State> {
  override state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
    try {
      reportLovableError(error, { boundary: "section_error_boundary" });
    } catch {
      /* noop */
    }
  }

  override render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="mx-auto max-w-2xl px-4 py-10 text-center text-sm text-muted-foreground">
            Não foi possível carregar esta seção. Atualize a página ou fale com a gente
            pelo WhatsApp.
          </div>
        )
      );
    }
    return this.props.children;
  }
}
