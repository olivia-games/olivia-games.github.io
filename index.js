'use strict';

// Bump together with CACHE_NAME / ?v= in sw.js and index.html.
const APP_VERSION = '3.27';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const compact = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
const rand = (n) => Math.floor(Math.random() * n);
const hashStr = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
const asArray = (v) => (Array.isArray(v) ? v : []);
const ico = (name, cls = '') => `<svg class="ico ${cls}" aria-hidden="true" focusable="false"><use href="#i-${name}"></use></svg>`;

// localStorage can throw (private mode, blocked cookies, corrupt JSON): never let it crash the site.
const store = {
    getJSON(key, fallback) { try { const raw = localStorage.getItem(key); return raw === null ? fallback : JSON.parse(raw); } catch { return fallback; } },
    setJSON(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ } },
    getRaw(key, fallback) { try { const v = localStorage.getItem(key); return v === null ? fallback : v; } catch { return fallback; } },
    setRaw(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } }
};

// 
// Link policy: what may be shown inside the in-page player
// 
const EMBED_ORIGIN = 'https://olivia-games.github.io';
const EMBED_PATH = '/seraph/';
function isEmbeddable(url) {
    try {
        const u = new URL(url);
        return u.protocol === 'https:' && u.origin === EMBED_ORIGIN && u.pathname.startsWith(EMBED_PATH);
    } catch { return false; }
}

// 
// Categories
// 
const CATEGORY_META = {
    new:        { label: 'New',           icon: 'sparkles' },
    arcade:     { label: 'Arcade',        icon: 'gamepad' },
    platformer: { label: 'Platformer',    icon: 'mountain' },
    adventure:  { label: 'Adventure',     icon: 'compass' },
    puzzle:     { label: 'Puzzle',        icon: 'bulb' },
    words:      { label: 'Word & Trivia', icon: 'type' },
    simulation: { label: 'Simulation',    icon: 'box' },
    restaurant: { label: 'Restaurant',    icon: 'utensils' },
    racing:     { label: 'Racing',        icon: 'flag' },
    sports:     { label: 'Sports',        icon: 'trophy' },
    rpg:        { label: 'RPG',           icon: 'sword' },
    strategy:   { label: 'Strategy',      icon: 'crown' },
    fighting:   { label: 'Fighting',      icon: 'shield' },
    horror:     { label: 'Horror',        icon: 'ghost' },
    music:      { label: 'Music',         icon: 'music' },
    mobile:     { label: 'Mobile',        icon: 'phone' },
    minecraft:  { label: 'Minecraft',     icon: 'cube' },
    tool:       { label: 'Apps & Tools',  icon: 'wrench' },
    action:     { label: 'Action',        icon: 'zap' }
};
const categoryLabel = (c) => (CATEGORY_META[c] && CATEGORY_META[c].label) || (c ? c.charAt(0).toUpperCase() + c.slice(1) : 'Game');
const categoryIcon = (c) => (CATEGORY_META[c] && CATEGORY_META[c].icon) || 'gamepad';

// 
// Prepare data (derived fields only; the file itself stays plain data)
// 
// If gamesdata.js failed to load (offline, blocked) the page must still work instead of crashing.
const DATA_OK = typeof gamesData !== 'undefined' && Array.isArray(gamesData);
// Drop entries without a name/url and entries whose id repeats (the id is the url unless the entry sets its own).
const gameKey = (g) => (g && (g.id || g.url)) || '';
const GAMES = DATA_OK ? gamesData.filter((g, i, all) => g && g.name && g.url && all.findIndex((x) => gameKey(x) === gameKey(g)) === i) : [];
const NEW_BADGE_DAYS = 30;
const gamesById = new Map();
(function prepareGames() {
    GAMES.forEach((g) => {
        g.id = gameKey(g);                   // stable id (keeps saved Favorites / Recent valid)
        g.embeddable = isEmbeddable(g.url);
        const ageDays = g.added ? (Date.now() - Date.parse(g.added)) / 86400000 : Infinity;
        g.isNew = ageDays >= 0 && ageDays <= NEW_BADGE_DAYS;
        g._hay = [g.name, categoryLabel(g.category), g.category, g.isNew ? 'new' : ''].join(' ').toLowerCase();
        g._compact = compact(g._hay);
        gamesById.set(g.id, g);
    });
})();

// 
// Persisted state
// 
const RECENT_LIMIT = 24;
const state = {
    games: GAMES,
    currentCategory: 'all',
    currentView: store.getRaw('og-view', 'grid') === 'list' ? 'list' : 'grid',
    searchQuery: '',
    section: '#home',
    // keep unknown ids: a game missing from a cached/partial list must not wipe the user's saved favorites
    favorites: new Set(asArray(store.getJSON('og-favorites-v2', [])).filter((id) => typeof id === 'string')),
    recentlyPlayed: asArray(store.getJSON('og-recent-v1', [])).filter((id) => gamesById.has(id)).slice(0, RECENT_LIMIT)
};
function updateBadges() {
    const counts = { recent: state.recentlyPlayed.length, favorites: favCount() };
    document.querySelectorAll('.nav-badge[data-badge]').forEach((b) => {
        const n = counts[b.dataset.badge] || 0;
        b.textContent = n ? (n > 99 ? '99+' : n) : '';
    });
}
const favCount = () => { let n = 0; state.favorites.forEach((id) => { if (gamesById.has(id)) n++; }); return n; };
const saveFavorites = () => { store.setJSON('og-favorites-v2', [...state.favorites]); updateBadges(); };
const saveRecent = () => { store.setJSON('og-recent-v1', state.recentlyPlayed); updateBadges(); };

function recordPlayed(id) {
    if (!gamesById.has(id)) return;
    state.recentlyPlayed = [id, ...state.recentlyPlayed.filter((x) => x !== id)].slice(0, RECENT_LIMIT);
    saveRecent();
    if ($('recent').style.display !== 'none') renderRecent();
}

const SITE_URL = document.querySelector('link[rel="canonical"]')?.href || 'https://olivia-games.github.io/';

const el = {
    searchInput: $('search-input'),
    filters: $('filters'),
    games: $('games-container'),
    favorites: $('favorites-container'),
    recent: $('recent-container'),
    resultsCount: $('results-count'),
    mobileNav: $('mobile-nav'),
    menuBtn: $('mobile-menu-btn')
};

// 
// Toast, clipboard, URL params
// 
let toastTimer = null;
function showToast(message, ms = 2600) {
    const toast = $('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), ms);
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise((resolve, reject) => {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand('copy');
            ta.remove();
            ok ? resolve() : reject(new Error('copy failed'));
        } catch (err) { reject(err); }
    });
}

function setURLParam(key, value) {
    try {
        const url = new URL(window.location.href);
        if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
        window.history.replaceState(window.history.state, '', url);
    } catch { /* file:// or sandboxed iframe */ }
}

// 
// Modal plumbing (info, lucky, player share it)
// 
function syncScrollLock() {
    const open = document.querySelector('.modal.active'); // the mobile menu is a fixed overlay: locking body scroll for it only forces a slow page-wide relayout
    document.body.classList.toggle('scroll-lock', !!open);
}
function showModal(modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    syncScrollLock();
}
function hideModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    syncScrollLock();
}
function restoreFocus(node) {
    if (node && document.contains(node) && node.offsetParent !== null && typeof node.focus === 'function') {
        try { node.focus({ preventScroll: true }); } catch { /* ignore */ }
    }
}
// Keep Tab inside an open dialog.
function trapFocus(modal, e) {
    if (e.key !== 'Tab') return;
    const nodes = [...modal.querySelectorAll('a[href],button:not([disabled]),input,select,[tabindex]:not([tabindex="-1"])')]
        .filter((n) => n.offsetParent !== null && n.getAttribute('aria-disabled') !== 'true');
    if (!nodes.length) return;
    const first = nodes[0], last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

// 
// Thumbnails
// 
function placeholderThumb(title) {
    const hue = hashStr(title || 'x') % 360;
    const initial = esc((title || '?').trim().charAt(0).toUpperCase());
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180" viewBox="0 0 320 180"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${hue},62%,42%)"/><stop offset="1" stop-color="hsl(${(hue + 50) % 360},62%,16%)"/></linearGradient></defs><rect width="320" height="180" fill="url(#g)"/><text x="160" y="116" font-family="Arial,sans-serif" font-size="84" font-weight="700" text-anchor="middle" fill="rgba(255,255,255,.88)">${initial}</text></svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
function setThumb(img, game) {
    delete img.dataset.fallback;
    img.dataset.title = game.name;
    img.src = game.image || placeholderThumb(game.name);
}
// Broken thumbnail? Swap in a generated placeholder instead of a broken-image icon.
document.addEventListener('error', (e) => {
    const img = e.target;
    if (img && img.tagName === 'IMG' && img.dataset.title !== undefined && !img.dataset.fallback) {
        img.dataset.fallback = '1';
        img.src = placeholderThumb(img.dataset.title);
    }
}, true);

// 
// Rendering
// 
function playLinkHTML(game) {
    const ext = !game.embeddable;
    const aria = `Play ${game.name}${ext ? ' (opens in a new tab)' : ''}`;
    return `<a class="card-play" href="${esc(game.url)}" data-play data-id="${esc(game.id)}" target="_blank" rel="noopener" aria-label="${esc(aria)}">${ico('play')}<span>Play</span>${ext ? ico('external', 'ext') : ''}</a>`;
}

// Grid cards: thumbnail, category tag, title. The description lives in the modal.
// The Play link is only shown in List view (CSS hides it in Grid view).
function createGameCard(game) {
    const title = esc(game.name);
    return `
<article class="card" data-id="${esc(game.id)}">
  <div class="card-media">
    <img class="game-thumb" src="${esc(game.image || placeholderThumb(game.name))}" data-title="${title}" alt="" loading="lazy" decoding="async" width="320" height="180">
    <span class="cat">${ico(categoryIcon(game.category))}<span>${esc(categoryLabel(game.category))}</span></span>
  </div>
  <div class="card-body">
    <h3 class="card-title"><button class="card-open" type="button" data-id="${esc(game.id)}">${title}</button></h3>
  </div>
  ${playLinkHTML(game)}
</article>`;
}

const emptyState = (icon, title, text, extra = '') =>
    `<div class="empty-state">${ico(icon)}<h3>${esc(title)}</h3><p>${esc(text)}</p>${extra}</div>`;

// Cards are added a page at a time while the user scrolls, so the DOM starts small instead of holding 500+ cards.
const PAGE_SIZE = 48;
const sentinel = $('games-sentinel');
let shown = 0;
let pager = null;

function appendGamesPage() {
    const games = state.games;
    if (shown >= games.length) return;
    const chunk = games.slice(shown, shown + PAGE_SIZE);
    el.games.insertAdjacentHTML('beforeend', chunk.map(createGameCard).join(''));
    shown += chunk.length;
    if (pager) {                       // re-observe so we are told again if the sentinel is still on screen
        pager.unobserve(sentinel);
        if (shown < games.length) pager.observe(sentinel);
    }
}

function renderGames() {
    const games = state.games;
    shown = 0;
    if (pager) pager.unobserve(sentinel);
    if (!games.length) {
        el.games.innerHTML = emptyState('search', 'No games found', 'Try a different search or category.',
            '<button class="pill-btn" data-reset-filters type="button" style="margin:1.25rem auto 0">Reset filters</button>');
        return;
    }
    if (!('IntersectionObserver' in window)) {          // very old browsers: render everything at once
        el.games.innerHTML = games.map(createGameCard).join('');
        shown = games.length;
        return;
    }
    if (!pager) {
        pager = new IntersectionObserver((entries) => {
            if (entries.some((en) => en.isIntersecting)) appendGamesPage();
        }, { rootMargin: '900px 0px' });
    }
    el.games.innerHTML = '';
    appendGamesPage();
}

function renderFavorites() {
    const list = [...state.favorites].reverse().map((id) => gamesById.get(id)).filter(Boolean);   // newest first
    el.favorites.innerHTML = list.length
        ? list.map(createGameCard).join('')
        : emptyState('star', 'No favorites yet', 'Tap the star on any game to save it here.');
}

function renderRecent() {
    const list = state.recentlyPlayed.map((id) => gamesById.get(id)).filter(Boolean);
    el.recent.innerHTML = list.length
        ? list.map(createGameCard).join('')
        : emptyState('clock', 'Nothing played yet', 'Games you play will show up here.');
}

function renderFilters() {
    const counts = {};
    let newCount = 0;
    GAMES.forEach((g) => { counts[g.category] = (counts[g.category] || 0) + 1; if (g.isNew) newCount++; });

    const known = Object.keys(CATEGORY_META).filter((c) => c !== 'new' && counts[c]);
    const extra = Object.keys(counts).filter((c) => !CATEGORY_META[c]).sort();
    const chips = [['all', 'layout', 'All Games', GAMES.length]];
    if (newCount) chips.push(['new', 'sparkles', 'New', newCount]);
    [...known, ...extra].forEach((c) => chips.push([c, categoryIcon(c), categoryLabel(c), counts[c]]));

    if (!chips.some((c) => c[0] === state.currentCategory)) state.currentCategory = 'all';
    el.filters.innerHTML = chips.map(([key, icon, label, n]) =>
        `<button class="filter-chip${key === state.currentCategory ? ' active' : ''}" type="button" data-category="${esc(key)}" aria-pressed="${key === state.currentCategory}">${ico(icon)}<span>${esc(label)}</span><span class="chip-count">${n}</span></button>`
    ).join('');

    $('stat-games').textContent = GAMES.length;
    $('stat-cats').textContent = Object.keys(counts).length;
    $('stat-new').textContent = newCount;
}

// 
// Search & filters
// 
function matchesSearch(game, query) {
    if (!query) return true;
    // every word must match somewhere; spaces are ignored ("super mario" finds "Super Mario Bros.")
    return query.split(/\s+/).every((w) => { const c = compact(w); return game._hay.includes(w) || (c !== '' && game._compact.includes(c)); });
}

function filterAndRender() {
    let list = GAMES;
    if (state.currentCategory === 'new') list = list.filter((g) => g.isNew);
    else if (state.currentCategory !== 'all') list = list.filter((g) => g.category === state.currentCategory);
    if (state.searchQuery) list = list.filter((g) => matchesSearch(g, state.searchQuery));

    if (state.searchQuery) {          // best matches first: name starts with the query, then name contains it
        const q = state.searchQuery, qc = compact(q);
        const rank = (g) => { const n = g.name.toLowerCase(); return n.startsWith(q) || compact(n).startsWith(qc) ? 0 : n.includes(q) || compact(n).includes(qc) ? 1 : 2; };
        list = list.map((g, i) => [rank(g), i, g]).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map((x) => x[2]);
    }
    state.games = list;
    updateGamesTitle();
    const total = GAMES.length;
    el.resultsCount.textContent = list.length === total ? `${total} games` : `${list.length} of ${total} games`;
    renderGames();
}

function updateGamesTitle() {
    const t = $('games-title-text');
    if (!t) return;
    const c = state.currentCategory;
    t.textContent = state.searchQuery ? `Results for \u201c${state.searchQuery}\u201d`
        : c === 'all' ? 'All games' : c === 'new' ? 'New games' : categoryLabel(c);
}

let searchTimer = null;
function handleSearch(e) {
    const value = e.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        state.searchQuery = value.toLowerCase().trim();
        setURLParam('search', state.searchQuery);
        filterAndRender();
    }, 150);
}

function setCategory(key) {
    state.currentCategory = key;
    el.filters.querySelectorAll('.filter-chip').forEach((c) => {
        const on = c.dataset.category === key;
        c.classList.toggle('active', on);
        c.setAttribute('aria-pressed', String(on));
    });
}

function resetFilters() {
    clearTimeout(searchTimer);
    state.searchQuery = '';
    el.searchInput.value = '';
    setURLParam('search', '');
    setCategory('all');
    filterAndRender();
}

function applySearchFromURL() {
    const query = new URLSearchParams(window.location.search).get('search') || '';
    state.searchQuery = query.toLowerCase().trim();
    el.searchInput.value = query;
    filterAndRender();
}

// 
// Favorites
// 
function setModalFavState(btn, isFav) {
    btn.classList.toggle('active', isFav);
    btn.setAttribute('aria-pressed', String(isFav));
    btn.innerHTML = `${ico('star')}${isFav ? 'Favorited' : 'Add to Favorites'}`;
}

function toggleFavorite(id) {
    if (!gamesById.has(id)) return;
    const now = !state.favorites.has(id);
    if (now) state.favorites.add(id); else state.favorites.delete(id);
    saveFavorites();

    showToast(now ? 'Added to favorites' : 'Removed from favorites');
    const modalFav = $('modal-favorite-btn');
    if (modalFav.dataset.id === id) setModalFavState(modalFav, now);
    if ($('favorites').style.display !== 'none') renderFavorites();
    fillLuckyPoolOptions(); // "My favorites" option appears / disappears
}

function shareGame(id) {
    const game = gamesById.get(id);
    if (!game) return;
    const url = new URL(window.location.href);
    url.search = ''; url.hash = '';
    url.searchParams.set('game', id);
    copyToClipboard(url.toString())
        .then(() => showToast(`Link to ${game.name} copied`))
        .catch(() => showToast('Could not copy the link'));
}

// 
// Game info modal
// 
const infoModal = $('game-modal');
let infoOpener = null;

function setPlayAnchor(a, game, label) {
    a.href = game.url;
    a.dataset.id = game.id;
    a.removeAttribute('aria-disabled');
    a.setAttribute('aria-label', `Play ${game.name}${game.embeddable ? '' : ' (opens in a new tab)'}`);
    a.innerHTML = `${ico('play')}<span>${label}</span>${game.embeddable ? '' : ico('external', 'ext')}`;
}
const playNote = (game) => game.embeddable
    ? `${ico('play')} Plays right here on the page.`
    : `${ico('external')} This game opens in a new tab.`;

function openGameModal(game, { updateURL = true, opener = null } = {}) {
    infoOpener = opener || document.activeElement;
    setThumb($('modal-thumb'), game);
    $('modal-title').textContent = game.name;
    $('modal-category').innerHTML = `${ico(categoryIcon(game.category))}${esc(categoryLabel(game.category))}`;
    $('modal-new').style.display = game.isNew ? '' : 'none';
    $('modal-description').textContent = game.description || '';
    $('modal-note').innerHTML = playNote(game);
    setPlayAnchor($('modal-play-btn'), game, 'Play Now');
    $('modal-share-btn').dataset.id = game.id;
    const fav = $('modal-favorite-btn');
    fav.dataset.id = game.id;
    setModalFavState(fav, state.favorites.has(game.id));

    showModal(infoModal);
    infoModal.querySelector('.dialog-close').focus({ preventScroll: true });
    if (updateURL) pushGameURL(game.id);
}

// Opening a game pushes a history entry, so the Back button closes the dialog instead of leaving the site.
function pushGameURL(id) {
    try {
        const url = new URL(window.location.href);
        url.searchParams.set('game', id);
        window.history.pushState({ og: 'game' }, '', url);
    } catch { /* file:// or sandboxed iframe */ }
}

function closeGameModal({ restore = true, fromHistory = false } = {}) {
    if (!infoModal.classList.contains('active')) return;
    hideModal(infoModal);
    if (!fromHistory) {
        if (window.history.state && window.history.state.og === 'game') window.history.back();
        else setURLParam('game', '');
    }
    if (restore) restoreFocus(infoOpener);
    infoOpener = null;
}

function applySharedGameFromURL() {
    const id = new URLSearchParams(window.location.search).get('game');
    if (id && gamesById.has(id)) openGameModal(gamesById.get(id), { updateURL: false });
    else closeGameModal({ restore: false, fromHistory: true });
}

// 
// In-page player (iframe)
// 
const playerModal = $('player-modal');
const playerStage = $('player-stage');
const playerFrame = $('player-frame');
const playerLoading = $('player-loading');
const player = { game: null, opener: null, pseudoFs: false, slowTimer: null };

const fullscreenElement = () => document.fullscreenElement || document.webkitFullscreenElement || null;

function setLoading(on, text) {
    clearTimeout(player.slowTimer);
    playerLoading.classList.toggle('hidden', !on);
    $('player-loading-text').textContent = text || 'Loading game...';
    if (on) {
        player.slowTimer = setTimeout(() => {
            $('player-loading-text').textContent = 'Still loading... try Reload if nothing appears.';
        }, 12000);
    }
}

function loadPlayerFrame() {
    if (!player.game) return;
    setLoading(true);
    playerFrame.src = player.game.url;
}

function openPlayer(game, opener) {
    if (!game.embeddable) { window.open(game.url, '_blank', 'noopener'); return; } // safety net: policy is enforced here too
    // Remember where focus should return: the card the user started from, not a link inside a dialog that is about to close.
    player.opener = infoModal.classList.contains('active') ? infoOpener
        : luckyModal.classList.contains('active') ? lucky.opener
        : (opener || document.activeElement);
    // Close anything else that is open first (no history.back() here: the player takes over that history entry)
    closeLucky({ restore: false });
    closeGameModal({ restore: false, fromHistory: true });
    try {
        const url = new URL(window.location.href);
        url.searchParams.delete('game');
        if (window.history.state && window.history.state.og === 'game') window.history.replaceState({ og: 'player' }, '', url);
        else window.history.pushState({ og: 'player' }, '', url);   // so the Back button closes the game instead of leaving the site
    } catch { /* file:// or sandboxed iframe */ }

    player.game = game;
    $('player-title').textContent = game.name;
    $('player-sub').textContent = categoryLabel(game.category);
    playerFrame.title = game.name;
    updateFsButton();
    showModal(playerModal);
    loadPlayerFrame();
    $('player-close').focus({ preventScroll: true });
}

function closePlayer({ fromHistory = false } = {}) {
    if (!playerModal.classList.contains('active')) return;
    const popEntry = !fromHistory && window.history.state && window.history.state.og === 'player';
    exitFullscreen();
    setPseudoFs(false);
    clearTimeout(player.slowTimer);
    player.game = null;
    playerFrame.src = 'about:blank';   // unload: stops game audio and loops
    hideModal(playerModal);
    restoreFocus(player.opener);
    player.opener = null;
    if (popEntry) window.history.back();
    if (window.__swReload) location.reload();   // a new version arrived while the game was open
}

function reloadPlayer() {
    if (!player.game) return;
    setLoading(true);
    // Restart from the game's own start page; blank first so the browser always does a real reload.
    playerFrame.src = 'about:blank';
    setTimeout(() => { if (player.game) playerFrame.src = player.game.url; }, 60);
}

playerFrame.addEventListener('load', () => {
    if (!player.game) return;               // the about:blank load after closing
    if (playerFrame.getAttribute('src') === 'about:blank') return;
    setLoading(false);
    try { playerFrame.focus(); } catch { /* ignore */ }   // keyboard goes straight to the game
});

function exitFullscreen() {
    if (!fullscreenElement()) return;
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    try { const p = exit && exit.call(document); if (p && p.catch) p.catch(() => {}); } catch { /* ignore */ }
}

function setPseudoFs(on) {
    player.pseudoFs = on;
    playerModal.classList.toggle('pseudo-fs', on);
    updateFsButton();
}

function updateFsButton() {
    const active = !!fullscreenElement() || player.pseudoFs;
    const btn = $('player-fs');
    btn.setAttribute('aria-pressed', String(active));
    btn.setAttribute('aria-label', active ? 'Exit fullscreen' : 'Fullscreen');
    btn.innerHTML = `${ico(active ? 'minimize' : 'maximize')}<span>${active ? 'Exit' : 'Fullscreen'}</span>`;
}

function togglePlayerFullscreen() {
    if (fullscreenElement()) { exitFullscreen(); return; }
    if (player.pseudoFs) { setPseudoFs(false); return; }
    const req = playerStage.requestFullscreen || playerStage.webkitRequestFullscreen;
    if (!req) { setPseudoFs(true); return; }          // e.g. iPhone Safari: fill the whole viewport instead
    try {
        const p = req.call(playerStage);
        if (p && p.catch) p.catch(() => setPseudoFs(true));
    } catch { setPseudoFs(true); }
}
document.addEventListener('fullscreenchange', updateFsButton);
document.addEventListener('webkitfullscreenchange', updateFsButton);

function initPlayer() {
    $('player-fs').addEventListener('click', togglePlayerFullscreen);
    $('player-reload').addEventListener('click', reloadPlayer);
    $('player-close').addEventListener('click', closePlayer);
}

// One handler for every Play link on the page (cards, info modal, lucky modal).
// Embeddable games open in the player; all other games fall through to the link's own new-tab behaviour.
document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-play]');
    if (!link) return;
    if (link.getAttribute('aria-disabled') === 'true') { e.preventDefault(); return; }
    const game = gamesById.get(link.dataset.id);
    if (!game) return;
    recordPlayed(game.id);
    if (!game.embeddable) return;                                   // new tab (target="_blank")
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let "open in new tab" shortcuts work
    e.preventDefault();
    openPlayer(game, link);
});

// 
// "I'm Feeling Lucky"
// 
const luckyModal = $('lucky-modal');
const lucky = { spinning: false, current: null, timer: null, opener: null };

function luckyPool() {
    const key = $('lucky-pool').value || 'all';
    let pool = GAMES;
    if (key === 'new') pool = pool.filter((g) => g.isNew);
    else if (key === 'favorites') pool = pool.filter((g) => state.favorites.has(g.id));
    else if (key !== 'all') pool = pool.filter((g) => g.category === key);

    if ($('lucky-fresh').checked) {
        const recent = new Set(state.recentlyPlayed);
        const fresh = pool.filter((g) => !recent.has(g.id));
        if (fresh.length) pool = fresh; // everything played already? ignore the filter
    }
    if (pool.length > 1 && lucky.current) pool = pool.filter((g) => g.id !== lucky.current.id);
    return pool;
}

function fillLuckyPoolOptions() {
    const select = $('lucky-pool');
    const previous = select.value || 'all';
    const counts = {};
    GAMES.forEach((g) => { counts[g.category] = (counts[g.category] || 0) + 1; });

    const opts = [['all', 'Any game']];
    if (GAMES.some((g) => g.isNew)) opts.push(['new', 'New games']);
    if (favCount()) opts.push(['favorites', 'My favorites']);
    Object.keys(counts)
        .sort((a, b) => categoryLabel(a).localeCompare(categoryLabel(b)))
        .forEach((c) => opts.push([c, categoryLabel(c)]));

    select.innerHTML = opts.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join('');
    select.value = opts.some((o) => o[0] === previous) ? previous : 'all';
}

function showLuckyGame(game) {
    setThumb($('lucky-thumb'), game);
    $('lucky-name').textContent = game.name;
    $('lucky-tag').textContent = `${categoryLabel(game.category)}${game.isNew ? ' - NEW' : ''}`;
}

function setLuckyPlayEnabled(enabled, game) {
    const play = $('lucky-play');
    play.setAttribute('aria-disabled', String(!enabled));
    play.tabIndex = enabled ? 0 : -1;
    $('lucky-info').disabled = !enabled;
    if (enabled && game) {
        setPlayAnchor(play, game, 'Play');
        play.setAttribute('aria-disabled', 'false');
        $('lucky-note').innerHTML = playNote(game);
    } else {
        play.innerHTML = `${ico('play')}<span>Play</span>`;
        play.removeAttribute('href');
        delete play.dataset.id;
        $('lucky-note').textContent = '';
    }
}

function spinLucky() {
    if (lucky.spinning) return;
    const pool = luckyPool();
    if (!pool.length) { showToast('No games to pick from'); return; }

    const pick = pool[rand(pool.length)];
    const reel = $('lucky-reel');
    reel.classList.remove('landed');
    setLuckyPlayEnabled(false);

    const land = () => {
        lucky.spinning = false;
        lucky.current = pick;
        $('lucky-spin').disabled = false;
        reel.classList.remove('spinning');
        showLuckyGame(pick);
        reel.classList.add('landed');
        setLuckyPlayEnabled(true, pick);
        $('lucky-play').focus({ preventScroll: true });
    };

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { land(); return; }

    lucky.spinning = true;
    reel.classList.add('spinning');
    $('lucky-spin').disabled = true;
    const STEPS = 14;
    let i = 0;
    (function tick() {
        if (!lucky.spinning) return;                    // closed mid-spin
        if (i >= STEPS) { land(); return; }
        $('lucky-name').textContent = pool[rand(pool.length)].name;   // names only: no image downloads while spinning
        i++;
        lucky.timer = setTimeout(tick, 45 + i * i * 0.8); // starts fast, slows down
    })();
}

function openLucky() {
    lucky.opener = document.activeElement;
    fillLuckyPoolOptions();
    showModal(luckyModal);
    spinLucky();
}

function closeLucky({ restore = true } = {}) {
    if (!luckyModal.classList.contains('active')) return;
    clearTimeout(lucky.timer);
    lucky.spinning = false;
    $('lucky-spin').disabled = false;
    $('lucky-reel').classList.remove('spinning');
    hideModal(luckyModal);
    if (restore) restoreFocus(lucky.opener);
    lucky.opener = null;
}

function initLucky() {
    $('lucky-spin').addEventListener('click', spinLucky);
    $('lucky-pool').addEventListener('change', () => { lucky.current = null; spinLucky(); });
    $('lucky-fresh').addEventListener('change', spinLucky);
    $('lucky-info').addEventListener('click', () => {
        const game = lucky.current;
        if (!game) return;
        const back = lucky.opener;
        closeLucky({ restore: false });
        openGameModal(game, { opener: back });
    });
}

// 
// Views & sections
// 
function applyView(view) {
    state.currentView = view;
    document.querySelectorAll('.view-btn[data-view]').forEach((b) => {
        const on = b.dataset.view === view;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
    });
    [el.games, el.favorites, el.recent].forEach((c) => c.classList.toggle('list-view', view === 'list'));
}

function setActiveNav(targetId) {
    document.querySelectorAll('.nav-link').forEach((l) => l.classList.toggle('active', l.getAttribute('href') === targetId));
}

// Home / Games / Categories show the main page; Favorites and Recently Played replace the games list.
function showSection(targetId) {
    state.section = targetId;
    setActiveNav(targetId);
    const isFav = targetId === '#favorites', isRecent = targetId === '#recent';
    $('favorites').style.display = isFav ? 'block' : 'none';
    $('recent').style.display = isRecent ? 'block' : 'none';
    $('games').style.display = isFav || isRecent ? 'none' : 'block';
    $('categories').style.display = isFav || isRecent ? 'none' : 'block';
    if (isFav) renderFavorites();
    if (isRecent) renderRecent();
}

function goToGames() {
    showSection('#games');
    $('games').scrollIntoView({ behavior: 'smooth' });
}

function setMobileNav(open) {
    el.mobileNav.classList.toggle('active', open);
    el.mobileNav.setAttribute('aria-hidden', String(!open));
    el.menuBtn.setAttribute('aria-expanded', String(open));
    syncScrollLock();
    if (open) $('mobile-close-btn').focus({ preventScroll: true });
    else if (document.activeElement && el.mobileNav.contains(document.activeElement)) el.menuBtn.focus({ preventScroll: true });
}

// Highlight the nav link of the section in view (main page only).
function initScrollSpy() {
    if (!('IntersectionObserver' in window)) return;
    const ids = ['#home', '#categories', '#games'];
    const io = new IntersectionObserver((entries) => {
        if (state.section === '#favorites' || state.section === '#recent') return;
        entries.filter((e) => e.isIntersecting).forEach((e) => setActiveNav('#' + e.target.id));
    }, { rootMargin: '-35% 0px -55% 0px' });
    ids.forEach((id) => { const n = document.querySelector(id); if (n) io.observe(n); });
}

// 
// Panic mode
// 
const ORIGINAL_TITLE = document.title;
const NEUTRAL_ICON = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#1a73e8"/><path d="M18 14h20l10 10v26H18z" fill="#fff"/></svg>');
function swapFavicons(panic) {
    document.querySelectorAll('link[rel~="icon"]').forEach((l) => {
        if (!l.dataset.orig) l.dataset.orig = l.getAttribute('href');
        l.setAttribute('href', panic ? NEUTRAL_ICON : l.dataset.orig);
    });
}
function togglePanicMode() {
    const on = document.body.classList.toggle('panic-mode');
    $('panic-screen').setAttribute('aria-hidden', String(!on));
    if (on) {
        closePlayer();
        closeLucky({ restore: false });
        closeGameModal({ restore: false });
        setMobileNav(false);
        document.title = 'Google Classroom';
        swapFavicons(true);
    } else {
        document.title = ORIGINAL_TITLE;
        swapFavicons(false);
    }
}

// 
// Events
// 
function handleCardAction(e) {
    if (e.target.closest('[data-play]')) return;       // the global play handler takes it
    const card = e.target.closest('.card');
    if (!card) return;
    const g = gamesById.get(card.dataset.id);
    if (g) openGameModal(g, { opener: card.querySelector('.card-open') || card });
}

// Search lives on the main page: if Favorites / Recently Played is open, go back to the games list first.
function focusSearch() {
    if (el.searchInput.offsetParent === null) showSection('#games');
    el.searchInput.focus();
}

function setupEvents() {
    el.searchInput.addEventListener('input', handleSearch);
    el.searchInput.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        clearTimeout(searchTimer);
        state.searchQuery = el.searchInput.value.toLowerCase().trim();
        setURLParam('search', state.searchQuery);
        filterAndRender();
        el.searchInput.blur();
        $('games').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    el.filters.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;
        setCategory(chip.dataset.category);
        filterAndRender();
    });

    [el.games, el.favorites, el.recent].forEach((c) => c.addEventListener('click', handleCardAction));
    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-reset-filters]')) resetFilters();
        if (e.target.closest('[data-reload]')) window.location.reload();
    });

    // Close buttons / backdrops of the info and lucky dialogs
    infoModal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeGameModal(); });
    luckyModal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeLucky(); });
    infoModal.addEventListener('keydown', (e) => trapFocus(infoModal, e));
    luckyModal.addEventListener('keydown', (e) => trapFocus(luckyModal, e));
    playerModal.addEventListener('keydown', (e) => trapFocus(playerModal, e));
    el.mobileNav.addEventListener('keydown', (e) => trapFocus(el.mobileNav, e));

    $('modal-favorite-btn').addEventListener('click', (e) => { const id = e.currentTarget.dataset.id; if (id) toggleFavorite(id); });
    $('modal-share-btn').addEventListener('click', (e) => shareGame(e.currentTarget.dataset.id));

    $('explore-btn').addEventListener('click', goToGames);
    $('random-btn').addEventListener('click', openLucky);
    $('panic-btn').addEventListener('click', togglePanicMode);
    $('exit-panic-btn').addEventListener('click', togglePanicMode);
    $('favorites-close-btn').addEventListener('click', goToGames);
    $('recent-close-btn').addEventListener('click', goToGames);

    $('recent-clear-btn').addEventListener('click', () => {
        if (!state.recentlyPlayed.length) return;
        if (!confirm('Clear your recently played history?')) return;
        state.recentlyPlayed = [];
        saveRecent();
        renderRecent();
        showToast('History cleared');
    });

    $('footer-share-copy').addEventListener('click', () => {
        copyToClipboard(SITE_URL).then(() => showToast('Link copied')).catch(() => showToast('Could not copy the link'));
    });
    const more = $('footer-share-more');
    if (more && navigator.share) {
        more.style.display = '';
        more.addEventListener('click', () => {
            navigator.share({ title: 'Olivia Games', text: `Check out Olivia Games - play ${GAMES.length}+ free online games instantly!`, url: SITE_URL }).catch(() => {});
        });
    }

    document.querySelectorAll('.view-btn[data-view]').forEach((btn) => btn.addEventListener('click', () => {
        applyView(btn.dataset.view);
        store.setRaw('og-view', btn.dataset.view);
    }));

    el.menuBtn.addEventListener('click', () => setMobileNav(true));
    window.matchMedia('(min-width:901px)').addEventListener?.('change', (m) => { if (m.matches) setMobileNav(false); });
    $('mobile-close-btn').addEventListener('click', () => setMobileNav(false));

    // Header / mobile menu links
    document.querySelectorAll('.nav-link, .logo').forEach((link) => link.addEventListener('click', (e) => {
        const target = link.getAttribute('href');
        if (!target || target[0] !== '#') return;
        e.preventDefault();
        setMobileNav(false);
        showSection(target);
        if (target === '#home') window.scrollTo({ top: 0, behavior: 'smooth' });
        else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));

    document.addEventListener('keydown', (e) => {
        const t = e.target;
        const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
        const playerOpen = playerModal.classList.contains('active');

        if (e.key === 'Escape') {
            if (document.body.classList.contains('panic-mode')) return togglePanicMode();
            if (player.pseudoFs) return setPseudoFs(false);
            if (playerOpen) { if (!fullscreenElement()) closePlayer(); return; } // in real fullscreen the browser handles Esc itself
            if (luckyModal.classList.contains('active')) return closeLucky();
            if (infoModal.classList.contains('active')) return closeGameModal();
            if (el.mobileNav.classList.contains('active')) return setMobileNav(false);
            return;
        }
        if (e.key === '`' && !typing) { togglePanicMode(); return; }
        if (document.querySelector('.modal.active') || el.mobileNav.classList.contains('active') || document.body.classList.contains('panic-mode')) return;   // no page shortcuts behind a dialog
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); focusSearch(); return; }
        if (e.key === '/' && !typing) { e.preventDefault(); focusSearch(); }
    });

    window.addEventListener('popstate', () => {
        if (playerModal.classList.contains('active')) { closePlayer({ fromHistory: true }); return; }   // Back button while a game is open
        const q = (new URLSearchParams(window.location.search).get('search') || '').toLowerCase().trim();
        if (q !== state.searchQuery) applySearchFromURL();      // do not re-render the list just because a dialog closed
        applySharedGameFromURL();
    });
}

// 
// Boot
// 
// Add to Home Screen (PWA install)
const installBtn = $('install-btn');
let deferredInstall = window.__bip || null;     // captured by a tiny inline script in case the event fired early
const isStandalone = () => (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

function initInstall() {
    if (!installBtn) return;
    if (isStandalone()) { installBtn.hidden = true; return; }       // already running as an installed app
    window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredInstall = e; });
    window.addEventListener('appinstalled', () => {
        deferredInstall = null; window.__bip = null;
        installBtn.hidden = true;
        showToast('Olivia Games was added to your device');
    });
    installBtn.addEventListener('click', async () => {
        if (deferredInstall) {
            const promptEvent = deferredInstall;
            deferredInstall = null; window.__bip = null;            // an install prompt can only be used once
            try {
                promptEvent.prompt();
                const choice = await promptEvent.userChoice;
                if (choice && choice.outcome === 'accepted') return;
            } catch { /* fall through to the manual hint */ }
            showToast('You can install later from your browser menu.', 4000);
            return;
        }
        showToast(isIOS()
            ? 'Tap the Share button, then "Add to Home Screen".'
            : 'Open your browser menu and choose "Install app" or "Add to Home Screen".', 5500);
    });
}

function applyHash() {
    const hash = window.location.hash;
    if (['#favorites', '#recent', '#games', '#categories', '#home'].includes(hash)) showSection(hash);
}

// After an update, ask the service worker to re-download its files once so the new version is not served from a stale copy.
function checkAppVersion() {
    if (store.getRaw('og-app-version', '') === APP_VERSION) return;
    store.setRaw('og-app-version', APP_VERSION);
    try {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) navigator.serviceWorker.controller.postMessage('refresh');
    } catch { /* ignore */ }
}

function init() {
    setupEvents();
    initPlayer();
    initLucky();
    initInstall();
    applyView(state.currentView);
    renderFilters();
    fillLuckyPoolOptions();
    setLuckyPlayEnabled(false);
    initScrollSpy();
    updateBadges();

    applyHash();
    window.addEventListener('hashchange', applyHash);   // PWA shortcuts / "Skip to games" while the app is already open
    checkAppVersion();

    applySearchFromURL();      // ?search=<term>  (matches the SearchAction in the page's structured data)
    applySharedGameFromURL();  // ?game=<url>     (Share button deep link)

    $('currentYear').textContent = new Date().getFullYear();

    if (!DATA_OK) {
        el.resultsCount.textContent = '';
        el.games.innerHTML = emptyState('alert', 'Games could not be loaded', 'Check your connection and try again.',
            '<button class="pill-btn" data-reload type="button" style="margin:1.25rem auto 0">Reload</button>');
    }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
