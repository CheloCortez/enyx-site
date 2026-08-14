import type { ContactInput } from "@/lib/contact";

/**
 * Monta o link do WhatsApp com a mensagem já preenchida.
 * `phone` aceita qualquer formatação — só os dígitos são usados.
 */
export function buildWhatsappUrl(phone: string, input: ContactInput): string {
  const digits = phone.replace(/\D/g, "");
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const text = `Olá! Meu nome é ${name} (${email}).\n\n${message}`;

  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
