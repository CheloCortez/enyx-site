import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { IconBox } from "@/components/ui/IconBox";
import { Reveal } from "@/components/ui/Reveal";

export function Differentials() {
  return (
    <Section labelledBy="diferenciais-titulo">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <Eyebrow>{site.differentials.eyebrow}</Eyebrow>
            <Heading
              id="diferenciais-titulo"
              text={`${site.differentials.title} ${site.differentials.titleEmphasis}`}
              className="mt-4"
            />
          </div>
        </Reveal>

        <ul className="flex flex-col gap-10">
          {site.differentials_list.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.05}>
                <div className="flex gap-4">
                  <IconBox name={item.icon} size="sm" />
                  <div>
                    <h3 className="text-base font-bold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
