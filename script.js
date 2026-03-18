/* ============================================================
   i18n
   ============================================================ */
const translations = {
  cs: {
    'nav.about':    'O mně',
    'nav.skills':   'Dovednosti',
    'nav.projects': 'Projekty',
    'nav.contact':  'Kontakt',

    'hero.role': 'Junior Backend Developer',

    'about.heading':    'Kód, který obstojí v čase.',
    'about.p1': 'Jsem backend developer se zaměřením na PHP/Laravel a C#/.NET. Rád navrhuju čistá API, pracuju s relačními databázemi a automatizuju rutinní úkoly pomocí moderních AI nástrojů.',
    'about.p2': 'Ve volném čase prozkoumávám nové frameworky, přispívám do open-source projektů a zdokonaluji své pracovní postupy s nástroji jako Cursor a Claude Code.',
    'about.p3': 'Věřím v psaní kódu, který je snadno čitelný, testovatelný a udržovatelný — nejen kódu, který funguje.',
    'about.key-name':     'Jméno',
    'about.key-role':     'Role',
    'about.key-focus':    'Zaměření',
    'about.key-location': 'Lokace',
    'about.key-status':   'Status',
    'about.val-role':     'Junior Backend Developer',
    'about.val-status':   'Dostupný',

    'skills.heading': 'Stack & technologie.',
    'skills.hint':    'Táhni pro prozkoumání · Klikni na uzel pro detail',

    'projects.heading':   'Vybrané práce.',
    'projects.link-code': 'Kód ↗',
    'projects.p1-title':  'Laravel REST API',
    'projects.p1-desc':   'RESTful API postavené na Laravel s Eloquent ORM, autentizací přes Sanctum a automatickými testy pomocí PHPUnit.',
    'projects.p2-title':  'Laravel CMS',
    'projects.p2-desc':   'Redakční systém s Blade šablonami, administračním panelem a správou médií pomocí Laravel Filesystems.',
    'projects.p3-title':  '.NET Web API',
    'projects.p3-desc':   'ASP.NET Core Web API s Entity Framework Core, JWT autentizací a Swagger dokumentací.',

    'contact.heading': 'Pojďme\nspolupracovat.',
    'contact.sub':     'Hledáš backend developera nebo chceš spolupracovat na projektu? Napiš mi.',

    'footer.copy': '© 2025',

    'skill.backend.desc':    'Celkový backend stack — PHP/Laravel ekosystém, C#/.NET a vývojové nástroje.',
    'skill.php.desc':        'Primární backend jazyk. OOP, Composer, moderní PHP 8.x.',
    'skill.laravel.desc':    'Hlavní PHP framework. MVC, middleware, service providers, Queues.',
    'skill.eloquent.desc':   'Laravel ORM — vztahy, scopy, mutátory, lazy loading.',
    'skill.blade.desc':      'Šablonovací engine Laravelu. Komponenty, direktivy, dědičnost layoutů.',
    'skill.artisan.desc':    'CLI nástroj Laravelu. Vlastní příkazy, migrace, seedy, tinker.',
    'skill.csharp.desc':     'Staticky typovaný jazyk .NET ekosystému. LINQ, async/await, generika.',
    'skill.dotnet.desc':     'ASP.NET Core framework. Dependency injection, middleware pipeline.',
    'skill.ef.desc':         'Entity Framework Core — Code First migrace, LINQ dotazy.',
    'skill.restapi.desc':    'Návrh RESTful API. HTTP metody, stavové kódy, versioning, JWT.',
    'skill.db.desc':         'MySQL a PostgreSQL. Návrh schématu, indexy, relační dotazy.',
    'skill.git.desc':        'Verzovací systém. Branching strategie, PR workflow, GitHub.',
    'skill.ai.desc':         'AI nástroje pro zvýšení produktivity při vývoji softwaru.',
    'skill.cursor.desc':     'AI-powered editor. Inline návrhy, chat s codebase kontextem.',
    'skill.claudecode.desc': 'Claude Code CLI — autonomní AI asistent pro vývoj softwaru.',

    'skill.group.root':      'Kořen',
    'skill.group.lang':      'Jazyk',
    'skill.group.framework': 'Framework',
    'skill.group.lib':       'Knihovna',
    'skill.group.concept':   'Koncept',
    'skill.group.db':        'Databáze',
    'skill.group.tool':      'Nástroj',
  },

  en: {
    'nav.about':    'About',
    'nav.skills':   'Skills',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    'hero.role': 'Junior Backend Developer',

    'about.heading':    'Code that stands the test of time.',
    'about.p1': 'I\'m a backend developer focused on PHP/Laravel and C#/.NET. I enjoy designing clean APIs, working with relational databases and automating repetitive tasks with modern AI tools.',
    'about.p2': 'In my spare time I explore new frameworks, contribute to open-source projects and sharpen my workflows with tools like Cursor and Claude Code.',
    'about.p3': 'I believe in writing code that is readable, testable and maintainable — not just code that works.',
    'about.key-name':     'Name',
    'about.key-role':     'Role',
    'about.key-focus':    'Focus',
    'about.key-location': 'Location',
    'about.key-status':   'Status',
    'about.val-role':     'Junior Backend Developer',
    'about.val-status':   'Available',

    'skills.heading': 'Stack & technologies.',
    'skills.hint':    'Drag to explore · Click a node for details',

    'projects.heading':   'Selected work.',
    'projects.link-code': 'Code ↗',
    'projects.p1-title':  'Laravel REST API',
    'projects.p1-desc':   'RESTful API built with Laravel featuring Eloquent ORM, Sanctum authentication and automated PHPUnit tests.',
    'projects.p2-title':  'Laravel CMS',
    'projects.p2-desc':   'Content management system using Blade templates, an admin panel and media management via Laravel Filesystems.',
    'projects.p3-title':  '.NET Web API',
    'projects.p3-desc':   'ASP.NET Core Web API with Entity Framework Core, JWT authentication and Swagger documentation.',

    'contact.heading': 'Let\'s work\ntogether.',
    'contact.sub':     'Looking for a backend developer or want to collaborate on a project? Drop me a line.',

    'footer.copy': '© 2025',

    'skill.backend.desc':    'The overall backend stack — PHP/Laravel ecosystem, C#/.NET and developer tooling.',
    'skill.php.desc':        'Primary backend language. OOP, Composer packages, modern PHP 8.x.',
    'skill.laravel.desc':    'Main PHP framework. MVC architecture, middleware, service providers, Queues.',
    'skill.eloquent.desc':   'Laravel ORM — relationships, scopes, mutators, lazy loading.',
    'skill.blade.desc':      'Laravel\'s templating engine. Components, directives, layout inheritance.',
    'skill.artisan.desc':    'Laravel\'s CLI tool. Custom commands, migrations, seeders, tinker.',
    'skill.csharp.desc':     'Statically typed language for the .NET ecosystem. LINQ, async/await, generics.',
    'skill.dotnet.desc':     'ASP.NET Core framework. Dependency injection, middleware pipeline.',
    'skill.ef.desc':         'Entity Framework Core — Code First migrations, LINQ queries.',
    'skill.restapi.desc':    'Designing RESTful APIs. HTTP methods, status codes, versioning, JWT.',
    'skill.db.desc':         'MySQL and PostgreSQL. Schema design, indexes, relational queries.',
    'skill.git.desc':        'Version control. Branching strategies, PR workflow, GitHub.',
    'skill.ai.desc':         'AI tools for boosting software development productivity.',
    'skill.cursor.desc':     'AI-powered editor. Inline suggestions, chat with codebase context.',
    'skill.claudecode.desc': 'Claude Code CLI — autonomous AI assistant for software development.',

    'skill.group.root':      'Root',
    'skill.group.lang':      'Language',
    'skill.group.framework': 'Framework',
    'skill.group.lib':       'Library',
    'skill.group.concept':   'Concept',
    'skill.group.db':        'Database',
    'skill.group.tool':      'Tool',
  }
};

let currentLang = localStorage.getItem('lang') || 'cs';

function t(key) {
  return (translations[currentLang] || {})[key] || (translations.cs || {})[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.getElementById('lang-toggle').textContent = lang === 'cs' ? 'EN' : 'CS';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (key === 'hero.bio' || key === 'contact.heading') {
      el.innerHTML = val.replace(/\n/g, '<br>');
    } else {
      el.textContent = val;
    }
  });

  updateHint();
  if (selectedNode !== null) renderTooltip(selectedNode);
}

/* ============================================================
   Hero — Typewriter (Option 3)
   ============================================================ */
const TW_WORDS = {
  cs: ['Backend Developer', 'PHP / Laravel', 'C# / .NET', 'REST API Design', 'AI-Augmented Dev'],
  en: ['Backend Developer', 'PHP / Laravel', 'C# / .NET', 'REST API Design', 'AI-Augmented Dev'],
};

let _twTimer = null;

function runTypewriter() {
  const el = document.getElementById('tw-text');
  if (!el) return;
  clearTimeout(_twTimer);

  const words   = TW_WORDS[currentLang] || TW_WORDS.en;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) { el.textContent = words[0]; return; }

  let wi = 0, ci = 0, deleting = false;

  function tick() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; _twTimer = setTimeout(tick, 2500); }
      else                    {                   _twTimer = setTimeout(tick, 62);   }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; _twTimer = setTimeout(tick, 380); }
      else          {                   _twTimer = setTimeout(tick, 34);  }
    }
  }

  _twTimer = setTimeout(tick, 950);
}

/* ============================================================
   Hero — Terminal Intro (Option 6 — saved for later)
   ============================================================ */
const TERMINAL_SEQ = [
  { text: 'Debian GNU/Linux 12 (bookworm)',          cls: 'sys', at:    0 },
  { text: 'vojtech-portfolio tty1',                  cls: 'sys', at:  220 },
  { text: '',                                        cls: '',    at:  620 },
  { text: 'vojtech-portfolio login: vojtech',        cls: 'cmd', at: 1050, type: true },
  { text: 'Password: ········',                      cls: 'sys', at: 2150 },
  { text: '',                                        cls: '',    at: 2400 },
  { text: 'Welcome to vojtech-portfolio.',           cls: 'sys', at: 2750 },
  { text: 'Last login: Wed Mar 18 21:40:12 2026',    cls: 'sys', at: 2960 },
  { text: '',                                        cls: '',    at: 3160 },
  { text: 'vojtech@portfolio:~$ whoami',             cls: 'cmd', at: 3600, type: true },
  { text: 'Vojtěch Kocourek',                        cls: 'out', at: 4460 },
  { text: '',                                        cls: '',    at: 4660 },
  { text: 'vojtech@portfolio:~$ cat .role',          cls: 'cmd', at: 5060, type: true },
  { text: 'Backend Developer',                       cls: 'out', at: 5870 },
  { text: '',                                        cls: '',    at: 6070 },
  { text: 'vojtech@portfolio:~$ ',                   cls: 'cmd', at: 6500, cursor: true },
];

let _tTimers    = [];
let _tIntervals = [];

function clearTerminalTimers() {
  _tTimers.forEach(clearTimeout);
  _tIntervals.forEach(clearInterval);
  _tTimers = []; _tIntervals = [];
}

function runTerminalIntro() {
  const el = document.getElementById('hero-terminal');
  if (!el) return;
  clearTerminalTimers();
  el.innerHTML = '';

  const reduced  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CHAR_MS  = 28;

  TERMINAL_SEQ.forEach(item => {
    const id = setTimeout(() => {
      const span = document.createElement('span');
      span.className = 'tline' + (item.cls ? ` tline--${item.cls}` : '');

      if (item.cursor) {
        span.textContent = item.text;
        const cur = document.createElement('span');
        cur.className = 'tcursor';
        span.appendChild(cur);
        el.appendChild(span);
        return;
      }

      if (item.type && !reduced) {
        span.textContent = '';
        el.appendChild(span);
        let i = 0;
        const iv = setInterval(() => {
          if (i < item.text.length) { span.textContent += item.text[i++]; }
          else clearInterval(iv);
        }, CHAR_MS);
        _tIntervals.push(iv);
      } else {
        span.textContent = item.text;
        el.appendChild(span);
      }
    }, reduced ? 0 : item.at);
    _tTimers.push(id);
  });
}

/* ============================================================
   Skill Tree — Data  (tree-space coordinates in px)
   ============================================================ */
const TREE_NODES = [
  // Root
  { id: 'backend',    label: 'Backend',       group: 'root',      tx:    0, ty:   0 },

  // Level 1
  { id: 'php',        label: 'PHP',            group: 'lang',      tx: -310, ty: 140 },
  { id: 'csharp',     label: 'C#',             group: 'lang',      tx:   90, ty: 140 },
  { id: 'ai',         label: 'AI Tools',       group: 'tool',      tx:  380, ty: 140 },
  { id: 'git',        label: 'Git',            group: 'tool',      tx:  560, ty: 140 },

  // Level 2
  { id: 'laravel',    label: 'Laravel',        group: 'framework', tx: -360, ty: 280 },
  { id: 'dotnet',     label: '.NET',           group: 'framework', tx:  130, ty: 280 },
  { id: 'cursor',     label: 'Cursor',         group: 'tool',      tx:  340, ty: 280 },
  { id: 'claudecode', label: 'Claude Code',    group: 'tool',      tx:  510, ty: 280 },

  // Level 3
  { id: 'eloquent',   label: 'Eloquent',       group: 'lib',       tx: -530, ty: 420 },
  { id: 'blade',      label: 'Blade',          group: 'lib',       tx: -390, ty: 420 },
  { id: 'artisan',    label: 'Artisan',        group: 'lib',       tx: -250, ty: 420 },
  { id: 'restapi',    label: 'REST APIs',      group: 'concept',   tx:  -60, ty: 420 },
  { id: 'ef',         label: 'Entity Fw.',     group: 'lib',       tx:  185, ty: 420 },

  // Level 4
  { id: 'db',         label: 'MySQL / PG',     group: 'db',        tx:   60, ty: 560 },
];

const TREE_EDGES = [
  ['backend', 'php'],
  ['backend', 'csharp'],
  ['backend', 'ai'],
  ['backend', 'git'],
  ['php',     'laravel'],
  ['csharp',  'dotnet'],
  ['ai',      'cursor'],
  ['ai',      'claudecode'],
  ['laravel', 'eloquent'],
  ['laravel', 'blade'],
  ['laravel', 'artisan'],
  ['laravel', 'restapi'],
  ['dotnet',  'ef'],
  ['dotnet',  'restapi'],
  ['eloquent','db'],
  ['ef',      'db'],
];

/* ============================================================
   Canvas & State
   ============================================================ */
const canvas    = document.getElementById('skill-canvas');
const ctx       = canvas.getContext('2d');
const skillWrap = document.getElementById('skills-container');
const tooltip   = document.getElementById('skill-tooltip');

let canvasW     = 0;
let canvasH     = 0;
let dpr         = 1;
let isMobile    = false;

// Pan state
let panX           = 0;
let panY           = 0;
let panInitialized = false;

// Drag state
let isDragging = false;
let hasDragged = false;
let dragStartX = 0, dragStartY = 0;
let panStartX  = 0, panStartY  = 0;

// Interaction
let selectedNode = null;
let hoveredNode  = null;

// Node computed data
let treeNodeMap = {};
let edgeCurves  = [];
let nodeLevels  = {};

// Animation state (per node/edge)
const nodeGlow  = {}; // 0–1
const nodeAlpha = {}; // 0–1 (intro)
const edgeAlpha = {}; // 0–1 (highlight)
const edgeIntro = {}; // 0–1 (intro draw-in)

// Particles
const particles   = [];
const spawnTimers = {};

// Ripples
const ripples = [];

// RAF
let rafId     = null;
let lastFrame = 0;
let introStart = null;
const LEVEL_DELAY = 180; // ms per level in intro
const LEVEL_FADE  = 280; // ms to fade in

/* ============================================================
   Canvas Setup
   ============================================================ */
function computeNodeDimensions() {
  ctx.save();
  TREE_NODES.forEach(n => {
    ctx.font = n.group === 'root'
      ? '500 12px Inter, -apple-system, sans-serif'
      : '400 11px Inter, -apple-system, sans-serif';
    n.w = Math.max(74, ctx.measureText(n.label).width + 30);
    n.h = n.group === 'root' ? 38 : 32;
  });
  ctx.restore();
}

function buildMaps() {
  treeNodeMap = {};
  TREE_NODES.forEach(n => treeNodeMap[n.id] = n);

  edgeCurves = TREE_EDGES.map(([aId, bId]) => {
    const a = treeNodeMap[aId];
    const b = treeNodeMap[bId];
    if (!a || !b) return null;
    const sx   = a.tx;
    const sy   = a.ty + a.h / 2;
    const ex   = b.tx;
    const ey   = b.ty - b.h / 2;
    const midY = (sy + ey) / 2;
    return { aId, bId, sx, sy, ex, ey, c1x: sx, c1y: midY, c2x: ex, c2y: midY };
  });
}

function computeLevels() {
  const lvl = {};
  lvl['backend'] = 0;
  let queue = ['backend'];
  while (queue.length > 0) {
    const next = [];
    queue.forEach(id => {
      TREE_EDGES.forEach(([a, b]) => {
        if (a === id && !(b in lvl)) {
          lvl[b] = lvl[id] + 1;
          next.push(b);
        }
      });
    });
    queue = next;
  }
  return lvl;
}

function resizeCanvas() {
  dpr      = window.devicePixelRatio || 1;
  canvasW  = skillWrap.clientWidth;
  isMobile = canvasW < 600;
  canvasH  = isMobile ? 420 : 500;

  canvas.width        = canvasW * dpr;
  canvas.height       = canvasH * dpr;
  canvas.style.height = canvasH + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  computeNodeDimensions();
  buildMaps();

  if (!panInitialized) {
    panX = canvasW / 2;
    panY = 48;
    panInitialized = true;
  }
}

/* ============================================================
   Drawing Helpers
   ============================================================ */
function cubicBezierPt(t, sx, sy, c1x, c1y, c2x, c2y, ex, ey) {
  const mt = 1 - t;
  return {
    x: mt*mt*mt*sx + 3*mt*mt*t*c1x + 3*mt*t*t*c2x + t*t*t*ex,
    y: mt*mt*mt*sy + 3*mt*mt*t*c1y + 3*mt*t*t*c2y + t*t*t*ey,
  };
}

function pill(ctx, cx, cy, w, h) {
  const r = h / 2;
  const x = cx - w / 2;
  const y = cy - h / 2;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/* ============================================================
   Drawing
   ============================================================ */
function drawDotGrid() {
  const spacing = 26;
  const dotR    = 0.9;
  const ox = ((panX % spacing) + spacing) % spacing;
  const oy = ((panY % spacing) + spacing) % spacing;

  ctx.fillStyle = 'rgba(255,255,255,0.032)';
  for (let x = ox; x <= canvasW + spacing; x += spacing) {
    for (let y = oy; y <= canvasH + spacing; y += spacing) {
      ctx.beginPath();
      ctx.arc(x, y, dotR, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawEdge(curve, highlightA, introA) {
  if (!curve || introA <= 0) return;
  const sx = curve.sx + panX, sy = curve.sy + panY;
  const ex = curve.ex + panX, ey = curve.ey + panY;
  const c1x = curve.c1x + panX, c1y = curve.c1y + panY;
  const c2x = curve.c2x + panX, c2y = curve.c2y + panY;

  // For intro: partially draw the curve using incremental points
  const steps = Math.round(60 * introA);

  ctx.save();
  ctx.globalAlpha = Math.min(1, introA * 2) * (highlightA > 0 ? 1 : 0.9);

  ctx.beginPath();
  ctx.moveTo(sx, sy);
  for (let i = 1; i <= steps; i++) {
    const tt = (i / 60);
    const pt = cubicBezierPt(tt, curve.sx, curve.sy, curve.c1x, curve.c1y, curve.c2x, curve.c2y, curve.ex, curve.ey);
    ctx.lineTo(pt.x + panX, pt.y + panY);
  }

  if (highlightA > 0) {
    ctx.strokeStyle = `rgba(160,160,160,${0.25 + highlightA * 0.55})`;
    ctx.lineWidth   = 1.5;
    ctx.shadowColor = `rgba(200,200,200,${highlightA * 0.28})`;
    ctx.shadowBlur  = 8;
  } else {
    ctx.strokeStyle = '#242424';
    ctx.lineWidth   = 1;
  }
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.restore();
}

function drawNode(n, glow, alpha) {
  if (alpha <= 0) return;
  const sx = n.tx + panX;
  const sy = n.ty + panY;
  const isRoot     = n.group === 'root';
  const isSelected = n.id === selectedNode;
  const isHovered  = n.id === hoveredNode;

  ctx.save();
  ctx.globalAlpha = alpha;

  if (glow > 0) {
    ctx.shadowColor = `rgba(210,210,210,${glow * 0.4})`;
    ctx.shadowBlur  = 14 * glow;
  }

  // Fill
  pill(ctx, sx, sy, n.w, n.h);
  ctx.fillStyle = isSelected ? '#1f1f1f' : (isHovered ? '#1a1a1a' : '#161616');
  ctx.fill();

  // Border
  pill(ctx, sx, sy, n.w, n.h);
  ctx.lineWidth   = isRoot ? 1.5 : 1;
  ctx.strokeStyle = isSelected ? '#888888'
    : (isHovered ? '#444444'
    : (isRoot    ? '#2e2e2e' : '#252525'));
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Selected outer ring pulse
  if (isSelected) {
    const pulse = 0.12 + 0.08 * Math.sin(Date.now() * 0.0025);
    pill(ctx, sx, sy, n.w + 10, n.h + 10);
    ctx.strokeStyle = `rgba(180,180,180,${pulse})`;
    ctx.lineWidth   = 1;
    ctx.stroke();
  }

  // Label
  ctx.font = isRoot
    ? '500 12px Inter, -apple-system, sans-serif'
    : '400 11px Inter, -apple-system, sans-serif';
  ctx.textAlign    = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle    = isSelected ? '#d8d8d8'
    : (isHovered   ? '#a0a0a0'
    : (isRoot      ? '#707070' : '#545454'));
  ctx.fillText(n.label, sx, sy);

  ctx.restore();
}

function drawParticles() {
  particles.forEach(p => {
    const curve = edgeCurves[p.edgeIdx];
    if (!curve) return;
    const pos = cubicBezierPt(p.t, curve.sx, curve.sy, curve.c1x, curve.c1y, curve.c2x, curve.c2y, curve.ex, curve.ey);
    ctx.save();
    ctx.globalAlpha = p.opacity * 0.85;
    ctx.beginPath();
    ctx.arc(pos.x + panX, pos.y + panY, p.size, 0, Math.PI * 2);
    ctx.fillStyle = '#b0b0b0';
    ctx.fill();
    ctx.restore();
  });
}

function drawRipples() {
  ripples.forEach(r => {
    ctx.save();
    ctx.globalAlpha = r.alpha;
    ctx.beginPath();
    ctx.arc(r.x + panX, r.y + panY, r.radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(180,180,180,0.5)';
    ctx.lineWidth   = 1;
    ctx.stroke();
    ctx.restore();
  });
}

function drawHint(alpha) {
  if (alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = alpha * 0.35;
  ctx.font        = '400 11px Inter, -apple-system, sans-serif';
  ctx.textAlign   = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle   = '#666666';
  ctx.fillText(t('skills.hint'), canvasW / 2, canvasH - 14);
  ctx.restore();
}

function drawAll() {
  ctx.clearRect(0, 0, canvasW, canvasH);
  drawDotGrid();

  // Edges (below nodes)
  TREE_EDGES.forEach(([aId, bId], i) => {
    const key = `${aId}|${bId}`;
    drawEdge(edgeCurves[i], edgeAlpha[key] || 0, edgeIntro[key] || 0);
  });

  drawParticles();
  drawRipples();

  // Nodes (on top)
  TREE_NODES.forEach(n => {
    drawNode(n, nodeGlow[n.id] || 0, nodeAlpha[n.id] || 0);
  });

  // Hint fade-in after intro
  if (introStart !== null) {
    const elapsed = Date.now() - introStart;
    const maxLevel = Math.max(...Object.values(nodeLevels));
    const hintStart = (maxLevel + 1) * LEVEL_DELAY + LEVEL_FADE + 400;
    const hintAlpha = Math.min(1, Math.max(0, (elapsed - hintStart) / 600));
    drawHint(hintAlpha);
  } else {
    drawHint(selectedNode ? 0 : 1);
  }
}

/* ============================================================
   Animation Loop
   ============================================================ */
function lerp(a, b, t) { return a + (b - a) * t; }

function updateAnimations(dt) {
  const lerpSpeed = Math.min(1, dt * 0.009);

  // --- Intro ---
  if (introStart !== null) {
    const elapsed = Date.now() - introStart;

    TREE_NODES.forEach(n => {
      const level  = nodeLevels[n.id] !== undefined ? nodeLevels[n.id] : 0;
      const target = Math.min(1, Math.max(0, (elapsed - level * LEVEL_DELAY) / LEVEL_FADE));
      nodeAlpha[n.id] = target;
    });

    TREE_EDGES.forEach(([aId, bId], i) => {
      const key    = `${aId}|${bId}`;
      const level  = (nodeLevels[bId] !== undefined ? nodeLevels[bId] : 1);
      const start  = (level - 0.5) * LEVEL_DELAY;
      const target = Math.min(1, Math.max(0, (elapsed - start) / (LEVEL_FADE * 1.2)));
      edgeIntro[key] = target;
    });

    const maxLevel  = Math.max(...Object.values(nodeLevels));
    const doneAt    = (maxLevel + 1) * LEVEL_DELAY + LEVEL_FADE + 800;
    if (elapsed > doneAt) introStart = null;
  }

  // --- Node glow targets ---
  TREE_NODES.forEach(n => {
    let target = 0;
    if (n.id === selectedNode)      target = 1;
    else if (n.id === hoveredNode)  target = 0.5;
    else if (selectedNode !== null) {
      const isNeighbor = TREE_EDGES.some(([a, b]) =>
        (a === selectedNode && b === n.id) || (b === selectedNode && a === n.id)
      );
      if (isNeighbor) target = 0.28;
    }
    nodeGlow[n.id] = lerp(nodeGlow[n.id] || 0, target, lerpSpeed * 2);
  });

  // --- Edge highlight targets ---
  TREE_EDGES.forEach(([aId, bId]) => {
    const key    = `${aId}|${bId}`;
    const active = selectedNode !== null && (aId === selectedNode || bId === selectedNode);
    edgeAlpha[key] = lerp(edgeAlpha[key] || 0, active ? 1 : 0, lerpSpeed * 1.5);
  });

  // --- Particles ---
  const now = Date.now();
  TREE_EDGES.forEach(([aId, bId], i) => {
    const active = selectedNode !== null && (aId === selectedNode || bId === selectedNode);
    if (!active) return;
    const last = spawnTimers[i] || 0;
    if (now - last > 320) {
      spawnTimers[i] = now;
      particles.push({
        edgeIdx: i,
        t:     Math.random() * 0.08,
        speed: 0.0013 + Math.random() * 0.0007,
        size:  1.0 + Math.random() * 1.0,
        opacity: 0,
      });
    }
  });

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.t += p.speed * dt;
    if (p.t >= 1) { particles.splice(i, 1); continue; }
    p.opacity = p.t < 0.15 ? p.t / 0.15 : p.t > 0.82 ? (1 - p.t) / 0.18 : 1;
  }

  // --- Ripples ---
  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    r.radius += 52 * dt / 1000;
    r.alpha   = Math.max(0, r.alpha - 2.0 * dt / 1000);
    if (r.alpha <= 0) ripples.splice(i, 1);
  }
}

function animate(now) {
  const dt = Math.min(now - lastFrame, 50);
  lastFrame = now;
  updateAnimations(dt);
  drawAll();
  rafId = requestAnimationFrame(animate);
}

/* ============================================================
   Intro
   ============================================================ */
function startIntro() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  TREE_NODES.forEach(n => { nodeAlpha[n.id] = 0; nodeGlow[n.id] = 0; });
  TREE_EDGES.forEach(([a, b]) => {
    edgeIntro[`${a}|${b}`] = 0;
    edgeAlpha[`${a}|${b}`] = 0;
  });

  if (prefersReduced) {
    TREE_NODES.forEach(n => nodeAlpha[n.id] = 1);
    TREE_EDGES.forEach(([a, b]) => { edgeIntro[`${a}|${b}`] = 1; });
    introStart = null;
  } else {
    introStart = Date.now();
  }
}

/* ============================================================
   Hit Detection  (screen → tree space)
   ============================================================ */
function getNodeAt(screenX, screenY) {
  const tx = screenX - panX;
  const ty = screenY - panY;
  for (const n of TREE_NODES) {
    const hw = n.w / 2 + 4;
    const hh = n.h / 2 + 4;
    if (tx >= n.tx - hw && tx <= n.tx + hw && ty >= n.ty - hh && ty <= n.ty + hh) {
      return n;
    }
  }
  return null;
}

function canvasXY(e) {
  const rect = canvas.getBoundingClientRect();
  if (e.touches)   return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
  if (e.changedTouches) return { x: e.changedTouches[0].clientX - rect.left, y: e.changedTouches[0].clientY - rect.top };
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

/* ============================================================
   Tooltip
   ============================================================ */
function renderTooltip(nodeId) {
  const n = treeNodeMap[nodeId];
  if (!n) return;

  document.getElementById('tooltip-name').textContent  = n.label;
  document.getElementById('tooltip-group').textContent = t(`skill.group.${n.group}`);
  document.getElementById('tooltip-desc').textContent  = t(`skill.${n.id}.desc`);
  tooltip.classList.add('visible');

  const sx = n.tx + panX;
  const sy = n.ty + panY;
  const TW = 220, TH = 100, PAD = 12;
  const cW = canvasW, cH = canvasH;

  let left = sx + n.w / 2 + PAD;
  if (left + TW > cW - PAD) left = sx - n.w / 2 - TW - PAD;
  let top  = Math.max(PAD, Math.min(cH - TH - PAD, sy - TH / 2));

  tooltip.style.left = left + 'px';
  tooltip.style.top  = top  + 'px';
}

function handleNodeClick(screenX, screenY) {
  const node = getNodeAt(screenX, screenY);
  if (node) {
    if (selectedNode === node.id) {
      selectedNode = null;
      tooltip.classList.remove('visible');
    } else {
      selectedNode = node.id;
      renderTooltip(node.id);
      ripples.push({ x: node.tx, y: node.ty, radius: node.h / 2, alpha: 0.7 });
    }
  } else {
    selectedNode = null;
    tooltip.classList.remove('visible');
  }
}

/* ============================================================
   Canvas Events — Drag + Click
   ============================================================ */
canvas.addEventListener('mousedown', e => {
  if (e.button !== 0) return;
  isDragging = true;
  hasDragged = false;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  panStartX  = panX;
  panStartY  = panY;
  skillWrap.classList.add('dragging');
});

window.addEventListener('mousemove', e => {
  if (!isDragging) {
    // Hover detection
    const { x, y } = canvasXY(e);
    const node      = getNodeAt(x, y);
    hoveredNode     = node ? node.id : null;
    return;
  }
  const dx = e.clientX - dragStartX;
  const dy = e.clientY - dragStartY;
  if (Math.sqrt(dx * dx + dy * dy) > 5) hasDragged = true;
  panX = panStartX + dx;
  panY = panStartY + dy;
  if (selectedNode !== null) renderTooltip(selectedNode);
});

window.addEventListener('mouseup', e => {
  if (!isDragging) return;
  isDragging = false;
  skillWrap.classList.remove('dragging');
  if (!hasDragged) {
    const { x, y } = canvasXY(e);
    handleNodeClick(x, y);
  }
});

canvas.addEventListener('mouseleave', () => {
  hoveredNode = null;
  if (!isDragging) skillWrap.classList.remove('dragging');
});

// Touch drag
canvas.addEventListener('touchstart', e => {
  if (e.touches.length !== 1) return;
  isDragging = true;
  hasDragged = false;
  dragStartX = e.touches[0].clientX;
  dragStartY = e.touches[0].clientY;
  panStartX  = panX;
  panStartY  = panY;
}, { passive: true });

canvas.addEventListener('touchmove', e => {
  if (!isDragging || e.touches.length !== 1) return;
  const dx = e.touches[0].clientX - dragStartX;
  const dy = e.touches[0].clientY - dragStartY;
  if (Math.sqrt(dx * dx + dy * dy) > 8) hasDragged = true;
  panX = panStartX + dx;
  panY = panStartY + dy;
  if (selectedNode !== null) renderTooltip(selectedNode);
}, { passive: true });

canvas.addEventListener('touchend', e => {
  if (!hasDragged) {
    const { x, y } = canvasXY(e);
    handleNodeClick(x, y);
  }
  isDragging = false;
});

/* ============================================================
   Navbar
   ============================================================ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});

mainNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.navbar__nav a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a =>
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)
        );
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
})();

/* ============================================================
   Section Reveal
   ============================================================ */
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ============================================================
   Language Toggle
   ============================================================ */
document.getElementById('lang-toggle').addEventListener('click', () => {
  setLanguage(currentLang === 'cs' ? 'en' : 'cs');
});

/* ============================================================
   Hint text
   ============================================================ */
function updateHint() {
  const el = document.getElementById('skills-hint');
  if (!el) return;
  const isTouch = window.matchMedia('(hover: none)').matches;
  el.textContent = isTouch
    ? (currentLang === 'cs' ? 'Táhni pro prozkoumání · Klepni na uzel pro detail' : 'Drag to explore · Tap a node for details')
    : t('skills.hint');
}

/* ============================================================
   Resize
   ============================================================ */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const oldW = canvasW;
    resizeCanvas();
    // Adjust panX proportionally when canvas resizes
    if (oldW > 0) panX = panX * (canvasW / oldW);
    if (selectedNode !== null) renderTooltip(selectedNode);
    updateHint();
  }, 150);
}, { passive: true });

/* ============================================================
   Init
   ============================================================ */
function init() {
  setLanguage(currentLang);
  resizeCanvas();
  nodeLevels = computeLevels();
  startIntro();
  updateHint();

  lastFrame = performance.now();
  rafId = requestAnimationFrame(animate);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
