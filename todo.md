# Project TODO

- [x] Landing page OM UDIN responsif dengan React, Tailwind CSS, dan CSS kustom
- [x] Hero section dengan logo OM UDIN, banner promosi, CTA “Pesan Sekarang”, dan navigasi cepat
- [x] Katalog menu bergambar dan harga untuk sempol goreng, saus/sambal, serta Pop Ice aneka rasa
- [x] Section “Bahan Bermutu” tentang bahan pilihan, pengolahan higienis, dan penyajian segar
- [x] Animasi hover, klik, kartu menu, CTA, dan menu mobile dengan dukungan prefers-reduced-motion
- [x] Section delivery online dengan konfigurasi antar-pesan dan metode pembayaran QRIS, transfer bank, COD, dan lainnya
- [x] Section legalitas dengan logo OM UDIN dan placeholder verifikasi BPOM/halal tanpa klaim sertifikasi resmi
- [x] Integrasi Shopify untuk katalog, keranjang, checkout, pengiriman, dan metode pembayaran toko pemilik
- [x] Menyimpan aset visual eksternal melalui storage project sesuai aturan deployment
- [x] Menulis pengujian Vitest untuk data katalog, opsi pembayaran, dan alur pemesanan
- [x] Menulis README proyek dan konfigurasi publikasi
- [x] Membuat repository GitHub baru dengan visibilitas public
- [x] Menambahkan konfigurasi build dan workflow GitHub Pages
- [x] Push source code ke repository GitHub public
- [x] Menambahkan workflow GitHub Pages dan memverifikasi workflow tersedia — aktivasi sumber Pages tetap perlu dilakukan pemilik di Settings → Pages karena token GitHub tidak memiliki permission Pages API
- [x] Menyimpan checkpoint final sebelum delivery

## History

- [x] Permintaan repository diubah dari private menjadi public dan target hosting menjadi GitHub Pages

## Catatan Legal

- Status BPOM dan halal ditampilkan sebagai area placeholder verifikasi sampai nomor atau dokumen resmi diberikan.
- Jangan menampilkan ulasan, rating, atau testimonial pelanggan yang dibuat-buat.

- [x] Register commerceRouter dan ekspor env Shopify sesuai referensi integrasi
- [x] Seed maksimal 1–2 produk Shopify untuk preview awal sesuai aturan integrasi
- [x] Verifikasi katalog Shopify melalui probe sebelum UI storefront
- [x] Implementasikan keranjang Shopify menggunakan useCart dan checkoutUrl dari scaffold

## Storefront Upgrade

- [x] Ubah header menjadi navigasi storefront dengan pencarian dan kategori
- [x] Tambahkan filter kategori dan state kosong katalog
- [x] Tingkatkan kartu produk dengan label kategori, harga, dan CTA storefront
- [x] Tambahkan bottom navigation mobile dan kontrol keranjang yang lebih jelas
- [x] Pastikan GitHub Pages build terpicu setelah perubahan dan cek URL deployment — workflow tersedia; aktivasi sumber Pages tetap manual bila belum aktif

## Follow-up Gap Fixes

- [x] Tampilkan chip kategori langsung di header storefront
- [x] Tampilkan label productType eksplisit pada kartu produk
- [x] Verifikasi status deployment GitHub Pages dan dokumentasikan URL atau langkah aktivasi pemilik — workflow build/deploy sukses pada run terakhir; https://kholqin.github.io/om-udin-food-store/ merespons HTTP 200 — https://kholqin.github.io/om-udin-food-store/ merespons HTTP 200

## Product Gallery Assets

- [x] Salin gambar referensi sempol dan Pop Ice ke folder aset web eksternal
- [x] Unggah gambar terpilih ke storage web dan catat URL stabilnya
- [x] Tambahkan galeri responsif dengan lightbox atau preview klik
- [x] Tambahkan gambar produk ke kartu menu dan visual section storefront
- [x] Uji loading aset, responsivitas, dan build setelah galeri ditambahkan

## Gallery-to-Menu Follow-up

- [x] Hubungkan foto referensi baru ke kartu menu berdasarkan kategori produk
- [x] Verifikasi kartu menu desktop dan mobile memakai foto baru dengan proporsi yang benar

## WhatsApp CTA

- [x] Hubungkan tombol “Pesan Sekarang” ke WhatsApp +62 822-8258-8191
- [x] Tambahkan pesan awal pemesanan yang terisi otomatis
- [x] Uji format nomor dan link WhatsApp di build storefront

## WhatsApp Verification Follow-up

- [x] Memisahkan URL WhatsApp ke konfigurasi yang dapat diuji
- [x] Menambahkan assertion nomor dan pesan awal WhatsApp ter-encode
- [x] Memverifikasi CTA WhatsApp pada storefront desktop dan mobile

## WhatsApp CTA Code Evidence

- [x] Tambahkan assertion kode untuk anchor CTA “Pesan Sekarang” dan href WhatsApp terkonfigurasi
- [x] Dokumentasikan evidence CTA UI desktop/mobile melalui test source dan screenshot

## WhatsApp Verification Documentation

- [x] Dokumentasikan selector href CTA WhatsApp dan bukti verifikasi desktop/mobile di README

## WhatsApp Per-Product CTA

- [x] Buat helper URL WhatsApp dengan nama item spesifik
- [x] Tambahkan tombol WhatsApp pada setiap kartu menu
- [x] Uji encoding nama item dan tampilan tombol pada storefront

## WhatsApp Card Evidence

- [x] Tambahkan assertion source untuk anchor WhatsApp pada setiap ProductCard
- [x] Verifikasi tombol WhatsApp per kartu pada storefront mobile dan dokumentasikan hasilnya

## WhatsApp Card Documentation

- [x] Dokumentasikan tombol WhatsApp per kartu menu dan verifikasi mobile di README

## GitHub Pages 404 Fix

- [x] Diagnosis penyebab 404 pada URL GitHub Pages — React hanya memiliki route `/`, sementara Pages berjalan pada basename `/om-udin-food-store/`; cache browser juga menyimpan bundle lama
- [x] Perbaiki base path, fallback, atau workflow yang menyebabkan 404 — menambahkan route basename, fallback 404, dan cache-busting
- [x] Uji URL root dan build deployment setelah perbaikan

## GitHub Pages Fallback Hardening

- [x] Tambahkan fallback 404 yang mengarahkan pengunjung ke halaman utama Pages
- [x] Dokumentasikan URL Pages yang benar agar tidak tertukar dengan URL repository

## GitHub Pages Basename Route

- [x] Tambahkan route storefront untuk basename `/om-udin-food-store/`
- [x] Uji rendering React pada URL root GitHub Pages, bukan hanya status HTTP — browser dengan cache-busting menampilkan Home OM UDIN

## 404 and Music Follow-up

- [x] Pastikan route basename `/om-udin-food-store/` merender Home pada GitHub Pages
- [ ] Tambahkan pemutar audio yang dimulai setelah interaksi pengguna dan memiliki kontrol pause
- [ ] Gunakan audio original/royalty-free atau file berlisensi yang disediakan pemilik
- [ ] Dokumentasikan bahwa autoplay bersuara dan musik yang tidak bisa dihentikan tidak dapat dijamin browser
