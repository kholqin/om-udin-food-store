export const WHATSAPP_NUMBER = "6282282588191";
export const WHATSAPP_MESSAGE = "Halo Om Udin, saya mau pesan sempol dan Pop Ice.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const getProductWhatsAppUrl = (productTitle: string) => {
  const message = `Halo Om Udin, saya mau pesan ${productTitle}. Mohon info ketersediaannya ya.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
