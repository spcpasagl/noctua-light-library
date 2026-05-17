// assets/js/database.js

const DATA_VERSION = "11.0"; // Versi 11: migrasi koleksi buku fisik → ebook (BK → EB)

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

const defaultKoleksi = [
    // ── FILM ─────────────────────────────────────────────────────────────────
    {
        "id": "FM001", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "A Man Called Otto", "pengarang": "Marc Forster", "edisi": "",
        "penerbit": "SF Studio, Playtone, Columbia Pictures", "tahunTerbit": "2022",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://i.pinimg.com/originals/ef/ba/93/efba93f63e10c94bd3fa85e9e0ef86e8.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM002", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Hunger Games", "pengarang": "Gary Ross", "edisi": "",
        "penerbit": "Lionsgate", "tahunTerbit": "2012",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://picfiles.alphacoders.com/401/401219.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM003", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "My Neighbor Totoro", "pengarang": "Hayao Miyazaki", "edisi": "",
        "penerbit": "Studio Ghibli, Inc.", "tahunTerbit": "1988",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Jepang",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://whats-after-the-movie-ti152.sevalla.storage/movies/my-neighbor-totoro.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM004", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Kiki's Delivery Service", "pengarang": "Hayao Miyazaki", "edisi": "",
        "penerbit": "Studio Ghibli, Inc.", "tahunTerbit": "1989",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Jepang",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2023/03/02145053/kikis-delivery-service-poster-Ghibli-scaled.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM005", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Tinggal Meninggal", "pengarang": "Savage Steve Holland", "edisi": "",
        "penerbit": "A&M Films / CBS Theatrical Films", "tahunTerbit": "1985",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://jadwalnonton.com/data/upload/movies/2025/Poster-tinggal-meninggal-3.jpg",
        "fileUrl": ""
    },
    // ── AUDIOBOOK ─────────────────────────────────────────────────────────────
    {
        "id": "AB001", "jenis": "audiobook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Di Bawah Bendera Revolusi", "pengarang": "Soekarno", "edisi": "2017 edisi revisi terbaru",
        "penerbit": "Kementerian Penerangan", "tahunTerbit": "1959",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-m6e3rmmcin90d3",
        "fileUrl": ""
    },
    {
        "id": "AB002", "jenis": "audiobook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The 7 Habits of Highly Effective People", "pengarang": "Stephen R. Covey", "edisi": "30th Anniversary Edition",
        "penerbit": "Simon & Schuster Audio", "tahunTerbit": "2020",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://cdn.kobo.com/book-images/8cacc164-4797-47d4-a845-9fe06fbe44fd/1200/1200/False/the-7-habits-of-highly-effective-people-infographics-edition.jpg",
        "fileUrl": ""
    },
    {
        "id": "AB003", "jenis": "audiobook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Becoming", "pengarang": "Michelle Obama", "edisi": "Unabridged",
        "penerbit": "Penguin Random House Audio Publishing Group", "tahunTerbit": "2018",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://target.scene7.com/is/image/Target/GUEST_aff26ecc-9847-4fe3-8ac7-6e2ada4c32f2?wid=488&hei=488&fmt=pjpeg",
        "fileUrl": ""
    },
    // ── JURNAL ────────────────────────────────────────────────────────────────
    {
        "id": "JR001", "jenis": "jurnal", "genre": "lainnya", "tipeKoleksi": "referensi", "status": "tersedia",
        "judul": "Dewi Magazine", "pengarang": "", "edisi": "",
        "penerbit": "Dewi Magazine", "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "",
        "fileUrl": "https://www.dewimagazine.com/"
    },
    {
        "id": "JR002", "jenis": "jurnal", "genre": "jurnal-ilmiah", "tipeKoleksi": "referensi", "status": "tersedia",
        "judul": "Analisis Pemanfaatan Aplikasi iPusnas sebagai Sumber Belajar oleh Mahasiswa Ilmu Perpustakaan dan Informasi Islam IAIN Curup",
        "pengarang": "Okky Rizkyantha", "edisi": "",
        "penerbit": "Institut Agama Islam Negeri Curup, Indonesia", "tahunTerbit": "2024",
        "kotaTerbit": "Curup", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "Perpustakaan Digital, iPusnas", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://jurnal.radenfatah.ac.id/public/journals/66/submission_22332_19367_coverImage_en.jpg",
        "fileUrl": ""
    },
    {
        "id": "JR003", "jenis": "jurnal", "genre": "jurnal-ilmiah", "tipeKoleksi": "referensi", "status": "tersedia",
        "judul": "Pentingnya Literasi Informasi dalam Menghadapi Tantangan Informasi Palsu (Hoaks)",
        "pengarang": "Sabily Rusdiyanti", "edisi": "",
        "penerbit": "", "tahunTerbit": "2023",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "Literasi Informasi, Hoaks", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://jurnal.unived.ac.id/public/journals/19/cover_issue_222_en_US.jpg",
        "fileUrl": ""
    },
    // ── EBOOK (migrasi dari koleksi buku fisik) ───────────────────────────────
    {
        "id": "EB001", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Step by Step Skripsimu", "pengarang": "Ira Mirawati", "edisi": "",
        "penerbit": "C-Klik Media", "tahunTerbit": "2025",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/product-metas/pbe5ryesi9.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB002", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Bahasa Inggris Sistem 52M Vol.3", "pengarang": "Herpinus Simanjuntak", "edisi": "Vol.1",
        "penerbit": "Kesaint Blanc", "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/sg-11134275-824jj-mfjcx3uo0e8a9d",
        "fileUrl": ""
    },
    {
        "id": "EB003", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Belajar Coding Itu Penting Di Era Revolusi Industri 4.0", "pengarang": "Yenni Mulyani", "edisi": "",
        "penerbit": "Pustaka Baru Press", "tahunTerbit": "2025",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://th.bing.com/th/id/OIP.FJd9mCtKOmEz4w8JETFrGwHaLN?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB004", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "60 Jam Pintar Baca Tanpa Dieja", "pengarang": "Yuliana Yusuf", "edisi": "",
        "penerbit": "Pustaka Ilham", "tahunTerbit": "2018",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tse3.mm.bing.net/th/id/OIP.tCzb2Tm9woSRuk3ZyBjvkwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB005", "jenis": "ebook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Sapiens: A Brief History of Humankind", "pengarang": "Yuval Noah Harari", "edisi": "",
        "penerbit": "Kepustakaan Populer Gramedia", "tahunTerbit": "2011",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://d30a6s96kk7rhm.cloudfront.net/original/readings/978/009/959/9780099590088.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB006", "jenis": "ebook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The History of the Ancient World: From the Earliest Accounts to the Fall of Rome",
        "pengarang": "Susan Wise Bauer", "edisi": "",
        "penerbit": "W.W. Norton & Company", "tahunTerbit": "2007",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/71OXQZezcnL._SY385_.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB007", "jenis": "ebook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Bukan 350 Tahun Dijajah", "pengarang": "G.J. Resink", "edisi": "",
        "penerbit": "Komunitas Bambu", "tahunTerbit": "2012",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tse2.mm.bing.net/th/id/OIP.le6rLjVK-C_dyxvpIiY_8AHaKX?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB008", "jenis": "ebook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Sejarah Indonesia Masa Kemerdekaan", "pengarang": "Aman", "edisi": "",
        "penerbit": "Penerbit Ombak", "tahunTerbit": "2015",
        "kotaTerbit": "Yogyakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://penerbitombak.com/wp-content/uploads/2017/09/Sejarah-Indonesia-Masa-Kemerdekaan.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB009", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Fiqih untuk Pemula: Sebuah Pedoman Belajar Fiqih dalam Kehidupan Sehari-hari",
        "pengarang": "RD. Moch Firdy Adi S", "edisi": "",
        "penerbit": "MUEEZA", "tahunTerbit": "2020",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/d20bb68266e36b793dbef34994e85145",
        "fileUrl": ""
    },
    {
        "id": "EB010", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Tafsir Al-Misbah M. Quraish Shihab: Kajian atas Amtsal Al-Qur'an",
        "pengarang": "Mahfudz Masduki", "edisi": "",
        "penerbit": "Pustaka Pelajar", "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/99bdaee501b771a1e1fcea831a67c280",
        "fileUrl": ""
    },
    {
        "id": "EB011", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Purpose Driven Life", "pengarang": "Rick Warren", "edisi": "Terjemahan",
        "penerbit": "Immanuel Publishing House", "tahunTerbit": "2013",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/61tn9-LR-7L.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB012", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Knowing God", "pengarang": "J.I. Packer", "edisi": "",
        "penerbit": "InterVarsity Press", "tahunTerbit": "1973",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/81lOBe3RO5L._SL1500_.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB013", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Katekismus Gereja Katolik", "pengarang": "Takhta Suci Vatikan", "edisi": "",
        "penerbit": "", "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://komkat-kwi.org/wp-content/uploads/2014/10/Kompendium-KGK.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB014", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Laudato Si'", "pengarang": "Paus Fransiskus", "edisi": "",
        "penerbit": "Departemen Dokumentasi dan Penerangan Konferensi WaliGereja Indonesia", "tahunTerbit": "2015",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://www.keuskupansurabaya.org/media/contents/Seri-Dokumen-Gerejawi-No-98-LAUDATO-SI-1-1_45XFtnL.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB015", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Bhagavad Gita Kitab Kehidupan Luhur Manusia Sepanjang Masa",
        "pengarang": "S. Radhakrishnan", "edisi": "",
        "penerbit": "IRCiSoD", "tahunTerbit": "2025",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/id-11134207-7rbka-m6r22afztv8h90",
        "fileUrl": ""
    },
    {
        "id": "EB016", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Sebuah Seni untuk Bersikap Bodo Amat", "pengarang": "Mark Manson", "edisi": "Terjemahan",
        "penerbit": "Gramedia", "tahunTerbit": "2018",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://archive.org/services/img/sebuah-seni-untuk-bersikap-bodo-amat-by-mark-manson-1-1",
        "fileUrl": ""
    },
    {
        "id": "EB017", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Filosofi Teras", "pengarang": "Henry Manampiring", "edisi": "",
        "penerbit": "Kompas", "tahunTerbit": "2018",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://0.academia-photos.com/attachment_thumbnails/90694922/mini_magick20220905-1-at96yu.png?1662391280",
        "fileUrl": ""
    },
    {
        "id": "EB018", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Self Driving", "pengarang": "Rhenald Kasali", "edisi": "",
        "penerbit": "Mizan", "tahunTerbit": "2014",
        "kotaTerbit": "Bandung", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/9789794338513_self-driving_menjadi-driver-atau-passenger.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB019", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Atomic Habits", "pengarang": "James Clear", "edisi": "Terjemahan",
        "penerbit": "Gramedia", "tahunTerbit": "2019",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tse2.mm.bing.net/th/id/OIP.pi2zSwrhtO3by0jn_TWZIwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB020", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Berani Tidak Disukai", "pengarang": "Ichiro Kishimi & Fumitake Koga", "edisi": "Terjemahan",
        "penerbit": "Gramedia", "tahunTerbit": "2019",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://down-my.img.susercontent.com/file/id-11134201-23030-kdwvom93ptov45",
        "fileUrl": ""
    },
    {
        "id": "EB021", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "How to Win Friends and Influence People", "pengarang": "Dale Carnegie", "edisi": "Revisi",
        "penerbit": "Simon & Schuster", "tahunTerbit": "1936",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tse1.mm.bing.net/th/id/OIP.OcLzDeOoJPqhrmgnHqoIlgHaL5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB022", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Think and Grow Rich", "pengarang": "Napoleon Hill", "edisi": "",
        "penerbit": "The Ralston Society", "tahunTerbit": "1937",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tse1.mm.bing.net/th/id/OIP.7d99VIfIDhOwiv54B4e4lQHaLb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB023", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Habibie & Ainun", "pengarang": "Bachruddin Jusuf Habibie", "edisi": "",
        "penerbit": "THC Mandiri", "tahunTerbit": "2009",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tse4.mm.bing.net/th/id/OIP.b3HLOScMxXoOcgZ9q8F91AHaLP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB024", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Soe Hok Gie: Catatan Seorang Demonstran", "pengarang": "Soe Hok Gie", "edisi": "",
        "penerbit": "LP3ES", "tahunTerbit": "1983",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1416554142i/1488085.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB025", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Tan Malaka: Bapak Republik yang Dilupakan", "pengarang": "Taufik Adi Susilo", "edisi": "",
        "penerbit": "Garasi", "tahunTerbit": "2008",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tse4.mm.bing.net/th/id/OIP.uX5PlvshDUxIJXxIK2Z16AHaKp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB026", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Diary of a Young Girl", "pengarang": "Anne Frank", "edisi": "",
        "penerbit": "Contact Publishing", "tahunTerbit": "1947",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Inggris",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://image.ebooks.com/cover/211414764.jpg?width=664&height=1000&quality=85",
        "fileUrl": ""
    },
    {
        "id": "EB027", "jenis": "ebook", "genre": "dongeng", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dongeng 100 Kota", "pengarang": "Suprapti & Temu", "edisi": "",
        "penerbit": "Laksana", "tahunTerbit": "2019",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tse1.mm.bing.net/th/id/OIP.foLkpKkuAMcqS0S7UqIPDQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB028", "jenis": "ebook", "genre": "dongeng", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dongeng Lengkap Kancil", "pengarang": "Kak Thifa", "edisi": "",
        "penerbit": "Laksana", "tahunTerbit": "2020",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/86/MTA-51424033/no-brand_dongeng-lengkap-kancil-kak-thifa_full01.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB029", "jenis": "ebook", "genre": "dongeng", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dongeng Dari Negeri Awan", "pengarang": "Kak Aini", "edisi": "",
        "penerbit": "Lokajaya Media", "tahunTerbit": "2024",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tirtabuanamedia.co.id/wp-content/uploads/2024/10/Dongeng-Dari-Negeri-Awan.png",
        "fileUrl": ""
    },
    {
        "id": "EB030", "jenis": "ebook", "genre": "dongeng", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dongeng Princess 5 Benua", "pengarang": "Rifka RN", "edisi": "",
        "penerbit": "Laksana", "tahunTerbit": "2019",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://tse3.mm.bing.net/th/id/OIP.KJe6y_9Hlera_gGOmBjULwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB031", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Kita Pergi Hari Ini: Atau Tempat-Tempat Indah Dalam Mimpi-Mimpi Anak-Anak Baik-Baik",
        "pengarang": "Ziggy Zezsyazeoviennazabrizkie", "edisi": "",
        "penerbit": "KPG (Kepustakaan Populer Gramedia)", "tahunTerbit": "2021",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/Kita_Pergi_Hari_Ini-cover-1.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB032", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Iris: Syarat Jatuh Cinta", "pengarang": "Inayah Putri", "edisi": "",
        "penerbit": "Bentang Pustaka", "tahunTerbit": "2018",
        "kotaTerbit": "Yogyakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://imgv2-1-f.scribdassets.com/img/document/558541338/original/b8262d9b9f/1?v=1",
        "fileUrl": ""
    },
    {
        "id": "EB033", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Petualangan Jack & Piggy Natal", "pengarang": "J.K. Rowling", "edisi": "Terjemahan",
        "penerbit": "Gramedia Pustaka Utama", "tahunTerbit": "2021",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/9786020657066_Petualangan_Jack__Piggy_Natal.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB034", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Cantik Itu Luka", "pengarang": "Eka Kurniawan", "edisi": "",
        "penerbit": "Gramedia Pustaka Utama", "tahunTerbit": "2002",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/9786020366517_Cantik-Itu-Luka-Hard-Cover---Limited-Edition.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB035", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Seporsi Mie Ayam Sebelum Mati", "pengarang": "Brian Khrisna", "edisi": "",
        "penerbit": "Gramedia Widiasarana Indonesia (Grasindo)", "tahunTerbit": "2025",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://th.bing.com/th/id/OIP.yaGB65EmRT_7qCXkXMRo2wHaLK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB036", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Keajaiban Toko Kelontong Namiya", "pengarang": "Keigo Higashino", "edisi": "Terjemahan",
        "penerbit": "PT Gramedia Pustaka Utama", "tahunTerbit": "2020",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1604624536i/55851836.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB037", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Ronggeng Dukuh Paruk", "pengarang": "Ahmad Tohari", "edisi": "",
        "penerbit": "Gramedia Pustaka Utama", "tahunTerbit": "1982",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "", "kolase": "", "bahasa": "Indonesia",
        "subjek": "", "nomorKlasifikasi": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/product-metas/uh0d0g8ukg.jpg",
        "fileUrl": ""
    }
];

const initialPesan = [];

const DEFAULT_USERS = [
    { username: "adminnl", password: "noctua32333539_", role: "super_admin" },
    { username: "stafnl", password: "light32333539.", role: "staff_admin" }
];

function initStorage() {
    if (!localStorage.getItem("users_perpus")) {
        localStorage.setItem("users_perpus", JSON.stringify(DEFAULT_USERS));
    }

    // Reset koleksi jika versi berubah atau storage kosong
    const currentVersion = localStorage.getItem("data_version");
    if (currentVersion !== DATA_VERSION || !localStorage.getItem("koleksi_perpus") || JSON.parse(localStorage.getItem("koleksi_perpus")).length === 0) {
        localStorage.setItem("koleksi_perpus", JSON.stringify(defaultKoleksi));
        localStorage.setItem("data_version", DATA_VERSION);
    }

    // Merge anggota dasar jika belum ada
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
