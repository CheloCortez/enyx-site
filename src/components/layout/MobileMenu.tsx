"use client";

import { useEffect, useRef, type RefObject } from "react";
import { site } from "@/content/site";

export function MobileMenu({
  open,
  onClose,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const trigger = triggerRef.current;

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open, onClose, triggerRef]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-bg/80 backdrop-blur-sm"
      />
      <div
        ref={panelRef}
        id="menu-mobile"
        className="relative mt-16 border-b border-border bg-bg-alt px-5 pb-8 pt-4"
      >
        <nav aria-label="Navegação principal">
          <ul className="flex flex-col">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="flex min-h-14 items-center border-b border-border text-lg font-medium text-text transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={site.navCta.href}
          onClick={onClose}
          className="mt-6 flex min-h-12 w-full items-center justify-center rounded-lg bg-accent text-sm font-semibold text-bg"
        >
          {site.navCta.label}
        </a>
      </div>
    </div>
  );
}
