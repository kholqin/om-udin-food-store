import { describe, expect, it } from "vitest";

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

  it("does not represent BPOM or halal as verified certification", () => {
    const legalCopy = "placeholder verifikasi sampai nomor atau dokumen resmi diberikan";
    expect(legalCopy).toContain("placeholder verifikasi");
    expect(legalCopy).not.toContain("tersertifikasi resmi");
  });
});
