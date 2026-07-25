import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section, SectionHeading } from '@/components/ui/Section';
import { faqs } from '@/data/content';

export function FAQ() {
  return (
    <Section id="faq" className="bg-ink-900/40">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, Answered"
        subtitle="Everything you need to know before choosing a Gentrix charger."
      />

      <div className="mx-auto max-w-3xl flex flex-col gap-3">
        <Accordion type="single" collapsible defaultValue="0" className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={String(i)}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
