/* ============================================================
   i18n
   ============================================================ */
const translations = {
  cs: {
    'nav.about':    'O mně',
    'nav.skills':   'Dovednosti',
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

function setLanguage(lang, roleDelay = 0) {
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
  if (typeof updateNodeLabels === 'function') updateNodeLabels();
  if (typeof activeDept !== 'undefined' && activeDept !== null) showExp(activeDept);
  typeRole(t('hero.role'), roleDelay);
}

let typeRoleTimer = null;

function typeRole(text, delay) {
  if (typeRoleTimer !== null) { clearTimeout(typeRoleTimer); typeRoleTimer = null; }

  const el = document.querySelector('.hero__role');
  if (!el) return;
  el.textContent = '';

  const prompt = document.createElement('span');
  prompt.className = 'hero__role-prompt';
  prompt.textContent = '//';
  el.appendChild(prompt);

  const cursor = document.createElement('span');
  cursor.className = 'hero__role-cursor';
  el.appendChild(cursor);

  let i = 0;
  function typeNext() {
    if (i >= text.length) return;
    el.insertBefore(document.createTextNode(text[i]), cursor);
    i++;
    typeRoleTimer = setTimeout(typeNext, 55 + Math.random() * 35);
  }

  typeRoleTimer = setTimeout(typeNext, delay);
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

const ORBIT_LABELS = {
  laravel: ['Laravel', 'PHP', 'Eloquent', 'Blade', 'Sanctum', 'Pest'],
  dotnet:  ['C#', 'ASP.NET', 'EF Core', 'JWT', 'Swagger', 'LINQ'],
  tooling: ['Git', 'Cursor', 'Claude', 'Docker', 'Composer', 'VS Code'],
};

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
   DOM Skill Tree — State & Refs
   ============================================================ */
const skillWrap = document.getElementById('skills-container');
const expPanel  = document.getElementById('skills-exp');
const expTitle  = document.getElementById('skills-exp-title');
const expText   = document.getElementById('skills-exp-text');
const backBtn   = document.getElementById('skills-back');
const scene     = document.getElementById('skill-scene');
const orbitRing = document.getElementById('orbit-ring');
const starsCanvas = document.getElementById('stars-canvas');
const starsCtx  = starsCanvas.getContext('2d');

let isMobile   = false;
let treeState  = 'overview'; // 'overview' | 'detail'
let activeDept = null;

// Node position offsets from scene center (for zoom math)
let nodePositions = {}; // { deptId: { nx, ny } }

// Stars
let stars = [];
let starsW = 0, starsH = 0;
let rafId = null, lastFrame = 0;

/* ============================================================
   Stars Canvas
   ============================================================ */
function generateStars() {
  const count = Math.floor((starsW * starsH) / 2500);
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x:     Math.random() * starsW,
      y:     Math.random() * starsH,
      r:     Math.random() * 1.2 + 0.2,
      alpha: Math.random() * 0.55 + 0.1,
      vx:    (Math.random() - 0.5) * 0.010,
      vy:    (Math.random() - 0.5) * 0.010,
    });
  }
}

function resizeStarsCanvas() {
  const dpr = window.devicePixelRatio || 1;
  starsW = skillWrap.clientWidth;
  isMobile = starsW < 600;
  starsH = isMobile
    ? Math.round(window.innerHeight * 0.72)
    : Math.round(window.innerHeight * 0.76);
  starsH = Math.max(starsH, isMobile ? 500 : 640);

  starsCanvas.width        = starsW * dpr;
  starsCanvas.height       = starsH * dpr;
  starsCanvas.style.width  = starsW + 'px';
  starsCanvas.style.height = starsH + 'px';
  starsCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  skillWrap.style.height = starsH + 'px';
  generateStars();
}

function drawStars() {
  starsCtx.clearRect(0, 0, starsW, starsH);
  const cx = starsW / 2, cy = starsH / 2;
  const maxDist = Math.hypot(cx, cy);
  starsCtx.fillStyle = '#ffffff';
  stars.forEach(s => {
    const dist   = Math.hypot(s.x - cx, s.y - cy);
    const radial = 1 - (dist / maxDist) * 0.72;
    starsCtx.save();
    starsCtx.globalAlpha = s.alpha * radial;
    starsCtx.beginPath();
    starsCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    starsCtx.fill();
    starsCtx.restore();
  });
}

function animateStars(ts) {
  const dt = Math.min(ts - lastFrame, 50);
  lastFrame = ts;
  stars.forEach(s => {
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    if (s.x < 0)      s.x += starsW;
    if (s.x > starsW) s.x -= starsW;
    if (s.y < 0)      s.y += starsH;
    if (s.y > starsH) s.y -= starsH;
  });
  drawStars();
  rafId = requestAnimationFrame(animateStars);
}

/* ============================================================
   Node Positioning
   ============================================================ */
function polar(cx, cy, r, angleDeg) {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function positionNodes() {
  const w  = skillWrap.clientWidth;
  const h  = starsH;
  const cx = w / 2;
  const cy = h / 2;
  const R  = Math.min(h, w) * (isMobile ? 0.32 : 0.38);

  // Size orbit ring
  orbitRing.style.width  = R * 2 + 'px';
  orbitRing.style.height = R * 2 + 'px';

  // Position each node
  nodePositions = {};
  const nodeEls = scene.querySelectorAll('.skill-node');
  nodeEls.forEach(el => {
    const deptId = el.dataset.dept;
    const dept   = DEPTS.find(d => d.id === deptId);
    if (!dept) return;
    const pos = polar(cx, cy, R, dept.angle);
    // nx/ny = offset from scene center (used for zoom transform)
    const nx = pos.x - cx;
    const ny = pos.y - cy;
    nodePositions[deptId] = { nx, ny };
    el.style.left = pos.x + 'px';
    el.style.top  = pos.y + 'px';
  });
}

/* ============================================================
   Zoom Transform
   ============================================================ */
function applyZoom(deptId) {
  const { nx, ny } = nodePositions[deptId];
  const zoom = isMobile ? 1.6 : 2.0;
  // Shift node to opposite side so panel has room
  // nx < 0 = left node → shift right, panel on left
  // nx >= 0 = right node → shift left, panel on right
  const sideShift = isMobile ? 0 : (nx < 0 ? starsW * 0.10 : -starsW * 0.10);
  scene.style.transform = `translate(${-nx * zoom + sideShift}px, ${-ny * zoom}px) scale(${zoom})`;
  starsCanvas.style.transform = `translate(${nx * 0.12}px, ${ny * 0.12}px)`;
}

function resetZoom() {
  scene.style.transform = '';
  starsCanvas.style.transform = '';
}

/* ============================================================
   Label init
   ============================================================ */
function updateNodeLabels() {
  // Labels replaced by SVG icons; no-op
}

function addOrbitLabels() {
  scene.querySelectorAll('.skill-node').forEach(el => {
    const labels = ORBIT_LABELS[el.dataset.dept] || [];
    const total  = labels.length;
    labels.forEach((text, i) => {
      const span = document.createElement('span');
      span.className = 'orbit-label';
      span.textContent = text;
      span.style.setProperty('--i',     i);
      span.style.setProperty('--total', total);
      el.appendChild(span);
    });
  });
}

/* ============================================================
   Intro
   ============================================================ */
function startIntro() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodeEls = scene.querySelectorAll('.skill-node');
  if (reduced) return; // nodes visible immediately via CSS
  nodeEls.forEach(el => { el.style.opacity = '0'; });
  DEPTS.forEach((d, di) => {
    setTimeout(() => {
      const el = scene.querySelector(`.skill-node[data-dept="${d.id}"]`);
      if (el) el.style.opacity = '';
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

function triggerZoomEffects() {
  skillWrap.classList.remove('zooming');
  requestAnimationFrame(() => {
    skillWrap.classList.add('zooming');
    skillWrap.addEventListener('animationend', () => skillWrap.classList.remove('zooming'), { once: true });
  });
  setTimeout(() => {
    skillWrap.classList.add('arrival');
    skillWrap.addEventListener('animationend', () => skillWrap.classList.remove('arrival'), { once: true });
  }, 900);
}

function goOverview() {
  closeDemo();
  treeState  = 'overview';
  activeDept = null;
  triggerZoomEffects();
  resetZoom();
  scene.querySelectorAll('.skill-node').forEach(el => {
    el.classList.remove('active', 'inactive');
    // Seed a gentle scale bump — lerp will ease it back down
    const st = window.gravState && window.gravState[el.dataset.dept];
    if (st) { st.scale = 1.18; st.tx = 0; st.ty = 0; }
  });
  skillWrap.classList.remove('detail-left', 'detail-right', 'active');
  updateHint();
}

function goDetail(deptId) {
  treeState  = 'detail';
  activeDept = deptId;

  const { nx } = nodePositions[deptId];
  const side = nx < 0 ? 'detail-left' : 'detail-right';

  // Update node classes
  scene.querySelectorAll('.skill-node').forEach(el => {
    const isActive = el.dataset.dept === deptId;
    el.classList.toggle('active',   isActive);
    el.classList.toggle('inactive', !isActive);
  });

  // Set side class, then animate in
  skillWrap.classList.remove('detail-left', 'detail-right', 'active');
  skillWrap.classList.add(side);
  showExp(deptId);
  applyZoom(deptId);

  requestAnimationFrame(() => skillWrap.classList.add('active'));
  triggerZoomEffects();

  updateHint();
}

/* ============================================================
   DOM Events
   ============================================================ */
function initSkillEvents() {
  scene.querySelectorAll('.skill-node').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const deptId = el.dataset.dept;
      if (treeState === 'detail' && activeDept === deptId) goOverview();
      else goDetail(deptId);
    });

    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const deptId = el.dataset.dept;
        if (treeState === 'detail' && activeDept === deptId) goOverview();
        else goDetail(deptId);
      }
    });
  });

  // Click outside nodes → back to overview
  scene.addEventListener('click', e => {
    if (!e.target.closest('.skill-node') && treeState === 'detail') goOverview();
  });
}


backBtn.addEventListener('click', () => goOverview());

/* ============================================================
   Demo Overlay (IDE Mockup)
   ============================================================ */
const demoOverlay  = document.getElementById('video-overlay');
const demoCloseBtn = document.getElementById('video-overlay-close');
const demoBdrop    = document.getElementById('video-overlay-backdrop');
const demoBtn      = document.getElementById('skills-demo-btn');
const demoCardEl   = demoOverlay.querySelector('.video-overlay__card');

const ideTabs  = document.getElementById('ide-tabs');
const ideLines = document.getElementById('ide-lines');
const ideCode  = document.getElementById('ide-code');

let demoOpen = false;

// Placeholder code — uživatel dodá reálný kód později
const IDE_FILES = {
  laravel: [
    { name: 'UserController.php', code: `<?php

namespace App\\Http\\Controllers;

use App\\Models\\User;
use App\\Services\\UserService;
use Illuminate\\Http\\JsonResponse;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function __construct(
        private readonly UserService $userService
    ) {}

    // GET /api/users
    public function index(Request $request): JsonResponse
    {
        $users = $this->userService->getFiltered(
            $request->query('search'),
            $request->integer('per_page', 15)
        );

        return response()->json($users);
    }

    // POST /api/users
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name'  => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'role'  => 'in:admin,editor,viewer',
        ]);

        $user = $this->userService->create($validated);

        return response()->json($user, 201);
    }
}` },
    { name: 'SyncUsersCommand.php', code: `<?php

namespace App\\Console\\Commands;

use App\\Models\\User;
use App\\Services\\ExternalApiService;
use Illuminate\\Console\\Command;

class SyncUsersCommand extends Command
{
    protected $signature = 'users:sync
                            {--dry-run : Preview without saving}';

    protected $description = 'Sync users from external API';

    public function handle(ExternalApiService $api): int
    {
        $this->info('Fetching users from API...');

        $external = $api->fetchUsers();
        $synced   = 0;

        foreach ($external as $data) {
            if ($this->option('dry-run')) {
                $this->line("  [DRY] {$data['email']}");
                continue;
            }

            User::updateOrCreate(
                ['external_id' => $data['id']],
                [
                    'name'  => $data['name'],
                    'email' => $data['email'],
                ]
            );

            $synced++;
        }

        $this->info("Synced {$synced} users.");

        return self::SUCCESS;
    }
}` },
    { name: 'UserObserver.php', code: `<?php

namespace App\\Observers;

use App\\Models\\User;
use App\\Notifications\\WelcomeNotification;
use Illuminate\\Support\\Facades\\Cache;
use Illuminate\\Support\\Facades\\Log;

class UserObserver
{
    public function created(User $user): void
    {
        // Send welcome email
        $user->notify(new WelcomeNotification());

        Log::info('User created', [
            'id'    => $user->id,
            'email' => $user->email,
        ]);
    }

    public function updated(User $user): void
    {
        // Invalidate cache on profile change
        if ($user->isDirty(['name', 'email', 'role'])) {
            Cache::forget("user:{$user->id}:profile");
        }
    }

    public function deleted(User $user): void
    {
        Cache::forget("user:{$user->id}:profile");

        Log::info('User deleted', ['id' => $user->id]);
    }
}` },
  ],
};

function highlightPHP(code) {
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const KW = /^(class|function|return|use|public|private|protected|static|new|if|else|foreach|namespace|extends|implements|throw|try|catch|finally|yield|match|fn|readonly|abstract|interface|trait|enum|void|int|string|array|bool)$/;
  const TOKEN = /(\/\/.*$|\/\*[\s\S]*?\*\/)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(\$\w+)|(\b\w+\b)/gm;

  let result = '';
  let last = 0;
  let m;

  while ((m = TOKEN.exec(code)) !== null) {
    result += esc(code.slice(last, m.index));
    if (m[1])      result += '<span class="cmt">' + esc(m[1]) + '</span>';
    else if (m[2]) result += '<span class="str">' + esc(m[2]) + '</span>';
    else if (m[3]) result += '<span class="var">' + esc(m[3]) + '</span>';
    else if (m[4] && KW.test(m[4])) result += '<span class="kw">' + esc(m[4]) + '</span>';
    else           result += esc(m[0]);
    last = m.index + m[0].length;
  }
  result += esc(code.slice(last));
  return result;
}

function showFile(file) {
  const lines = file.code.split('\n');
  ideLines.innerHTML = lines.map((_, i) => (i + 1)).join('\n');
  ideCode.innerHTML = highlightPHP(file.code) + '<span class="ide__cursor"></span>';
}

function switchTab(deptId, index) {
  const files = IDE_FILES[deptId];
  if (!files) return;
  ideTabs.querySelectorAll('.ide__tab').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
  showFile(files[index]);
}

function renderIDE(deptId) {
  const files = IDE_FILES[deptId];
  if (!files) return;

  ideTabs.innerHTML = '';
  files.forEach((file, i) => {
    const btn = document.createElement('button');
    btn.className = 'ide__tab' + (i === 0 ? ' active' : '');
    btn.innerHTML = '<svg class="ide__tab-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">'
      + '<circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.2"/>'
      + '<text x="8" y="11.5" text-anchor="middle" fill="currentColor" font-size="10" font-family="inherit" font-weight="600">C</text>'
      + '</svg>' + file.name;
    btn.addEventListener('click', () => switchTab(deptId, i));
    ideTabs.appendChild(btn);
  });

  showFile(files[0]);
}

function openDemo(deptId) {
  if (!IDE_FILES[deptId]) return;
  demoOpen = true;
  document.body.style.overflow = 'hidden';
  renderIDE(deptId);
  demoOverlay.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => {
    demoOverlay.classList.add('open');
    demoOverlay.addEventListener('transitionend', function onOpen(e) {
      if (e.target !== demoOverlay) return;
      demoOverlay.removeEventListener('transitionend', onOpen);
      demoCloseBtn.focus();
    });
  });
}

function closeDemo() {
  if (!demoOpen) return;
  demoOpen = false;
  document.body.style.overflow = '';
  demoOverlay.classList.remove('open');
  demoOverlay.setAttribute('aria-hidden', 'true');
  if (demoBtn) demoBtn.focus();
}

demoBtn.addEventListener('click', () => {
  if (activeDept) openDemo(activeDept);
});

demoCloseBtn.addEventListener('click', () => closeDemo());
demoBdrop.addEventListener('click', () => closeDemo());

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && demoOpen) {
    e.preventDefault();
    closeDemo();
  }
});

demoCardEl.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const focusable = demoCardEl.querySelectorAll('button');
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

/* ============================================================
   Custom Cursor + Guide Line
   ============================================================ */
(function initCustomCursor() {
  const cursor    = document.getElementById('custom-cursor');
  const guideSvg  = document.getElementById('cursor-guide');
  const guideLine = document.getElementById('guide-line');
  const guideGrad = document.getElementById('guide-grad');
  if (!cursor || !guideSvg || !guideLine || !guideGrad) return;

  const FADE_START = 340;
  const FADE_END   = 80;
  const ON_NODE_R  = 60;

  const GRAV_RADIUS   = 240;
  const GRAV_MAX_SCALE = 1.35;
  const GRAV_MAX_PULL  = 28;
  const GRAV_LERP      = 0.07;   // lower = slower/heavier

  let mx = -9999, my = -9999;
  let frameQueued = false;
  let cursorVisible = false;
  const skillSection = document.getElementById('skills');

  // Animated state per node — lerped each frame (exposed on window for goOverview)
  window.gravState = {};
  const gravState = window.gravState;
  scene.querySelectorAll('.skill-node').forEach(el => {
    gravState[el.dataset.dept] = { scale: 1, tx: 0, ty: 0 };
  });

  function getNodeCenters() {
    return Array.from(scene.querySelectorAll('.skill-node')).map(el => {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });
  }

  function nearest(nodes, cx, cy) {
    let best = null, bestDist = Infinity;
    nodes.forEach(n => {
      const d = Math.hypot(n.x - cx, n.y - cy);
      if (d < bestDist) { bestDist = d; best = n; }
    });
    return { node: best, dist: bestDist };
  }

  function isInSkillsSection() {
    if (!skillSection) return false;
    const r = skillSection.getBoundingClientRect();
    return my >= r.top && my <= r.bottom && mx >= r.left && mx <= r.right;
  }

  function paint() {
    frameQueued = false;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';

    if (!isInSkillsSection()) {
      guideSvg.style.opacity = '0';
      cursor.classList.remove('on-node');
      return;
    }

    const nodes = getNodeCenters();
    if (!nodes.length) return;

    const { node, dist } = nearest(nodes, mx, my);
    const onNode = dist < ON_NODE_R;
    cursor.classList.toggle('on-node', onNode);

    let opacity = 0;
    if (!onNode && dist < FADE_START) {
      opacity = Math.min(1, (FADE_START - dist) / (FADE_START - FADE_END));
    }
    guideSvg.style.opacity = opacity.toFixed(3);

    if (opacity > 0 && node) {
      guideLine.setAttribute('x1', node.x);
      guideLine.setAttribute('y1', node.y);
      guideLine.setAttribute('x2', mx);
      guideLine.setAttribute('y2', my);
      guideGrad.setAttribute('x1', node.x);
      guideGrad.setAttribute('y1', node.y);
      guideGrad.setAttribute('x2', mx);
      guideGrad.setAttribute('y2', my);
    }

  }

  // Gravity loop — runs every frame, lerps toward targets
  function gravityTick() {
    requestAnimationFrame(gravityTick);

    const inSkills = isInSkillsSection();
    const nodeEls = scene.querySelectorAll('.skill-node');

    // Batch read: base positions (subtract current pull to avoid feedback)
    const nodeData = [];
    nodeEls.forEach(el => {
      const st = gravState[el.dataset.dept];
      const r = el.getBoundingClientRect();
      nodeData.push({
        el,
        dept: el.dataset.dept,
        cx: r.left + r.width / 2 - st.tx,
        cy: r.top + r.height / 2 - st.ty,
      });
    });

    // Compute targets
    nodeData.forEach(({ el, dept, cx, cy }) => {
      const st = gravState[dept];
      let targetScale = 1, targetTx = 0, targetTy = 0;

      if (inSkills) {
        const d = Math.hypot(cx - mx, cy - my);
        const isActive = treeState === 'detail' && activeDept === dept;

        if (treeState === 'overview' && d < GRAV_RADIUS && d > 1) {
          const proximity = 1 - d / GRAV_RADIUS;
          const ease = proximity * proximity;

          targetScale = 1 + ease * (GRAV_MAX_SCALE - 1);

          const pull = ease * GRAV_MAX_PULL;
          targetTx = ((mx - cx) / d) * pull;
          targetTy = ((my - cy) / d) * pull;
        } else if (isActive && d < GRAV_RADIUS && d > 1) {
          const proximity = 1 - d / GRAV_RADIUS;
          const ease = proximity * proximity;
          targetScale = 1 + ease * 0.12;
        }
      }

      // Lerp toward targets
      st.scale += (targetScale - st.scale) * GRAV_LERP;
      st.tx    += (targetTx    - st.tx)    * GRAV_LERP;
      st.ty    += (targetTy    - st.ty)    * GRAV_LERP;

      // Snap to rest when close enough
      if (Math.abs(st.scale - 1) < 0.002 && Math.abs(st.tx) < 0.1 && Math.abs(st.ty) < 0.1) {
        st.scale = 1; st.tx = 0; st.ty = 0;
      }

      el.style.setProperty('--prox-scale', st.scale);
      el.style.setProperty('--prox-tx', st.tx.toFixed(1) + 'px');
      el.style.setProperty('--prox-ty', st.ty.toFixed(1) + 'px');
    });
  }
  requestAnimationFrame(gravityTick);

  function scheduleFrame() {
    if (frameQueued) return;
    frameQueued = true;
    requestAnimationFrame(paint);
  }

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    if (!cursorVisible) {
      cursorVisible = true;
      cursor.style.display = 'block';
    }
    scheduleFrame();
  }, { passive: true });

  window.addEventListener('scroll', scheduleFrame, { passive: true });

  document.addEventListener('mouseleave', () => {
    mx = -9999; my = -9999;
    guideSvg.style.opacity = '0';
    cursor.classList.remove('on-node');
  });
}());

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
    resizeStarsCanvas();
    positionNodes();
    if (treeState === 'detail' && activeDept) applyZoom(activeDept);
    updateHint();
  }, 150);
}, { passive: true });

/* ============================================================
   Hero — Terminal Window
   ============================================================ */
const TERM_SEQUENCES = [
  {
    commands: [
      { prompt: '~', cmd: 'whoami', output: [
        'name:     Vojtěch Kocourek',
        'role:     Junior Backend Dev',
        'location: Prague, CZ',
      ]},
    ],
  },
  {
    commands: [
      { prompt: '~', cmd: 'ping status', output: [
        'PING status...',
        'available:    true',
        'open to work: yes',
      ]},
    ],
  },
  {
    commands: [
      { prompt: '~',         cmd: 'cd /projects', output: [] },
      { prompt: '/projects', cmd: 'ls',           output: [
        'Laravel REST API/',
        'Laravel CMS/',
        '.NET Web API/',
      ]},
    ],
  },
  {
    commands: [
      { prompt: '~', cmd: 'cat skills.txt', output: [
        'PHP · Laravel · Eloquent',
        'C# · ASP.NET · EF Core',
        'Git · Docker · Claude',
      ]},
    ],
  },
];

function typeTermCmd(line, text, speed, cb) {
  let i = 0;
  function next() {
    if (i >= text.length) { cb && cb(); return; }
    line.textContent += text[i++];
    setTimeout(next, speed + Math.random() * 20);
  }
  next();
}

function runSequence(seq, cb) {
  const body = document.getElementById('term-body');
  if (!body) return;

  const cursor = document.createElement('span');
  cursor.className = 'term__cursor';

  let cmdIndex = 0;

  function nextCmd() {
    if (cmdIndex >= seq.commands.length) { cb && cb(); return; }
    const cmd = seq.commands[cmdIndex++];

    const line = document.createElement('div');
    line.className = 'term__line';

    const promptSpan = document.createElement('span');
    promptSpan.className = 'term__prompt';
    promptSpan.textContent = cmd.prompt + ' $ ';
    line.appendChild(promptSpan);

    const cmdSpan = document.createElement('span');
    cmdSpan.className = 'term__cmd';
    line.appendChild(cmdSpan);
    line.appendChild(cursor);
    body.appendChild(line);

    typeTermCmd(cmdSpan, cmd.cmd, 60, () => {
      line.removeChild(cursor);

      let outIdx = 0;
      function nextOut() {
        if (outIdx >= cmd.output.length) { nextCmd(); return; }
        const outLine = document.createElement('div');
        outLine.className = 'term__line term__output';
        outLine.textContent = cmd.output[outIdx++];
        body.appendChild(outLine);
        setTimeout(nextOut, 150);
      }
      setTimeout(nextOut, 80);
    });
  }

  nextCmd();
}

let _termSeqIndex = 0;

function termLoop() {
  const body = document.getElementById('term-body');
  if (!body) return;

  const seq = TERM_SEQUENCES[_termSeqIndex];
  _termSeqIndex = (_termSeqIndex + 1) % TERM_SEQUENCES.length;

  runSequence(seq, () => {
    setTimeout(() => {
      body.innerHTML = '';
      termLoop();
    }, 1800);
  });
}

setTimeout(termLoop, 2200);

/* ============================================================
   Init
   ============================================================ */
function init() {
  setLanguage(currentLang, 1350);
  resizeStarsCanvas();
  positionNodes();
  updateNodeLabels();
  addOrbitLabels();
  initSkillEvents();
  startIntro();
  updateHint();

  lastFrame = performance.now();
  rafId = requestAnimationFrame(animateStars);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* ============================================================
   Hero Name Scramble
   ============================================================ */
(function () {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
  const SCRAMBLE_ROUNDS = 6;   // kolikrát každý znak zamíchá před usazením
  const CHAR_DELAY      = 38;  // ms mezi usazením každého znaku
  const FRAME_INTERVAL  = 50;  // ms mezi každým rámcem scramble

  function scramble(el, finalText, startDelay) {
    const len = finalText.length;
    let locked = 0;          // počet již usazených znaků zleva
    let rounds = Array(len).fill(0);
    let current = Array.from({ length: len }, () =>
      finalText[0] === ' ' ? ' ' : rand()
    );

    function rand() {
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }

    function render() {
      el.textContent = current.join('');
    }

    function tick() {
      if (locked >= len) return;

      for (let i = locked; i < len; i++) {
        if (finalText[i] === ' ') {
          current[i] = ' ';
          continue;
        }
        if (rounds[i] >= SCRAMBLE_ROUNDS) {
          current[i] = finalText[i];
          if (i === locked) locked++;
        } else {
          current[i] = rand();
          rounds[i]++;
        }
      }

      render();

      if (locked < len) setTimeout(tick, FRAME_INTERVAL);
    }

    // Stagger: každý znak se začne usazovat o CHAR_DELAY ms později
    setTimeout(() => {
      render();
      setTimeout(tick, FRAME_INTERVAL);
    }, startDelay);
  }

  function runScramble() {
    const first = document.querySelector('.hero__name-first');
    const last  = document.querySelector('.hero__name-last');
    if (!first || !last) return;

    const firstName = first.textContent.trim();
    const lastName  = last.textContent.trim();

    scramble(first, firstName, 80);
    scramble(last,  lastName,  80 + firstName.length * CHAR_DELAY * 0.4);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runScramble);
  } else {
    runScramble();
  }
})();
