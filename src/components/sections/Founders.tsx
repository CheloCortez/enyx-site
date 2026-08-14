import Image from "next/image";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function Founders() {
  return (
    <Section id="sobre" alt labelledBy="sobre-titulo">
      <Reveal>
        <Eyebrow>{site.about.eyebrow}</Eyebrow>
        <Heading
          id="sobre-titulo"
          text={`${site.about.title} ${site.about.titleEmphasis}`}
          className="mt-4 max-w-xl"
        />
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          {site.about.subtitle}
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-6 md:grid-cols-2">
        {site.founders.map((founder, index) => (
          <li key={founder.name}>
            <Reveal delay={index * 0.08} className="h-full">
              <Card className="h-full p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={founder.photo}
                    alt={`Foto de ${founder.name}`}
                    width={56}
                    height={56}
                    className="size-14 rounded-full border border-border object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-text">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-6 text-sm italic leading-relaxed text-muted">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>

                <p className="mt-6 text-xs text-muted/80">{founder.education}</p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
