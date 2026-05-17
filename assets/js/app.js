// assets/js/app.js

// ── HELPERS ───────────────────────────────────────────────────────────────────
function normalizeString(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/[^a-z0-9\s]/g, '');
}

function matchesSearch(item, searchTerm) {
    if (!searchTerm.trim()) return true;
    const normalizedSearch = normalizeString(searchTerm);
    const fieldsToCheck = [item.judul, item.pengarang, item.penerbit, item.subjek, item.isbn, item.genre];
    return fieldsToCheck.some(field => field && normalizeString(field).includes(normalizedSearch));
}

// Mendukung filter jenis (format) DAN genre (isi)
function filterByJenis(item, filterJenis) {
    if (!filterJenis || filterJenis === 'semua') return true;
    // Cek jenis (format medium)
    const jenisList = ['ebook', 'jurnal', 'audiobook', 'film'];
    if (jenisList.includes(filterJenis)) return item.jenis === filterJenis;
    // Cek genre
    return (item.genre || '').toLowerCase() === filterJenis.toLowerCase();
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
        return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[m];
    });
}

// ── JENIS BADGE CONFIG ────────────────────────────────────────────────────────
// Diupdate: Emoji dihapus agar tampil lebih bersih dan profesional
function getJenisBadge(jenis) {
    const map = {
        ebook     : { cls: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',  icon: '', label: 'E-BOOK'     },
        jurnal    : { cls: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200', icon: '', label: 'JURNAL'   },
        audiobook : { cls: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200', icon: '', label: 'AUDIOBOOK'  },
        film      : { cls: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',          icon: '', label: 'FILM'       },
    };
    return map[jenis] || { cls: 'bg-gray-100 text-gray-800', icon: '', label: (jenis || '').toUpperCase() };
}

// ── MODAL DETAIL OPAC ──────────────────────────────────────────────────────────────
function showDetailModalById(id) {
    const koleksi = getAllKoleksi();
    const item = koleksi.find(i => i.id === id);
    if (!item) return;

    let modal = document.getElementById('detailModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'detailModal';
        // Diupdate: Ditambahkan 'backdrop-blur-sm' agar mem-blur konten di belakangnya
        modal.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm hidden items-center justify-center z-[100] p-4 transition-all duration-300';
        // Diupdate: rounded-2xl dan overflow-hidden agar ujung sudut konsisten melengkung
        modal.innerHTML = `
            <div class="bg-white dark:bg-navy-mid rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-fade-in border border-navy/10 dark:border-white/10">
                <div class="bg-cream dark:bg-navy-dark border-b border-navy/10 dark:border-white/10 px-6 py-4 flex justify-between items-center shrink-0">
                    <h2 class="text-xl font-heading font-bold text-navy dark:text-white">Detail Koleksi</h2>
                    <button id="closeModalBtn" class="text-navy/50 dark:text-white/50 hover:text-navy dark:hover:text-white text-2xl font-bold transition leading-none">&times;</button>
                </div>
                <div id="modalContent" class="p-6 overflow-y-auto"></div>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('closeModalBtn').addEventListener('click', () => {
            modal.classList.add('hidden'); modal.classList.remove('flex');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
        });
    }

    const badge = getJenisBadge(item.jenis);
    const coverUrl = item.gambarSampul || `https://placehold.co/300x400/0f3b5f/white?text=${encodeURIComponent(item.judul?.slice(0,20) || 'Cover')}`;
    const statusClass = item.status === 'tersedia'
        ? 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200'
        : 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200';
    const statusLabel = item.status === 'tersedia' ? 'Tersedia' : 'Dipinjam';

    // Diupdate: Cover image memakai rounded-xl dan struktur dirapikan
    document.getElementById('modalContent').innerHTML = `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/3 shrink-0">
                <img src="${coverUrl}" alt="Cover ${escapeHtml(item.judul)}" class="w-full rounded-xl shadow-md object-cover border border-navy/5 dark:border-white/5" style="aspect-ratio:2/3">
                <div class="mt-4 flex gap-2 flex-wrap justify-center md:justify-start">
                    <span class="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg ${badge.cls}">${badge.label}</span>
                    ${item.genre ? `<span class="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-navy/5 text-navy dark:bg-white/10 dark:text-white/80">${escapeHtml(item.genre)}</span>` : ''}
                </div>
            </div>
            <div class="md:w-2/3 space-y-3 text-sm dark:text-white/80 font-sans">
                <h3 class="text-2xl font-heading font-bold text-navy dark:text-gold-light leading-snug">${escapeHtml(item.judul)}</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-2 border-t border-navy/5 dark:border-white/5">
                    <p><span class="text-navy/50 dark:text-white/50 text-xs block uppercase tracking-widest mb-0.5">Pengarang</span> <span class="font-semibold">${escapeHtml(item.pengarang) || '-'}</span></p>
                    <p><span class="text-navy/50 dark:text-white/50 text-xs block uppercase tracking-widest mb-0.5">Penerbit</span> <span class="font-semibold">${escapeHtml(item.penerbit) || '-'} (${escapeHtml(item.tahunTerbit) || '-'})</span></p>
                    <p><span class="text-navy/50 dark:text-white/50 text-xs block uppercase tracking-widest mb-0.5">ISBN/ISSN</span> <span class="font-semibold">${escapeHtml(item.isbn) || '-'}</span></p>
                    <p><span class="text-navy/50 dark:text-white/50 text-xs block uppercase tracking-widest mb-0.5">Nomor Panggil</span> <span class="font-semibold text-gold-light">${escapeHtml(item.nomorPanggil) || '-'}</span></p>
                </div>
                <div class="pt-2">
                    <p><span class="text-navy/50 dark:text-white/50 text-xs block uppercase tracking-widest mb-1">Abstrak / Sinopsis</span>
                    <span class="text-navy/70 dark:text-white/70 leading-relaxed text-justify block">${escapeHtml(item.abstrak) || '-'}</span></p>
                </div>
                <div class="pt-4 mt-auto flex items-center justify-between border-t border-navy/5 dark:border-white/5 pt-4">
                    <p class="flex items-center gap-2">
                        <span class="text-navy/50 dark:text-white/50 text-xs uppercase tracking-widest">Status:</span>
                        <span class="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${statusClass}">${statusLabel}</span>
                    </p>
                    ${item.fileUrl ? `<a href="${escapeHtml(item.fileUrl)}" target="_blank" class="bg-navy dark:bg-gold text-white dark:text-navy px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition shadow-sm">Akses Digital &rarr;</a>` : ''}
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// ── RENDER KARTU (koleksi.html) ───────────────────────────────────────────────
function renderKoleksi(filterJenis = 'semua', searchTerm = '') {
    const container = document.getElementById('katalog-buku');
    const searchInfo = document.getElementById('search-info');
    if (!container) return;

    let koleksi = (typeof getAllKoleksi === 'function') ? getAllKoleksi() : [];

    let filtered = koleksi.filter(item => filterByJenis(item, filterJenis));
    if (searchTerm && searchTerm.trim()) {
        filtered = filtered.filter(item => matchesSearch(item, searchTerm));
    }

    if (searchInfo) {
        const total = filtered.length;
        const label = filterJenis === 'semua' ? 'semua koleksi' : filterJenis;
        searchInfo.innerHTML = searchTerm.trim()
            ? `Menampilkan <strong>${total}</strong> hasil untuk "<em>${escapeHtml(searchTerm)}</em>" di ${label}`
            : `Menampilkan <strong>${total}</strong> ${label}`;
    }

    if (!filtered.length) {
        container.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">Tidak ada koleksi yang ditemukan.</div>';
        return;
    }

    container.innerHTML = filtered.map(item => {
        const badge = getJenisBadge(item.jenis);
        const statusClass = item.status === 'tersedia'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
        const statusText = item.status === 'tersedia' ? 'Tersedia' : 'Dipinjam';
        const coverUrl = item.gambarSampul || `https://placehold.co/300x400/0f3b5f/white?text=${encodeURIComponent(item.judul?.slice(0,20) || 'Cover')}`;

        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
                <div class="cursor-pointer" data-id="${escapeHtml(item.id)}">
                    <img src="${coverUrl}" alt="Cover ${escapeHtml(item.judul)}" class="w-full object-cover" style="aspect-ratio:2/3">
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <div class="flex justify-between items-start mb-2 flex-wrap gap-1">
                        <span class="text-xs px-2 py-1 rounded-full ${badge.cls}">${badge.label}</span>
                        ${item.genre ? `<span class="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">${escapeHtml(item.genre)}</span>` : ''}
                        <span class="text-xs px-2 py-1 rounded-full ${statusClass}">${statusText}</span>
                    </div>
                    <h3 class="font-bold text-base text-gray-800 dark:text-white line-clamp-2 cursor-pointer hover:text-primary transition" data-id="${escapeHtml(item.id)}">${escapeHtml(item.judul)}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">${escapeHtml(item.pengarang) || 'Tidak diketahui'}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${item.tahunTerbit || ''} | ${item.penerbit || ''}</p>
                    ${item.isbn && item.isbn !== '-' ? `<p class="text-xs text-gray-400 dark:text-gray-500 mt-1">ISBN: ${escapeHtml(item.isbn)}</p>` : ''}
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('[data-id]').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.getAttribute('data-id');
            if (id) showDetailModalById(id);
        });
    });
}

// ── RENDER PREVIEW (index.html) ───────────────────────────────────────────────
function renderPreviewKatalog() {
    const container = document.getElementById('katalog-container');
    if (!container) return;

    const koleksi = (typeof getAllKoleksi === 'function') ? getAllKoleksi() : [];
    const tersedia = koleksi.filter(i => i.status === 'tersedia');
    const preview  = tersedia.slice(0, 8);

    if (!preview.length) {
        container.innerHTML = '<div class="col-span-full text-center py-8 text-gray-500">Belum ada koleksi tersedia.</div>';
        return;
    }

    container.innerHTML = preview.map(item => {
        const badge = getJenisBadge(item.jenis);
        const coverUrl = item.gambarSampul || `https://placehold.co/300x400/0f3b5f/white?text=${encodeURIComponent(item.judul?.slice(0,20) || 'Cover')}`;
        return `
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col cursor-pointer" data-id="${escapeHtml(item.id)}">
                <img src="${coverUrl}" alt="Cover ${escapeHtml(item.judul)}" class="w-full object-cover" style="aspect-ratio:2/3">
                <div class="p-3 flex flex-col flex-grow">
                    <div class="flex gap-1 flex-wrap mb-1">
                        <span class="text-xs px-2 py-0.5 rounded-full ${badge.cls}">${badge.label}</span>
                        ${item.genre ? `<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">${escapeHtml(item.genre)}</span>` : ''}
                    </div>
                    <h3 class="font-semibold text-sm text-gray-800 dark:text-white line-clamp-2">${escapeHtml(item.judul)}</h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${escapeHtml(item.pengarang) || ''}</p>
                </div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('[data-id]').forEach(el => {
        el.addEventListener('click', () => showDetailModalById(el.getAttribute('data-id')));
    });
}

// ── ANGGOTA HELPERS ───────────────────────────────────────────────────────────
function getAllMembers() {
    return JSON.parse(localStorage.getItem("members_db") || "[]");
}
function getMemberByNoAnggota(noAnggota) {
    return getAllMembers().find(m => m.noAnggota === noAnggota) || null;
}

// ── INIT ──────────────────────────────────────────────────────────────────────
function initAppData() {
    if (typeof initStorage === "function") { initStorage(); return; }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('katalog-container')) {
        setTimeout(renderPreviewKatalog, 100);
    }
    if (document.getElementById('katalog-buku')) {
        setTimeout(() => {
            const activeTab = document.querySelector('.tab-active');
            const activeFilter = activeTab ? (activeTab.getAttribute('data-filter') || 'semua') : 'semua';
            const searchInput = document.getElementById('search-input');
            renderKoleksi(activeFilter, searchInput ? searchInput.value : '');
        }, 100);
    }
});

// ── EXPORTS ───────────────────────────────────────────────────────────────────
window.renderKoleksi         = renderKoleksi;
window.renderPreviewKatalog  = renderPreviewKatalog;
window.showDetailModalById   = showDetailModalById;
window.normalizeString       = normalizeString;
window.matchesSearch         = matchesSearch;
window.filterByJenis         = filterByJenis;
window.escapeHtml            = escapeHtml;
window.getJenisBadge         = getJenisBadge;
window.getAllMembers          = getAllMembers;
window.getMemberByNoAnggota  = getMemberByNoAnggota;
window.initAppData           = initAppData;
