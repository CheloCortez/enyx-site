import { describe, expect, it } from "vitest";
import { site } from "@/content/site";

describe("conteúdo do site", () => {
  it("tem as quantidades esperadas de itens em cada seção", () => {
    expect(site.services_list).toHaveLength(6);
    expect(site.differentials_list).toHaveLength(4);
    expect(site.projects).toHaveLength(4);
    expect(site.process.steps).toHaveLength(5);
    expect(site.founders).toHaveLength(2);
    expect(site.stats).toHaveLength(3);
    expect(site.nav).toHaveLength(4);
  });

  it("não deixa nenhum texto vazio", () => {
    const textos = [
      site.brand.name,
      site.brand.tagline,
      site.hero.badge,
      site.hero.title,
      site.hero.subtitle,
      ...site.services_list.flatMap((s) => [s.title, s.description]),
      ...site.differentials_list.flatMap((d) => [d.title, d.description]),
      ...site.projects.flatMap((p) => [p.tag, p.title, p.description]),
      ...site.process.steps.flatMap((s) => [s.number, s.title, s.description]),
      ...site.founders.flatMap((f) => [f.name, f.role, f.quote, f.education]),
      ...site.stats.flatMap((s) => [s.value, s.label]),
    ];
    for (const texto of textos) {
      expect(texto.trim().length).toBeGreaterThan(0);
    }
  });

  it("usa acentuação em português (nenhum texto é ASCII puro por engano)", () => {
    const comAcento = [
      site.hero.title,
      site.services_list[0]!.description,
      site.process.title,
    ];
    expect(comAcento.some((t) => /[áàâãéêíóôõúç]/i.test(t))).toBe(true);
  });

  it("numera as etapas do processo de 01 a 05", () => {
    expect(site.process.steps.map((s) => s.number)).toEqual([
      "01",
      "02",
      "03",
      "04",
      "05",
    ]);
  });

  it("expõe o telefone do WhatsApp só com dígitos", () => {
    expect(site.contact.whatsapp).toMatch(/^\d{12,13}$/);
  });
});
