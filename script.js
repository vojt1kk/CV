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
    'about.p1': 'Jsem backend developer se zaměřením na PHP/Laravel a C#/.NET. Rád navrhuju čistá API a pracuju s relačními databázemi.',
    'about.p2': 'Ve volném čase prozkoumávám nové frameworky a zdokonaluji své pracovní postupy s nástroji jako Cursor a Claude Code.',
    'about.p3': 'Věřím v psaní kódu, který je snadno čitelný, testovatelný a udržovatelný — nejen kódu, který funguje.',
    'about.key-name':     'Jméno',
    'about.key-role':     'Role',
    'about.key-focus':    'Zaměření',
    'about.key-location': 'Lokace',
    'about.key-status':   'Status',
    'about.val-role':     'Junior Backend Developer',
    'about.val-status':   'Dostupný',

    'skills.heading': 'Stack & technologie.',
    'skills.demo':    'Zobrazit demo',

    'contact.heading': 'Pojďme\nspolupracovat.',
    'contact.sub':     'Hledáš backend developera nebo chceš spolupracovat na projektu? Napiš mi.',

    'footer.copy': '© 2026',
  },

  en: {
    'nav.about':    'About',
    'nav.skills':   'Skills',
    'nav.contact':  'Contact',

    'hero.role': 'Junior Backend Developer',

    'about.heading':    'Code that stands the test of time.',
    'about.p1': 'I\'m a backend developer focused on PHP/Laravel and C#/.NET. I enjoy designing clean APIs and working with relational databases.',
    'about.p2': 'In my spare time I explore new frameworks and sharpen my workflows with tools like Cursor and Claude Code.',
    'about.p3': 'I believe in writing code that is readable, testable and maintainable — not just code that works.',
    'about.key-name':     'Name',
    'about.key-role':     'Role',
    'about.key-focus':    'Focus',
    'about.key-location': 'Location',
    'about.key-status':   'Status',
    'about.val-role':     'Junior Backend Developer',
    'about.val-status':   'Available',

    'skills.heading': 'Stack & technologies.',
    'skills.demo':    'Show demo',

    'contact.heading': 'Let\'s work\ntogether.',
    'contact.sub':     'Looking for a backend developer or want to collaborate on a project? Drop me a line.',

    'footer.copy': '© 2026',
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

  document.querySelectorAll('[data-mobile-exp]').forEach(el => {
    const deptId = el.dataset.mobileExp;
    if (EXPERIENCE && EXPERIENCE[deptId]) {
      el.textContent = EXPERIENCE[deptId][lang] || EXPERIENCE[deptId].en;
    }
  });

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
   Skill Tree — Data  (Orbit)
   ============================================================ */
const DEPTS = [
  { id: 'laravel', label: { cs: 'PHP / Laravel', en: 'PHP / Laravel' }, angle: 270 },
  { id: 'dotnet',  label: { cs: 'C# / .NET',     en: 'C# / .NET'     }, angle: 150 },
  { id: 'tooling', label: { cs: 'Tooling',        en: 'Tooling'       }, angle: 30  },
];

const ORBIT_LABELS = {
  laravel: ['Laravel', 'PHP', 'Eloquent', 'Sanctum', 'Pest'],
  dotnet:  ['C#', 'ASP.NET', 'EF Core', 'MediatR', 'FluentValidation', 'xUnit'],
  tooling: ['Git', 'Claude', 'Composer', 'Postman', 'Docker'],
};

const EXPERIENCE = {
  laravel: {
    cs: 'PHP a Laravel tvoří základ mého backend stacku. Navrhuji RESTful API s Eloquent ORM, autentizaci řeším přes Laravel Passport a architekturu udržuji čistou pomocí Actions, Form Requests a InputData tříd. Filtrování, řazení a stránkování zajišťuji přes Spatie QueryBuilder. Kód pokrývám testy v Pestu s využitím factories.',
    en: 'PHP and Laravel form the core of my backend stack. I design RESTful APIs with Eloquent ORM, handle authentication via Laravel Passport and keep architecture clean through Actions, Form Requests and InputData classes. Filtering, sorting and pagination are handled with Spatie QueryBuilder. I cover code with Pest tests using factories.',
  },
  dotnet: {
    cs: 'V .NET ekosystému stavím ASP.NET Core 9 Web API. Kód organizuji do features pomocí CQRS s MediatR, vstupy validuji přes FluentValidation a databázi spravuji přes EF Core. Funkce pokrývám integračními testy v xUnit, kde každý test běží proti reálné databázi v Dockeru.',
    en: 'In the .NET ecosystem I build ASP.NET Core 9 Web APIs. I organize code into features using CQRS with MediatR, validate inputs via FluentValidation and manage the database with EF Core. I cover features with integration tests in xUnit, each running against a real database in Docker.',
  },
  tooling: {
    cs: 'Git používám každodenně — feature branches, PR workflow, merge. Moderní AI nástroje jako Cursor a Claude Code jsou pevnou součástí mého denního workflow: urychlují psaní opakujícího se kódu, pomáhají s code review a automatizují rutinní refaktoring.',
    en: 'I use Git every day — feature branches, PR workflow, merging. Modern AI tools like Cursor and Claude Code are a core part of my daily workflow: they speed up repetitive code writing, support code review, and automate routine refactoring.',
  },
};


/* ============================================================
   DOM Skill Tree — State & Refs
   ============================================================ */
const skillWrap = document.getElementById('skills-container');
const expPanel  = document.getElementById('skills-exp');
const expTitle  = document.getElementById('skills-exp-title');
const expText   = document.getElementById('skills-exp-text');
const scene     = document.getElementById('skill-scene');
const orbitRing = document.getElementById('orbit-ring');
const starsCanvas = document.getElementById('stars-canvas');
const starsCtx  = starsCanvas.getContext('2d');

// Single source of truth for mobile breakpoint — matches CSS 1024px (canvas hidden ≤1024)
const mobileQuery = window.matchMedia('(max-width: 1024px)');
let isMobile = mobileQuery.matches;
mobileQuery.addEventListener('change', e => { isMobile = e.matches; });

let treeState  = 'overview'; // 'overview' | 'detail'
let activeDept = null;

// Node position offsets from scene center (for zoom math)
let nodePositions = {}; // { deptId: { nx, ny } }

// Scroll-driven orbit state
let orbitOffset = 0;
let orbitStep = 0;
let isOrbitRotating = false;
let rotateRafId = null;
let skillsPanelShown = false;
const ORBIT_SCROLL_ORDER = ['laravel', 'dotnet', 'tooling'];
const ORBIT_ROTATION_MS = 550;

// Stars
let stars = [];
let starsW = 0, starsH = 0;
let rafId = null, lastFrame = 0;

// Perf caches — updated on resize/scroll, read every rAF frame
let cachedCanvasRect   = { left: 0, top: 0 };
let skillsOffsetTop    = 0;
let skillsOffsetHeight = 0;

function updateCanvasRect() {
  const r = skillWrap.getBoundingClientRect();
  cachedCanvasRect.left = r.left;
  cachedCanvasRect.top  = r.top;
}

function cacheSkillsBounds() {
  const sec = document.getElementById('skills');
  if (!sec) return;
  skillsOffsetTop    = sec.offsetTop;
  skillsOffsetHeight = sec.offsetHeight;
}

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
  // isMobile kept live via matchMedia listener — no need to re-read here
  // Let flex: 1 on canvas-wrap determine the height, read it from DOM
  starsH = Math.max(skillWrap.clientHeight || (window.innerHeight - 240), isMobile ? 280 : 360);

  starsCanvas.width        = starsW * dpr;
  starsCanvas.height       = starsH * dpr;
  starsCanvas.style.width  = starsW + 'px';
  starsCanvas.style.height = starsH + 'px';
  starsCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  // Do NOT set skillWrap.style.height — flex: 1 controls it
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
    starsCtx.globalAlpha = s.alpha * radial;
    starsCtx.beginPath();
    starsCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    starsCtx.fill();
  });
  starsCtx.globalAlpha = 1;
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
    const pos = polar(cx, cy, R, dept.angle + orbitOffset);
    // nx/ny = offset from scene center (used for zoom transform)
    const nx = pos.x - cx;
    const ny = pos.y - cy;
    nodePositions[deptId] = { nx, ny, ax: pos.x, ay: pos.y };
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
  const demoBtn = document.getElementById('skills-demo-btn');

  expText.classList.add('is-switching');
  setTimeout(() => {
    expTitle.textContent = dept.label[currentLang] || dept.label.en;
    expText.textContent  = exp[currentLang] || exp.en;
    if (demoBtn) demoBtn.style.display = IDE_FILES[deptId] ? '' : 'none';
    expText.classList.remove('is-switching');
  }, 180);
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
  treeState  = 'overview';
  activeDept = null;
  closeDemo();
  triggerZoomEffects();
  resetZoom();
  scene.querySelectorAll('.skill-node').forEach(el => {
    el.classList.remove('active', 'inactive');
    // Seed a gentle scale bump — lerp will ease it back down
    const st = window.gravState && window.gravState[el.dataset.dept];
    if (st) { st.scale = 1.18; st.tx = 0; st.ty = 0; }
  });
  skillWrap.classList.remove('detail-left', 'detail-right', 'active');
}

function initSkillsDetail() {
  // Apply Laravel detail state immediately on init — overview is never shown
  const deptId = 'laravel';
  treeState   = 'detail';
  activeDept  = deptId;
  orbitStep   = 0;
  orbitOffset = 0;

  scene.querySelectorAll('.skill-node').forEach(el => {
    const isActive = el.dataset.dept === deptId;
    el.classList.toggle('active',   isActive);
    el.classList.toggle('inactive', !isActive);
  });

  const { nx } = nodePositions[deptId];
  const side = nx < 0 ? 'detail-left' : 'detail-right';
  skillWrap.classList.remove('detail-left', 'detail-right', 'active');
  skillWrap.classList.add(side);
  showExp(deptId);
  applyZoom(deptId);
  updateDots();
  // Panel (.active) is added later by scroll handler on first entry
}

function rotateToStep(step, onDone) {
  // Interruptible: cancel any in-flight rotation and continue from current orbitOffset
  if (rotateRafId !== null) {
    cancelAnimationFrame(rotateRafId);
    rotateRafId = null;
  }
  isOrbitRotating = true;

  const fromOffset  = orbitOffset;
  const toOffset    = step * 120;
  const newDeptId   = ORBIT_SCROLL_ORDER[step];
  const stepChanged = orbitStep !== step;
  orbitStep         = step;

  // Ease in-out cubic — smooth acceleration + deceleration along arc
  function ease(t) {
    return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
  }

  if (stepChanged) {
    showExp(newDeptId);

    scene.querySelectorAll('.skill-node').forEach(el => {
      const isActive = el.dataset.dept === newDeptId;
      el.classList.toggle('active',   isActive);
      el.classList.toggle('inactive', !isActive);
    });
    activeDept = newDeptId;
    treeState  = 'detail';
    skillWrap.classList.remove('detail-left', 'detail-right');
    skillWrap.classList.add('detail-left'); // all steps land at 270° = left
    skillWrap.classList.add('active');
    updateDots();
    }

  // Freeze camera during arc animation (scene transform must not move)
  scene.classList.add('no-transition');

  // rAF loop: interpolate orbitOffset → planets follow the arc
  const start = performance.now();
  function frame(now) {
    const t     = Math.min((now - start) / ORBIT_ROTATION_MS, 1);
    orbitOffset = fromOffset + (toOffset - fromOffset) * ease(t);
    positionNodes();

    if (t < 1) { rotateRafId = requestAnimationFrame(frame); return; }

    rotateRafId = null;
    orbitOffset = toOffset;
    positionNodes();
    scene.classList.remove('no-transition');
    applyZoom(newDeptId);

    isOrbitRotating = false;
    if (onDone) onDone();
  }

  rotateRafId = requestAnimationFrame(frame);
}

function goDetail(deptId) {
  treeState  = 'detail';
  activeDept = deptId;

  // Sync orbit step when planet is opened directly (click)
  const stepIdx = ORBIT_SCROLL_ORDER.indexOf(deptId);
  if (stepIdx !== -1) orbitStep = stepIdx;

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

}

/* ============================================================
   DOM Events
   ============================================================ */
function initSkillEvents() {
  scene.querySelectorAll('.skill-node').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const deptId = el.dataset.dept;
      if (activeDept !== deptId) goDetail(deptId);
    });

    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const deptId = el.dataset.dept;
        if (activeDept !== deptId) goDetail(deptId);
      }
    });
  });
}





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
  const nodeEls = Array.from(scene.querySelectorAll('.skill-node'));
  nodeEls.forEach(el => {
    gravState[el.dataset.dept] = { scale: 1, tx: 0, ty: 0 };
  });

  function getNodeCenters() {
    return nodeEls.map(el => {
      const pos = nodePositions[el.dataset.dept];
      return {
        x: cachedCanvasRect.left + (pos ? pos.ax : 0),
        y: cachedCanvasRect.top  + (pos ? pos.ay : 0),
      };
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
    const viewportTop = skillsOffsetTop - window.scrollY;
    return my >= viewportTop && my <= viewportTop + skillsOffsetHeight;
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
    guideSvg.style.opacity = '0';
  }

  // Gravity loop — runs every frame, lerps toward targets
  function gravityTick() {
    requestAnimationFrame(gravityTick);

    const inSkills  = isInSkillsSection();
    const isOverview = treeState === 'overview';

    nodeEls.forEach(el => {
      const dept = el.dataset.dept;
      const st   = gravState[dept];
      let targetScale = 1, targetTx = 0, targetTy = 0;

      if (inSkills) {
        let cx, cy;

        if (isOverview) {
          // No DOM read — use cached canvas position + stored node coords
          const pos = nodePositions[dept];
          cx = cachedCanvasRect.left + pos.ax;
          cy = cachedCanvasRect.top  + pos.ay;
        } else if (activeDept === dept) {
          // Zoomed active node: one DOM read (position shifts with zoom)
          const r = el.getBoundingClientRect();
          cx = r.left + r.width / 2 - st.tx;
          cy = r.top  + r.height / 2 - st.ty;
        } else {
          // Inactive node in detail — snap to rest immediately
          if (st.scale !== 1 || st.tx !== 0 || st.ty !== 0) {
            st.scale = 1; st.tx = 0; st.ty = 0;
            el.style.setProperty('--prox-scale', 1);
            el.style.setProperty('--prox-tx', '0px');
            el.style.setProperty('--prox-ty', '0px');
          }
          return;
        }

        const d = Math.hypot(cx - mx, cy - my);

        if (isOverview && d < GRAV_RADIUS && d > 1) {
          const proximity = 1 - d / GRAV_RADIUS;
          const ease = proximity * proximity;
          targetScale = 1 + ease * (GRAV_MAX_SCALE - 1);
          const pull = ease * GRAV_MAX_PULL;
          targetTx = ((mx - cx) / d) * pull;
          targetTy = ((my - cy) / d) * pull;
        } else if (!isOverview && d < GRAV_RADIUS && d > 1) {
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

const IDE_FILES = {
  laravel: [
    { name: 'VoucherRequest.php', code: `<?php

declare(strict_types=1);

namespace App\\Http\\Requests\\V2\\Vouchers;

use App\\Data\\Vouchers\\VoucherInputData;
use App\\Enums\\Vouchers\\VoucherTypeEnum;
use App\\Rules\\Vouchers\\VoucherHashUniqueRuleFactory;
use App\\Support\\StrictType\\StrictDate;
use App\\Validation\\Rule;
use App\\ValueObjects\\Vouchers\\VoucherConfig;
use Closure;
use Illuminate\\Contracts\\Auth\\Access\\Gate;
use Illuminate\\Foundation\\Http\\FormRequest;
use VipBenefity\\Offer\\Models\\Offer;
use VipBenefity\\Voucher\\Models\\Voucher;

final class VoucherRequest extends FormRequest
{
    private ?Offer $offer = null;

    public function authorize(Gate $gate): bool
    {
        return $gate->allows('create', Voucher::class);
    }

    /** @return array<string, mixed> */
    public function rules(
        VoucherHashUniqueRuleFactory $voucherHashUniqueRuleFactory,
    ): array {
        $shouldNotUseOfferValidity = once(fn (): bool => ! $this->boolean('useOfferValidity'));

        return [
            'companyId' => Rule::integer()
                ->nullable()
                ->exists('companies'),

            'label' => Rule::string()
                ->required()
                ->maxLength(255),

            'hash' => Rule::string()
                ->required()
                ->maxLength(255)
                ->closure($voucherHashUniqueRuleFactory->makeForPreset($this->offer?->id)),

            'type' => Rule::string()
                ->required()
                ->enum(VoucherTypeEnum::class)
                ->closure(function (string $attribute, string $value, Closure $fail): void {
                    if ($value !== VoucherTypeEnum::Universal->value) {
                        $fail('The type field must be universal.');
                    }
                }),

            'claimMax' => Rule::integer()
                ->required()
                ->minValue(1),

            'useOfferValidity' => Rule::boolean()
                ->required(),

            'dateFrom' => Rule::date()
                ->requiredIf($shouldNotUseOfferValidity),

            'dateTo' => Rule::date()
                ->requiredIf($shouldNotUseOfferValidity),
        ];
    }

    public function toInputData(): VoucherInputData
    {
        $validated = $this->validated();
        $inputData = new VoucherInputData();

        if ($this->offer instanceof Offer) {
            $inputData->setOfferId($this->offer->id);
        }

        if (isset($validated['label'])) {
            $inputData->setLabel($validated['label']);
        }

        if (isset($validated['type'])) {
            $inputData->setType(VoucherTypeEnum::from($validated['type']));
        }

        if (isset($validated['hash'])) {
            $inputData->setHash($validated['hash']);
        }

        if (isset($validated['claimMax'])) {
            $inputData->setClaimedMax($validated['claimMax']);
        }

        if (isset($validated['useOfferValidity'])) {
            $inputData->setUseOfferValidity($validated['useOfferValidity']);
        }

        if (array_key_exists('companyId', $validated)) {
            $inputData->setCompanyId($validated['companyId']);
        }

        if (isset($validated['dateFrom'])) {
            $inputData->setDateFrom(StrictDate::date($validated['dateFrom']));
        }

        if (isset($validated['dateTo'])) {
            $inputData->setDateTo(StrictDate::date($validated['dateTo']));
        }

        $inputData->setConfig(new VoucherConfig(isLocked: true));

        return $inputData;
    }

    protected function prepareForValidation(): void
    {
        if ($this->route('offer') instanceof Offer) {
            $this->offer = $this->route('offer');
        }
    }
}` },
    { name: 'VoucherSetDataCommand.php', code: `<?php

declare(strict_types=1);

namespace App\\Console\\Commands\\Vouchers;

use App\\Console\\Commands\\HasBenchmark;
use App\\Console\\Commands\\HasDryRun;
use Illuminate\\Console\\Command;
use Illuminate\\Support\\Collection;
use VipBenefity\\Voucher\\Models\\Voucher;

final class VoucherSetDataCommand extends Command
{
    use HasBenchmark;
    use HasDryRun;

    protected $signature = 'voucher:set-data {--dry-run}';

    protected $description = 'Set data for vouchers';

    public function handle(): void
    {
        $this->initDryRun();

        $this->benchmark(function (): void {
            Voucher::query()->chunkById(500, function (Collection $vouchers): void {
                $vouchers->each(function (Voucher $voucher): void {
                    $this->process($voucher);
                });
            });
        });
    }

    private function process(Voucher $voucher): void
    {
        $claimCount = $voucher->voucherClaims()->count();
        $claimMax   = $voucher->max_used > 0 ? $voucher->max_used : 0;
        $usageCount = $voucher->voucherClaims()->markAsUsed()->count();

        $this->info(sprintf(
            'Voucher ID: %d, claim_count: %d, claim_max: %d, usage_count: %d',
            $voucher->id, $claimCount, $claimMax, $usageCount
        ));

        if ($this->isNotDryRun()) {
            $voucher->update([
                'used'        => $claimCount,
                'max_used'    => $claimMax,
                'claim_count' => $claimCount,
                'claim_max'   => $claimMax,
                'usage_count' => $usageCount,
            ]);
        }
    }
}` },
    { name: 'VoucherObserver.php', code: `<?php

declare(strict_types=1);

namespace App\\Observers\\Vouchers;

use App\\Observers\\Vouchers\\Handlers\\VoucherSavingHandler;
use VipBenefity\\Voucher\\Models\\Voucher;

final readonly class VoucherObserver
{
    public function __construct(
        private VoucherSavingHandler $voucherSavingHandler
    ) {}

    public function saving(Voucher $voucher): void
    {
        $this->voucherSavingHandler->handle($voucher);
    }
}` },
    { name: 'VoucherSavingHandler.php', code: `<?php

declare(strict_types=1);

namespace App\\Observers\\Vouchers\\Handlers;

use VipBenefity\\Voucher\\Models\\Voucher;

final readonly class VoucherSavingHandler
{
    public function handle(Voucher $voucher): void
    {
        $this->handleConfig($voucher);
        $this->handleUseOfferValidity($voucher);
    }

    private function handleConfig(Voucher $voucher): void
    {
        $config = $voucher->getConfig();

        if ($config->type === null) {
            $config = $config->merge(['type' => $voucher->type]);
        }

        if ($config->interval !== null && $config->intervalDays === null) {
            $config = $config->merge(['intervalDays' => $config->interval->days()]);
        }

        $voucher->setConfig($config);
    }

    private function handleUseOfferValidity(Voucher $voucher): void
    {
        if (! $voucher->isDirty('use_offer_validity')) {
            return;
        }

        if (! $voucher->use_offer_validity) {
            return;
        }

        $voucher->setDateFrom($voucher->offer->valid_from);
        $voucher->setDateTo($voucher->offer->valid_until);
    }
}` },
  ],
  dotnet: [
    { name: 'AuthController.cs', code: `using MediatR;
using Microsoft.AspNetCore.Mvc;
using TrilobitCS.Features.Auth;
using TrilobitCS.Requests;
using TrilobitCS.Responses;

namespace TrilobitCS.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IMediator _mediator;

    public AuthController(IMediator mediator)
    {
        _mediator = mediator;
    }

    // POST /api/auth/register
    /// <summary>Register a new user</summary>
    /// <response code="200">Returns access token and refresh token</response>
    /// <response code="422">Invalid data (password mismatch, duplicate email/nickname)</response>
    [HttpPost("register")]
    [ProducesResponseType(typeof(AuthResponse), 200)]
    [ProducesResponseType(422)]
    public async Task<IActionResult> Register(RegisterRequest request)
        => Ok(await _mediator.Send(new RegisterCommand(request)));

    // POST /api/auth/login
    /// <summary>Log in with nickname and password</summary>
    /// <response code="200">Returns access token and refresh token</response>
    /// <response code="401">Invalid credentials</response>
    [HttpPost("login")]
    [ProducesResponseType(typeof(AuthResponse), 200)]
    [ProducesResponseType(401)]
    public async Task<IActionResult> Login(LoginRequest request)
        => Ok(await _mediator.Send(new LoginCommand(request)));

    // POST /api/auth/refresh
    /// <summary>Exchange a refresh token for a new token pair (rotation)</summary>
    /// <response code="200">Returns new access token and refresh token</response>
    /// <response code="401">Invalid or already used refresh token</response>
    [HttpPost("refresh")]
    [ProducesResponseType(typeof(AuthResponse), 200)]
    [ProducesResponseType(401)]
    public async Task<IActionResult> Refresh(RefreshRequest request)
        => Ok(await _mediator.Send(new RefreshCommand(request)));

    // POST /api/auth/logout
    /// <summary>Log out — revoke the refresh token</summary>
    /// <response code="204">Token successfully revoked</response>
    /// <response code="404">Token not found</response>
    [HttpPost("logout")]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Logout(RefreshRequest request)
    {
        await _mediator.Send(new LogoutCommand(request));
        return NoContent();
    }
}` },
    { name: 'RegisterCommand.cs', code: `using MediatR;
using Microsoft.EntityFrameworkCore;
using TrilobitCS.Auth;
using TrilobitCS.Data;
using TrilobitCS.Exceptions;
using TrilobitCS.Models;
using TrilobitCS.Requests;
using TrilobitCS.Responses;

namespace TrilobitCS.Features.Auth;

public record RegisterCommand(RegisterRequest Request) : IRequest<AuthResponse>;

public class RegisterHandler : IRequestHandler<RegisterCommand, AuthResponse>
{
    private readonly AppDbContext _db;
    private readonly BcryptPasswordHasher _hasher;
    private readonly JwtTokenService _jwtTokenService;

    public RegisterHandler(AppDbContext db, BcryptPasswordHasher hasher, JwtTokenService jwtTokenService)
    {
        _db = db;
        _hasher = hasher;
        _jwtTokenService = jwtTokenService;
    }

    public async Task<AuthResponse> Handle(RegisterCommand command, CancellationToken cancellationToken)
    {
        var request = command.Request;

        if (await _db.Users.AnyAsync(u => u.Email == request.Email, cancellationToken))
            throw new ConflictException("errors.email_taken");

        if (await _db.Users.AnyAsync(u => u.Nickname == request.Nickname, cancellationToken))
            throw new ConflictException("errors.nickname_taken");

        var user = new User
        {
            Nickname  = request.Nickname,
            FirstName = request.FirstName,
            LastName  = request.LastName,
            Email     = request.Email,
            Password  = _hasher.Hash(request.Password),
            Gender    = request.Gender,
            BirthDate = request.BirthDate,
            CreatedAt = DateTime.UtcNow,
        };
        _db.Users.Add(user);
        await _db.SaveChangesAsync(cancellationToken);

        var refreshToken = _jwtTokenService.GenerateRefreshToken(user);
        _db.RefreshTokens.Add(refreshToken);
        await _db.SaveChangesAsync(cancellationToken);

        return new AuthResponse(
            AccessToken: _jwtTokenService.GenerateAccessToken(user),
            RefreshToken: refreshToken.Token
        );
    }
}` },
    { name: 'JwtTokenService.cs', code: `using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using TrilobitCS.Models;

namespace TrilobitCS.Auth;

public class JwtTokenService
{
    private readonly IConfiguration _configuration;

    public JwtTokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    // Short-lived access token (15 minutes)
    public string GenerateAccessToken(User user)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!))
        {
            KeyId = JwtSigningKey.KeyId,
        };
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var expiresInMinutes = int.Parse(_configuration["Jwt:AccessTokenExpiresInMinutes"] ?? "15");

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(expiresInMinutes),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    // Long-lived refresh token stored in DB (180 days)
    public RefreshToken GenerateRefreshToken(User user)
    {
        var expiresInDays = int.Parse(_configuration["Jwt:RefreshTokenExpiresInDays"] ?? "180");

        return new RefreshToken
        {
            Token     = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
            UserId    = user.Id,
            ExpiresAt = DateTime.UtcNow.AddDays(expiresInDays),
            CreatedAt = DateTime.UtcNow,
        };
    }
}` },
  ],
};

const IDE_TITLES = {
  laravel: 'PhpStorm — laravel-app',
  dotnet:  'Rider — dotnet-api',
};

const RUN_DATA = {
  laravel: [
    { text: '$ php artisan voucher:set-data --dry-run', delay: 0, cls: 'run-cmd' },
    { text: '[DRY RUN] No changes will be saved.', delay: 400, cls: 'run-dim' },
    { text: '', delay: 200 },
    { text: 'Voucher ID: 1, claim_count: 5,  claim_max: 10, usage_count: 3', delay: 300 },
    { text: 'Voucher ID: 2, claim_count: 0,  claim_max: 5,  usage_count: 0', delay: 120 },
    { text: 'Voucher ID: 3, claim_count: 12, claim_max: 10, usage_count: 8', delay: 120 },
    { text: 'Voucher ID: 4, claim_count: 2,  claim_max: 20, usage_count: 1', delay: 120 },
    { text: '', delay: 200 },
    { text: 'Done in 0.91s.', delay: 300, cls: 'run-dim' },
    { text: '', delay: 400 },
    { text: '$ php artisan voucher:set-data', delay: 300, cls: 'run-cmd' },
    { text: '', delay: 200 },
    { text: 'Voucher ID: 1, claim_count: 5,  claim_max: 10, usage_count: 3', delay: 300 },
    { text: 'Voucher ID: 2, claim_count: 0,  claim_max: 5,  usage_count: 0', delay: 120 },
    { text: 'Voucher ID: 3, claim_count: 12, claim_max: 10, usage_count: 8', delay: 120 },
    { text: 'Voucher ID: 4, claim_count: 2,  claim_max: 20, usage_count: 1', delay: 120 },
    { text: '', delay: 200 },
    { text: 'Done in 0.88s.', delay: 300, cls: 'run-ok' },
    { text: '', delay: 300 },
    { text: 'Process finished with exit code 0', delay: 300, cls: 'run-dim' },
  ],
  dotnet: [
    { text: '$ dotnet run', delay: 0, cls: 'run-cmd' },
    { text: 'Building...', delay: 400 },
    { text: 'Now listening on: https://localhost:5001', delay: 600, cls: 'run-ok' },
    { text: '', delay: 300 },
    { text: '[200] GET /api/users .............. 28ms', delay: 700, cls: 'run-ok' },
    { text: '[', delay: 200 },
    { text: '  { "id": 1, "name": "Jan Novák", "email": "jan@example.com" },', delay: 80 },
    { text: '  { "id": 2, "name": "Eva Černá", "email": "eva@example.com" }', delay: 80 },
    { text: ']', delay: 80 },
    { text: '', delay: 400 },
    { text: '[201] POST /api/users ............. 35ms', delay: 600, cls: 'run-ok' },
    { text: '{ "id": 3, "name": "Petr Svoboda", "email": "petr@example.com" }', delay: 200 },
    { text: '', delay: 300 },
    { text: 'Application is shutting down...', delay: 500 },
    { text: 'Process finished with exit code 0', delay: 400, cls: 'run-dim' },
  ],
};

function highlightCSharp(code) {
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const KW = /^(using|namespace|public|private|protected|internal|static|readonly|abstract|sealed|override|virtual|async|await|class|record|struct|interface|enum|new|return|if|else|foreach|var|string|int|bool|void|null|get|set|nameof)$/;
  const TOKEN = /(\/\/.*$|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*")|(\b\w+\b)/gm;

  let result = '';
  let last = 0;
  let m;

  while ((m = TOKEN.exec(code)) !== null) {
    result += esc(code.slice(last, m.index));
    if (m[1])      result += '<span class="cmt">' + esc(m[1]) + '</span>';
    else if (m[2]) result += '<span class="str">' + esc(m[2]) + '</span>';
    else if (m[3] && KW.test(m[3])) result += '<span class="kw">' + esc(m[3]) + '</span>';
    else           result += esc(m[0]);
    last = m.index + m[0].length;
  }
  result += esc(code.slice(last));
  return result;
}

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

let currentDept = null;

function showFile(file) {
  const lines = file.code.split('\n');
  ideLines.innerHTML = lines.map((_, i) => (i + 1)).join('\n');
  const highlight = currentDept === 'dotnet' ? highlightCSharp : highlightPHP;
  ideCode.innerHTML = highlight(file.code) + '<span class="ide__cursor"></span>';
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
  currentDept = deptId;

  const titleEl = document.querySelector('.ide__title');
  if (titleEl) titleEl.textContent = IDE_TITLES[deptId] || 'IDE';

  const iconLetter = 'C';

  ideTabs.innerHTML = '';
  files.forEach((file, i) => {
    const btn = document.createElement('button');
    btn.className = 'ide__tab' + (i === 0 ? ' active' : '');
    btn.innerHTML = '<svg class="ide__tab-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">'
      + '<circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.2"/>'
      + '<text x="8" y="11.5" text-anchor="middle" fill="currentColor" font-size="10" font-family="inherit" font-weight="600">' + iconLetter + '</text>'
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
  resetRun();
  document.body.style.overflow = '';
  demoOverlay.classList.remove('open');
  demoOverlay.setAttribute('aria-hidden', 'true');
  if (demoBtn) demoBtn.focus();
}

const runPanel   = document.getElementById('ide-run-panel');
const runOutput  = document.getElementById('ide-run-output');
const runPlayBtn = document.getElementById('ide-run-play');
let runTimers = [];
let runActive = false;

function runDemo() {
  const lines = RUN_DATA[currentDept] || RUN_DATA.laravel;
  runActive = true;
  runOutput.innerHTML = '';
  runPanel.classList.add('open');

  let cumulative = 0;
  lines.forEach((line) => {
    cumulative += line.delay;
    const timer = setTimeout(() => {
      const el = document.createElement('div');
      if (line.cls) el.className = line.cls;
      el.textContent = line.text;
      runOutput.appendChild(el);
      runOutput.scrollTop = runOutput.scrollHeight;
    }, cumulative);
    runTimers.push(timer);
  });
}

function resetRun() {
  runTimers.forEach(t => clearTimeout(t));
  runTimers = [];
  runActive = false;
  runPanel.classList.remove('open');
  runOutput.innerHTML = '';
}

runPlayBtn.addEventListener('click', () => {
  resetRun();
  runDemo();
});

document.getElementById('ide-run-minimize').addEventListener('click', () => {
  resetRun();
});

demoBtn.addEventListener('click', () => {
  if (activeDept) openDemo(activeDept);
});

document.querySelectorAll('[data-mobile-dept]').forEach(btn => {
  btn.addEventListener('click', () => openDemo(btn.dataset.mobileDept));
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
   Navbar
   ============================================================ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

function closeNav() {
  mainNav.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', e => {
  e.stopPropagation();
  const open = mainNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});

mainNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeNav);
});

document.addEventListener('click', e => {
  if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && e.target !== hamburger) {
    closeNav();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mainNav.classList.contains('open')) {
    closeNav();
    hamburger.focus();
  }
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
   Scroll-driven orbit capture (sticky scroll pattern)
   ============================================================ */
function updateDots() {
  document.querySelectorAll('.skills__dot').forEach((dot, i) => {
    dot.classList.toggle('active', i <= orbitStep);
  });
}

function initSkillsDots() {
  document.querySelectorAll('.skills__dot').forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (i !== orbitStep) rotateToStep(i);
    });
  });
}

function initSkillsScrollCapture() {
  const skillsSection = document.getElementById('skills');
  const fillEl = document.getElementById('skills-progress-fill');
  const STEPS = ORBIT_SCROLL_ORDER.length;
  function getProgress() {
    const scrollable = skillsOffsetHeight - window.innerHeight;
    const scrolled   = window.scrollY - skillsOffsetTop;
    return scrollable > 0 ? Math.max(0, Math.min(1, scrolled / scrollable)) : 0;
  }

  function isInStickyZone() {
    const scrolled = window.scrollY - skillsOffsetTop;
    return scrolled >= -2 && scrolled <= skillsOffsetHeight - window.innerHeight + 2;
  }

  // Map scroll progress to orbit step; rotation is interruptible so we can retrigger anytime
  function syncStep() {
    if (!isInStickyZone()) return;
    const targetStep = Math.min(Math.floor(getProgress() * STEPS), STEPS - 1);
    if (targetStep !== orbitStep) rotateToStep(targetStep);
  }

  window.addEventListener('scroll', () => {
    if (isMobile) return;
    updateCanvasRect();
    const p = getProgress();
    if (!skillsPanelShown && isInStickyZone()) {
      skillsPanelShown = true;
      requestAnimationFrame(() => skillWrap.classList.add('active'));
    }
    syncStep();
    if (fillEl) fillEl.style.transform = `scaleX(${p})`;
  }, { passive: true });

  // Also check immediately (e.g. page loaded with #skills hash)
  requestAnimationFrame(() => {
    if (!skillsPanelShown && isInStickyZone()) {
      skillsPanelShown = true;
      skillWrap.classList.add('active');
    }
  });
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
    cacheSkillsBounds();
    updateCanvasRect();
    if (treeState === 'detail' && activeDept) applyZoom(activeDept);
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
        'location: Pardubice, CZ',
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
        'lucky-kids/',
        'vip-benefit-club/',
        'trilobit/',
      ]},
    ],
  },
  {
    commands: [
      { prompt: '~', cmd: 'cat skills.txt', output: [
        'PHP · Laravel · Eloquent',
        'C# · ASP.NET · EF Core',
        'Git · Composer · Claude',
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
  cacheSkillsBounds();
  updateCanvasRect();
  addOrbitLabels();
  initSkillsDetail();
  initSkillEvents();
  initSkillsDots();
  initSkillsScrollCapture();
  startIntro();

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

/* ============================================================
   Page scroll progress bar
   ============================================================ */
(function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();

