// assets/js/database.js

// Naikkan angka ini setiap kali ada perubahan data di file ini
const DATA_VERSION = "2.0";

// ── GENRE / KATEGORI ──────────────────────────────────────────────────────────
// jenis  = format medium : buku | ebook | jurnal | audiobook | film
// genre  = kategori isi  : fiksi | dongeng | biografi | self-improvement |
//                          keagamaan | sejarah | panduan | sains | jurnal-ilmiah | lainnya
// Status SELALU huruf kecil : "tersedia" | "dipinjam"

const GENRE_LIST = [
    "fiksi", "dongeng", "biografi", "self-improvement",
    "keagamaan", "sejarah", "panduan", "sains", "jurnal-ilmiah", "lainnya"
];

const JENIS_PREFIX = {
    buku      : "BK",
    ebook     : "EB",
    jurnal    : "JR",
    audiobook : "AB",
    film      : "FM"
};

const STATUS = { TERSEDIA: "tersedia", DIPINJAM: "dipinjam" };

// ── DATA DEFAULT ──────────────────────────────────────────────────────────────
const defaultKoleksi = [
    {
        id: "BK001", jenis: "buku", genre: "panduan",
        tipeKoleksi: "sirkulasi", status: "tersedia",
        judul: "Pemrograman Web dengan HTML & CSS", pengarang: "John Doe", edisi: "Edisi 2",
        penerbit: "Penerbit Informatika", tahunTerbit: "2022", kotaTerbit: "Jakarta",
        isbn: "978-602-1234-56-7", nomorPanggil: "005.72 DOE p", kolase: "xii, 350 hal",
        bahasa: "Indonesia", subjek: "Pemrograman Web, CSS", nomorKlasifikasi: "005.72",
        abstrak: "Buku ini membahas dasar-dasar HTML5, CSS3, dan JavaScript untuk pengembangan web modern.",
        gambarSampul: "https://placehold.co/300x400/0f3b5f/white?text=HTML+%26+CSS", fileUrl: null
    },
    {
        id: "BK002", jenis: "buku", genre: "panduan",
        tipeKoleksi: "sirkulasi", status: "tersedia",
        judul: "Manajemen Perpustakaan Modern", pengarang: "Hartono Susilo", edisi: "Edisi 1",
        penerbit: "Pustaka Ilmu", tahunTerbit: "2021", kotaTerbit: "Semarang",
        isbn: "978-602-9988-11-2", nomorPanggil: "020 SUS m", kolase: "viii, 210 hal",
        bahasa: "Indonesia", subjek: "Perpustakaan, Manajemen", nomorKlasifikasi: "020",
        abstrak: "Panduan lengkap pengelolaan perpustakaan di era digital.",
        gambarSampul: "https://placehold.co/300x400/1a6b3a/white?text=Manajemen+Perpus", fileUrl: null
    },
    {
        id: "BK003", jenis: "buku", genre: "fiksi",
        tipeKoleksi: "sirkulasi", status: "tersedia",
        judul: "Laskar Pelangi", pengarang: "Andrea Hirata", edisi: "Edisi Revisi",
        penerbit: "Bentang Pustaka", tahunTerbit: "2020", kotaTerbit: "Yogyakarta",
        isbn: "978-602-291-234-5", nomorPanggil: "899.221 HIR l", kolase: "534 hal",
        bahasa: "Indonesia", subjek: "Fiksi, Sastra Indonesia", nomorKlasifikasi: "899.221",
        abstrak: "Novel tentang perjuangan anak-anak Belitung dalam menggapai pendidikan.",
        gambarSampul: "https://placehold.co/300x400/e07b39/white?text=Laskar+Pelangi", fileUrl: null
    },
    {
        id: "BK004", jenis: "buku", genre: "biografi",
        tipeKoleksi: "sirkulasi", status: "tersedia",
        judul: "Habibie & Ainun", pengarang: "B.J. Habibie", edisi: "Edisi 3",
        penerbit: "THC Mandiri", tahunTerbit: "2019", kotaTerbit: "Jakarta",
        isbn: "978-602-123-456-7", nomorPanggil: "920 HAB h", kolase: "xvi, 320 hal",
        bahasa: "Indonesia", subjek: "Biografi, Tokoh Indonesia", nomorKlasifikasi: "920",
        abstrak: "Kisah cinta dan perjuangan B.J. Habibie bersama sang istri.",
        gambarSampul: "https://placehold.co/300x400/8b5e3c/white?text=Habibie+Ainun", fileUrl: null
    },
    {
        id: "BK005", jenis: "buku", genre: "self-improvement",
        tipeKoleksi: "sirkulasi", status: "dipinjam",
        judul: "Atomic Habits", pengarang: "James Clear", edisi: "1st ed.",
        penerbit: "Gramedia", tahunTerbit: "2021", kotaTerbit: "Jakarta",
        isbn: "978-602-03-4567-8", nomorPanggil: "158.1 CLE a", kolase: "320 hal",
        bahasa: "Indonesia", subjek: "Self-Improvement, Kebiasaan", nomorKlasifikasi: "158.1",
        abstrak: "Cara membangun kebiasaan baik dan membuang kebiasaan buruk.",
        gambarSampul: "https://placehold.co/300x400/2b6cb0/white?text=Atomic+Habits", fileUrl: null
    },
    {
        id: "BK006", jenis: "buku", genre: "keagamaan",
        tipeKoleksi: "referensi", status: "tersedia",
        judul: "Tafsir Al-Misbah Vol. 1", pengarang: "M. Quraish Shihab", edisi: "Edisi 2",
        penerbit: "Lentera Hati", tahunTerbit: "2022", kotaTerbit: "Jakarta",
        isbn: "978-979-9194-00-0", nomorPanggil: "297.1226 SHI t", kolase: "xlviii, 712 hal",
        bahasa: "Indonesia", subjek: "Tafsir Al-Quran, Keagamaan", nomorKlasifikasi: "297.1226",
        abstrak: "Tafsir Al-Quran karya Prof. Quraish Shihab dengan pendekatan modern.",
        gambarSampul: "https://placehold.co/300x400/1a5c38/white?text=Tafsir+Al-Misbah", fileUrl: null
    },
    {
        id: "BK007", jenis: "buku", genre: "sejarah",
        tipeKoleksi: "sirkulasi", status: "dipinjam",
        judul: "Bumi Manusia", pengarang: "Pramoedya Ananta Toer", edisi: "Edisi Khusus",
        penerbit: "Lentera Dipantara", tahunTerbit: "2021", kotaTerbit: "Jakarta",
        isbn: "978-979-9000-11-2", nomorPanggil: "899.221 TOE b", kolase: "xii, 535 hal",
        bahasa: "Indonesia", subjek: "Sejarah, Sastra Indonesia", nomorKlasifikasi: "899.221",
        abstrak: "Novel tentang perjuangan bangsa Indonesia di masa kolonial Belanda.",
        gambarSampul: "https://placehold.co/300x400/7c4d00/white?text=Bumi+Manusia", fileUrl: null
    },
    {
        id: "BK008", jenis: "buku", genre: "dongeng",
        tipeKoleksi: "sirkulasi", status: "tersedia",
        judul: "Kumpulan Dongeng Nusantara", pengarang: "Tim Penulis", edisi: "Edisi 4",
        penerbit: "Pustaka Anak", tahunTerbit: "2023", kotaTerbit: "Bandung",
        isbn: "978-602-111-222-3", nomorPanggil: "398.2 TIM k", kolase: "viii, 256 hal",
        bahasa: "Indonesia", subjek: "Dongeng, Cerita Rakyat", nomorKlasifikasi: "398.2",
        abstrak: "Kumpulan dongeng dari berbagai daerah di Indonesia.",
        gambarSampul: "https://placehold.co/300x400/e8a000/white?text=Dongeng+Nusantara", fileUrl: null
    },
    {
        id: "EB001", jenis: "ebook", genre: "sains",
        tipeKoleksi: "referensi", status: "tersedia",
        judul: "Artificial Intelligence Basics", pengarang: "Stuart Russell", edisi: "1st ed.",
        penerbit: "Pearson", tahunTerbit: "2023", kotaTerbit: "London",
        isbn: "978-013-123456-7", nomorPanggil: "006.3 RUS a", kolase: "250 hal",
        bahasa: "Inggris", subjek: "AI, Machine Learning", nomorKlasifikasi: "006.3",
        abstrak: "Pengantar kecerdasan buatan untuk pemula.",
        gambarSampul: "https://placehold.co/300x400/2c7da0/white?text=AI+Basics",
        fileUrl: "https://example.com/ai-basics.pdf"
    },
    {
        id: "EB002", jenis: "ebook", genre: "self-improvement",
        tipeKoleksi: "referensi", status: "tersedia",
        judul: "Deep Work", pengarang: "Cal Newport", edisi: "1st ed.",
        penerbit: "Grand Central Publishing", tahunTerbit: "2022", kotaTerbit: "New York",
        isbn: "978-1-4555-8669-1", nomorPanggil: "153.4 NEW d", kolase: "296 hal",
        bahasa: "Inggris", subjek: "Produktivitas, Fokus", nomorKlasifikasi: "153.4",
        abstrak: "Strategi untuk bekerja dengan fokus maksimal di era distraksi.",
        gambarSampul: "https://placehold.co/300x400/1e3a5f/white?text=Deep+Work",
        fileUrl: "https://example.com/deep-work.pdf"
    },
    {
        id: "EB003", jenis: "ebook", genre: "sains",
        tipeKoleksi: "referensi", status: "tersedia",
        judul: "Python for Data Science", pengarang: "Jake VanderPlas", edisi: "2nd ed.",
        penerbit: "O'Reilly", tahunTerbit: "2023", kotaTerbit: "Sebastopol",
        isbn: "978-1-491-91205-8", nomorPanggil: "005.133 VAN p", kolase: "548 hal",
        bahasa: "Inggris", subjek: "Python, Data Science", nomorKlasifikasi: "005.133",
        abstrak: "Panduan lengkap Python untuk analisis data dan ilmu komputer.",
        gambarSampul: "https://placehold.co/300x400/306998/white?text=Python+Data+Sci",
        fileUrl: "https://example.com/python-ds.pdf"
    },
    {
        id: "JR001", jenis: "jurnal", genre: "jurnal-ilmiah",
        tipeKoleksi: "referensi", status: "tersedia",
        judul: "Jurnal Ilmu Perpustakaan dan Informasi", pengarang: "Tim Redaksi JIPI",
        edisi: "Vol. 8 No. 1", penerbit: "Universitas Diponegoro", tahunTerbit: "2024",
        kotaTerbit: "Semarang", isbn: "2301-5284", nomorPanggil: "020.5 JIP", kolase: "120 hal",
        bahasa: "Indonesia", subjek: "Ilmu Perpustakaan, Informasi", nomorKlasifikasi: "020.5",
        abstrak: "Kumpulan artikel ilmiah bidang perpustakaan dan informasi.",
        gambarSampul: "https://placehold.co/300x400/7c3aed/white?text=Jurnal+JIPI",
        fileUrl: "https://example.com/jipi-vol8.pdf"
    },
    {
        id: "JR002", jenis: "jurnal", genre: "jurnal-ilmiah",
        tipeKoleksi: "referensi", status: "tersedia",
        judul: "Jurnal Teknologi Informasi", pengarang: "Tim Redaksi JTI",
        edisi: "Vol. 12 No. 2", penerbit: "Universitas Diponegoro", tahunTerbit: "2024",
        kotaTerbit: "Semarang", isbn: "2085-3769", nomorPanggil: "004 JTI", kolase: "95 hal",
        bahasa: "Indonesia", subjek: "Teknologi Informasi, Sistem Informasi", nomorKlasifikasi: "004",
        abstrak: "Artikel ilmiah bidang teknologi dan sistem informasi terkini.",
        gambarSampul: "https://placehold.co/300x400/4a1d96/white?text=Jurnal+TI",
        fileUrl: "https://example.com/jti-vol12.pdf"
    },
    {
        id: "AB001", jenis: "audiobook", genre: "self-improvement",
        tipeKoleksi: "referensi", status: "tersedia",
        judul: "The Power of Now - Audiobook", pengarang: "Eckhart Tolle", edisi: "1st ed.",
        penerbit: "New World Library", tahunTerbit: "2021", kotaTerbit: "Novato",
        isbn: "978-1-57731-152-2", nomorPanggil: "158.1 TOL p", kolase: "8 jam 30 menit",
        bahasa: "Inggris", subjek: "Mindfulness, Spiritualitas", nomorKlasifikasi: "158.1",
        abstrak: "Panduan hidup di masa kini dan melepaskan diri dari belenggu pikiran.",
        gambarSampul: "https://placehold.co/300x400/c05621/white?text=Power+of+Now",
        fileUrl: "https://example.com/power-of-now.mp3"
    },
    {
        id: "FM001", jenis: "film", genre: "sejarah",
        tipeKoleksi: "referensi", status: "tersedia",
        judul: "Guru Bangsa: Tjokroaminoto", pengarang: "Garin Nugroho", edisi: "Director's Cut",
        penerbit: "Kharisma Starvision", tahunTerbit: "2019", kotaTerbit: "Jakarta",
        isbn: "-", nomorPanggil: "791.43 NUG g", kolase: "162 menit",
        bahasa: "Indonesia", subjek: "Sejarah Indonesia, Film", nomorKlasifikasi: "791.43",
        abstrak: "Film tentang perjalanan hidup HOS Tjokroaminoto, guru para tokoh nasional.",
        gambarSampul: "https://placehold.co/300x400/6b2737/white?text=Guru+Bangsa",
        fileUrl: "https://example.com/guru-bangsa.mp4"
    }
];

const defaultUsers = [
    { username: "super_admin", password: "admin123", role: "super_admin" },
    { username: "staff_admin", password: "staff123", role: "staff_admin" }
];

const initialAnggota = [
    { noAnggota: "NL0001", nama: "Budi Santoso",  email: "budi@example.com",  noHp: "081234567890", tanggalLahir: "1995-03-10", alamat: "Jl. Mawar No. 1, Jakarta",     tanggalDaftar: "2026-01-15" },
    { noAnggota: "NL0002", nama: "Siti Aminah",   email: "siti@example.com",  noHp: "085678901234", tanggalLahir: "1998-07-22", alamat: "Jl. Melati No. 5, Bandung",   tanggalDaftar: "2026-02-20" },
    { noAnggota: "NL0003", nama: "Rizky Pratama", email: "rizky@example.com", noHp: "089876543210", tanggalLahir: "2000-11-05", alamat: "Jl. Anggrek No. 9, Semarang", tanggalDaftar: "2026-03-01" }
];

const initialPesan = [
    { nama: "Dewi Lestari", email: "dewi@example.com",  pesan: "Apakah ada layanan peminjaman buku referensi?", tanggal: "2026-04-10" },
    { nama: "Ahmad Fauzi",  email: "fauzi@example.com", pesan: "Bagaimana cara memperpanjang masa peminjaman?",  tanggal: "2026-05-02" }
];

// Riwayat pinjam sudah pakai idBuku untuk kembalikan yang aman
const initialRiwayat = [
    { idPinjam: "NLC001", noAnggota: "NL0001", namaPeminjam: "Budi Santoso",  idBuku: "BK001", judulBuku: "Pemrograman Web dengan HTML & CSS", tanggalPinjam: "2026-05-01", status: "dipinjam" },
    { idPinjam: "NLC002", noAnggota: "NL0002", namaPeminjam: "Siti Aminah",   idBuku: "BK005", judulBuku: "Atomic Habits",                     tanggalPinjam: "2026-05-03", status: "kembali"  },
    { idPinjam: "NLC003", noAnggota: "NL0003", namaPeminjam: "Rizky Pratama", idBuku: "BK007", judulBuku: "Bumi Manusia",                       tanggalPinjam: "2026-05-07", status: "dipinjam" }
];

// ── STORAGE ───────────────────────────────────────────────────────────────────
function initStorage() {
    const savedVersion = localStorage.getItem("data_version");

    if (savedVersion !== DATA_VERSION) {
        localStorage.setItem("koleksi_perpus", JSON.stringify(defaultKoleksi));
        localStorage.setItem("users_perpus",   JSON.stringify(defaultUsers));
        localStorage.setItem("members_db",     JSON.stringify(initialAnggota));
        localStorage.setItem("pesan_masuk",    JSON.stringify(initialPesan));
        localStorage.setItem("riwayat_pinjam", JSON.stringify(initialRiwayat));
        localStorage.setItem("data_version",   DATA_VERSION);
        return;
    }

    if (!localStorage.getItem("koleksi_perpus")) localStorage.setItem("koleksi_perpus", JSON.stringify(defaultKoleksi));
    if (!localStorage.getItem("users_perpus"))   localStorage.setItem("users_perpus",   JSON.stringify(defaultUsers));
    if (!localStorage.getItem("members_db"))     localStorage.setItem("members_db",     JSON.stringify(initialAnggota));
    if (!localStorage.getItem("pesan_masuk"))    localStorage.setItem("pesan_masuk",    JSON.stringify(initialPesan));
    if (!localStorage.getItem("riwayat_pinjam")) localStorage.setItem("riwayat_pinjam", JSON.stringify(initialRiwayat));
}

function initDatabase() { initStorage(); }

// ── KOLEKSI CRUD ──────────────────────────────────────────────────────────────
function getAllKoleksi() {
    return JSON.parse(localStorage.getItem("koleksi_perpus")) || [];
}
function saveAllKoleksi(data) {
    localStorage.setItem("koleksi_perpus", JSON.stringify(data));
}

function generateKoleksiId(jenis) {
    const koleksi = getAllKoleksi();
    const prefix  = JENIS_PREFIX[jenis] || "XX";
    let max = 0;
    koleksi
        .filter(i => i.id && i.id.startsWith(prefix))
        .forEach(i => {
            const num = parseInt(i.id.slice(prefix.length));
            if (!isNaN(num) && num > max) max = num;
        });
    return prefix + String(max + 1).padStart(3, "0");
}

// ── DARK MODE ─────────────────────────────────────────────────────────────────
function applyTheme() {
    const dark = localStorage.getItem("dark_mode") === "true";
    document.documentElement.classList.toggle("dark", dark);
}
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("dark_mode", isDark);
    return isDark;
}

// Apply saat script dimuat (sebelum DOM paint agar tidak flash)
applyTheme();

// ── EXPORTS ───────────────────────────────────────────────────────────────────
window.initStorage        = initStorage;
window.initDatabase       = initDatabase;
window.getAllKoleksi       = getAllKoleksi;
window.saveAllKoleksi     = saveAllKoleksi;
window.generateKoleksiId  = generateKoleksiId;
window.initialAnggota     = initialAnggota;
window.initialPesan       = initialPesan;
window.applyTheme         = applyTheme;
window.toggleDarkMode     = toggleDarkMode;
window.GENRE_LIST         = GENRE_LIST;
window.JENIS_PREFIX       = JENIS_PREFIX;
window.STATUS             = STATUS;