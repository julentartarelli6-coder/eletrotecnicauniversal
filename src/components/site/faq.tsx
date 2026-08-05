import { Reveal, SectionHeading } from "@/components/site/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Vocês oferecem garantia?",
    a: "Sim. Todos os serviços realizados possuem garantia, assim como as peças aplicadas. O prazo é informado no orçamento e registrado na ordem de serviço.",
  },
  {
    q: "Quanto tempo demora o conserto?",
    a: "Depende do equipamento e da disponibilidade de peças. Grande parte dos reparos é concluída em poucos dias, e você é avisado assim que o serviço fica pronto.",
  },
  {
    q: "Fazem orçamento?",
    a: "Fazemos sim, sem compromisso. Basta trazer o equipamento na loja ou nos chamar no WhatsApp para uma avaliação inicial.",
  },
  {
    q: "Atendem empresas?",
    a: "Atendemos pessoas físicas e empresas, incluindo manutenção preventiva e contratos de suporte para ferramentas e equipamentos.",
  },
  {
    q: "Quais marcas atendem?",
    a: "Trabalhamos com Makita, DeWalt, Elgin, Jacto, Bosch, Tramontina, Black+Decker e diversas outras marcas do mercado.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tudo o que você precisa saber antes do atendimento"
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left text-base font-bold text-navy hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
