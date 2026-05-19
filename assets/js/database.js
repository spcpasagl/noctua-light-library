// assets/js/database.js

const DATA_VERSION = "12.0"; // Versi 12: metadata katalogisasi lengkap dari spreadsheet

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

    // ══════════════════════════════════════════════════════════════════════════
    // FILM
    // ══════════════════════════════════════════════════════════════════════════
    {
        "id": "FM001", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "A Man Called Otto",
        "pengarang": "Marc Forster",
        "edisi": "",
        "penerbit": "SF Studio, Playtone, Columbia Pictures",
        "tahunTerbit": "2022",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://i.pinimg.com/originals/ef/ba/93/efba93f63e10c94bd3fa85e9e0ef86e8.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM002", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Hunger Games",
        "pengarang": "Gary Ross",
        "edisi": "",
        "penerbit": "Lionsgate",
        "tahunTerbit": "2012",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://picfiles.alphacoders.com/401/401219.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM003", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "My Neighbor Totoro",
        "pengarang": "Hayao Miyazaki",
        "edisi": "",
        "penerbit": "Studio Ghibli, Inc.",
        "tahunTerbit": "1968",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "5+", "bahasa": "Jepang",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://whats-after-the-movie-ti152.sevalla.storage/movies/my-neighbor-totoro.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM004", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Kiki's Delivery Service",
        "pengarang": "Hayao Miyazaki",
        "edisi": "",
        "penerbit": "Studio Ghibli, Inc.",
        "tahunTerbit": "1989",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "5+", "bahasa": "Jepang",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2023/03/02145053/kikis-delivery-service-poster-Ghibli-scaled.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM005", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Tinggal Meninggal",
        "pengarang": "Savage Steve Holland",
        "edisi": "",
        "penerbit": "A&M Films / CBS Theatrical Films",
        "tahunTerbit": "1985",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://jadwalnonton.com/data/upload/movies/2025/Poster-tinggal-meninggal-3.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM006", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Budi Pekerti",
        "pengarang": "Wregas Bhanuteja",
        "edisi": "",
        "penerbit": "Rekata Studio & Kaninga Pictures",
        "tahunTerbit": "2023",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://assets.techverse.asia/media/2023/11/05/1699188256_65478e20609b1_U3FLAV1pL0Ri7qHz0ojv.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM007", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Avatar",
        "pengarang": "James Cameron",
        "edisi": "",
        "penerbit": "Lightstorm Entertainment",
        "tahunTerbit": "2009",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://image.tmdb.org/t/p/original/8Y7WrRK1iQHEX7UIftBeBMjPjWD.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM008", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "My Stupid Boss",
        "pengarang": "Upi Avianto",
        "edisi": "",
        "penerbit": "Falcon Pictures & Skop Productions",
        "tahunTerbit": "2016",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://farm8.staticflickr.com/7135/26928785186_650ccc3ae5_b.jpg",
        "fileUrl": ""
    },
    {
        "id": "FM009", "jenis": "film", "genre": "lainnya", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Barbie",
        "pengarang": "Greta Gerwig",
        "edisi": "",
        "penerbit": "NB/GG Pictures, Heyday Films, LuckyChap Entertainment, Mattel",
        "tahunTerbit": "2023",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "11+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://posterspy.com/wp-content/uploads/2023/07/Barbie-Poster-by-cineastedesigns_ekran.jpg",
        "fileUrl": ""
    },

    // ══════════════════════════════════════════════════════════════════════════
    // AUDIOBOOK
    // ══════════════════════════════════════════════════════════════════════════
    {
        "id": "AB001", "jenis": "audiobook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Di Bawah Bendera Revolusi",
        "pengarang": "Soekarno",
        "edisi": "2017 edisi revisi terbaru",
        "penerbit": "Kementerian Penerangan",
        "tahunTerbit": "1959",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "16+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-m6e3rmmcin90d3",
        "fileUrl": ""
    },
    {
        "id": "AB002", "jenis": "audiobook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The 7 Habits of Highly Effective People",
        "pengarang": "Stephen R. Covey",
        "edisi": "30th Anniversary Edition",
        "penerbit": "Simon & Schuster Audio",
        "tahunTerbit": "2020",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "17+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://cdn.kobo.com/book-images/8cacc164-4797-47d4-a845-9fe06fbe44fd/1200/1200/False/the-7-habits-of-highly-effective-people-infographics-edition.jpg",
        "fileUrl": ""
    },
    {
        "id": "AB003", "jenis": "audiobook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Becoming",
        "pengarang": "Michelle Obama",
        "edisi": "Unabridged",
        "penerbit": "Penguin Random House Audio Publishing Group",
        "tahunTerbit": "2018",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "12+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://target.scene7.com/is/image/Target/GUEST_aff26ecc-9847-4fe3-8ac7-6e2ada4c32f2?wid=488&hei=488&fmt=pjpeg",
        "fileUrl": ""
    },
    {
        "id": "AB004", "jenis": "audiobook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Harry Potter and The Sorcerer's Stone",
        "pengarang": "J.K. Rowling",
        "edisi": "Unabridged",
        "penerbit": "Listening Library (Random House Audiobooks)",
        "tahunTerbit": "1999",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "8+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://irs.www.warnerbros.com/gallery-jpeg/harry_potter_and_the_sorcerers_stone_posterlarge_1-251772712.jpg",
        "fileUrl": ""
    },

    // ══════════════════════════════════════════════════════════════════════════
    // JURNAL
    // ══════════════════════════════════════════════════════════════════════════
    {
        "id": "JR001", "jenis": "jurnal", "genre": "jurnal-ilmiah", "tipeKoleksi": "referensi", "status": "tersedia",
        "judul": "Analisis Pemanfaatan Aplikasi iPusnas sebagai Sumber Belajar oleh Mahasiswa Ilmu Perpustakaan dan Informasi Islam IAIN Curup",
        "pengarang": "Okky Rizkyantha",
        "edisi": "",
        "penerbit": "Institut Agama Islam Negeri Curup, Indonesia",
        "tahunTerbit": "2024",
        "kotaTerbit": "Curup", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "Perpustakaan Digital, iPusnas", "abstrak": "",
        "gambarSampul": "https://jurnal.radenfatah.ac.id/public/journals/66/submission_22332_19367_coverImage_en.jpg",
        "fileUrl": ""
    },
    {
        "id": "JR002", "jenis": "jurnal", "genre": "jurnal-ilmiah", "tipeKoleksi": "referensi", "status": "tersedia",
        "judul": "Pentingnya Literasi Informasi dalam Menghadapi Tantangan Informasi Palsu (Hoaks)",
        "pengarang": "Sabily Rusdiyanti",
        "edisi": "",
        "penerbit": "",
        "tahunTerbit": "2023",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "15+", "bahasa": "Indonesia",
        "subjek": "Literasi Informasi, Hoaks", "abstrak": "",
        "gambarSampul": "https://jurnal.unived.ac.id/public/journals/19/cover_issue_222_en_US.jpg",
        "fileUrl": ""
    },

    // ══════════════════════════════════════════════════════════════════════════
    // EBOOK — PANDUAN
    // ══════════════════════════════════════════════════════════════════════════
    {
        "id": "EB001", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Step by Step Skripsimu",
        "pengarang": "Ira Mirawati",
        "edisi": "",
        "penerbit": "C-Klik Media",
        "tahunTerbit": "2025",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/product-metas/pbe5ryesi9.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB002", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Bahasa Inggris Sistem 52M Vol.3",
        "pengarang": "Herpinus Simanjuntak",
        "edisi": "Vol.1",
        "penerbit": "Kesaint Blanc",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/sg-11134275-824jj-mfjcx3uo0e8a9d",
        "fileUrl": ""
    },
    {
        "id": "EB003", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Belajar Coding Itu Penting Di Era Revolusi Industri 4.0",
        "pengarang": "Yenni Mulyani",
        "edisi": "",
        "penerbit": "Pustaka Baru Press",
        "tahunTerbit": "2025",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://th.bing.com/th/id/OIP.FJd9mCtKOmEz4w8JETFrGwHaLN?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB004", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "60 Jam Pintar Baca Tanpa Dieja",
        "pengarang": "Yuliana Yusuf",
        "edisi": "",
        "penerbit": "Pustaka Ilham",
        "tahunTerbit": "2018",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse3.mm.bing.net/th/id/OIP.tCzb2Tm9woSRuk3ZyBjvkwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB004B", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Panduan Lengkap Prompt Rahasia Chat GPT: Strategi Praktis Menggunakan Produktivitas, Melipatgandakan Omzet Penjualan, dan Mengoptimalkan Segala Urusan Bisnis",
        "pengarang": "Riandy Kadwi Nugraha",
        "edisi": "",
        "penerbit": "Anak Hebat Indonesia",
        "tahunTerbit": "2025",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse2.mm.bing.net/th/id/OIP.zUSu6evzJvEQravByVjhqAHaKs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB004C", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Seni Mengajar Gen Z dan Gen Alpha: Memahami Karakter dan Kepribadian Sekaligus Pola Asuh Anak Didik agar Siap Menghadapi Tantangan Zaman",
        "pengarang": "Anitalia Stefany Welayana, S.S., M.A.",
        "edisi": "",
        "penerbit": "Araska Publisher",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse1.mm.bing.net/th/id/OIP.tu30t8CbLTCp13nMjT-J9QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB004D", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Panduan Literasi Digital bagi Guru Madrasah",
        "pengarang": "Rahmat Hidayatullah",
        "edisi": "",
        "penerbit": "Penerbit Erlangga",
        "tahunTerbit": "2022",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse4.mm.bing.net/th/id/OIP.nbJGHETeGprbtkgeL6hRZQHaJT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB004E", "jenis": "ebook", "genre": "panduan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Tes PPPK 2022/2023",
        "pengarang": "",
        "edisi": "",
        "penerbit": "",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://imgv2-1-f.scribdassets.com/img/document/631312022/original/2d248c6fc7/1706931238?v=1",
        "fileUrl": ""
    },

    // ── SEJARAH ───────────────────────────────────────────────────────────────
    {
        "id": "EB005", "jenis": "ebook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Sapiens: A Brief History of Humankind",
        "pengarang": "Yuval Noah Harari",
        "edisi": "",
        "penerbit": "Kepustakaan Populer Gramedia",
        "tahunTerbit": "2011",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "15+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://d30a6s96kk7rhm.cloudfront.net/original/readings/978/009/959/9780099590088.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB006", "jenis": "ebook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The History of the Ancient World: From the Earliest Accounts to the Fall of Rome",
        "pengarang": "Susan Wise Bauer",
        "edisi": "",
        "penerbit": "W.W. Norton & Company",
        "tahunTerbit": "2007",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "15+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/71OXQZezcnL._SY385_.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB007", "jenis": "ebook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Bukan 350 Tahun Dijajah",
        "pengarang": "G.J. Resink",
        "edisi": "",
        "penerbit": "Komunitas Bambu",
        "tahunTerbit": "2012",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse2.mm.bing.net/th/id/OIP.le6rLjVK-C_dyxvpIiY_8AHaKX?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB008", "jenis": "ebook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Sejarah Indonesia Masa Kemerdekaan",
        "pengarang": "Aman",
        "edisi": "",
        "penerbit": "Penerbit Ombak",
        "tahunTerbit": "2015",
        "kotaTerbit": "Yogyakarta", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://penerbitombak.com/wp-content/uploads/2017/09/Sejarah-Indonesia-Masa-Kemerdekaan.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB008B", "jenis": "ebook", "genre": "sejarah", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Sejarah Indonesia Modern 1200-2008",
        "pengarang": "M.C. Ricklefs",
        "edisi": "",
        "penerbit": "PT Serambi Ilmu Semesta",
        "tahunTerbit": "2008",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/sg-11134201-22110-v33zawvnc6jvd1@resize_w900_nl.webp",
        "fileUrl": ""
    },

    // ── KEAGAMAAN ─────────────────────────────────────────────────────────────
    {
        "id": "EB009", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Fiqih untuk Pemula: Sebuah Pedoman Belajar Fiqih dalam Kehidupan Sehari-hari",
        "pengarang": "RD. Moch Firdy Adi S",
        "edisi": "",
        "penerbit": "MUEEZA",
        "tahunTerbit": "2020",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/d20bb68266e36b793dbef34994e85145",
        "fileUrl": ""
    },
    {
        "id": "EB010", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Tafsir Al-Misbah M. Quraish Shihab: Kajian atas Amtsal Al-Qur'an",
        "pengarang": "Mahfudz Masduki",
        "edisi": "",
        "penerbit": "Pustaka Pelajar",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/99bdaee501b771a1e1fcea831a67c280",
        "fileUrl": ""
    },
    {
        "id": "EB011", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Purpose Driven Life",
        "pengarang": "Rick Warren",
        "edisi": "Terjemahan",
        "penerbit": "Immanuel Publishing House",
        "tahunTerbit": "2013",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/61tn9-LR-7L.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB012", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Knowing God",
        "pengarang": "J.I. Packer",
        "edisi": "",
        "penerbit": "InterVarsity Press",
        "tahunTerbit": "1973",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "18+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/81lOBe3RO5L._SL1500_.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB013", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Katekismus Gereja Katolik",
        "pengarang": "Takhta Suci Vatikan",
        "edisi": "",
        "penerbit": "",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://komkat-kwi.org/wp-content/uploads/2014/10/Kompendium-KGK.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB014", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Laudato Si'",
        "pengarang": "Paus Fransiskus",
        "edisi": "",
        "penerbit": "Departemen Dokumentasi dan Penerangan Konferensi WaliGereja Indonesia",
        "tahunTerbit": "2015",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://www.keuskupansurabaya.org/media/contents/Seri-Dokumen-Gerejawi-No-98-LAUDATO-SI-1-1_45XFtnL.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB015", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Bhagavad Gita Kitab Kehidupan Luhur Manusia Sepanjang Masa",
        "pengarang": "S. Radhakrishnan",
        "edisi": "",
        "penerbit": "IRCiSoD",
        "tahunTerbit": "2025",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/id-11134207-7rbka-m6r22afztv8h90",
        "fileUrl": ""
    },
    {
        "id": "EB015B", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Sarasamuccaya",
        "pengarang": "",
        "edisi": "",
        "penerbit": "",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://www.pustaka-bpkxii.org/sites/default/files/gambar/cover/2017/sarasamuccaya.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB015C", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dhammapada",
        "pengarang": "",
        "edisi": "",
        "penerbit": "Yayasan Dhammadipa Arama",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "Semua usia", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://www.vajra.id/uploads/blog/Screenshot_2023-08-18_100242.png",
        "fileUrl": ""
    },
    {
        "id": "EB015D", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Jataka Tales (Kisah-Kisah Jataka)",
        "pengarang": "",
        "edisi": "",
        "penerbit": "",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://harpercollins.co.in/book-cover/PowerPoint_jpg/9789356990159.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB015E", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Confucius Says",
        "pengarang": "Veronica Li",
        "edisi": "",
        "penerbit": "",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "15+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://th.bing.com/th/id/R.508d6f3cc28ef22a770818bcad4d2558?rik=UWqOqheq%2bb2BUg&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9781622460175_p0_v2_s1200x630.jpg&ehk=9k9wCjpcPtVP5z6P7d4TtLftED1WPohP7tVR0nTxjfc%3d&risl=&pid=ImgRaw&r=0",
        "fileUrl": ""
    },
    {
        "id": "EB015F", "jenis": "ebook", "genre": "keagamaan", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Teachings of Confucius",
        "pengarang": "Daniel Willey",
        "edisi": "",
        "penerbit": "",
        "tahunTerbit": "",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "15+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/51IeNYxeGyL.jpg",
        "fileUrl": ""
    },

    // ── SELF-IMPROVEMENT ──────────────────────────────────────────────────────
    {
        "id": "EB016", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Sebuah Seni untuk Bersikap Bodo Amat",
        "pengarang": "Mark Manson",
        "edisi": "Terjemahan",
        "penerbit": "Gramedia",
        "tahunTerbit": "2018",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-452-698-6",
        "nomorPanggil": "155.25 MAN s",
        "sasaranUsia": "18+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://archive.org/services/img/sebuah-seni-untuk-bersikap-bodo-amat-by-mark-manson-1-1",
        "fileUrl": ""
    },
    {
        "id": "EB017", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Filosofi Teras",
        "pengarang": "Henry Manampiring",
        "edisi": "Cetakan pertama 2019",
        "penerbit": "Kompas",
        "tahunTerbit": "2018",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-412-518-9",
        "nomorPanggil": "171.2 MAN f",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://0.academia-photos.com/attachment_thumbnails/90694922/mini_magick20220905-1-at96yu.png?1662391280",
        "fileUrl": ""
    },
    {
        "id": "EB018", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Self Driving",
        "pengarang": "Rhenald Kasali",
        "edisi": "Edisi Republish",
        "penerbit": "Mizan",
        "tahunTerbit": "2014",
        "kotaTerbit": "Bandung",
        "isbn": "978-979-433-851-3",
        "nomorPanggil": "158.1 KAS s",
        "sasaranUsia": "20+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/9789794338513_self-driving_menjadi-driver-atau-passenger.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB019", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Atomic Habits",
        "pengarang": "James Clear",
        "edisi": "Terjemahan",
        "penerbit": "Gramedia",
        "tahunTerbit": "2019",
        "kotaTerbit": "Jakarta",
        "isbn": "978-0-7352-1130-8",
        "nomorPanggil": "155.24 CLE a",
        "sasaranUsia": "18+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse2.mm.bing.net/th/id/OIP.pi2zSwrhtO3by0jn_TWZIwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB019B", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Jangan Mau Seumur Hidup Jadi Orang Gajian",
        "pengarang": "Valentino Dinsi",
        "edisi": "",
        "penerbit": "Libri",
        "tahunTerbit": "2004",
        "kotaTerbit": "",
        "isbn": "979-24-5503-5",
        "nomorPanggil": "338.04 VAL j",
        "sasaranUsia": "20+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615242038i/1977768.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB019C", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Power of Kepepet",
        "pengarang": "Jaya Setiabudi",
        "edisi": "",
        "penerbit": "Gramedia",
        "tahunTerbit": "2009",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "20+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://imgv2-2-f.scribdassets.com/img/document/507651979/original/5f36d040ad/1?v=1",
        "fileUrl": ""
    },
    {
        "id": "EB020", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Berani Tidak Disukai",
        "pengarang": "Ichiro Kishimi & Fumitake Koga",
        "edisi": "Terjemahan",
        "penerbit": "Gramedia",
        "tahunTerbit": "2019",
        "kotaTerbit": "Jakarta", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "18+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://down-my.img.susercontent.com/file/id-11134201-23030-kdwvom93ptov45",
        "fileUrl": ""
    },
    {
        "id": "EB021", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "How to Win Friends and Influence People",
        "pengarang": "Dale Carnegie",
        "edisi": "Revisi",
        "penerbit": "Simon & Schuster",
        "tahunTerbit": "1936",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "20+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse1.mm.bing.net/th/id/OIP.OcLzDeOoJPqhrmgnHqoIlgHaL5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB022", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Think and Grow Rich",
        "pengarang": "Napoleon Hill",
        "edisi": "",
        "penerbit": "The Ralston Society",
        "tahunTerbit": "1937",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "20+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse1.mm.bing.net/th/id/OIP.7d99VIfIDhOwiv54B4e4lQHaLb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB022B", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Power of Now",
        "pengarang": "Eckhart Tolle",
        "edisi": "",
        "penerbit": "New World Library",
        "tahunTerbit": "1997",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "25+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://brunomiranda.com/wp-content/uploads/2020/12/71wzP4rL1mL-1160x1783.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB022C", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Law of Attraction",
        "pengarang": "Esther & Jerry Hicks",
        "edisi": "",
        "penerbit": "Hay House",
        "tahunTerbit": "2006",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "20+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse1.mm.bing.net/th/id/OIP.47tNxfVyq_DcwwqWPWFGagHaLJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB022D", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Man's Search for Meaning",
        "pengarang": "Viktor E. Frankl",
        "edisi": "Revisi",
        "penerbit": "Beacon Press",
        "tahunTerbit": "1946",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "20+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse2.mm.bing.net/th/id/OIP.8erEgooCBQdFYZNcLv-8aQHaLx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB022E", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Rich Dad Poor Dad",
        "pengarang": "Robert T. Kiyosaki",
        "edisi": "",
        "penerbit": "Warner Books",
        "tahunTerbit": "1997",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "20+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://clickup.com/blog/wp-content/uploads/2024/03/Rich-Dad-Poor-Dad-cover-768x1152.png",
        "fileUrl": ""
    },
    {
        "id": "EB022F", "jenis": "ebook", "genre": "self-improvement", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "You Are a Badass",
        "pengarang": "Jen Sincero",
        "edisi": "",
        "penerbit": "Running Press",
        "tahunTerbit": "2013",
        "kotaTerbit": "", "isbn": "", "nomorPanggil": "",
        "sasaranUsia": "18+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://www.novelbookcentre.com/wp-content/uploads/2022/11/15-2.jpg",
        "fileUrl": ""
    },

    // ── BIOGRAFI ─────────────────────────────────────────────────────────────
    {
        "id": "EB023", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Habibie & Ainun",
        "pengarang": "Bachruddin Jusuf Habibie",
        "edisi": "",
        "penerbit": "THC Mandiri",
        "tahunTerbit": "2009",
        "kotaTerbit": "Jakarta",
        "isbn": "978-979-1255-13-4",
        "nomorPanggil": "929(598) HAB h",
        "sasaranUsia": "15+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse4.mm.bing.net/th/id/OIP.b3HLOScMxXoOcgZ9q8F91AHaLP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB024", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Soe Hok Gie: Catatan Seorang Demonstran",
        "pengarang": "Soe Hok Gie",
        "edisi": "",
        "penerbit": "LP3ES",
        "tahunTerbit": "1983",
        "kotaTerbit": "Jakarta",
        "isbn": "979-3330-33-3",
        "nomorPanggil": "929(598) GIE s",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1416554142i/1488085.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB025", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Tan Malaka: Bapak Republik yang Dilupakan",
        "pengarang": "Tim Buku TEMPO",
        "edisi": "",
        "penerbit": "Kepustakaan Populer Gramedia",
        "tahunTerbit": "2008",
        "kotaTerbit": "",
        "isbn": "978-602-481-760-2",
        "nomorPanggil": "929(598) TEM t",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse4.mm.bing.net/th/id/OIP.uX5PlvshDUxIJXxIK2Z16AHaKp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB026", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Diary of a Young Girl",
        "pengarang": "Anne Frank",
        "edisi": "e-book",
        "penerbit": "Contact Publishing",
        "tahunTerbit": "1947",
        "kotaTerbit": "",
        "isbn": "978-0-553-57712-9",
        "nomorPanggil": "929(492) FRA t",
        "sasaranUsia": "13+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://image.ebooks.com/cover/211414764.jpg?width=664&height=1000&quality=85",
        "fileUrl": ""
    },
    {
        "id": "EB026B", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Long Walk to Freedom",
        "pengarang": "Nelson Mandela",
        "edisi": "",
        "penerbit": "Little, Brown and Company",
        "tahunTerbit": "1994",
        "kotaTerbit": "",
        "isbn": "978-0-316-54818-2",
        "nomorPanggil": "929(680) NEL l",
        "sasaranUsia": "17+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse1.mm.bing.net/th/id/OIP.qMOq2Hju17DKP-OsfzSOiwHaLp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB026C", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "The Story of My Experiments with Truth",
        "pengarang": "Mahatma Gandhi",
        "edisi": "",
        "penerbit": "Navajivan Publishing",
        "tahunTerbit": "1927",
        "kotaTerbit": "",
        "isbn": "978-0-807-05981-1",
        "nomorPanggil": "929(540) GAN t",
        "sasaranUsia": "16+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/51aq8sVNwDL._SY445_SX342_.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB026D", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "I Am Malala",
        "pengarang": "Malala Yousafzai",
        "edisi": "Hardcover",
        "penerbit": "Little, Brown and Company",
        "tahunTerbit": "2013",
        "kotaTerbit": "",
        "isbn": "978-0-316-32240-9",
        "nomorPanggil": "929(549.1) YOU i",
        "sasaranUsia": "13+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://th.bing.com/th/id/OIP.HXejO50m9KEWHJewv5PLjAHaLD?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB026E", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Leonardo da Vinci",
        "pengarang": "Walter Isaacson",
        "edisi": "",
        "penerbit": "Simon & Schuster",
        "tahunTerbit": "2017",
        "kotaTerbit": "",
        "isbn": "978-1-501-13915-4",
        "nomorPanggil": "929:7(450) ISA l",
        "sasaranUsia": "17+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse2.mm.bing.net/th/id/OIP.M2hcwusFyYgxydLLQHKbOwHaL-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB026F", "jenis": "ebook", "genre": "biografi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Einstein: His Life and Universe",
        "pengarang": "Walter Isaacson",
        "edisi": "",
        "penerbit": "Simon & Schuster",
        "tahunTerbit": "2007",
        "kotaTerbit": "",
        "isbn": "978-0-743-26473-0",
        "nomorPanggil": "929:53 ISA e",
        "sasaranUsia": "17+", "bahasa": "Inggris",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/81aYAGAlP7L._SL1500_.jpg",
        "fileUrl": ""
    },

    // ── DONGENG ───────────────────────────────────────────────────────────────
    {
        "id": "EB027", "jenis": "ebook", "genre": "dongeng", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dongeng 100 Kota",
        "pengarang": "Suprapti & Temu",
        "edisi": "",
        "penerbit": "Laksana",
        "tahunTerbit": "2019",
        "kotaTerbit": "",
        "isbn": "978-602-407-536-1",
        "nomorPanggil": "821.34 SUP d",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse1.mm.bing.net/th/id/OIP.foLkpKkuAMcqS0S7UqIPDQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB028", "jenis": "ebook", "genre": "dongeng", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dongeng Lengkap Kancil",
        "pengarang": "Kak Thifa",
        "edisi": "",
        "penerbit": "Laksana",
        "tahunTerbit": "2020",
        "kotaTerbit": "",
        "isbn": "978-602-407-781-5",
        "nomorPanggil": "821(=20).34 THI d",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/86/MTA-51424033/no-brand_dongeng-lengkap-kancil-kak-thifa_full01.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB029", "jenis": "ebook", "genre": "dongeng", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dongeng Dari Negeri Awan",
        "pengarang": "Kak Aini",
        "edisi": "",
        "penerbit": "Lokajaya Media",
        "tahunTerbit": "2024",
        "kotaTerbit": "",
        "isbn": "978-623-89128-2-7",
        "nomorPanggil": "821.34.93 AIN d",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tirtabuanamedia.co.id/wp-content/uploads/2024/10/Dongeng-Dari-Negeri-Awan.png",
        "fileUrl": ""
    },
    {
        "id": "EB030", "jenis": "ebook", "genre": "dongeng", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dongeng Princess 5 Benua",
        "pengarang": "Rifka RN",
        "edisi": "",
        "penerbit": "Laksana",
        "tahunTerbit": "2019",
        "kotaTerbit": "",
        "isbn": "978-602-407-658-0",
        "nomorPanggil": "821.34.93 RIF d",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse3.mm.bing.net/th/id/OIP.KJe6y_9Hlera_gGOmBjULwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB030B", "jenis": "ebook", "genre": "dongeng", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dongeng Si Utan & Teman-Teman",
        "pengarang": "Okta Abriyanti",
        "edisi": "",
        "penerbit": "DIVA PRESS",
        "tahunTerbit": "2022",
        "kotaTerbit": "",
        "isbn": "978-623-293-616-4",
        "nomorPanggil": "821.34.93 OKT d",
        "sasaranUsia": "", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://down-id.img.susercontent.com/file/id-11134275-8224q-mh5v207bo0lq19",
        "fileUrl": ""
    },

    // ── FIKSI ─────────────────────────────────────────────────────────────────
    {
        "id": "EB031", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Kita Pergi Hari Ini: Atau Tempat-Tempat Indah Dalam Mimpi-Mimpi Anak-Anak Baik-Baik",
        "pengarang": "Ziggy Zezsyazeoviennazabrizkie",
        "edisi": "Cetakan Pertama",
        "penerbit": "KPG (Kepustakaan Populer Gramedia)",
        "tahunTerbit": "2021",
        "kotaTerbit": "Jakarta",
        "isbn": "978-623-134-269-0",
        "nomorPanggil": "8218.512.2 ZIG k",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/Kita_Pergi_Hari_Ini-cover-1.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB032", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Iris: Syarat Jatuh Cinta",
        "pengarang": "Inayah Putri",
        "edisi": "Cetakan Pertama",
        "penerbit": "Bentang Pustaka",
        "tahunTerbit": "2018",
        "kotaTerbit": "Yogyakarta",
        "isbn": "978-602-430-349-3",
        "nomorPanggil": "821.512.2 INN i",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://imgv2-1-f.scribdassets.com/img/document/558541338/original/b8262d9b9f/1?v=1",
        "fileUrl": ""
    },
    {
        "id": "EB033", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Petualangan Jack & Piggy Natal",
        "pengarang": "J.K. Rowling",
        "edisi": "Terjemahan",
        "penerbit": "Gramedia Pustaka Utama",
        "tahunTerbit": "2021",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-06-5706-6",
        "nomorPanggil": "821.111 ROW p",
        "sasaranUsia": "9+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/9786020657066_Petualangan_Jack__Piggy_Natal.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB034", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Cantik Itu Luka",
        "pengarang": "Eka Kurniawan",
        "edisi": "Cetakan kedua (GPU)",
        "penerbit": "Gramedia Pustaka Utama",
        "tahunTerbit": "2002",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-03-1258-3",
        "nomorPanggil": "821.512.2 EKA c",
        "sasaranUsia": "20+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/9786020366517_Cantik-Itu-Luka-Hard-Cover---Limited-Edition.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB034B", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Mengapa Luka Tidak Memaafkan Pisau",
        "pengarang": "M. Aan Mansyur",
        "edisi": "Cetakan Pertama",
        "penerbit": "Gramedia Pustaka Utama",
        "tahunTerbit": "2020",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-06-4482-0",
        "nomorPanggil": "821.512.2 AAN m",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://mojokstore.com/wp-content/uploads/2021/12/Mengapa-Luka-Tidak-Memaafkan-Pisau.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB034C", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Malice: Catatan Pembunuhan Sang Novelis",
        "pengarang": "Keigo Higashino",
        "edisi": "Terjemahan (dari Jepang, 1996)",
        "penerbit": "Gramedia Pustaka Utama",
        "tahunTerbit": "2020",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-06-3932-1",
        "nomorPanggil": "821.521.2 HIG m",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://gpu.id/data-gpu/images/img-book/93213/MALICE.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB034D", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Dilan: Dia Adalah Dilanku Tahun 1990",
        "pengarang": "Pidi Baiq",
        "edisi": "Revisi",
        "penerbit": "Pastel Books",
        "tahunTerbit": "2014",
        "kotaTerbit": "",
        "isbn": "978-602-7870-41-3",
        "nomorPanggil": "821.512.2 PID d",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://mojokstore.com/wp-content/uploads/2016/11/Dilan-Dia-Adalah-Dilanku-tahun-1990-Pidi-Baiq-front.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB034E", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Totto-chan: Gadis Cilik di Jendela",
        "pengarang": "Tetsuko Kuroyanagi",
        "edisi": "Terjemahan (dari Jepang, 1981); Edisi Revisi 2019",
        "penerbit": "PT Gramedia Pustaka Utama",
        "tahunTerbit": "2008",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-06-3601-6",
        "nomorPanggil": "821.521 KUR t",
        "sasaranUsia": "7+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse4.mm.bing.net/th/id/OIP.cTMXVsnqNVoS_dET_X9qxAHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB034F", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Laut Bercerita",
        "pengarang": "Leila S. Chudori",
        "edisi": "Cetakan pertama",
        "penerbit": "KPG (Kepustakaan Populer Gramedia)",
        "tahunTerbit": "2017",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-424-694-5",
        "nomorPanggil": "821.512.2 LEI l",
        "sasaranUsia": "18+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB034G", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Funiculi Funiculi",
        "pengarang": "Toshikazu Kawaguchi",
        "edisi": "Terjemahan (dari Jepang)",
        "penerbit": "Gramedia Pustaka Utama",
        "tahunTerbit": "2021",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-06-5040-1",
        "nomorPanggil": "821.521 KAW f",
        "sasaranUsia": "15+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse4.mm.bing.net/th/id/OIP.piHIu84mfr6XeGGtEpsQsgHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB034H", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Musim Yang Tak Sempat Kita Miliki",
        "pengarang": "Rintik Sedu",
        "edisi": "Cetakan Pertama",
        "penerbit": "Gramedia Pustaka Utama",
        "tahunTerbit": "2025",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-06-9509-7",
        "nomorPanggil": "821.512.2 RIN m",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://gpu.id/data-gpu/images/img-book/95097/625172004.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB034I", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Lelaki-Lelaki Tanpa Perempuan",
        "pengarang": "Haruki Murakami",
        "edisi": "Terjemahan (dari Jepang)",
        "penerbit": "KPG (Kepustakaan Populer Gramedia)",
        "tahunTerbit": "2022",
        "kotaTerbit": "Jakarta",
        "isbn": "978-623-134-312-3",
        "nomorPanggil": "821.521 MUR l",
        "sasaranUsia": "21+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://th.bing.com/th/id/OIP.924V9_3WZF8fq7oJrmhpJwHaLj?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB035", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Seporsi Mie Ayam Sebelum Mati",
        "pengarang": "Brian Khrisna",
        "edisi": "Cetakan Pertama",
        "penerbit": "Gramedia Widiasarana Indonesia (Grasindo)",
        "tahunTerbit": "2025",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-05-4219-7",
        "nomorPanggil": "821.512.2 BRI s",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://th.bing.com/th/id/OIP.yaGB65EmRT_7qCXkXMRo2wHaLK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB036", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Keajaiban Toko Kelontong Namiya",
        "pengarang": "Keigo Higashino",
        "edisi": "Terjemahan (dari Jepang, 2012)",
        "penerbit": "PT Gramedia Pustaka Utama",
        "tahunTerbit": "2020",
        "kotaTerbit": "Jakarta",
        "isbn": "978-602-06-3808-9",
        "nomorPanggil": "821.521 HIG k",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1604624536i/55851836.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB037", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Ronggeng Dukuh Paruk",
        "pengarang": "Ahmad Tohari",
        "edisi": "Cetakan Ulang",
        "penerbit": "Gramedia Pustaka Utama",
        "tahunTerbit": "1982",
        "kotaTerbit": "Jakarta",
        "isbn": "978-979-22-9573-6",
        "nomorPanggil": "821.512.2 AHM r",
        "sasaranUsia": "18+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/product-metas/uh0d0g8ukg.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB037B", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Tenggelamnya Kapal Van der Wijck",
        "pengarang": "Hamka",
        "edisi": "Cetakan Ulang",
        "penerbit": "Gema Insani",
        "tahunTerbit": "1939",
        "kotaTerbit": "",
        "isbn": "978-602-250-362-5",
        "nomorPanggil": "821.512.2 HAM t",
        "sasaranUsia": "16+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://tse3.mm.bing.net/th/id/OIP.25kE7NOFCfvPM8EzbLw6PQHaKZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        "fileUrl": ""
    },
    {
        "id": "EB037C", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Bumi Manusia",
        "pengarang": "Pramoedya Ananta Toer",
        "edisi": "Cetakan Ulang",
        "penerbit": "Lentera Dipantara",
        "tahunTerbit": "1980",
        "kotaTerbit": "",
        "isbn": "979-97312-3-X",
        "nomorPanggil": "821.512.2 PRA b",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565658920l/1398034._SY475_.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB037D", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Anak Semua Bangsa",
        "pengarang": "Pramoedya Ananta Toer",
        "edisi": "Cetakan Ulang",
        "penerbit": "Lentera Dipantara",
        "tahunTerbit": "1980",
        "kotaTerbit": "",
        "isbn": "979-97312-4-8",
        "nomorPanggil": "821.512.2 PRA a",
        "sasaranUsia": "17+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://cdn.gramedia.com/uploads/items/anak_semua_bangsa.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB037E", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Laskar Pelangi",
        "pengarang": "Andrea Hirata",
        "edisi": "Cetakan Ulang",
        "penerbit": "Bentang Pustaka",
        "tahunTerbit": "2005",
        "kotaTerbit": "",
        "isbn": "978-979-1227-00-8",
        "nomorPanggil": "821.512.2 HIR l",
        "sasaranUsia": "13+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://www.jtbooks.my/wp-content/uploads/2024/05/COVER-Laskar-Pelangi-600x924.jpg.webp",
        "fileUrl": ""
    },
    {
        "id": "EB037F", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "Telepon Genggam",
        "pengarang": "Joko Pinurbo",
        "edisi": "Cetakan pertama",
        "penerbit": "DIVA Press",
        "tahunTerbit": "2003",
        "kotaTerbit": "",
        "isbn": "979-3274-64-0",
        "nomorPanggil": "821.512.2 JOK t",
        "sasaranUsia": "15+", "bahasa": "Indonesia",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://junaidikhab.files.wordpress.com/2017/10/cover-telepon-genggam.jpg",
        "fileUrl": ""
    },
    {
        "id": "EB037G", "jenis": "ebook", "genre": "fiksi", "tipeKoleksi": "sirkulasi", "status": "tersedia",
        "judul": "No Longer Human",
        "pengarang": "Osamu Dazai",
        "edisi": "Edisi asli Jepang",
        "penerbit": "Chikuma Shobo",
        "tahunTerbit": "1948",
        "kotaTerbit": "",
        "isbn": "978-4-480-42611-8",
        "nomorPanggil": "821.521 DAZ n",
        "sasaranUsia": "18+", "bahasa": "Jepang",
        "subjek": "", "abstrak": "",
        "gambarSampul": "https://m.media-amazon.com/images/I/71ppjr3uJhL._SY522_.jpg",
        "fileUrl": ""
    }
];

const initialPesan = [];

// assets/js/database.js

// Pastikan initialBerita sudah dideklarasikan di bagian atas file bersama array default lainnya
const initialBerita = [
    {
        "id": "BR003",
        "tanggal": "2026-05-12",
        "kategori": "berita", // <-- Tambahan field kategori
        "judul": "Koleksi Baru: 200 E-Book Akses Terbuka Resmi Tersedia",
        "konten": "Dalam rangka memperluas inklusivitas sirkulasi digital, manajemen otomasi perpustakaan resmi menambahkan 200 katalog e-book akses terbuka (Open Access) dari penerbit global terkemuka. Koleksi baru ini mencakup rumpun ilmu komputer dasar, manajemen informasi perpustakaan, panduan pemrograman web, hingga fiksi sastra yang dapat diakses penuh dari rumah lewat menu Katalog OPAC.",
        "gambar": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop"
    },
    {
        "id": "BR002",
        "tanggal": "2026-05-08",
        "kategori": "kegiatan", // <-- Tambahan field kategori
        "judul": "Workshop Literasi Informasi & Pemanfaatan AI",
        "konten": "Noctua Light sukses menyelenggarakan kelas intensif pemanfaatan Generative AI dalam riset akademik secara etis. Kegiatan ini diikuti mahasiswa dan akademisi untuk mengoptimalkan strategi temu balik informasi (Information Retrieval) yang valid menggunakan mesin pencari ilmiah modern, klasifikasi metadata standar, dan evaluasi kredibilitas jurnal internasional tanpa melanggar hak cipta.",
        "gambar": "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2000&auto=format&fit=crop"
    },
    {
        "id": "BR001",
        "tanggal": "2026-05-01",
        "kategori": "berita", // <-- Tambahan field kategori
        "judul": "Perpanjangan Peminjaman Buku Mandiri Melalui Sistem",
        "konten": "Layanan sirkulasi fisik kini semakin praktis! Mulai bulan ini, anggota aktif DigiLib Noctua Light dapat melakukan perpanjangan masa aktif peminjaman buku fisik secara mandiri sebanyak maksimal satu kali klik lewat sistem portal tanpa perlu hadir langsung di meja sirkulasi perpustakaan, asalkan buku tersebut belum melewati batas jatuh tempo 7 hari.",
        "gambar": "" 
    }
];

const DEFAULT_USERS = [
    { username: "adminnl", password: "noctua32333539_", role: "super_admin" },
    { username: "stafnl", password: "light32333539.", role: "staff_admin" }
];

function initStorage() {
    if (!localStorage.getItem("users_perpus")) {
        localStorage.setItem("users_perpus", JSON.stringify(DEFAULT_USERS));
    }
    
    const currentVersion = localStorage.getItem("data_version");
    if (currentVersion !== DATA_VERSION) {
        localStorage.setItem("koleksi_perpus", JSON.stringify(defaultKoleksi));
        localStorage.setItem("pesan_masuk", JSON.stringify(initialPesan));
        localStorage.setItem("data_version", DATA_VERSION);
    }
    
    // PERBAIKAN: Gunakan kondisi IF agar data inputan baru tidak terhapus saat halaman di-refresh
    if (!localStorage.getItem("berita_perpus")) {
        localStorage.setItem("berita_perpus", JSON.stringify(initialBerita));
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
