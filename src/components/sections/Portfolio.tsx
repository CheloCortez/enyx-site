import Image from "next/image";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Portfolio() {
  return (
    <Section id="portfolio" alt labelledBy="portfolio-titulo">
      <Reveal>
        <Eyebrow>{site.portfolio.eyebrow}</Eyebrow>
        <Heading
          id="portfolio-titulo"
          text={site.portfolio.title}
          className="mt-4"
        />
      </Reveal>

      <ul className="mt-14 grid gap-6 md:grid-cols-2">
        {site.projects.map((project) => (
          <li key={project.title}>
            <Reveal className="h-full">
              <Card interactive className="h-full overflow-hidden">
                <div className="relative aspect-[16/9] border-b border-border bg-bg">
                  <Image
                    src={project.image}
                    alt={`Capa do projeto ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-accent">
                    {project.tag}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-text">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {project.url !== "#" ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                    >
                      {site.portfolio.linkLabel}
                      <Icon name="externalLink" className="size-4" />
                    </a>
                  ) : null}
                </div>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
