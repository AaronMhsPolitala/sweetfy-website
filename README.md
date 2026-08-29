# 🍓 Sweetfy Landing Page - Next.js & Netlify

Website resmi **Sweetfy** ("Manisnya Momen, Segarnya Hari") yang dikonversi langsung dari desain **Google Stitch Project ID: 16608170925816018497**.

Dibuat menggunakan **Next.js 14**, **React 18**, **Tailwind CSS**, dan **TypeScript**, serta siap di-deploy secara instan ke **Netlify**.

---

## 🚀 Fitur Utama

- **Desain Presisi Google Stitch**: Mengimplementasikan seluruh token warna (`primary: #02677f`, `secondary: #8a486f`, `tertiary: #1b6b4f`, `surface: #fbf9f8`), tipografi (`Bricolage Grotesque` & `Geist`), dan tata letak persis seperti dalam Google Stitch.
- **Fully Responsive**: Tampilan optimal untuk perangkat Desktop, Tablet, dan Mobile.
- **Pemesanan Langsung via WhatsApp**: Integrasi tombol pemesanan interaktif untuk setiap varian menu (Es Kulkul, Es Teh Original, Es Teh Lychee).
- **Komponen Modular & Reusable**: Komponen terstruktur dengan TypeScript di folder `src/components/`.
- **Interactive Lightbox Gallery**: Fitur galeri foto momen bazar kampus yang dapat diperbesar secara interaktif.
- **Collapsible FAQ Accordion**: Pertanyaan umum yang dapat dibuka/tutup dengan animasi mulus.
- **Siap Deploy ke Netlify**: Dilengkapi file `netlify.toml` dan konfigurasi Next.js yang kompatibel.

---

## 📁 Struktur Folder Project

```text
Techno/
├── public/                     # Static assets (icons, images)
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles & Tailwind directives
│   │   ├── layout.tsx          # Root layout & Google Fonts
│   │   └── page.tsx            # Main landing page
│   ├── components/
│   │   ├── Header.tsx          # Sticky navigation & mobile menu drawer
│   │   ├── Hero.tsx            # Hero section & CTA buttons
│   │   ├── About.tsx           # Story & student counter
│   │   ├── Products.tsx        # Menu cards & category filter
│   │   ├── FeatureBanner.tsx   # Topping options highlight
│   │   ├── WhySweetfy.tsx      # Feature advantage cards
│   │   ├── Gallery.tsx         # Photo grid & Lightbox modal
│   │   ├── Testimonials.tsx    # Campus customer reviews
│   │   ├── FAQ.tsx             # Interactive accordion list
│   │   ├── Location.tsx        # Store address & Google Maps link
│   │   ├── CTABanner.tsx       # Bottom conversion CTA banner
│   │   ├── FloatingWA.tsx      # Sticky floating WhatsApp FAB
│   │   └── Footer.tsx          # Footer navigation & operating hours
│   └── data/
│       └── content.ts          # Structured content & menu data
├── netlify.toml                # Netlify build configuration
├── next.config.mjs             # Next.js image domain configuration
├── tailwind.config.ts          # Stitch design system tokens
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies & build scripts
```

---

## 💻 Cara Menjalankan Secara Lokal

1. **Buka Terminal / Command Prompt** pada direktori project:
   ```bash
   cd c:\Users\USER\Downloads\Techno
   ```

2. **Install Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembang (Development Server)**:
   ```bash
   npm run dev
   ```

4. **Buka Browser**:
   Buka `http://localhost:3000` di browser kamu.

5. **Uji Coba Build Produksi**:
   ```bash
   npm run build
   ```

---

## 🌐 Langkah Deployment ke Netlify

### Opsi A: Deployment Otomatis via GitHub / Git Repository (Direkomendasikan)

1. **Upload project ke GitHub / GitLab / Bitbucket**.
2. **Buka Netlify Dashboard** (`https://app.netlify.com`) dan login.
3. Klik **"Add new site"** -> **"Import an existing project"**.
4. Pilih penyedia Git kamu dan pilih repositori project ini.
5. Netlify akan secara otomatis mendeteksi file `netlify.toml` dan mengatur:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
6. Klik **"Deploy site"**. Netlify akan membuat dan mempublikasikan website kamu dalam kurun waktu 1-2 menit.

---

### Opsi B: Deployment Manual via Netlify CLI

1. Install Netlify CLI (jika belum ada):
   ```bash
   npm install -g netlify-cli
   ```
2. Login ke akun Netlify:
   ```bash
   netlify login
   ```
3. Inisialisasi dan deploy project:
   ```bash
   netlify deploy --build --prod
   ```

---

## 🎨 Token Warna Design System (Google Stitch)

| Token | Warna Hex | Penggunaan |
|---|---|---|
| `primary` | `#02677f` | Snowflake Blue (Tombol utama, aksen logo) |
| `secondary` | `#8a486f` | Strawberry (Badge, teks aksen) |
| `tertiary` | `#1b6b4f` | Melon (Tombol WhatsApp, elemen segar) |
| `background` / `surface` | `#fbf9f8` | Crisp Canvas (Latar belakang utama) |
| `on-surface` | `#1b1c1c` | Soft Charcoal (Teks utama) |
