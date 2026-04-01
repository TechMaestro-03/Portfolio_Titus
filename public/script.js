/* ============================================================
   T.K. MBOYA — PORTFOLIO 2026 · MAIN JS
   Author: Titus K. Mboya
   ============================================================ */

   (function () {
    'use strict';
  
    /* ─────────────────────────────────────────
       PRELOADER
    ───────────────────────────────────────── */
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loader = document.getElementById('loader');
        if (!loader) return;
        loader.classList.add('fade-out');
        setTimeout(() => (loader.style.display = 'none'), 700);
      }, 1600);
    });
  
    /* ─────────────────────────────────────────
       AOS
    ───────────────────────────────────────── */
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 700, once: true, offset: 80, easing: 'ease-out-cubic' });
    }
  
    /* ─────────────────────────────────────────
       SCROLL PROGRESS BAR
    ───────────────────────────────────────── */
    const bar = document.getElementById('progress-bar');
    window.addEventListener(
      'scroll',
      () => {
        if (!bar) return;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = ((window.scrollY / max) * 100).toFixed(1) + '%';
      },
      { passive: true }
    );
  
    /* ─────────────────────────────────────────
       STICKY HEADER
    ───────────────────────────────────────── */
    const header = document.getElementById('site-header');
    window.addEventListener(
      'scroll',
      () => header && header.classList.toggle('scrolled', window.scrollY > 40),
      { passive: true }
    );
  
    /* ─────────────────────────────────────────
       ACTIVE NAV ON SCROLL
    ───────────────────────────────────────── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
  
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          navLinks.forEach((l) => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          active && active.classList.add('active');
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => sectionObs.observe(s));
  
    /* ─────────────────────────────────────────
       MOBILE MENU
    ───────────────────────────────────────── */
    const menuToggle = document.getElementById('menu-toggle');
    const navEl = document.getElementById('nav-links');
  
    if (menuToggle && navEl) {
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navEl.classList.toggle('open');
      });
  
      navEl.querySelectorAll('a').forEach((a) =>
        a.addEventListener('click', () => navEl.classList.remove('open'))
      );
  
      document.addEventListener('click', (e) => {
        if (!navEl.contains(e.target) && !menuToggle.contains(e.target)) {
          navEl.classList.remove('open');
        }
      });
  
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') navEl.classList.remove('open');
      });
    }
  
    /* ─────────────────────────────────────────
       SMOOTH SCROLL
    ───────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        const offset = (header ? header.offsetHeight : 72) + 20;
        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
      });
    });
  
    /* ─────────────────────────────────────────
       TYPING ANIMATION
    ───────────────────────────────────────── */
    const roles = [
      'Software Developer',
      'AI Engineer',
      'Full-Stack Developer',
      'ML Engineer',
      'Technical Writer',
    ];
    const typingEl = document.getElementById('typing-text');
    let ri = 0, ci = 0, deleting = false;
  
    function type() {
      if (!typingEl) return;
      const r = roles[ri];
      typingEl.textContent = deleting ? r.slice(0, ci - 1) : r.slice(0, ci + 1);
      deleting ? ci-- : ci++;
  
      let delay = deleting ? 45 : 90;
      if (!deleting && ci === r.length)  { delay = 2000; deleting = true; }
      else if (deleting && ci === 0)     { deleting = false; ri = (ri + 1) % roles.length; delay = 400; }
      setTimeout(type, delay);
    }
    setTimeout(type, 800);
  
    /* ─────────────────────────────────────────
       STATS COUNTER
    ───────────────────────────────────────── */
    const statsObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll('.stat-num[data-count]').forEach((el) => {
            const target = parseInt(el.dataset.count, 10);
            let cur = 0;
            const step = target / 60;
            const t = setInterval(() => {
              cur = Math.min(cur + step, target);
              el.textContent = Math.floor(cur) + (cur >= target ? '+' : '');
              if (cur >= target) clearInterval(t);
            }, 25);
          });
          statsObs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.about-stats').forEach((c) => statsObs.observe(c));
  
    /* ─────────────────────────────────────────
       SKILL BARS
    ───────────────────────────────────────── */
    const skillObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.querySelectorAll('.skill-bar-fill[data-pct]').forEach((bar) => {
            setTimeout(() => (bar.style.width = bar.dataset.pct + '%'), 100);
          });
          skillObs.unobserve(e.target);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('#skills .container').forEach((c) => skillObs.observe(c));
  
    /* ─────────────────────────────────────────
       THEME (DARK / LIGHT)
    ───────────────────────────────────────── */
    const html = document.documentElement;
    const themeBtn = document.getElementById('dark-mode-toggle');
  
    function applyTheme(t) {
      html.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
      const icon = themeBtn && themeBtn.querySelector('i');
      if (icon) icon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  
    const saved = localStorage.getItem('theme');
    applyTheme(saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  
    if (themeBtn) {
      themeBtn.addEventListener('click', () =>
        applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark')
      );
    }
  
    /* ─────────────────────────────────────────
       CUSTOM CURSOR
    ───────────────────────────────────────── */
    const cursor = document.getElementById('cursor');
    if (cursor && matchMedia('(pointer: fine)').matches) {
      let mx = 0, my = 0, cx = 0, cy = 0;
      document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
  
      (function moveCursor() {
        cx += (mx - cx) * 0.12;
        cy += (my - cy) * 0.12;
        cursor.style.left = cx + 'px';
        cursor.style.top  = cy + 'px';
        requestAnimationFrame(moveCursor);
      })();
  
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
      });
    } else if (cursor) {
      cursor.style.display = 'none';
    }
  
    /* ─────────────────────────────────────────
       SEARCH OVERLAY
    ───────────────────────────────────────── */
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput   = document.getElementById('search-input');
    const searchToggle  = document.getElementById('search-toggle');
  
    function openSearch() {
      searchOverlay && searchOverlay.classList.add('open');
      setTimeout(() => searchInput && searchInput.focus(), 150);
    }
    function closeSearch() {
      searchOverlay && searchOverlay.classList.remove('open');
      if (searchInput) searchInput.value = '';
    }
  
    searchToggle  && searchToggle.addEventListener('click', openSearch);
    searchOverlay && searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') closeSearch();
    });
  
    if (searchInput) {
      searchInput.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        const term = searchInput.value.toLowerCase().trim();
        if (!term) return;
        for (const el of document.querySelectorAll('h1,h2,h3,h4,p')) {
          if (el.textContent.toLowerCase().includes(term)) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            closeSearch();
            break;
          }
        }
      });
    }
  
    /* ─────────────────────────────────────────
       BACK TO TOP
    ───────────────────────────────────────── */
    const btt = document.getElementById('back-to-top');
    window.addEventListener(
      'scroll',
      () => { if (btt) btt.style.display = window.scrollY > 500 ? 'grid' : 'none'; },
      { passive: true }
    );
    btt && btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  
    /* ─────────────────────────────────────────
       ABOUT MODAL
    ───────────────────────────────────────── */
    const aboutModal   = document.getElementById('aboutModal');
    const openModalBtn = document.getElementById('openAboutModal');
  
    openModalBtn && openModalBtn.addEventListener('click', () => aboutModal && aboutModal.classList.add('show'));
    if (aboutModal) {
      const closeBtn = aboutModal.querySelector('.modal-close');
      closeBtn && closeBtn.addEventListener('click', () => aboutModal.classList.remove('show'));
      aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) aboutModal.classList.remove('show');
      });
    }
  
    /* ─────────────────────────────────────────
       QUICK INFO TOGGLE
    ───────────────────────────────────────── */
    const qi  = document.getElementById('quickInfoWrapper');
    const qiT = document.getElementById('quickInfoToggle');
  
    qiT && qiT.addEventListener('click', (e) => { e.stopPropagation(); qi && qi.classList.toggle('active'); });
    document.addEventListener('click', (e) => {
      if (qi && !qi.contains(e.target)) qi.classList.remove('active');
    });
  
    /* ─────────────────────────────────────────
       CONTACT FORM
    ───────────────────────────────────────── */
    const contactForm   = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contact-status');
  
    contactForm && contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;
  
      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          contactStatus.textContent = "✓ Message sent! I'll get back to you soon.";
          contactStatus.className = 'success';
          contactForm.reset();
        } else throw new Error('Failed');
      } catch {
        contactStatus.textContent = '✕ Failed to send. Please email mboyatitus11@gmail.com';
        contactStatus.className = 'error';
      } finally {
        btn.innerHTML = 'Send Message <i class="fas fa-paper-plane" style="margin-left:8px"></i>';
        btn.disabled = false;
        setTimeout(() => {
          contactStatus.textContent = '';
          contactStatus.className = '';
        }, 6000);
      }
    });
  
    /* ─────────────────────────────────────────
       PROJECT FILTERS
    ───────────────────────────────────────── */
    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach((card) => {
          const cats = card.dataset.category || '';
          const show = filter === 'all' || cats.includes(filter);
          card.style.opacity          = show ? '1'    : '0.25';
          card.style.pointerEvents    = show ? 'auto' : 'none';
          card.style.transform        = show ? ''     : 'scale(0.97)';
          card.style.transition       = 'opacity 0.3s ease, transform 0.3s ease';
        });
      });
    });
  
    /* ─────────────────────────────────────────
       CV DOWNLOAD TRACKING
    ───────────────────────────────────────── */
    const cvBtn = document.getElementById('downloadcv');
    cvBtn && cvBtn.addEventListener('click', () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
          event_category: 'CV',
          event_label: 'Titus_Mboya_ComputerSciCV',
        });
      }
    });
  
    /* ─────────────────────────────────────────
       CHATBOT TOGGLE
    ───────────────────────────────────────── */
    const chatbot        = document.getElementById('chatbot');
    const chatbotToggle  = document.getElementById('chatbotToggle');
    const closeChat      = document.getElementById('closeChat');
  
    if (chatbotToggle && chatbot) {
      chatbotToggle.addEventListener('click', () => {
        const isOpen = chatbot.style.display === 'flex';
        chatbot.style.display = isOpen ? 'none' : 'flex';
        chatbot.setAttribute('aria-hidden', String(isOpen));
        if (!isOpen) {
          const input = document.getElementById('userInput');
          setTimeout(() => input && input.focus(), 150);
        }
      });
    }
  
    if (closeChat && chatbot) {
      closeChat.addEventListener('click', () => {
        chatbot.style.display = 'none';
        chatbot.setAttribute('aria-hidden', 'true');
      });
    }
  
    /* ─────────────────────────────────────────
       NOTIFICATION HELPER (global)
    ───────────────────────────────────────── */
    window.showNotification = function (msg, type = 'info') {
      const n = document.createElement('div');
      n.className = `notification ${type}`;
      n.textContent = msg;
      document.body.appendChild(n);
      requestAnimationFrame(() => requestAnimationFrame(() => n.classList.add('show')));
      setTimeout(() => {
        n.classList.remove('show');
        setTimeout(() => n.remove(), 400);
      }, 4000);
    };
  
    /* ─────────────────────────────────────────
       SECURITY
    ───────────────────────────────────────── */
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key))
      ) {
        e.preventDefault();
      }
    });
  
  })();