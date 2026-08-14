import { site } from "@/content/site";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CodeCard } from "@/components/sections/CodeCard";

function Subtitle() {
  const { subtitle, subtitleHighlight } = site.hero;
  const [antes, depois] = subtitle.split(subtitleHighlight);

  return (
    <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
      {antes}
      <strong className="font-semibold text-text">{subtitleHighlight}</strong>
      {depois}
    </p>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container-page relative pb-20 pt-28 md:pb-28 md:pt-36 lg:pb-32 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                  {site.hero.badge}
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <Heading
                as="h1"
                text={site.hero.title}
                emphasis={site.hero.titleEmphasis}
                className="mt-8"
              />
              <Subtitle />
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={site.hero.primaryCta.href} icon="arrowRight">
                  {site.hero.primaryCta.label}
                </Button>
                <Button
                  href={site.hero.secondaryCta.href}
                  variant="secondary"
                  icon="externalLink"
                >
                  {site.hero.secondaryCta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.24}>
            <CodeCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
