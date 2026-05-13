# Panduan CMS Ngajiin.id

CMS ini adalah halaman admin untuk mengelola artikel Ngajiin.id tanpa perlu membuka kode.

## Cara Membuka

1. Buka `https://ngajiin.web.id/admin/`.
2. Masuk menggunakan akun GitHub yang sudah diberi izin ke repository `ngajiin/ngajiin.github.io`.
3. Pilih menu `Artikel`.

Karena website ini tetap memakai GitHub Pages, CMS tidak menyimpan akun sendiri seperti WordPress. CMS mengirim perubahan artikel ke GitHub, lalu GitHub menerbitkan ulang website secara otomatis.

Untuk tahap awal, tim bisa memakai tombol `Sign In with Token` di halaman login CMS. Token ini dibuat dari akun GitHub masing-masing editor. Jika nanti ingin login yang lebih mudah untuk banyak editor, tim teknis bisa menambahkan OAuth agar tombol login GitHub berjalan seperti aplikasi biasa.

## Cara Membuat Artikel

1. Klik `New Artikel`.
2. Isi judul, deskripsi, penulis, tanggal terbit, kategori, gambar cover, topik, dan isi artikel.
3. Untuk gambar cover, gunakan satu gambar utama artikel.
4. Tulis isi artikel di kolom `Isi Artikel`.
5. Simpan artikel.

## Cara Publikasi

Setelah artikel disimpan, CMS akan membuat perubahan di GitHub. Website akan otomatis dibangun ulang oleh GitHub Actions dan tayang di GitHub Pages setelah proses deploy selesai.

Perubahan biasanya tidak langsung muncul saat tombol simpan ditekan. Tunggu proses deploy selesai, lalu refresh halaman website.

## Hal yang Perlu Diperhatikan

- Satu artikel utama bisa ditandai dengan `Artikel Utama`.
- `Tanggal Terbit` menentukan urutan artikel terbaru.
- `Kategori` tampil sebagai label artikel.
- `Topik` digunakan untuk daftar topik populer.
- Jangan mengubah file selain artikel melalui GitHub jika tidak diperlukan.

## Jika Artikel Tidak Muncul

Periksa tiga hal berikut:

1. Gambar cover sudah diisi.
2. Tanggal terbit sudah benar.
3. Proses deploy GitHub Actions sudah selesai tanpa error.
