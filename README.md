# OM UDIN — Sempol & Pop Ice

Landing page e-commerce responsif untuk OM UDIN, sebuah usaha street food dengan sempol goreng renyah dan Pop Ice aneka rasa. Tampilan menggunakan React, Tailwind CSS 4, CSS kustom, Framer Motion, dan aset visual brand OM UDIN.

## Fitur

Website ini memiliki hero section dengan logo dan banner, navigasi cepat, katalog menu dengan harga, keranjang Shopify, checkout, bagian **Bahan Bermutu**, delivery online, QRIS, transfer bank, COD, legalitas BPOM/halal sebagai placeholder verifikasi, FAQ, menu mobile, dan animasi interaksi yang menghormati `prefers-reduced-motion`.

## Menjalankan secara lokal

```bash
pnpm install
pnpm dev
```

Pemeriksaan kualitas tersedia melalui:

```bash
pnpm check
pnpm test
```

## Shopify

Katalog, keranjang, dan checkout menggunakan scaffold Storefront API di project. Harga awal preview adalah Rp10.000 untuk Sempol Goreng OM UDIN dan Rp5.000 untuk Pop Ice Aneka Rasa; pemilik dapat mengubah harga, stok, pengiriman, dan pembayaran di Shopify. Store Shopify perlu diklaim melalui Settings → Integrations → Shopify sebelum digunakan sebagai toko produksi.

## Legalitas

Section legalitas sengaja menampilkan area status BPOM dan halal sebagai **placeholder verifikasi**. Website tidak menyatakan sertifikasi resmi sebelum nomor atau dokumen sertifikat diberikan oleh pemilik.

## GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` membangun folder `dist/public` dan menerbitkannya ke GitHub Pages pada setiap push ke branch `main`. GitHub Pages bersifat hosting statis; route backend tRPC dan checkout Shopify paling lengkap berjalan pada deployment project utama. Jika checkout interaktif diperlukan di domain Pages, gunakan endpoint backend publik yang aman atau arahkan pelanggan ke deployment utama.

## Lisensi

MIT License. Logo dan aset brand OM UDIN tetap menjadi milik pemilik usaha.
