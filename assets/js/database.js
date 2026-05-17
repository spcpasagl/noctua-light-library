// assets/js/database.js

const DATA_VERSION = "10.0"; // Increment version to force local storage override on first load

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

const defaultKoleksi = [];

const initialPesan = [];

const DEFAULT_USERS = [
    { username: "adminnl", password: "noctua32333539_", role: "super_admin" },
    { username: "stafnl", password: "light32333539.", role: "staff_admin" }
];

function initStorage() {
    if (!localStorage.getItem("users_perpus")) {
        localStorage.setItem("users_perpus", JSON.stringify(DEFAULT_USERS));
    }
    
    // Force seed database if version changes or empty
    const currentVersion = localStorage.getItem("data_version");
    if (currentVersion !== DATA_VERSION || !localStorage.getItem("koleksi_perpus") || JSON.parse(localStorage.getItem("koleksi_perpus")).length === 0) {
        localStorage.setItem("koleksi_perpus", JSON.stringify(defaultKoleksi));
        localStorage.setItem("data_version", DATA_VERSION);
    }
    
    // Merge initial Anggota
    let currentAnggota = JSON.parse(localStorage.getItem("members_db") || "[]");
    if (currentAnggota.length === 0 || !currentAnggota.find(m => m.noAnggota === "NL0001")) {
        // Merge missing base members
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
