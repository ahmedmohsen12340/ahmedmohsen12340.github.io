/* ============================================================
   Network Canvas — Hero Background Animation
   ============================================================ */

class NetworkCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 120 };
    this.animFrameId = null;

    this.handleResize = this.handleResize.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  init() {
    this.setSize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  setSize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  createParticles() {
    const count = Math.min(60, Math.floor((this.canvas.width * this.canvas.height) / 12000));
    this.particles = [];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', this.handleResize);
    this.canvas.addEventListener('mousemove', this.handleMouse);
    this.canvas.addEventListener('mouseleave', this.handleLeave);
  }

  destroy() {
    window.removeEventListener('resize', this.handleResize);
    this.canvas.removeEventListener('mousemove', this.handleMouse);
    this.canvas.removeEventListener('mouseleave', this.handleLeave);
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  handleResize() {
    this.setSize();
    this.createParticles();
  }

  handleMouse(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  handleLeave() {
    this.mouse.x = null;
    this.mouse.y = null;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.updateParticles();
    this.drawConnections();
    this.drawParticles();
    this.animFrameId = requestAnimationFrame(() => this.animate());
  }

  updateParticles() {
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
    }
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 140;

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.15;
          this.ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  drawParticles() {
    for (const p of this.particles) {
      let baseAlpha = 0.6;

      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          baseAlpha = 1;
          this.ctx.shadowColor = 'rgba(167, 139, 250, 0.5)';
          this.ctx.shadowBlur = 10;
        } else {
          this.ctx.shadowBlur = 0;
        }
      } else {
        this.ctx.shadowBlur = 0;
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(167, 139, 250, ${baseAlpha})`;
      this.ctx.fill();
    }
  }
}

/* ============================================================
   Stars Canvas — Hero Starfield Background
   ============================================================ */

class StarsCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.time = 0;
    this.animFrameId = null;
    this.handleResize = this.handleResize.bind(this);
  }

  init() {
    this.setSize();
    this.createStars();
    window.addEventListener('resize', this.handleResize);
    this.animate();
  }

  setSize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  createStars() {
    const count = Math.min(120, Math.floor((this.canvas.width * this.canvas.height) / 8000));
    this.stars = [];
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 2.5 + 0.5,
        baseAlpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  animate() {
    this.time += 0.016;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawStars();
    this.animFrameId = requestAnimationFrame(() => this.animate());
  }

  drawStars() {
    for (const s of this.stars) {
      const twinkle = 0.5 + 0.5 * Math.sin(this.time * s.speed * 60 + s.phase);
      const alpha = s.baseAlpha * twinkle;

      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);

      if (s.radius > 1.5) {
        this.ctx.shadowColor = `rgba(167, 139, 250, ${alpha * 0.4})`;
        this.ctx.shadowBlur = 12;
      } else {
        this.ctx.shadowBlur = 0;
      }

      this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      this.ctx.fill();
    }
    this.ctx.shadowBlur = 0;
  }

  handleResize() {
    this.setSize();
    this.createStars();
  }

  destroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }
}

/* ============================================================
   Scroll Animations — Intersection Observer
   ============================================================ */

class ScrollReveal {
  constructor() {
    this.observer = null;
  }

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section').forEach((el) => {
      this.observer.observe(el);
    });
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

/* ============================================================
   Timeline Reveal — Staggered Animation
   ============================================================ */

class TimelineReveal {
  constructor() {
    this.observer = null;
  }

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline__item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('timeline__item--visible');
              }, index * 150);
            });
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const timeline = document.getElementById('timeline');
    if (timeline) {
      this.observer.observe(timeline);
    }
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

/* ============================================================
   Navigation
   ============================================================ */

class Navigation {
  constructor() {
    this.nav = document.querySelector('.nav');
    this.toggle = document.querySelector('.nav__toggle');
    this.links = document.querySelector('.nav__links');
    this.lastScroll = 0;
  }

  init() {
    this.handleScroll = this.handleScroll.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);

    window.addEventListener('scroll', this.handleScroll, { passive: true });
    if (this.toggle) {
      this.toggle.addEventListener('click', this.handleToggle);
    }
    if (this.links) {
      this.links.querySelectorAll('.nav__link').forEach((link) => {
        link.addEventListener('click', this.handleLinkClick);
      });
    }
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.nav.classList.add('nav--scrolled');
    } else {
      this.nav.classList.remove('nav--scrolled');
    }
  }

  handleToggle() {
    this.links.classList.toggle('nav__links--open');
  }

  handleLinkClick() {
    this.links.classList.remove('nav__links--open');
  }

  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.toggle) {
      this.toggle.removeEventListener('click', this.handleToggle);
    }
  }
}

/* ============================================================
   Skills Carousel
   ============================================================ */

class SkillsCarousel {
  constructor(trackId, dotsId, interval = 10000) {
    this.track = document.getElementById(trackId);
    this.dotsContainer = document.getElementById(dotsId);
    this.slides = this.track ? this.track.querySelectorAll('.skills__slide') : [];
    this.totalSlides = this.slides.length;
    this.lastIndex = this.totalSlides - 1;
    this.current = 0;
    this.interval = interval;
    this.timer = null;
    this.isPaused = false;
    this.isAnimating = false;

    this.observer = null;
    this.isInView = false;
  }

  init() {
    if (!this.track || this.totalSlides === 0) return;
    this.viewport = this.track.closest('.skills__viewport');

    this.createDots();
    this.bindControls();
    this.initTouch();
    this.startAutoPlay();
    this.initScrollObservation();
  }

  createDots() {
    if (!this.dotsContainer) return;
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'skills__dot' + (i === 0 ? ' skills__dot--active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => this.goTo(i));
      this.dotsContainer.appendChild(dot);
    }
  }

  bindControls() {
    const carousel = this.track.closest('.skills__carousel');
    const prev = carousel.querySelector('.skills__arrow--prev');
    const next = carousel.querySelector('.skills__arrow--next');

    if (prev) prev.addEventListener('click', () => this.prev());
    if (next) next.addEventListener('click', () => this.next());

    carousel.addEventListener('mouseenter', () => { this.isPaused = true; });
    carousel.addEventListener('mouseleave', () => { this.isPaused = false; });
  }

  initTouch() {
    if (!this.viewport) return;
    let startX = 0;
    let startY = 0;

    this.viewport.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    }, { passive: true });

    this.viewport.addEventListener('touchend', (e) => {
      const deltaX = e.changedTouches[0].clientX - startX;
      const deltaY = e.changedTouches[0].clientY - startY;
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX < 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }, { passive: true });
  }

  goTo(index) {
    if (this.isAnimating) return;
    index = Math.max(0, Math.min(this.lastIndex, index));
    if (index === this.current) return;
    this.isAnimating = true;
    this.current = index;
    this.track.classList.remove('skills__track--no-transition');
    this.track.style.transform = 'translateX(-' + (index * 100) + '%)';
    this.updateDots();
    this.track.addEventListener('transitionend', () => {
      this.isAnimating = false;
    }, { once: true });
  }

  next() {
    if (this.isAnimating) return;
    if (this.current === this.lastIndex) {
      this.current = 0;
      this.track.classList.add('skills__track--no-transition');
      this.track.style.transform = 'translateX(0%)';
      this.updateDots();
      void this.track.offsetHeight;
      this.triggerEnter(0);
    } else {
      this.goTo(this.current + 1);
    }
  }

  prev() {
    if (this.isAnimating) return;
    if (this.current === 0) {
      this.current = this.lastIndex;
      this.track.classList.add('skills__track--no-transition');
      this.track.style.transform = 'translateX(-' + (this.lastIndex * 100) + '%)';
      this.updateDots();
      void this.track.offsetHeight;
      this.triggerEnter(this.lastIndex);
    } else {
      this.goTo(this.current - 1);
    }
  }

  triggerEnter(index) {
    const slide = this.slides[index];
    if (!slide) return;
    slide.classList.remove('skills__slide--enter');
    void slide.offsetHeight;
    slide.classList.add('skills__slide--enter');
    slide.addEventListener('animationend', () => {
      slide.classList.remove('skills__slide--enter');
    }, { once: true });
  }

  updateDots() {
    if (!this.dotsContainer) return;
    const dots = this.dotsContainer.querySelectorAll('.skills__dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('skills__dot--active', i === this.current);
    });
  }

  startAutoPlay() {
    this.timer = setInterval(() => {
      if (!this.isPaused && this.isInView) {
        this.next();
      }
    }, this.interval);
  }

  stopAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  initScrollObservation() {
    const carousel = this.track.closest('.skills__carousel');
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isInView = entry.isIntersecting;
        });
      },
      { threshold: 0.3 }
    );
    this.observer.observe(carousel);
  }

  destroy() {
    this.stopAutoPlay();
    if (this.observer) this.observer.disconnect();
  }
}

/* ============================================================
   CV Download
   ============================================================ */

class CvDownload {
  constructor(buttonId, pdfPath) {
    this.button = document.getElementById(buttonId);
    this.pdfPath = pdfPath;
  }

  init() {
    if (!this.button) return;
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.download();
    });
  }

  download() {
    const link = document.createElement('a');
    link.href = this.pdfPath;
    link.download = 'Ahmed_Mohsen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/* ============================================================
   Hero Typewriter
   ============================================================ */

class HeroTypewriter {
  constructor(elementId, titles, options = {}) {
    this.textEl = document.getElementById(elementId);
    this.titles = titles;
    this.index = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typeSpeed = options.typeSpeed || 80;
    this.deleteSpeed = options.deleteSpeed || 40;
    this.pauseAfterType = options.pauseAfterType || 2000;
    this.pauseAfterDelete = options.pauseAfterDelete || 500;
    this.timeout = null;
  }

  init() {
    if (!this.textEl || this.titles.length === 0) return;
    this.type();
  }

  type() {
    const current = this.titles[this.index];

    if (this.isDeleting) {
      this.charIndex--;
      this.textEl.textContent = current.substring(0, this.charIndex);

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.index = (this.index + 1) % this.titles.length;
        this.timeout = setTimeout(() => this.type(), this.pauseAfterDelete);
        return;
      }
      this.timeout = setTimeout(() => this.type(), this.deleteSpeed);
    } else {
      this.charIndex++;
      this.textEl.textContent = current.substring(0, this.charIndex);

      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.timeout = setTimeout(() => this.type(), this.pauseAfterType);
        return;
      }
      this.timeout = setTimeout(() => this.type(), this.typeSpeed);
    }
  }

  destroy() {
    if (this.timeout) clearTimeout(this.timeout);
  }
}

/* ============================================================
   Back to Top
   ============================================================ */

class BackToTop {
  constructor(buttonId) {
    this.button = document.getElementById(buttonId);
    this.handleScroll = this.handleScroll.bind(this);
  }

  init() {
    if (!this.button) return;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  handleScroll() {
    this.button.classList.toggle('back-to-top--visible', window.scrollY > 400);
  }

  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

/* ============================================================
   Application — Entry Point
   ============================================================ */

class App {
  constructor() {
    this.stars = null;
    this.network = null;
    this.scrollReveal = null;
    this.timelineReveal = null;
    this.navigation = null;
    this.cvDownload = null;
    this.skillsCarousel = null;
    this.typewriter = null;
    this.backToTop = null;
  }

  init() {
    this.initStars();
    this.initNetwork();
    this.initScrollReveal();
    this.initTimelineReveal();
    this.initNavigation();
    this.initCvDownload();
    this.initSkillsCarousel();
    this.initTypewriter();
    this.initBackToTop();
    this.setCopyrightYear();
  }

  initStars() {
    const canvas = document.getElementById('starsCanvas');
    if (canvas) {
      this.stars = new StarsCanvas(canvas);
      this.stars.init();
    }
  }

  initNetwork() {
    const canvas = document.getElementById('networkCanvas');
    if (canvas) {
      this.network = new NetworkCanvas(canvas);
      this.network.init();
    }
  }

  initScrollReveal() {
    this.scrollReveal = new ScrollReveal();
    this.scrollReveal.init();
  }

  initTimelineReveal() {
    this.timelineReveal = new TimelineReveal();
    this.timelineReveal.init();
  }

  initNavigation() {
    this.navigation = new Navigation();
    this.navigation.init();
  }

  initCvDownload() {
    this.cvDownload = new CvDownload('downloadCV', 'Ahmed_Mohsen_Resume.pdf');
    this.cvDownload.init();
  }

  initSkillsCarousel() {
    this.skillsCarousel = new SkillsCarousel('skillsTrack', 'skillsDots', 8000);
    this.skillsCarousel.init();
  }

  initTypewriter() {
    this.typewriter = new HeroTypewriter('roleText', [
      'Backend (.NET)',
      'RPA Developer',
      'Full-Stack Engineer',
    ]);
    this.typewriter.init();
  }

  initBackToTop() {
    this.backToTop = new BackToTop('backToTop');
    this.backToTop.init();
  }

  setCopyrightYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear().toString();
  }
}

/* ============================================================
   Boot
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
