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

Workflow `.github/workflows/deploy-pages.yml` membangun folder `dist/public` dan menerbitkannya ke GitHub Pages pada setiap push ke branch `main`. URL website yang benar adalah `https://kholqin.github.io/om-udin-food-store/`; URL repository `https://github.com/kholqin/om-udin-food-store` bukan URL untuk membuka website. GitHub Pages bersifat hosting statis; route backend tRPC dan checkout Shopify paling lengkap berjalan pada deployment project utama. Jika checkout interaktif diperlukan di domain Pages, gunakan endpoint backend publik yang aman atau arahkan pelanggan ke deployment utama.

## Verifikasi CTA WhatsApp

CTA hero **“Pesan Sekarang”** menggunakan anchor `href={WHATSAPP_URL}` di `client/src/pages/Home.tsx`. Nilai `WHATSAPP_URL` berasal dari `client/src/lib/contactConfig.ts` dan diarahkan ke `https://wa.me/6282282588191` dengan pesan awal ter-encode. Assertion terkait tersedia di `server/om-udin-content.test.ts`. Tampilan CTA sudah diperiksa pada breakpoint desktop 1280×720 dan mobile 390×844; tombol tetap terbaca dan mudah dijangkau.

## Verifikasi WhatsApp per Menu

Setiap `ProductCard` merender anchor `href={getProductWhatsAppUrl(product.title)}` dengan label aksesibel `Pesan {product.title} via WhatsApp`. Helper tersebut mengarah ke nomor `6282282588191` dan mengisi nama menu pada pesan yang ter-encode. Assertion implementasinya tersedia di `server/om-udin-content.test.ts`. Tombol per kartu sudah diperiksa pada breakpoint mobile 390×844; tombol tetap terlihat, dapat ditekan, dan tidak menutupi harga maupun tombol `Tambah`.

## Lisensi

MIT License. Logo dan aset brand OM UDIN tetap menjadi milik pemilik usaha.

## Musik Latar

Website menggunakan musik original/royalty-free OM UDIN yang diputar setelah pengunjung menekan tombol Play. Pemutar menyediakan pause, mute, dan volume. Autoplay bersuara sebelum interaksi serta pemutaran yang tidak bisa dihentikan tidak dipaksakan karena dapat diblokir browser dan tidak ramah aksesibilitas.
