# 📝 Instructions & Prompt Guide for Antigravity AI Assistant

Dokumen ini berisi panduan dan perintah yang dapat di-copy-paste langsung ke AI Assistant saat Anda memulai percakapan baru untuk melakukan perubahan pada project website **Sweetify**.

---

## 📌 Perintah Utama (Copy & Paste ke AI saat Sesi Baru)

Salin teks di bawah ini dan tempelkan ke kolom chat AI saat Anda membuka percakapan baru:

```text
Halo Antigravity! Saya ingin melakukan perubahan pada project website Sweetify di direktori ini. 

Tolong ikuti panduan berikut:
1. Baca file todo.md untuk memahami alur pengerjaan project Sweetify.
2. Lakukan perubahan pada kode / teks / gambar sesuai permintaan saya.
3. Setelah mengedit, jalankan static export build (`node node_modules/next/dist/bin/next build`).
4. Deploy langsung perubahan ke Netlify (`netlify deploy --prod --dir=out`).
5. Commit dan push perubahan ke GitHub (`git add .`, `git commit -m "...", `git push origin main`).
6. Berikan konfirmasi link live Netlify (https://sweetfy-id.netlify.app) yang sudah ter-update.

Berikut adalah perubahan yang ingin saya lakukan:
[ TULISKAN PERUBAHAN ANDA DI SINI ]
```

---

## 🛠️ Informasi Penting Project

- **Direktori Project**: `c:\Users\USER\Downloads\Techno`
- **Brand**: Sweetify ("Manisnya Momen, Segarnya Hari")
- **Framework**: Next.js 14 + Tailwind CSS + TypeScript
- **URL Website Live**: [https://sweetfy-id.netlify.app](https://sweetfy-id.netlify.app)
- **Repositori GitHub**: [AaronMhsPolitala/sweetfy-website](https://github.com/AaronMhsPolitala/sweetfy-website.git)
- **Lokasi Gambar / Foto**: `public/images/`
- **Pusat Teks & Data**: `src/data/content.ts`

---

## ⚡ Langkah Otomatis AI (Workflow AI)

Ketika Anda meminta perubahan, AI akan secara otomatis:

1. **Mengedit Kode / Data**:
   - Mengedit file terkait di folder `src/components/` atau `src/data/content.ts`.

2. **Verifikasi Build**:
   - Memastikan build static export berhasil tanpa error:
     ```bash
     node node_modules/next/dist/bin/next build
     ```

3. **Deploy ke Netlify**:
   - Mengunggah folder `out/` langsung ke situs live Netlify (`sweetfy-id`):
     ```bash
     netlify deploy --prod --dir=out
     ```

4. **Sinkronisasi ke GitHub**:
   - Memasukkan perubahan ke repositori GitHub:
     ```bash
     git add .
     git commit -m "Deskripsi perubahan"
     git push origin main
     ```

5. **Konfirmasi Hasil**:
   - Memberikan laporan bahwa website live [https://sweetfy-id.netlify.app](https://sweetfy-id.netlify.app) sudah ter-update.
