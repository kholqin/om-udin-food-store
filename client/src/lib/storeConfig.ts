export type PaymentMethod = {
  label: string;
  detail: string;
  icon: "qris" | "transfer" | "cod";
};

export const storeConfig = {
  delivery: {
    enabled: true,
    areaLabel: "Area antar mengikuti jangkauan toko",
    note: "Ongkir dan ketersediaan delivery dikonfirmasi di checkout Shopify.",
  },
  paymentMethods: [
    { label: "QRIS", detail: "Scan cepat dari aplikasi pembayaran", icon: "qris" },
    { label: "Transfer bank", detail: "Konfirmasi lewat checkout toko", icon: "transfer" },
    { label: "COD", detail: "Bayar saat pesanan sampai", icon: "cod" },
  ] satisfies PaymentMethod[],
};
