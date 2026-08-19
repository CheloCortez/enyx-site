import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

export function CtaStats() {
  return (
    <Section labelledBy="cta-titulo">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            id="cta-titulo"
            text={site.cta.title}
            emphasis={site.cta.titleEmphasis}
          />
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            {site.cta.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse text-center">
              <dt className="mt-2 text-xs text-muted sm:text-sm">
                {stat.label}
              </dt>
              <dd className="font-mono text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
