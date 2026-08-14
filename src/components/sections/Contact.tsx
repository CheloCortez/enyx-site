import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export function Contact() {
  return (
    <Section id="contato" labelledBy="contato-titulo">
      <Reveal>
        <Card className="mx-auto max-w-3xl p-6 sm:p-10">
          <div className="text-center">
            <Heading
              id="contato-titulo"
              text={site.contactSection.title}
              emphasis={site.contactSection.titleEmphasis}
            />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.contactSection.subtitle}
            </p>
          </div>

          <ContactForm />
        </Card>
      </Reveal>
    </Section>
  );
}
