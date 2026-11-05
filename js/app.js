// --- DATA KARYA ---
const worksData = [
    { slug: "portofolio", title: "Portofolio", category: "video", year: "2025", video: "assets/videos/01.mp4", desc: "Kompilasi karya visual—dari videografi, motion graphic, hingga editing. Satu potret perjalanan kreatif.", credits: "Camera · Edit · Color — Putra Lordian L" },
    { slug: "rupiahs-hunter", title: "Rupiah's Hunter", category: "video", year: "2025", video: "assets/videos/02.mp4", desc: "Proyek dokumenter pendek. Kamera jarak dekat, tangan yang bekerja, cerita di balik layar.", credits: "Director · Camera — Putra Lordian L" },
    { slug: "my-skill", title: "My Skill", category: "motion", year: "2025", video: "assets/videos/03.mp4", desc: "Showcase keahlian visual—kinetic typography, transisi, dan ritme yang mengikuti irama.", credits: "Motion Design — Putra Lordian L" },
    { slug: "latoka-beach", title: "Latoka Beach", category: "video", year: "2024", video: "assets/videos/04.mp4", desc: "Drone shot garis pantai dari ketinggian. Air, batu, dan pasir dalam satu tarikan napas.", credits: "Aerial · Edit — Putra Lordian L" },
    { slug: "color-grading", title: "Color Grading + Color Correction", category: "edit", year: "2024", video: "assets/videos/05.mp4", desc: "Eksperimen warna dari footage mentah menjadi palet sinematik yang utuh.", credits: "Colorist · Editor — Putra Lordian L" },
    { slug: "cinematic-editing", title: "Cinematic + Editing", category: "edit", year: "2024", video: "assets/videos/06.mp4", desc: "Ritme potongan sebagai bahasa utama—cinematic cut yang menyatukan cerita.", credits: "Editor — Putra Lordian L" }
];

const app = {
    init() {
        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        
        this.initCurtain();
        this.initProgressBar();
        this.initNavbarHide();
        this.initCursor();
        this.initMobileMenu();
        this.initHeroAnimations();
        this.initSectionReveals();
        this.initMagnetic();
        this.initFilters();
        this.renderGrid('all');
        this.renderDetail();
        this.initNavClicks();
        this.initMarquee();
        
        requestAnimationFrame((time) => { this.lenis.raf(time); this.loop(time); });
    },

    loop(time) {
        this.lenis.raf(time);
        requestAnimationFrame((t) => this.loop(t));
    },

    initCurtain() {
        const curtain = document.createElement('div');
        curtain.className = 'page-curtain';
        document.body.appendChild(curtain);
        this.lenis.stop();
        gsap.to(curtain, {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.inOut",
            delay: 0.15,
            onComplete: () => {
                curtain.remove();
                this.lenis.start();
            }
        });
    },

    initProgressBar() {
        const bar = document.getElementById('progress-bar');
        window.addEventListener('scroll', () => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            const p = h > 0 ? window.scrollY / h : 0;
            gsap.set(bar, { scaleX: Math.min(1, p) });
        }, { passive: true });
    },

    initNavbarHide() {
        const navbar = document.querySelector('.navbar');
        let lastY = 0;
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            navbar.classList.toggle('scrolled', y > 50);
            if (y > 200 && y > lastY) {
                navbar.classList.add('hidden');
            } else {
                navbar.classList.remove('hidden');
            }
            lastY = y;
        }, { passive: true });
    },

    initCursor() {
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');
        if (!dot || !outline) return;
        if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: "power2.out" });
        });

        gsap.ticker.add(() => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            gsap.set(outline, { x: outlineX, y: outlineY });
        });

        this.refreshCursorHovers();
    },

    refreshCursorHovers() {
        const outline = document.querySelector('.cursor-outline');
        if (!outline) return;
        const interactives = document.querySelectorAll('a, button, .work-item');
        interactives.forEach(el => {
            if (el.dataset.cursorBound) return;
            el.dataset.cursorBound = 'true';
            el.addEventListener('mouseenter', () => outline.classList.add('hover'));
            el.addEventListener('mouseleave', () => outline.classList.remove('hover'));
        });
    },

    initMobileMenu() {
        const btn = document.getElementById('mobile-menu-btn');
        const links = document.getElementById('nav-links');
        if (!btn || !links) return;
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            links.classList.toggle('active');
            if (links.classList.contains('active')) {
                this.lenis.stop();
            } else {
                this.lenis.start();
            }
        });
    },

    initNavClicks() {
        document.querySelectorAll('.nav-links a, .logo').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('data-target');
                const navLinks = document.getElementById('nav-links');
                const menuBtn = document.getElementById('mobile-menu-btn');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuBtn.classList.remove('active');
                }
                this.goHome(target);
            });
        });
    },

    // --- HERO: per-kata ---
    initHeroAnimations() {
        const title = document.getElementById('hero-title');
        if (!title) return;

        const words = title.querySelectorAll('.word');
        gsap.set(words, { yPercent: 120, opacity: 0 });

        const tl = gsap.timeline({ delay: 0.9 });
        tl.to(words, {
            yPercent: 0,
            opacity: 1,
            duration: 1.4,
            ease: "expo.out",
            stagger: 0.12,
        })
        .to(".hero-top .fade-up, .hero-bottom.fade-up", {
            opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out",
        }, "-=0.9");

        gsap.to(".hero-title", {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.to(".hero-video-wrapper video", {
            yPercent: 12,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });
    },

    initSectionReveals() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.fade-up').forEach(elem => {
            if (elem.closest('.hero')) return;
            gsap.fromTo(elem, { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: elem, start: "top 88%" }
            });
        });

        document.querySelectorAll('.section-title').forEach(title => {
            if (title.closest('.hero')) return;
            if (title.dataset.revealBound) return;
            title.dataset.revealBound = 'true';
            const wrapper = document.createElement('div');
            wrapper.className = 'title-reveal';
            title.parentNode.insertBefore(wrapper, title);
            wrapper.appendChild(title);
            gsap.fromTo(title, { y: '110%' }, {
                y: '0%', duration: 1.4, ease: "expo.out",
                scrollTrigger: { trigger: wrapper, start: "top 85%" }
            });
        });

        document.querySelectorAll('.narrative p').forEach(p => {
            gsap.to(p, {
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: p, start: "top 88%" }
            });
        });

        gsap.to(".about-img", {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
                trigger: ".about-section",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });
    },

    initMagnetic() {
        if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
        document.querySelectorAll('.magnetic').forEach(el => {
            if (el.dataset.magneticBound) return;
            el.dataset.magneticBound = 'true';
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
            });
        });
    },

    initTilt() {
        if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
        document.querySelectorAll('.work-item').forEach(el => {
            if (el.dataset.tiltBound) return;
            el.dataset.tiltBound = 'true';
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to(el, {
                    rotateY: x * 8,
                    rotateX: -y * 8,
                    transformPerspective: 1000,
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.9, ease: "power3.out" });
            });
        });
    },

    initMarquee() {
        const inner = document.getElementById('marquee');
        if (!inner) return;
        let x = 0;
        const update = () => {
            const v = Math.abs(this.lenis.velocity || 0);
            x -= 0.8 + v * 0.6;
            const w = inner.scrollWidth / 2;
            if (x <= -w) x = 0;
            gsap.set(inner, { x });
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    },

    initFilters() {
        const cats = ["all", "video", "motion", "edit"];
        const container = document.getElementById('filters');
        container.innerHTML = '';
        cats.forEach(cat => {
            const li = document.createElement('li');
            li.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
            if (cat === 'all') li.classList.add('active');
            li.onclick = () => {
                document.querySelectorAll('.filters li').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                this.renderGrid(cat);
            };
            container.appendChild(li);
        });
    },

    renderGrid(filter) {
        const grid = document.getElementById('work-grid');
        grid.innerHTML = '';
        const filtered = filter === 'all' ? worksData : worksData.filter(w => w.category === filter);

        filtered.forEach((work, i) => {
            const item = document.createElement('a');
            item.className = 'work-item';
            item.href = `#${work.slug}`;
            item.innerHTML = `
                <div class="work-media">
                    <video src="${work.video}" muted loop playsinline preload="metadata" 
                           onmouseenter="this.play()" onmouseleave="this.pause()"></video>
                    <div class="play-icon">PLAY</div>
                </div>
                <div class="work-info">
                    <div>
                        <h3 class="work-title">${work.title}</h3>
                        <p class="work-meta">${work.category} — ${work.year}</p>
                    </div>
                    <span class="work-index">0${i + 1}</span>
                </div>
            `;
            item.onclick = (e) => {
                e.preventDefault();
                this.openDetail(work);
            };
            grid.appendChild(item);
        });
        
        gsap.fromTo(".work-item", 
            { opacity: 0, y: 60 }, 
            {
                opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: "power3.out", delay: 0.1,
            }
        );
        
        setTimeout(() => {
            this.initTilt();
            this.refreshCursorHovers();
        }, 100);
    },

    openDetail(work) {
        history.pushState(null, '', `#${work.slug}`);
        const detail = document.getElementById('detail-view');
        const content = document.getElementById('detail-content');

        content.innerHTML = `
            <div class="detail-header">
                <p class="label">${work.category} — ${work.year}</p>
                <h1 class="detail-title">${work.title}</h1>
                <p class="detail-desc">${work.desc}</p>
            </div>
            <div class="detail-video">
                <video src="${work.video}" controls playsinline></video>
            </div>
            <div class="detail-credits">
                <p>Credits</p>
                <p style="color:var(--text); text-transform:none; letter-spacing:0; font-size:1rem;">${work.credits}</p>
            </div>
        `;

        detail.classList.add('active');
        this.lenis.stop();
        detail.scrollTop = 0;
        
        gsap.fromTo(content, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 });
        
        const video = content.querySelector('video');
        if (video) video.play().catch(() => {});
    },

    goHome(targetHash = '') {
        const content = document.getElementById('detail-content');
        if (content) {
            content.querySelectorAll('video').forEach(v => {
                v.pause();
                v.currentTime = 0;
            });
        }

        history.pushState(null, '', window.location.pathname + targetHash);
        const detail = document.getElementById('detail-view');
        detail.classList.remove('active');
        this.lenis.start();
        
        if (targetHash) {
            setTimeout(() => {
                const el = document.querySelector(targetHash);
                if (el) this.lenis.scrollTo(el, { offset: -80 });
            }, 100);
        } else {
            this.lenis.scrollTo(0);
        }
    },

    renderDetail() {
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.replace('#', '');
            if (!hash) { this.goHome(); return; }
            const work = worksData.find(w => w.slug === hash);
            if (work) this.openDetail(work);
        });
        
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const work = worksData.find(w => w.slug === hash);
            if (work) this.openDetail(work);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
