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
    'skills.hint':    'Klikni na oblast pro detail',
    'skills.back':    'Přehled',

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
    'skills.hint':    'Click a section for details',
    'skills.back':    'Overview',

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
  if (typeof activeDept !== 'undefined' && activeDept !== null) showExp(activeDept);
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
   Skill Tree — Data  (Orbit)
   ============================================================ */
const DEPTS = [
  { id: 'laravel', label: { cs: 'PHP / Laravel', en: 'PHP / Laravel' }, angle: 270 },
  { id: 'dotnet',  label: { cs: 'C# / .NET',     en: 'C# / .NET'     }, angle: 30  },
  { id: 'tooling', label: { cs: 'Tooling',        en: 'Tooling'       }, angle: 150 },
];

const EXPERIENCE = {
  laravel: {
    cs: 'PHP a Laravel jsou moje primární technologie. Stavím RESTful API s Eloquent ORM, píšu autentizaci přes Sanctum, organizuju kód do service a repository vrstev a pokrývám funkce automatickými testy pomocí PHPUnit. Blade šablony používám pro admin panely a jednoduché frontendy.',
    en: 'PHP and Laravel are my primary technologies. I build RESTful APIs with Eloquent ORM, implement authentication via Sanctum, organize code into service and repository layers, and cover features with PHPUnit tests. I use Blade templates for admin panels and lightweight frontends.',
  },
  dotnet: {
    cs: 'V .NET ekosystému se zaměřuji na ASP.NET Core Web API — modeluji endpointy, pracuju s Entity Framework Core pro databázové operace a zabezpečuju rozhraní pomocí JWT tokenů. Ke každé aplikaci generuji Swagger dokumentaci pro snadné testování a onboarding.',
    en: 'In the .NET ecosystem I focus on ASP.NET Core Web API — I design endpoints, use Entity Framework Core for database access, and secure APIs with JWT tokens. Every project includes Swagger documentation for easy testing and onboarding.',
  },
  tooling: {
    cs: 'Git používám každodenně — feature branches, PR workflow, squash merging. Moderní AI nástroje jako Cursor a Claude Code jsou pevnou součástí mého denního workflow: urychlují psaní boilerplate, pomáhají s code review a automatizují rutinní refaktoring.',
    en: 'I use Git every day — feature branches, PR workflow, squash merging. Modern AI tools like Cursor and Claude Code are a core part of my daily workflow: they speed up boilerplate writing, support code review, and automate routine refactoring.',
  },
};

/* ============================================================
   Canvas & State
   ============================================================ */
const canvas    = document.getElementById('skill-canvas');
const ctx       = canvas.getContext('2d');
const skillWrap = document.getElementById('skills-container');
const expPanel  = document.getElementById('skills-exp');
const expTitle  = document.getElementById('skills-exp-title');
const expText   = document.getElementById('skills-exp-text');
const backBtn   = document.getElementById('skills-back');

let canvasW = 0, canvasH = 0, dpr = 1, isMobile = false;
let camera = { scale: 1, tScale: 1 };

// Stars
let stars = [];

// Tree state
let treeState  = 'overview'; // 'overview' | 'detail'
let activeDept = null;

// Scene nodes
let sceneNodes = [];
let hoveredId  = null;

// Ring
let _ringR = 0, _ringCx = 0, _ringCy = 0;

// RAF
let rafId = null, lastFrame = 0;

/* ============================================================
   Canvas Setup
   ============================================================ */
function generateStars() {
  const count = Math.floor((canvasW * canvasH) / 2500);
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x:     Math.random() * canvasW,
      y:     Math.random() * canvasH,
      r:     Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.55 + 0.1,
      vx:    (Math.random() - 0.5) * 0.010,
      vy:    (Math.random() - 0.5) * 0.010,
    });
  }
}

/* ============================================================
   Scene — Build & Layout
   ============================================================ */
function buildSceneNodes() {
  sceneNodes = [];
  DEPTS.forEach(d => {
    sceneNodes.push({
      uid: 'dept_' + d.id, kind: 'dept', deptId: d.id,
      label: d.label, angle: d.angle,
      ax: 0, ay: 0, alpha: 0, scale: 1,
      tx: 0, ty: 0, tAlpha: 0, tScale: 1,
      r: 38,
      breathPhase: Math.random() * Math.PI * 2,
    });
  });
}

function polar(cx, cy, r, angleDeg) {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function setOverviewTargets() {
  const cx = canvasW / 2, cy = canvasH / 2;
  const R  = Math.min(canvasH, canvasW) * (isMobile ? 0.33 : 0.38);
  _ringCx = cx; _ringCy = cy; _ringR = R;
  sceneNodes.forEach(n => {
    const pos = polar(cx, cy, R, n.angle);
    n.tx = pos.x; n.ty = pos.y; n.tAlpha = 1; n.tScale = 1;
  });
}

function setDetailTargets(deptId) {
  const cx = canvasW / 2, cy = canvasH / 2;
  const R  = Math.min(canvasH, canvasW) * (isMobile ? 0.33 : 0.38);
  _ringCx = cx; _ringCy = cy; _ringR = R;
  sceneNodes.forEach(n => {
    if (n.deptId === deptId) {
      n.tx = cx; n.ty = cy; n.tAlpha = 1; n.tScale = 1.1;
    } else {
      const pos = polar(cx, cy, R, n.angle);
      n.tx = pos.x; n.ty = pos.y; n.tAlpha = 0.25; n.tScale = 1;
    }
  });
}

/* ============================================================
   Canvas Resize
   ============================================================ */
function resizeCanvas() {
  dpr      = window.devicePixelRatio || 1;
  canvasW  = skillWrap.clientWidth;
  isMobile = canvasW < 600;
  canvasH = isMobile
    ? Math.round(window.innerHeight * 0.72)
    : Math.round(window.innerHeight * 0.76);
  canvasH = Math.max(canvasH, isMobile ? 500 : 640);

  canvas.width        = canvasW * dpr;
  canvas.height       = canvasH * dpr;
  canvas.style.width  = canvasW + 'px';
  canvas.style.height = canvasH + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  camera.scale = camera.tScale;   // instant reset on resize

  generateStars();

  if (treeState === 'overview') setOverviewTargets();
  else                          setDetailTargets(activeDept);
  // Snap positions on resize (no animation)
  sceneNodes.forEach(n => { n.ax = n.tx; n.ay = n.ty; });
}

/* ============================================================
   Drawing
   ============================================================ */
function drawRing() {
  if (_ringR <= 0) return;
  ctx.save();

  // Layer 1: Wide soft glow
  ctx.beginPath();
  ctx.arc(_ringCx, _ringCy, _ringR, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(180,180,210,0.10)';
  ctx.lineWidth   = 10;
  ctx.shadowColor = 'rgba(255,255,255,0.18)';
  ctx.shadowBlur  = 28;
  ctx.stroke();

  // Layer 2: Sharp bright core
  ctx.beginPath();
  ctx.arc(_ringCx, _ringCy, _ringR, 0, Math.PI * 2);
  ctx.strokeStyle = '#6a6a6a';
  ctx.lineWidth   = 1;
  ctx.shadowColor = 'rgba(255,255,255,0.35)';
  ctx.shadowBlur  = 5;
  ctx.stroke();

  ctx.restore();
}

function drawStars() {
  const cx = canvasW / 2, cy = canvasH / 2;
  const maxDist = Math.hypot(cx, cy);
  ctx.fillStyle = '#ffffff';
  stars.forEach(s => {
    const dist   = Math.hypot(s.x - cx, s.y - cy);
    const radial = 1 - (dist / maxDist) * 0.72; // center=1.0, corners=0.28
    ctx.save();
    ctx.globalAlpha = s.alpha * radial;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawNode(n, ts) {
  if (n.alpha <= 0.01 || n.scale <= 0.01) return;
  const isHov    = n.uid === hoveredId;
  const isActive = treeState === 'detail' && n.deptId === activeDept;
  const label    = typeof n.label === 'object' ? (n.label[currentLang] || n.label.en) : n.label;
  const r        = (n.r || 38);
  const breath   = 1 + 0.045 * Math.sin(ts * 0.00095 + n.breathPhase);

  ctx.save();
  ctx.globalAlpha = n.alpha;
  ctx.translate(n.ax, n.ay);
  ctx.scale(n.scale * breath, n.scale * breath);

  if (isActive) {
    ctx.shadowColor = 'rgba(255,255,255,0.13)';
    ctx.shadowBlur  = 24;
  } else if (isHov) {
    ctx.shadowColor = 'rgba(255,255,255,0.08)';
    ctx.shadowBlur  = 16;
  }

  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = isActive ? '#202020' : (isHov ? '#222222' : '#1a1a1a');
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.strokeStyle = isActive ? '#909090' : (isHov ? '#686868' : '#484848');
  ctx.lineWidth   = isActive ? 1.5 : 1;
  ctx.stroke();

  const parts = label.split(' / ');
  ctx.font         = `500 10px Inter, -apple-system, sans-serif`;
  ctx.textAlign    = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle    = isActive ? '#e8e8e8' : (isHov ? '#b0b0b0' : '#7a7a7a');

  if (parts.length > 1) {
    ctx.fillText(parts[0], 0, -7);
    ctx.fillText(parts[1], 0, 7);
  } else {
    ctx.fillText(parts[0], 0, 0);
  }

  ctx.restore();
}

function drawAll(ts) {
  ctx.clearRect(0, 0, canvasW, canvasH);
  drawStars();
  ctx.save();
  ctx.translate(canvasW / 2, canvasH / 2);
  ctx.scale(camera.scale, camera.scale);
  ctx.translate(-canvasW / 2, -canvasH / 2);
  drawRing();
  sceneNodes.forEach(n => drawNode(n, ts));
  ctx.restore();
}

/* ============================================================
   Animation Loop
   ============================================================ */
function lerp(a, b, t) { return a + (b - a) * t; }

function updateAnimations(dt) {
  const sp = Math.min(1, dt * 0.005);
  sceneNodes.forEach(n => {
    n.ax    = lerp(n.ax,    n.tx,    sp);
    n.ay    = lerp(n.ay,    n.ty,    sp);
    n.alpha = lerp(n.alpha, n.tAlpha, sp * 1.1);
    n.scale = lerp(n.scale, n.tScale, sp * 1.2);
  });
  camera.scale = lerp(camera.scale, camera.tScale, sp);
  stars.forEach(s => {
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    if (s.x < 0)       s.x += canvasW;
    if (s.x > canvasW) s.x -= canvasW;
    if (s.y < 0)       s.y += canvasH;
    if (s.y > canvasH) s.y -= canvasH;
  });
}

function animate(ts) {
  const dt  = Math.min(ts - lastFrame, 50);
  lastFrame = ts;
  updateAnimations(dt);
  drawAll(ts);
  rafId = requestAnimationFrame(animate);
}

/* ============================================================
   Intro
   ============================================================ */
function startIntro() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  sceneNodes.forEach(n => { n.alpha = 0; n.tAlpha = 0; });

  if (reduced) {
    sceneNodes.forEach(n => { n.alpha = n.tAlpha = 1; });
    return;
  }

  DEPTS.forEach((d, di) => {
    setTimeout(() => {
      const dn = sceneNodes.find(n => n.uid === 'dept_' + d.id);
      if (dn) dn.tAlpha = 1;
    }, 200 + di * 150);
  });
}

/* ============================================================
   State Transitions
   ============================================================ */
function showExp(deptId) {
  const exp  = EXPERIENCE[deptId];
  const dept = DEPTS.find(d => d.id === deptId);
  if (!exp || !dept) return;
  expTitle.textContent = dept.label[currentLang] || dept.label.en;
  expText.textContent  = exp[currentLang] || exp.en;
}

function goOverview() {
  console.log('[DBG] goOverview called');
  treeState  = 'overview';
  activeDept = null;
  camera.tScale = 1.0;
  setOverviewTargets();
  document.getElementById('skills-split').classList.remove('detail');
  updateHint();
}

function goDetail(deptId) {
  treeState  = 'detail';
  activeDept = deptId;
  camera.tScale = 1.35;
  setDetailTargets(deptId);
  showExp(deptId);
  document.getElementById('skills-split').classList.add('detail');
  updateHint();
}

/* ============================================================
   Hit Detection
   ============================================================ */
function getNodeAt(sx, sy) {
  for (let i = sceneNodes.length - 1; i >= 0; i--) {
    const n = sceneNodes[i];
    if (n.alpha < 0.15) continue;
    const r  = (n.r || 38) * n.scale + 8;
    const dx = sx - n.ax, dy = sy - n.ay;
    if (dx * dx + dy * dy <= r * r) return n;
  }
  return null;
}

function canvasXY(e) {
  const rect = canvas.getBoundingClientRect();
  if (e.touches)        return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
  if (e.changedTouches) return { x: e.changedTouches[0].clientX - rect.left, y: e.changedTouches[0].clientY - rect.top };
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

function handleClick(sx, sy) {
  const n = getNodeAt(sx, sy);
  console.log('[DBG] handleClick node:', n ? n.uid : 'null', '| state:', treeState);
  if (!n) {
    if (treeState === 'detail') goOverview();
    return;
  }
  if (n.kind === 'dept') {
    if (treeState === 'overview') {
      goDetail(n.deptId);
    } else if (treeState === 'detail') {
      if (n.deptId === activeDept) goOverview();
      else goDetail(n.deptId);
    }
  }
}

/* ============================================================
   Canvas Events
   ============================================================ */
canvas.addEventListener('mousemove', e => {
  const { x, y } = canvasXY(e);
  const n         = getNodeAt(x, y);
  const newHov    = n ? n.uid : null;
  if (newHov !== hoveredId) {
    hoveredId           = newHov;
    canvas.style.cursor = newHov ? 'pointer' : 'default';
  }
});

canvas.addEventListener('click', e => {
  e.stopPropagation();
  const { x, y } = canvasXY(e);
  handleClick(x, y);
});

canvas.addEventListener('mouseleave', () => {
  hoveredId           = null;
  canvas.style.cursor = 'default';
});

canvas.addEventListener('touchend', e => {
  e.stopPropagation();
  const { x, y } = canvasXY(e);
  handleClick(x, y);
}, { passive: true });

document.addEventListener('click', e => {
  console.log('[DBG] click state:', treeState, '| onCanvas:', canvas.contains(e.target), '| target:', e.target);
  if (treeState === 'detail' && !canvas.contains(e.target)) goOverview();
}, true);

document.addEventListener('touchend', e => {
  if (treeState === 'detail' && !canvas.contains(e.target)) goOverview();
}, { passive: true, capture: true });

skillWrap.addEventListener('transitionend', e => {
  if (e.propertyName === 'width') resizeCanvas();
});

backBtn.addEventListener('click', () => goOverview());

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
  if (treeState === 'detail') {
    el.style.opacity = '0';
  } else {
    el.style.opacity = '';
    el.textContent = isTouch
      ? (currentLang === 'cs' ? 'Klepni na oblast pro detail' : 'Tap a section for details')
      : (currentLang === 'cs' ? 'Klikni na oblast pro detail' : 'Click a section for details');
  }
}

/* ============================================================
   Resize
   ============================================================ */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    resizeCanvas();
    updateHint();
  }, 150);
}, { passive: true });

/* ============================================================
   Init
   ============================================================ */
function init() {
  setLanguage(currentLang);
  buildSceneNodes();
  resizeCanvas();
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
