import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { galleryImages } from "../client/src/lib/galleryConfig";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER, WHATSAPP_URL, getProductWhatsAppUrl } from "../client/src/lib/contactConfig";

describe("OM UDIN storefront content", () => {
  it("keeps the configured preview prices in Indonesian rupiah", () => {
    const previewPrices = { sempol: 10000, popIce: 5000 };
    expect(previewPrices.sempol).toBeGreaterThan(previewPrices.popIce);
    expect(previewPrices.sempol).toBe(10000);
    expect(previewPrices.popIce).toBe(5000);
  });

  it("supports the requested delivery payment methods", () => {
    const methods = ["QRIS", "Transfer bank", "COD"];
    expect(methods).toEqual(expect.arrayContaining(["QRIS", "Transfer bank", "COD"]));
  });

  it("includes the submitted sempol and Pop Ice gallery assets", () => {
    expect(galleryImages).toHaveLength(13);
    expect(galleryImages.filter((image) => image.tag === "Sempol")).toHaveLength(6);
    expect(galleryImages.filter((image) => image.tag === "Pop Ice")).toHaveLength(7);
    expect(galleryImages.every((image) => image.src.startsWith("https://"))).toBe(true);
  });

  it("points the order CTA to the configured WhatsApp number", () => {
    expect(WHATSAPP_NUMBER).toBe("6282282588191");
    expect(WHATSAPP_URL).toContain("https://wa.me/6282282588191");
    expect(WHATSAPP_URL).toContain(`text=${encodeURIComponent(WHATSAPP_MESSAGE)}`);
  });

  it("creates an item-specific WhatsApp URL for menu cards", () => {
    const url = getProductWhatsAppUrl("Sempol Goreng OM UDIN");
    expect(url).toContain("https://wa.me/6282282588191");
    expect(url).toContain(encodeURIComponent("Sempol Goreng OM UDIN"));
    expect(url).toContain(encodeURIComponent("Mohon info ketersediaannya ya."));
  });

  it("wires the hero order CTA to the WhatsApp URL in the UI source", () => {
    const homeSource = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");
    expect(homeSource).toContain("href={WHATSAPP_URL}");
    expect(homeSource).toContain(">Pesan Sekarang <ArrowRight");
  });

  it("renders a WhatsApp CTA for each product card", () => {
    const homeSource = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");
    expect(homeSource).toContain("href={getProductWhatsAppUrl(product.title)}");
    expect(homeSource).toContain("Pesan ${product.title} via WhatsApp");
  });

  it("includes the controlled original music player", () => {
    const homeSource = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");
    expect(homeSource).toContain("RHuQFzjeUWXOjWqH.mp3");
    expect(homeSource).toContain("audio.play()");
    expect(homeSource).toContain("audio.pause()");
    expect(homeSource).toContain("aria-label=\"Volume musik\"");
  });

  it("registers Home routes for the GitHub Pages basename", () => {
    const appSource = readFileSync(resolve(process.cwd(), "client/src/App.tsx"), "utf8");
    expect(appSource).toContain("<Route path={\"/om-udin-food-store\"} component={Home} />");
    expect(appSource).toContain("<Route path={\"/om-udin-food-store/\"} component={Home} />");
    expect(appSource).toContain("<Route component={Home} />");
  });

  it("keeps the GitHub Pages 404 fallback pointed at the storefront root", () => {
    const fallback404 = readFileSync(resolve(process.cwd(), "client/public/404.html"), "utf8");
    expect(fallback404).toContain("/om-udin-food-store/");
    expect(fallback404).toContain("window.location.replace");
  });

  it("does not represent BPOM or halal as verified certification", () => {
    const legalCopy = "placeholder verifikasi sampai nomor atau dokumen resmi diberikan";
    expect(legalCopy).toContain("placeholder verifikasi");
    expect(legalCopy).not.toContain("tersertifikasi resmi");
  });
});
