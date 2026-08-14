import { describe, expect, it } from "vitest";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const input = {
  name: "João Souza",
  email: "joao@empresa.com.br",
  message: "Preciso de um sistema de agendamento.",
};

describe("buildWhatsappUrl", () => {
  it("aponta para wa.me com o número informado", () => {
    const url = buildWhatsappUrl("5511988887777", input);
    expect(url.startsWith("https://wa.me/5511988887777?text=")).toBe(true);
  });

  it("remove qualquer caractere não numérico do telefone", () => {
    const url = buildWhatsappUrl("+55 (11) 98888-7777", input);
    expect(url.startsWith("https://wa.me/5511988887777?text=")).toBe(true);
  });

  it("monta a mensagem com nome, e-mail e o texto do projeto", () => {
    const url = buildWhatsappUrl("5511988887777", input);
    const texto = decodeURIComponent(url.split("?text=")[1]!);
    expect(texto).toBe(
      "Olá! Meu nome é João Souza (joao@empresa.com.br).\n\nPreciso de um sistema de agendamento.",
    );
  });

  it("codifica acentos e quebras de linha na URL", () => {
    const url = buildWhatsappUrl("5511988887777", input);
    const query = url.split("?text=")[1]!;
    expect(query).not.toContain(" ");
    expect(query).not.toContain("\n");
    expect(query).toContain("%0A");
  });

  it("remove espaços nas pontas dos campos", () => {
    const url = buildWhatsappUrl("5511988887777", {
      name: "  Ana  ",
      email: " ana@x.com ",
      message: "  Oi  ",
    });
    const texto = decodeURIComponent(url.split("?text=")[1]!);
    expect(texto).toBe("Olá! Meu nome é Ana (ana@x.com).\n\nOi");
  });
});
