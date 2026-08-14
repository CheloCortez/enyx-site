import type { ContactInput } from "@/lib/contact";

/**
 * Normaliza um telefone para o formato aceito pelo wa.me: só dígitos.
 * Aceita qualquer formatação de entrada (espaços, parênteses, `+`, `-`).
 */
export function normalizeWhatsappPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Monta o link do WhatsApp com a mensagem já preenchida.
 * `phone` aceita qualquer formatação — só os dígitos são usados.
 */
export function buildWhatsappUrl(phone: string, input: ContactInput): string {
  const digits = normalizeWhatsappPhone(phone);
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const text = `Olá! Meu nome é ${name} (${email}).\n\n${message}`;

  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
