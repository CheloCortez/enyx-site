import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <Section id="servicos" alt labelledBy="servicos-titulo">
      <Reveal>
        <Eyebrow>{site.services.eyebrow}</Eyebrow>
        <Heading
          id="servicos-titulo"
          text={`${site.services.title} ${site.services.titleEmphasis}`}
          className="mt-4 max-w-2xl"
        />
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          {site.services.subtitle}
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.services_list.map((service, index) => (
          <li key={service.title}>
            <Reveal delay={index * 0.05} className="h-full">
              <Card interactive className="h-full p-6">
                <IconBox name={service.icon} />
                <h3 className="mt-5 text-lg font-bold text-text">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
