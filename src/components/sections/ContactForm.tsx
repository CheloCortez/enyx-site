"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import {
  validateContact,
  type ContactErrors,
  type ContactInput,
} from "@/lib/contact";
import { buildWhatsappLink, buildWhatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const VAZIO: ContactInput = { name: "", email: "", message: "" };

const labelClass =
  "block font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-muted";

const fieldClass =
  "mt-2 w-full rounded-lg border bg-surface-2 px-4 py-3 text-[16px] text-text placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

/**
 * Ponto único de entrega da mensagem. Hoje abre o WhatsApp;
 * trocar por envio de e-mail é substituir o corpo desta função.
 */
function submitContact(input: ContactInput) {
  const url = buildWhatsappUrl(site.contact.whatsapp, input);
  window.open(url, "_blank", "noopener,noreferrer");
}

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(VAZIO);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  function update(field: keyof ContactInput, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSent(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    submitContact(values);
    setValues(VAZIO);
    setSent(true);
  }

  const { fields } = site.contactSection;

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-10">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contato-nome" className={labelClass}>
            {fields.name.label}
          </label>
          <input
            id="contato-nome"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={fields.name.placeholder}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "erro-nome" : undefined}
            className={cn(
              fieldClass,
              errors.name ? "border-red-500/70" : "border-border",
            )}
          />
          {errors.name ? (
            <p id="erro-nome" role="alert" className="mt-2 text-xs text-red-400">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contato-email" className={labelClass}>
            {fields.email.label}
          </label>
          <input
            id="contato-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={fields.email.placeholder}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "erro-email" : undefined}
            className={cn(
              fieldClass,
              errors.email ? "border-red-500/70" : "border-border",
            )}
          />
          {errors.email ? (
            <p id="erro-email" role="alert" className="mt-2 text-xs text-red-400">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contato-mensagem" className={labelClass}>
          {fields.message.label}
        </label>
        <textarea
          id="contato-mensagem"
          name="message"
          rows={5}
          placeholder={fields.message.placeholder}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "erro-mensagem" : undefined}
          className={cn(
            fieldClass,
            "resize-y",
            errors.message ? "border-red-500/70" : "border-border",
          )}
        />
        {errors.message ? (
          <p id="erro-mensagem" role="alert" className="mt-2 text-xs text-red-400">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent text-sm font-bold text-bg transition-colors hover:bg-accent/90"
      >
        <Icon name="send" className="size-4" />
        {site.contactSection.submitLabel}
      </button>

      {sent ? (
        <p role="status" className="mt-4 text-center text-sm text-accent">
          {site.contactSection.successMessage}
        </p>
      ) : null}

      <p className="mt-6 text-center text-sm text-muted">
        {site.contactSection.whatsappPrompt}{" "}
        <a
          href={buildWhatsappLink(site.contact.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent hover:opacity-80"
        >
          <Icon name="message" className="size-4" />
          {site.contactSection.whatsappLabel}
        </a>
      </p>
    </form>
  );
}
