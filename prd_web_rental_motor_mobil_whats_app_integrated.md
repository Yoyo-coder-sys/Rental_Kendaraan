# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Web Rental Motor & Mobil (Terintegrasi WhatsApp)

---

## 1. Overview
Aplikasi web ini bertujuan untuk mempermudah proses penyewaan motor dan mobil secara online dengan integrasi langsung ke WhatsApp sebagai channel komunikasi utama antara pelanggan dan admin.

Target user:
- Customer (penyewa)
- Admin (pemilik rental)

Value utama:
- Booking cepat tanpa login rumit
- Komunikasi langsung via WhatsApp
- Manajemen kendaraan & transaksi sederhana

---

## 2. Requirements

### Functional Requirements
- User dapat melihat daftar kendaraan
- User dapat melihat detail kendaraan
- User dapat melakukan booking
- Sistem mengirim data booking ke WhatsApp admin
- Admin dapat mengelola kendaraan (CRUD)
- Admin dapat melihat daftar booking

### Non-Functional Requirements
- Responsive (mobile-first)
- Fast load (< 3 detik)
- Secure (basic auth & validation)
- Scalability untuk 100-1000 user awal

---

## 3. Core Features

### 3.1 Landing Page
- Hero section
- List kendaraan terbaru
- CTA ke WhatsApp

### 3.2 Vehicle Listing
- Filter (jenis: motor/mobil)
- Filter harga
- Search

### 3.3 Vehicle Detail
- Foto kendaraan
- Deskripsi
- Harga per hari
- Tombol "Booking via WhatsApp"

### 3.4 Booking System
- Input:
  - Nama
  - No WhatsApp
  - Tanggal sewa
  - Durasi
- Generate pesan otomatis ke WhatsApp admin

Contoh pesan:
"Halo, saya ingin booking mobil:
Nama: ...
Kendaraan: ...
Tanggal: ...
Durasi: ..."

### 3.5 Admin Dashboard
- Login
- CRUD kendaraan
- Lihat daftar booking

---

## 4. User Flow

### Customer Flow
1. Buka website
2. Lihat daftar kendaraan
3. Klik detail kendaraan
4. Isi form booking
5. Klik tombol WhatsApp
6. Redirect ke WhatsApp dengan pesan auto
7. Admin lanjutkan manual

### Admin Flow
1. Login
2. Tambah/edit/hapus kendaraan
3. Terima chat WhatsApp
4. Konfirmasi booking manual

---

## 5. Architecture

### High Level Architecture
- Frontend: React.js
- Backend: Node.js (Express)
- Database: PostgreSQL
- Integration: WhatsApp API (wa.me link)

Flow:
Client → Frontend → Backend → Database
                       ↓
                  WhatsApp Link

---

## 6. Sequence Diagram

### Booking Flow
1. User buka halaman detail
2. User isi form
3. Frontend generate URL WhatsApp
4. User klik tombol
5. Redirect ke WhatsApp
6. Admin menerima pesan

Pseudo sequence:
User → Frontend → Generate Message → Redirect WA → Admin

---

## 7. Database Schema

### Users (Admin)
- id
- username
- password

### Vehicles
- id
- name
- type (motor/mobil)
- price_per_day
- description
- image_url
- created_at

### Bookings
- id
- name
- phone
- vehicle_id
- start_date
- duration
- created_at

Relasi:
- 1 Vehicle : Many Bookings

---

## 8. Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### Tools & Deployment
- Git & GitHub
- Vercel (frontend)
- Railway / Render (backend + DB)

### Why this stack?
- Banyak resource (YouTube, dokumentasi)
- Mudah dipelajari
- Cocok untuk fullstack beginner–intermediate



## Kesimpulan
Aplikasi ini fokus ke simplicity dan speed, bukan automation penuh. WhatsApp dijadikan core communication channel untuk menghindari kompleksitas sistem pembayaran dan verifikasi otomatis.

"Sistem yang sederhana tapi dipakai lebih berharga daripada sistem kompleks yang tidak pernah selesai dibuat."

