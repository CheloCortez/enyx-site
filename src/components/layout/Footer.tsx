import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const socials = site.footer.socials.filter((s) => s.url !== "#");

  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.brand.tagline}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-text">
              {site.footer.navTitle}
            </h2>
            <ul className="mt-4 flex flex-col gap-1">
              {site.footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-text">
              {site.footer.contactTitle}
            </h2>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <Icon name="mail" className="size-4" />
              {site.contact.email}
            </a>

            {socials.length > 0 ? (
              <ul className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-soft hover:text-accent"
                    >
                      <Icon name={social.icon} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
          {site.brand.copyright}
        </p>
      </div>
    </footer>
  );
}
