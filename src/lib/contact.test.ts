import { describe, expect, it } from "vitest";
import { validateContact } from "@/lib/contact";

const valido = {
  name: "João Souza",
  email: "joao@empresa.com.br",
  message: "Preciso de um sistema de agendamento para minha clínica.",
};

describe("validateContact", () => {
  it("não retorna erro para uma entrada válida", () => {
    expect(validateContact(valido)).toEqual({});
  });

  it("exige o nome", () => {
    const erros = validateContact({ ...valido, name: "   " });
    expect(erros.name).toBe("Informe seu nome.");
  });

  it("exige nome com pelo menos 2 caracteres", () => {
    expect(validateContact({ ...valido, name: "A" }).name).toBe(
      "Informe seu nome completo.",
    );
  });

  it("exige o e-mail", () => {
    expect(validateContact({ ...valido, email: "" }).email).toBe(
      "Informe seu e-mail.",
    );
  });

  it("rejeita e-mail em formato inválido", () => {
    for (const email of ["joao", "joao@", "@empresa.com", "joao empresa.com"]) {
      expect(validateContact({ ...valido, email }).email).toBe(
        "E-mail inválido.",
      );
    }
  });

  it("aceita e-mail com subdomínio e sinal de mais", () => {
    expect(validateContact({ ...valido, email: "joao+tag@mail.empresa.com.br" }).email).toBeUndefined();
  });

  it("exige mensagem com pelo menos 10 caracteres", () => {
    expect(validateContact({ ...valido, message: "oi" }).message).toBe(
      "Conte um pouco mais sobre o projeto (mínimo de 10 caracteres).",
    );
  });

  it("acumula todos os erros de uma vez", () => {
    const erros = validateContact({ name: "", email: "x", message: "" });
    expect(Object.keys(erros).sort()).toEqual(["email", "message", "name"]);
  });
});
