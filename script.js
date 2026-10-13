// База данных игр с 1990 по 2026 гг. (ПК и Консоли)
const gamesDatabase = [
    // 90-е
    { id: 1, title: "Super Mario World", year: 1990, platform: "Nintendo", genre: "Приключения", rating: 9.8, dev: "Nintendo", desc: "Культовый платформер для SNES, ставший эталоном жанра на десятилетия вперёд.", color: "#e11d48", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" },
    { id: 2, title: "Sonic the Hedgehog", year: 1991, platform: "SEGA", genre: "Экшен", rating: 9.3, dev: "SEGA", desc: "Самый быстрый синий ёж в истории видеоигр на легендарной консоли SEGA Mega Drive.", color: "#2563eb", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=600" },
    { id: 3, title: "DOOM", year: 1993, platform: "PC", genre: "Шутер", rating: 9.9, dev: "id Software", desc: "Прародитель жанра 3D-шутеров, перевернувший индустрию ПК-гейминга.", color: "#dc2626", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600" },
    { id: 4, title: "Warcraft: Orcs & Humans", year: 1994, platform: "PC", genre: "Стратегия", rating: 9.0, dev: "Blizzard Entertainment", desc: "Легендарная стратегия в реальном времени, положившая начало великой вселенной.", color: "#ca8a04", image: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?q=80&w=600" },
    { id: 5, title: "Chrono Trigger", year: 1995, platform: "Nintendo", genre: "RPG", rating: 9.9, dev: "Square", desc: "Шедевральная японская ролевая игра с путешествиями во времени.", color: "#9333ea", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600" },
    { id: 6, title: "Resident Evil", year: 1996, platform: "PlayStation", genre: "Хоррор", rating: 9.5, dev: "Capcom", desc: "Игра, которая популяризировала жанр Survival Horror на первой PlayStation.", color: "#16a34a", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600" },
    { id: 7, title: "Final Fantasy VII", year: 1997, platform: "PlayStation", genre: "RPG", rating: 9.8, dev: "Square", desc: "Эпическая RPG, изменившая представление о кинематографичности в видеоиграх.", color: "#0284c7", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600" },
    { id: 8, title: "Half-Life", year: 1998, platform: "PC", genre: "Шутер", rating: 9.7, dev: "Valve", desc: "Инновационный научно-фантастический шутер с сюжетной подачей без загрузочных экранов.", color: "#ea580c", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600" },
    { id: 9, title: "Silent Hill", year: 1999, platform: "PlayStation", genre: "Хоррор", rating: 9.4, dev: "Konami", desc: "Психологический хоррор с неповторимой давящей атмосферой туманного города.", color: "#475569", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600" },

    // 2000-е
    { id: 10, title: "The Sims", year: 2000, platform: "PC", genre: "Приключения", rating: 9.1, dev: "Maxis", desc: "Революционный симулятор реальной человеческой жизни.", color: "#10b981", image: "https://images.unsplash.com/photo-1589241062272-c0a000071dfa?q=80&w=600" },
    { id: 11, title: "Grand Theft Auto III", year: 2001, platform: "PlayStation", genre: "Экшен", rating: 9.6, dev: "DMA Design", desc: "Прорывной трехмерный криминальный экшен в открытом мегаполисе.", color: "#f97316", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600" },
    { id: 12, title: "Warcraft III: Reign of Chaos", year: 2002, platform: "PC", genre: "Стратегия", rating: 9.8, dev: "Blizzard", desc: "Великая стратегия с героями и культовой историей, породившая жанр MOBA.", color: "#6366f1", image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600" },
    { id: 13, title: "Max Payne 2", year: 2003, platform: "PC", genre: "Шутер", rating: 9.5, dev: "Remedy", desc: "Нуарный боевик с механикой замедления времени (Bullet Time).", color: "#334155", image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=600" },
    { id: 14, title: "Grand Theft Auto: San Andreas", year: 2004, platform: "PlayStation", genre: "Экшен", rating: 9.9, dev: "Rockstar Games", desc: "Масштабное приключение Си-Джея в штате Сан-Андреас.", color: "#eab308", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=600" },
    { id: 15, title: "Resident Evil 4", year: 2005, platform: "Nintendo", genre: "Хоррор", rating: 9.6, dev: "Capcom", desc: "Переосмысление сериала с видом из-за плеча, задавшее стандарт экшенов на годы вперед.", color: "#84cc16", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600" },
    { id: 16, title: "The Elder Scrolls IV: Oblivion", year: 2006, platform: "PC", genre: "RPG", rating: 9.4, dev: "Bethesda Game Studios", desc: "Масштабная фэнтезийная ролевая игра в провинции Сиродил.", color: "#a855f7", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600" },
    { id: 17, title: "BioShock", year: 2007, platform: "Xbox", genre: "Шутер", rating: 9.7, dev: "2K Games", desc: "Утопический подводный город Восторг и глубокая философская история.", color: "#06b6d4", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" },
    { id: 18, title: "Grand Theft Auto IV", year: 2008, platform: "PlayStation", genre: "Экшен", rating: 9.5, dev: "Rockstar Games", desc: "Мрачный и реалистичный Либерти-Сити глазами Нико Берика.", color: "#64748b", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600" },
    { id: 19, title: "Uncharted 2: Among Thieves", year: 2009, platform: "PlayStation", genre: "Приключения", rating: 9.6, dev: "Naughty Dog", desc: "Кинематографичный приключенческий экшен с поисками Шамбалы.", color: "#f59e0b", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600" },

    // 2010-е
    { id: 20, title: "Red Dead Redemption", year: 2010, platform: "Xbox", genre: "Приключения", rating: 9.7, dev: "Rockstar Games", desc: "Драматичная история заката эпохи Дикого Запада.", color: "#b45309", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600" },
    { id: 21, title: "The Elder Scrolls V: Skyrim", year: 2011, platform: "PC", genre: "RPG", rating: 9.8, dev: "Bethesda", desc: "Легендарная RPG про драконорожденного в заснеженном Скайриме.", color: "#38bdf8", image: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?q=80&w=600" },
    { id: 22, title: "Far Cry 3", year: 2012, platform: "PC", genre: "Шутер", rating: 9.0, dev: "Ubisoft", desc: "Тропический остров, безумный Ваас Монтенегро и выживание в джунглях.", color: "#14b8a6", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600" },
    { id: 23, title: "Grand Theft Auto V", year: 2013, platform: "PlayStation", genre: "Экшен", rating: 9.8, dev: "Rockstar Games", desc: "Три главных героя и огромный солнечный Лос-Сантос.", color: "#065f46", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600" },
    { id: 24, title: "Dragon Age: Inquisition", year: 2014, platform: "PC", genre: "RPG", rating: 8.9, dev: "BioWare", desc: "Масштабное фэнтезийное приключение во главе Инквизиции.", color: "#7c2d12", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600" },
    { id: 25, title: "The Witcher 3: Wild Hunt", year: 2015, platform: "PC", genre: "RPG", rating: 10.0, dev: "CD Projekt Red", desc: "Признанный шедевр о поисках Цири и монстрах Континента.", color: "#78716c", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600" },
    { id: 26, title: "Battlefield 1", year: 2016, platform: "PC", genre: "Шутер", rating: 9.1, dev: "EA DICE", desc: "Масштабные и зрелищные сражения времен Первой мировой войны.", color: "#991b1b", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600" },
    { id: 27, title: "The Legend of Zelda: Breath of the Wild", year: 2017, platform: "Nintendo", genre: "Приключения", rating: 9.9, dev: "Nintendo", desc: "Беспрецедентная свобода исследования открытого мира Хайрула.", color: "#15803d", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" },
    { id: 28, title: "God of War", year: 2018, platform: "PlayStation", genre: "Экшен", rating: 9.8, dev: "Santa Monica Studio", desc: "Новая глава жизни спартанского бога войны Кратоса в скандинавских мифах.", color: "#1e3a8a", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600" },
    { id: 29, title: "Death Stranding", year: 2019, platform: "PlayStation", genre: "Приключения", rating: 9.0, dev: "Kojima Productions", desc: "Уникальный симулятор курьера в постапокалиптическом мире от Хидео Кодзимы.", color: "#0f172a", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600" },

    // 2020-е
    { id: 30, title: "Cyberpunk 2077", year: 2020, platform: "PC", genre: "RPG", rating: 9.0, dev: "CD Projekt Red", desc: "Неоновый Найт-Сити, киберимпланты и рок-музыкант в голове.", color: "#facc15", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=600" },
    { id: 31, title: "Forza Horizon 5", year: 2021, platform: "Xbox", genre: "Гонки", rating: 9.4, dev: "Playground Games", desc: "Фестиваль скорости в живописных и разнообразных ландшафтах Мексики.", color: "#db2777", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600" },
    { id: 32, title: "Elden Ring", year: 2022, platform: "PC", genre: "RPG", rating: 9.7, dev: "FromSoftware", desc: "Величественное мрачное фэнтези в открытом мире от Хидэтака Миядзаки.", color: "#ca8a04", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600" },
    { id: 33, title: "Baldur's Gate 3", year: 2023, platform: "PC", genre: "RPG", rating: 9.9, dev: "Larian Studios", desc: "Величайшая партийная RPG с невероятной вариативностью выбора и сюжетом.", color: "#9333ea", image: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?q=80&w=600" },
    { id: 34, title: "Black Myth: Wukong", year: 2024, platform: "PC", genre: "Экшен", rating: 9.3, dev: "Game Science", desc: "Эпический экшен по мотивам романа «Путешествие на Запад» на движке Unreal Engine 5.", color: "#b91c1c", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600" },
    { id: 35, title: "Grand Theft Auto VI", year: 2025, platform: "PlayStation", genre: "Экшен", rating: 10.0, dev: "Rockstar Games", desc: "Долгожданное возвращение в Вайс-Сити с Люсией и Джейсоном.", color: "#ec4899", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600" },
    { id: 36, title: "Nexus Chronicles (2026)", year: 2026, platform: "PC", genre: "RPG", rating: 9.6, dev: "Nexus Studios", desc: "Инновационная игра нового поколения с полной интеграцией виртуальной реальности.", color: "#06b6d4", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" }
];

// Состояние приложения
let currentView = 'grid';
let favorites = JSON.parse(localStorage.getItem('nexus_favs')) || [];
let activeGame = null;
let cfIndex = 0;
let threeRenderer = null;
let threeScene = null;
let threeAnimId = null;

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    filterAndRenderGames();
});

// Инициализация интерфейса
function initUI() {
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const platformFilter = document.getElementById('platformFilter');
    const genreFilter = document.getElementById('genreFilter');
    const favoritesBtn = document.getElementById('favoritesBtn');
    const closeModal = document.getElementById('closeModal');
    const gameModal = document.getElementById('gameModal');

    searchInput.addEventListener('input', filterAndRenderGames);
    yearFilter.addEventListener('change', filterAndRenderGames);
    platformFilter.addEventListener('change', filterAndRenderGames);
    genreFilter.addEventListener('change', filterAndRenderGames);

    // Переключение видов
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400'));
            const target = e.currentTarget;
            target.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400');
            currentView = target.dataset.view;
            filterAndRenderGames();
        });
    });

    // Фильтр избранного
    let showOnlyFavs = false;
    favoritesBtn.addEventListener('click', () => {
        showOnlyFavs = !showOnlyFavs;
        favoritesBtn.classList.toggle('border-cyan-500', showOnlyFavs);
        favoritesBtn.classList.toggle('bg-cyan-500/10', showOnlyFavs);
        filterAndRenderGames(showOnlyFavs);
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', closeGameModal);
    gameModal.addEventListener('click', (e) => {
        if (e.target === gameModal) closeGameModal();
    });

    // Управление в Coverflow
    document.getElementById('cfPrev').addEventListener('click', () => {
        const filtered = getFilteredGames();
        if (filtered.length === 0) return;
        cfIndex = (cfIndex - 1 + filtered.length) % filtered.length;
        renderCoverflow(filtered);
    });
    document.getElementById('cfNext').addEventListener('click', () => {
        const filtered = getFilteredGames();
        if (filtered.length === 0) return;
        cfIndex = (cfIndex + 1) % filtered.length;
        renderCoverflow(filtered);
    });

    updateFavCounter();
}

function getFilteredGames() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const yearVal = document.getElementById('yearFilter').value;
    const platformVal = document.getElementById('platformFilter').value;
    const genreVal = document.getElementById('genreFilter').value;

    return gamesDatabase.filter(game => {
        // Поиск
        const matchQuery = game.title.toLowerCase().includes(query) || 
                           game.dev.toLowerCase().includes(query) || 
                           game.genre.toLowerCase().includes(query);
        // Года
        let matchYear = true;
        if (yearVal === '90s') matchYear = game.year >= 1990 && game.year <= 1999;
        else if (yearVal === '00s') matchYear = game.year >= 2000 && game.year <= 2009;
        else if (yearVal === '10s') matchYear = game.year >= 2010 && game.year <= 2019;
        else if (yearVal === '20s') matchYear = game.year >= 2020 && game.year <= 2026;

        // Платформа
        const matchPlatform = platformVal === 'all' || game.platform === platformVal;
        // Жанр
        const matchGenre = genreVal === 'all' || game.genre === genreVal;

        return matchQuery && matchYear && matchPlatform && matchGenre;
    });
}

function filterAndRenderGames(onlyFavs = false) {
    let filtered = getFilteredGames();
    if (onlyFavs) {
        filtered = filtered.filter(g => favorites.includes(g.id));
    }

    document.getElementById('gameCount').textContent = filtered.length;
    
    const container = document.getElementById('gamesContainer');
    const coverflowContainer = document.getElementById('coverflowContainer');
    const noResults = document.getElementById('noResults');

    container.className = "transition-all duration-300";

    if (filtered.length === 0) {
        container.classList.add('hidden');
        coverflowContainer.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    if (currentView === 'coverflow') {
        container.classList.add('hidden');
        coverflowContainer.classList.remove('hidden');
        cfIndex = 0;
        renderCoverflow(filtered);
        return;
    }

    coverflowContainer.classList.add('hidden');
    container.classList.remove('hidden');

    // Настройка классов сетки в зависимости от вида
    if (currentView === 'grid') {
        container.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6";
    } else if (currentView === 'wall') {
        container.className = "grid view-wall";
    } else if (currentView === 'list') {
        container.className = "view-list";
    }

    container.innerHTML = filtered.map(game => {
        const isFav = favorites.includes(game.id);
        if (currentView === 'list') {
            return `
                <div class="game-item-card cursor-pointer" onclick="openGameModal(${game.id})">
                    <img src="${game.image}" alt="${game.title}" class="w-16 h-16 object-cover rounded-lg mr-4">
                    <div class="flex-1">
                        <div class="flex items-center gap-2 text-xs text-cyan-400 font-semibold">
                            <span>${game.platform}</span> &bull; <span>${game.year}</span>
                        </div>
                        <h4 class="text-white font-bold font-['Orbitron'] text-base">${game.title}</h4>
                        <p class="text-xs text-slate-400">${game.dev} | ${game.genre}</p>
                    </div>
                    <div class="text-amber-400 font-bold text-sm flex items-center gap-1 mr-4">
                        <i class="fa-solid fa-star"></i> ${game.rating}
                    </div>
                </div>
            `;
        }

        return `
            <div class="bg-[#111622] border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col group cursor-pointer" onclick="openGameModal(${game.id})">
                <div class="relative overflow-hidden ${currentView === 'wall' ? 'h-[180px]' : 'h-52'}">
                    <img src="${game.image}" alt="${game.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent"></div>
                    <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                        ${game.platform}
                    </span>
                    <button onclick="event.stopPropagation(); toggleFavorite(${game.id})" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-rose-500 transition-colors">
                        <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart ${isFav ? 'text-rose-500' : ''}"></i>
                    </button>
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between text-xs text-slate-400 mb-1">
                            <span>${game.year}</span>
                            <span class="text-indigo-400">${game.genre}</span>
                        </div>
                        <h3 class="font-['Orbitron'] font-bold text-white text-base group-hover:text-cyan-400 transition-colors line-clamp-1">${game.title}</h3>
                    </div>
                    <div class="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/60 text-xs">
                        <span class="text-slate-400 truncate max-w-[120px]">${game.dev}</span>
                        <span class="text-amber-400 font-bold flex items-center gap-1">
                            <i class="fa-solid fa-star"></i> ${game.rating}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Рендер режима Coverflow (Альбом)
function renderCoverflow(filtered) {
    const track = document.getElementById('coverflowTrack');
    const titleEl = document.getElementById('cfTitle');
    if (!filtered.length) return;

    if (cfIndex >= filtered.length) cfIndex = 0;
    activeGame = filtered[cfIndex];
    titleEl.textContent = `${activeGame.title} (${activeGame.year})`;

    track.innerHTML = filtered.map((game, idx) => {
        let offset = idx - cfIndex;
        let translateX = offset * 160;
        let scale = offset === 0 ? 1.1 : Math.max(0.7, 1 - Math.abs(offset) * 0.15);
        let rotateY = offset === 0 ? 0 : (offset < 0 ? 45 : -45);
        let zIndex = 100 - Math.abs(offset);
        let opacity = Math.abs(offset) > 3 ? 0 : 1;

        return `
            <div onclick="openGameModal(${game.id})" class="absolute transition-all duration-500 cursor-pointer w-56 h-80 rounded-2xl overflow-hidden border-2 ${offset === 0 ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30' : 'border-slate-800 opacity-70'}"
                 style="transform: translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg); z-index: ${zIndex}; opacity: ${opacity};">
                <img src="${game.image}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span class="text-white font-bold font-['Orbitron'] text-sm">${game.title}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Избранное
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('nexus_favs', JSON.stringify(favorites));
    updateFavCounter();
    filterAndRenderGames();
    if (activeGame && activeGame.id === id) {
        updateModalFavButton();
    }
}

function updateFavCounter() {
    document.getElementById('favCount').textContent = favorites.length;
}

// Модальное окно и 3D визуализация коробки
function openGameModal(id) {
    activeGame = gamesDatabase.find(g => g.id === id);
    if (!activeGame) return;

    document.getElementById('modalPlatform').textContent = activeGame.platform;
    document.getElementById('modalYear').textContent = activeGame.year;
    document.getElementById('modalGenre').textContent = activeGame.genre;
    document.getElementById('modalTitle').textContent = activeGame.title;
    document.getElementById('modalRating').textContent = activeGame.rating;
    document.getElementById('modalDev').textContent = activeGame.dev;
    document.getElementById('modalDesc').textContent = activeGame.desc;

    updateModalFavButton();

    document.getElementById('gameModal').classList.remove('hidden');
    initThreeDBox(activeGame);
}

function closeGameModal() {
    document.getElementById('gameModal').classList.add('hidden');
    stopThreeD();
}

function updateModalFavButton() {
    const isFav = favorites.includes(activeGame.id);
    document.getElementById('modalFavText').textContent = isFav ? 'В избранном' : 'В избранное';
    const favIcon = document.querySelector('#modalFavBtn i');
    favIcon.className = `fa-${isFav ? 'solid' : 'regular'} fa-heart text-rose-500`;
}

document.getElementById('modalFavBtn').addEventListener('click', () => {
    if (activeGame) toggleFavorite(activeGame.id);
});

// Three.js 3D Коробка игры
function initThreeDBox(game) {
    const container = document.getElementById('canvas3DContainer');
    container.innerHTML = '';

    const width = container.clientWidth || 320;
    const height = 300;

    const scene = new THREE.Scene();
    threeScene = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    threeRenderer = renderer;

    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Текстура коробки
    const loader = new THREE.TextureLoader();
    let boxMaterial;
    
    // Создаем стилизованный бокс с обложкой
    const geometry = new THREE.BoxGeometry(2.2, 3.0, 0.5);
    
    loader.load(game.image, (texture) => {
        boxMaterial = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.3 });
        // Создаем материалы для граней коробки
        const materials = [
            new THREE.MeshStandardMaterial({ color: 0x111622 }), // правый торец
            new THREE.MeshStandardMaterial({ color: 0x111622 }), // левый торец
            new THREE.MeshStandardMaterial({ color: 0x111622 }), // верх
            new THREE.MeshStandardMaterial({ color: 0x111622 }), // низ
            boxMaterial, // лицевая обложка
            new THREE.MeshStandardMaterial({ color: 0x0b0e14 })  // задник
        ];
        mesh.material = materials;
    }, undefined, () => {
        // Запасной вариант цвета, если картинка не загрузилась
    });

    const defaultMaterials = [
        new THREE.MeshStandardMaterial({ color: 0x1b2436 }),
        new THREE.MeshStandardMaterial({ color: 0x1b2436 }),
        new THREE.MeshStandardMaterial({ color: 0x1b2436 }),
        new THREE.MeshStandardMaterial({ color: 0x1b2436 }),
        new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x0b0e14 })
    ];

    const mesh = new THREE.Mesh(geometry, defaultMaterials);
    scene.add(mesh);

    // Управление вращением мышкой
    let isDragging = false;
    let prevMousePosition = { x: 0, y: 0 };

    renderer.domElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        prevMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - prevMousePosition.x;
        const deltaY = e.clientY - prevMousePosition.y;

        mesh.rotation.y += deltaX * 0.01;
        mesh.rotation.x += deltaY * 0.01;

        prevMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Анимация вращения
    function animate() {
        threeAnimId = requestAnimationFrame(animate);
        if (!isDragging) {
            mesh.rotation.y += 0.005;
        }
        renderer.render(scene, camera);
    }
    animate();
}

function stopThreeD() {
    if (threeAnimId) cancelAnimationFrame(threeAnimId);
    if (threeRenderer) {
        threeRenderer.dispose();
        threeRenderer = null;
    }
}
