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

- [ ] Hubungkan foto referensi baru ke kartu menu berdasarkan kategori produk
- [ ] Verifikasi kartu menu desktop dan mobile memakai foto baru dengan proporsi yang benar
