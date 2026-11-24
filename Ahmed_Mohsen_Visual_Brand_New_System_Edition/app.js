/* ============================================================
   Ahmed Mohsen — Visual Brand System Edition
   ============================================================ */

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

    this.observer = null;
    this.isInView = false;
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  init() {
    if (!this.track || this.totalSlides === 0) return;
    this.viewport = this.track.closest('.skills__viewport');

    this.createDots();
    this.bindControls();
    document.addEventListener('keydown', this.handleKeydown);
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
    carousel.addEventListener('focusin', () => { this.isPaused = true; });
    carousel.addEventListener('focusout', () => { this.isPaused = false; });
  }

  handleKeydown(event) {
    if (!this.isInView) return;

    const target = event.target;
    if (target && (target.matches('input, textarea, select') || target.isContentEditable)) return;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
    }
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
    index = Math.max(0, Math.min(this.lastIndex, index));
    if (index === this.current) return;
    this.current = index;
    this.track.classList.remove('skills__track--no-transition');
    this.track.style.transform = 'translateX(-' + (index * 100) + '%)';
    this.updateDots();
    this.triggerEnter(index);
  }

  next() {
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
    document.removeEventListener('keydown', this.handleKeydown);
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
    this.scrollReveal = null;
    this.timelineReveal = null;
    this.navigation = null;
    this.cvDownload = null;
    this.skillsCarousel = null;
    this.typewriter = null;
    this.backToTop = null;
  }

  init() {
    this.initScrollReveal();
    this.initTimelineReveal();
    this.initNavigation();
    this.initCvDownload();
    this.initSkillsCarousel();
    this.initTypewriter();
    this.initBackToTop();
    this.setCopyrightYear();
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
    this.cvDownload = new CvDownload('downloadCV', 'Assets/Ahmed_Mohsen_Resume.pdf');
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
