# 🚀 on4t-tiktok-cli

CLI Tools berbasis **Node.js** untuk melakukan request **Free TikTok Views & Likes**
melalui website **on4t.com** secara otomatis menggunakan terminal.

Tools ini dibuat sebagai **media pembelajaran automation, scraping, dan anti-bot handling**
(mengambil CSRF token, cookie, dan Cloudflare Turnstile).

---

## ⚠️ DISCLAIMER (WAJIB BACA)

Project ini dibuat **HANYA untuk tujuan edukasi dan penggunaan pribadi**.

- Tidak menjamin views / likes benar-benar bertambah
- Tidak menjamin hasil permanen
- Bisa melanggar TOS TikTok / on4t
- Segala risiko (ban, limit, block) **ditanggung pengguna sendiri**

❗ **JANGAN gunakan untuk jasa komersial.**

---

## 🧠 Cara Kerja Singkat

❗ Tools ini **TIDAK berinteraksi langsung dengan TikTok API**.

---

## 🌐 Website yang Digunakan

- https://on4t.com
- Fitur: TikTok Video Booster

Endpoint yang dipakai:
- `GET /tiktok-video-booster`
- `POST /free-tiktok-views/video`
- `POST /free-tiktok-views/views`

---

## 📦 Requirements

Pastikan sudah terinstall:

- **Node.js v18+**
- **npm**
- **git**
- Koneksi internet

Cek Node.js:
```bash
node -v

pkg update && pkg upgrade
pkg install nodejs git -y

git clone https://github.com/familylink7801-ctrl/on4t-tiktok-cli.git
cd on4t-tiktok-cli
npm install

chmod +x on4t-cli.js
npm link

on4t https://vt.tiktok.com/VIDEO_ID/

on4t https://vt.tiktok.com/ZSFxxxxx/

