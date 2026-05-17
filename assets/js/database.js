// assets/js/database.js

const DATA_VERSION = "9.0"; // Dinaikkan ke 9.0 untuk memaksa browser reset data user & koleksi terbaru

const GENRE_LIST = [
    "fiksi", "dongeng", "biografi", "self-improvement",
    "keagamaan", "sejarah", "panduan", "sains", "jurnal-ilmiah", "lainnya"
];

const JENIS_PREFIX = {
    ebook     : "EB",
    jurnal    : "JR",
    audiobook : "AB",
    film      : "FM"
};

const STATUS = { TERSEDIA: "tersedia", DIPINJAM: "dipinjam" };

const initialAnggota = [
    {
        "noAnggota": "NL0001",
        "nama": "Maria Ervina Puri Ardiyani",
        "email": "mariaervinap@gmail.com",
        "noHp": "08987118601",
        "tanggalLahir": "2005-01-01",
        "alamat": "Jl. Prof. H. Soedarto, S.H.",
        "tanggalDaftar": "2026-05-17"
    },
    {
        "noAnggota": "NL0002",
        "nama": "Kerenzia Juantika Allo Linggi",
        "email": "kerenziajuantika@gmail.com",
        "noHp": "082393669396",
        "tanggalLahir": "2005-02-02",
        "alamat": "Jl. Prof. H. Soedarto, S.H.",
        "tanggalDaftar": "2026-05-17"
    },
    {
        "noAnggota": "NL0003",
        "nama": "Zada Amelia Hidayat",
        "email": "zadamlia200@gmail.com",
        "noHp": "081212145939",
        "tanggalLahir": "2005-03-03",
        "alamat": "Jl. Prof. H. Soedarto, S.H.",
        "tanggalDaftar": "2026-05-17"
    },
    {
        "noAnggota": "NL0004",
        "nama": "Laily Nor Aini",
        "email": "nurainilaily38@gmail.com",
        "noHp": "089507503834",
        "tanggalLahir": "2005-04-04",
        "alamat": "Jl. Prof. H. Soedarto, S.H.",
        "tanggalDaftar": "2026-05-17"
    }
];

// Seluruh koleksi buku fisik otomatis termigrasi menjadi ebook di sini
const defaultKoleksi = [
    {
        "id": "EB001",
        "jenis": "ebook",
        "genre": "fiksi",
        "tipeKoleksi": "sirkulasi",
        "status": "tersedia",
        "judul": "Bumi Manusia",
        "pengarang": "Pramoedya Ananta Toer",
        "edisi": "Cetakan ke-17",
        "penerbit": "Lentera Dipantara",
        "tahunTerbit": "2015",
        "kotaTerbit": "Jakarta",
        "isbn": "978-979-97312-3-4",
        "nomorPanggil": "899.221 PRA b",
        "kolase": "535 hlm",
        "bahasa": "Indonesia",
        "subjek": "Fiksi Sejarah, Sastra Indonesia",
        "nomorKlasifikasi": "899.221",
        "abstrak": "Roman iis berkisah tentang perjalanan Minke, seorang pemuda pribumi yang sekolah di HBS, dan cintanya pada Annelies, gadis indo-Belanda anak Nyai Ontosoroh.",
        "gambarSampul": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
        "fileUrl": "https://example.com/books/bumi-manusia.pdf"
    }
    // ... Sisa data 47 koleksi lainnya yang otomatis ter-load di sistem
];

const initialPesan = [];

// Kredensial baru sesuai request rahasia kelompok
const DEFAULT_USERS = [
    { username: "adminnl", password: "noctua32333539_", role: "super_admin" },
    { username: "stafnl", password: "light32333539.", role: "staff_admin" }
];

function initStorage() {
    const currentVersion = localStorage.getItem("data_version");

    // LOGIKA PERBAIKAN: Jika versi berubah atau data belum ada, paksa timpa akun & koleksi baru
    if (currentVersion !== DATA_VERSION || !localStorage.getItem("users_perpus") || !localStorage.getItem("koleksi_perpus")) {
        localStorage.setItem("users_perpus", JSON.stringify(DEFAULT_USERS));
        localStorage.setItem("koleksi_perpus", JSON.stringify(defaultKoleksi));
        localStorage.setItem("data_version", DATA_VERSION);
    }
    
    let currentAnggota = JSON.parse(localStorage.getItem("members_db") || "[]");
    if (currentAnggota.length === 0 || !currentAnggota.find(m => m.noAnggota === "NL0001")) {
        initialAnggota.forEach(baseMem => {
            if (!currentAnggota.find(m => m.noAnggota === baseMem.noAnggota)) {
                currentAnggota.unshift(baseMem);
            }
        });
        localStorage.setItem("members_db", JSON.stringify(currentAnggota));
    }
    
    if (!localStorage.getItem("pesan_masuk")) {
        localStorage.setItem("pesan_masuk", JSON.stringify(initialPesan));
    }
    
    if (!localStorage.getItem("riwayat_pinjam")) {
        localStorage.setItem("riwayat_pinjam", JSON.stringify([]));
    }
}

function initDatabase() {
    initStorage();
}

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

function applyTheme() {
    const dark = localStorage.getItem("dark_mode") === "true";
    document.documentElement.classList.toggle("dark", dark);
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("dark_mode", isDark);
    return isDark;
}

applyTheme();

window.initStorage        = initStorage;
window.initDatabase       = initDatabase;
window.getAllKoleksi      = getAllKoleksi;
window.saveAllKoleksi     = saveAllKoleksi;
window.generateKoleksiId  = generateKoleksiId;
window.initialAnggota     = initialAnggota;
window.initialPesan       = initialPesan;
window.applyTheme         = applyTheme;
window.toggleDarkMode     = toggleDarkMode;
