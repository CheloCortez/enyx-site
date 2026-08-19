import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <Section labelledBy="processo-titulo">
      <Reveal>
        <Eyebrow>{site.process.eyebrow}</Eyebrow>
        <Heading
          id="processo-titulo"
          text={site.process.title}
          className="mt-4"
        />
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          {site.process.subtitle}
        </p>
      </Reveal>

      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {site.process.steps.map((step) => (
          <li key={step.number}>
            <Reveal>
              <span className="font-mono text-4xl font-bold text-accent-dim">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-bold text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal>
        <Card className="mx-auto mt-16 max-w-2xl p-6">
          <div className="flex gap-4">
            <IconBox name={site.process.highlight.icon} />
            <div>
              <h3 className="text-base font-bold text-text">
                {site.process.highlight.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {site.process.highlight.description}
              </p>
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
