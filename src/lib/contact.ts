export type ContactInput = {
  name: string;
  email: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (name.length === 0) {
    errors.name = "Informe seu nome.";
  } else if (name.length < 2) {
    errors.name = "Informe seu nome completo.";
  }

  if (email.length === 0) {
    errors.email = "Informe seu e-mail.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "E-mail inválido.";
  }

  if (message.length < 10) {
    errors.message =
      "Conte um pouco mais sobre o projeto (mínimo de 10 caracteres).";
  }

  return errors;
}
