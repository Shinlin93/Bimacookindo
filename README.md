# Setara — Cookware Campaign

React + Vite landing page for a premium cookware campaign, built from real
product photography.

## Struktur proyek

```
setara-cookware/
├── index.html              # entry HTML untuk Vite
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx             # render root React
│   ├── App.jsx               # menyusun semua section
│   ├── index.css             # design tokens & layout global
│   ├── hooks/
│   │   └── useReveal.js       # animasi fade-in saat scroll
│   ├── data/
│   │   └── products.js        # data 5 produk (nama, deskripsi, gambar)
│   ├── assets/                 # foto produk asli (jpg)
│   └── components/
│       ├── Navbar.jsx
│       ├── CampaignHero.jsx              # hero kampanye merah + komposisi produk
│       ├── ArchitecturalProductScene.jsx  # 5 produk di atas "plinth" arsitektural
│       ├── CategoryStrip.jsx              # strip kategori putih di bawah hero
│       ├── PromoGrid.jsx                  # 3 kartu + 2 kartu lebar
│       ├── ProductCollection.jsx
│       ├── ProductCard.jsx
│       ├── SecondaryCampaignBanner.jsx    # banner oranye split
│       ├── SocialContent.jsx              # kartu testimoni + gambar editorial
│       ├── icons.jsx                      # ikon outline sederhana (SVG inline)
│       └── Footer.jsx                     # footer dua level
└── README.md
```

Desain ini mengikuti sistem "Warm Campaign Commerce": hero merah jenuh,
tipografi kampanye tebal (Inter Tight 900 untuk display, Manrope untuk body),
kartu promo bersudut membulat, dan footer dua tingkat (merah + charcoal).
Token warna dan radius lengkap ada di bagian `:root` pada `src/index.css`.

## Menjalankan proyek

Membutuhkan [Node.js](https://nodejs.org) (versi 18 ke atas).

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Build untuk produksi

```bash
npm run build
npm run preview
```

Hasil build ada di folder `dist/`.

## Mengubah konten

- **Teks produk** (nama, deskripsi): edit `src/data/products.js`.
- **Foto produk**: ganti file di `src/assets/`, lalu perbarui import di
  `src/data/products.js` (atau file komponen lain yang mengimpor gambar).
- **Warna & tipografi**: semua token warna ada di bagian `:root` pada
  `src/index.css`.
- **Headline & copy hero**: edit langsung di `src/components/Hero.jsx`.
