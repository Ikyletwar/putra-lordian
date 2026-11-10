// --- TRANSLATIONS ---
const i18n = {
    en: {
        "page.title": "Portfolio",
        "nav.work": "Work",
        "nav.about": "About",
        "nav.contact": "Contact",
        "hero.intro": "Lrdyan.<br>Content Creator & Visual Storyteller.",
        "hero.status": "Available for work",
        "hero.title": "Portfolio",
        "hero.sub": "A curated selection of visual works.",
        "hero.desc": "Videographer, motion designer, and editor. Crafting visuals into stories that linger.",
        "about.label": "About Me",
        "about.title": "Behind <br>the <span class=\"italic accent\">lens.</span>",
        "about.narrative": [
            "Hello, I'm <strong>Lrdyan</strong>. A student from SMA Negeri 4 Maluku Tengah who believes that every moment has its own story.",
            "My interest in the visual world started from curiosity: how a still image can hold a thousand words, and how video clips can make people feel the same emotion I feel behind the camera.",
            "From videography, motion graphics, to the editing process, I dedicate my time to keep learning and honing my visual sensitivity. To me, a good piece isn't just about 4K resolution or complex transitions, but the <em>honesty of the story</em> delivered within it.",
            "Outside of visual work, my hobby is simple: <strong>trying everything there is to try</strong>. To me, curiosity is the main fuel—whether it's learning new tools, exploring angles I've never taken, or simply stepping out of my comfort zone. Because that's where new stories are born."
        ],
        "marquee.text": "Videography <em>✦</em> Motion Design <em>✦</em> Color Grading <em>✦</em> Editing <em>✦</em> Storytelling <em>✦</em>&nbsp;",
        "work.label": "Selected Work",
        "work.title": "Selected <span class=\"italic accent\">Works.</span>",
        "contact.label": "Contact",
        "contact.title": "Let's <span class=\"italic accent\">talk.</span>",
        "contact.desc": "Have a project that needs a visual touch? Or just want to discuss ideas? Drop a message—I'm always open to new stories.",
        "footer.copy": "© 2025 Lrdyan.",
        "footer.tag": "Made with curiosity.",
        "detail.back": "← Index",
        "detail.credits": "Credits",
        "filter.all": "All",
        "filter.video": "Video",
        "filter.motion": "Motion",
        "filter.edit": "Edit",
        "rail.portfolio": "Portfolio",
        "rail.about": "Story",
        "rail.works": "Works",
        "rail.contact": "Contact"
    },
    id: {
        "page.title": "Portofolio",
        "nav.work": "Karya",
        "nav.about": "Tentang",
        "nav.contact": "Kontak",
        "hero.intro": "Lrdyan.<br>Kreator Konten & Pendongeng Visual.",
        "hero.status": "Terbuka untuk proyek",
        "hero.title": "Portofolio",
        "hero.sub": "Kurasi karya-karya visual pilihan.",
        "hero.desc": "Videografer, motion designer, dan editor. Merangkai visual menjadi cerita yang membekas.",
        "about.label": "Tentang Saya",
        "about.title": "Di balik <br><span class=\"italic accent\">lensa.</span>",
        "about.narrative": [
            "Halo, saya <strong>Lrdyan</strong>. Seorang siswa dari SMA Negeri 4 Maluku Tengah yang percaya bahwa setiap momen memiliki ceritanya sendiri.",
            "Ketertarikan saya pada dunia visual dimulai dari rasa ingin tahu: bagaimana sebuah gambar diam bisa menyimpan ribuan kata, dan bagaimana potongan video bisa membuat orang merasakan emosi yang sama dengan yang saya rasakan di balik kamera.",
            "Dari videografi, motion graphic, hingga proses editing, saya mendedikasikan waktu untuk terus belajar dan mengasah kepekaan visual. Bagi saya, karya yang baik bukan hanya tentang resolusi 4K atau transisi yang rumit, melainkan tentang <em>kejujuran cerita</em> yang disampaikan di dalamnya.",
            "Di luar urusan visual, hobi saya cukup sederhana: <strong>mencoba segala hal yang bisa dicoba</strong>. Bagi saya, rasa penasaran adalah bahan bakar utama—entah itu mempelajari perangkat baru, mengeksplorasi sudut pandang yang belum pernah saya ambil, atau sekadar melangkah ke hal-hal di luar zona nyaman."
        ],
        "marquee.text": "Videografi <em>✦</em> Motion Design <em>✦</em> Color Grading <em>✦</em> Editing <em>✦</em> Storytelling <em>✦</em>&nbsp;",
        "work.label": "Karya Pilihan",
        "work.title": "Karya <span class=\"italic accent\">Pilihan.</span>",
        "contact.label": "Kontak",
        "contact.title": "Mari <span class=\"italic accent\">bicara.</span>",
        "contact.desc": "Punya proyek yang butuh sentuhan visual? Atau sekadar ingin berdiskusi tentang ide? Kirim pesan—saya selalu terbuka untuk cerita baru.",
        "footer.copy": "© 2025 Lrdyan.",
        "footer.tag": "Dibuat dengan rasa penasaran.",
        "detail.back": "← Indeks",
        "detail.credits": "Kredit",
        "filter.all": "Semua",
        "filter.video": "Video",
        "filter.motion": "Motion",
        "filter.edit": "Edit",
        "rail.portfolio": "Portofolio",
        "rail.about": "Cerita",
        "rail.works": "Karya",
        "rail.contact": "Kontak"
    }
};

// --- DATA KARYA ---
const worksData = [
    { slug: "portofolio", title: "Portfolio", category: "video", year: "2025", video: "assets/videos/01.mp4",
      en: { desc: "A visual compilation—from videography, motion graphics, to editing. A portrait of a creative journey.", credits: "Camera · Edit · Color — Lrdyan" },
      id: { desc: "Kompilasi visual—dari videografi, motion graphic, hingga editing. Satu potret perjalanan kreatif.", credits: "Kamera · Edit · Warna — Lrdyan" } },
    { slug: "rupiahs-hunter", title: "Rupiah's Hunter", category: "video", year: "2025", video: "assets/videos/02.mp4",
      en: { desc: "A community promotion project built on visual motion graphics—working hands, stories behind the scenes, woven into a visual rhythm.", credits: "Motion Graphic · Edit — Lrdyan" },
      id: { desc: "Proyek promosi komunitas berbasis visual motion graphic—tangan yang bekerja, cerita di balik layar, dirangkai dalam ritme visual.", credits: "Motion Graphic · Edit — Lrdyan" } },
    { slug: "my-skill", title: "My Skill", category: "motion", year: "2025", video: "assets/videos/03.mp4",
      en: { desc: "A visual skill showcase—kinetic typography, transitions, and rhythm following the beat.", credits: "Motion Design — Lrdyan" },
      id: { desc: "Showcase keahlian visual—kinetic typography, transisi, dan ritme mengikuti irama.", credits: "Motion Design — Lrdyan" } },
    { slug: "latoka-beach", title: "Latoka Beach", category: "video", year: "2024", video: "assets/videos/04.mp4",
      en: { desc: "Drone shots of the coastline from above. Water, rocks, and sand in a single breath.", credits: "Aerial · Edit — Lrdyan" },
      id: { desc: "Drone shot garis pantai dari ketinggian. Air, batu, dan pasir dalam satu tarikan napas.", credits: "Aerial · Edit — Lrdyan" } },
    { slug: "color-grading", title: "Color Grading + Color Correction", category: "edit", year: "2024", video: "assets/videos/05.mp4",
      en: { desc: "A color experiment from raw footage into a cohesive cinematic palette.", credits: "Colorist · Editor — Lrdyan" },
      id: { desc: "Eksperimen warna dari footage mentah menjadi palet sinematik yang utuh.", credits: "Colorist · Editor — Lrdyan" } },
    { slug: "cinematic-editing", title: "Cinematic + Editing", category: "edit", year: "2024", video: "assets/videos/06.mp4",
      en: { desc: "The rhythm of cuts as the main language—a cinematic cut that ties the story together.", credits: "Editor — Lrdyan" },
      id: { desc: "Ritme potongan sebagai bahasa utama—cinematic cut yang menyatukan cerita.", credits: "Editor — Lrdyan" } }
];

const app = {
    lang: 'en',
    theme: 'dark',

    init() {
        this.theme = document.documentElement.getAttribute('data-theme') || 'dark';
        this.lang = document.documentElement.getAttribute('lang') || 'en';

        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        this.applyLanguage(this.lang, false);
        this.initThemeToggle();
        this.initLangToggle();

        this.initCurtain();
        this.initProgressBar();
        this.initNavbarHide();
        this.initCursor();
        this.initMobileMenu();
        this.initHeroAnimations();
        this.initSectionReveals();
        this.initHeadingHovers();
        this.initMagnetic();
        this.initFilters();
        this.renderGrid('all');
        this.renderDetail();
        this.initNavClicks();
        this.initMarquee();
        this.initBgFlow();
        this.initChapterRail();

        requestAnimationFrame((time) => { this.lenis.raf(time); this.loop(time); });
    },

    loop(time) {
        this.lenis.raf(time);
        requestAnimationFrame((t) => this.loop(t));
    },

    // --- THEME ---
    initThemeToggle() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        btn.addEventListener('click', () => this.setTheme(this.theme === 'dark' ? 'light' : 'dark'));
    },

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'light') this.bgFlow?.stop();
        else this.bgFlow?.start();
    },

    // --- LANGUAGE ---
    initLangToggle() {
        const btn = document.getElementById('lang-toggle');
        if (!btn) return;
        btn.querySelectorAll('.lang-opt').forEach(opt => {
            opt.addEventListener('click', () => {
                this.applyLanguage(opt.dataset.lang);
            });
        });
    },

    applyLanguage(lang, animate = true) {
        this.lang = lang;
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('lang', lang);

        // Update active state on toggle
        document.querySelectorAll('.lang-opt').forEach(o => {
            o.classList.toggle('active', o.dataset.lang === lang);
        });

        // Text nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const val = i18n[lang][key];
            if (val !== undefined) el.innerHTML = val;
        });

        // Title tag
        const titleEl = document.querySelector('title');
        if (titleEl && i18n[lang]["page.title"]) {
            document.title = i18n[lang]["page.title"];
        }

        // Narrative (array of paragraphs)
        const narrativeEl = document.querySelector('[data-i18n-narrative]');
        if (narrativeEl) {
            const arr = i18n[lang]["about.narrative"];
            narrativeEl.innerHTML = arr.map(p => `<p>${p}</p>`).join('');
            // Rebind reveal animations for new paragraphs
            if (animate) {
                gsap.utils.toArray('.narrative p').forEach(p => {
                    gsap.fromTo(p, { opacity: 0, y: 30 }, {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        scrollTrigger: { trigger: p, start: "top 88%" }
                    });
                });
            }
        }

        // Re-render filters and grid for translated categories & descriptions
        this.initHeadingHovers();
        this.initFilters();
        const activeFilter = document.querySelector('.filters li.active');
        const filter = activeFilter ? activeFilter.dataset.filter : 'all';
        this.renderGrid(filter);
    },

    // --- CURTAIN ---
    initCurtain() {
        const curtain = document.createElement('div');
        curtain.className = 'page-curtain';
        curtain.innerHTML = `
            <div class="curtain-content">
                <div class="curtain-text">LOADING FOOTAGE</div>
                <div class="curtain-progress">
                    <div class="curtain-bar"><div class="curtain-bar-fill"></div></div>
                    <span class="curtain-percent">0%</span>
                </div>
            </div>
        `;
        document.body.appendChild(curtain);
        this.lenis.stop();
        
        const percentEl = curtain.querySelector('.curtain-percent');
        const barEl = curtain.querySelector('.curtain-bar-fill');
        const counter = { val: 0 };
        
        gsap.to(counter, {
            val: 100,
            duration: 1.1,
            ease: "power2.inOut",
            onUpdate: () => {
                percentEl.textContent = Math.floor(counter.val) + '%';
                barEl.style.width = counter.val + '%';
            },
            onComplete: () => {
                gsap.delayedCall(0.3, () => {
                    gsap.to(curtain, {
                        yPercent: -100,
                        duration: 1.0,
                        ease: "expo.inOut",
                        onComplete: () => {
                            curtain.remove();
                            this.lenis.start();
                            this.initRailDraw();
                        }
                    });
                });
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
            if (y > 200 && y > lastY) navbar.classList.add('hidden');
            else navbar.classList.remove('hidden');
            lastY = y;
        }, { passive: true });
    },

    initCursor() {
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');
        if (!dot || !outline) return;
        if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
        let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
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
        document.querySelectorAll('a, button, .work-item').forEach(el => {
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
            if (links.classList.contains('active')) this.lenis.stop();
            else this.lenis.start();
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

    initHeroAnimations() {
        const title = document.getElementById('hero-title');
        if (!title) return;
        const words = title.querySelectorAll('.word');
        gsap.set(words, { yPercent: 120, opacity: 0 });
        const tl = gsap.timeline({ delay: 0.9 });
        tl.to(words, { yPercent: 0, opacity: 1, duration: 1.4, ease: "expo.out", stagger: 0.12 })
          .to(".hero-top .fade-up, .hero-sub, .hero-bottom.fade-up", {
              opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out",
          }, "-=0.9");

        gsap.to(".hero-title", {
            yPercent: -15, ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
        });
        gsap.to(".hero-video-wrapper video", {
            yPercent: 12, scale: 1.1, ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
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
            yPercent: 12, ease: "none",
            scrollTrigger: { trigger: ".about-section", start: "top bottom", end: "bottom top", scrub: true }
        });
    },

    initHeadingHovers() {
        const targets = document.querySelectorAll('.hero-title, .section-title, .contact-title');
        targets.forEach(el => {
            this.splitHeadingChars(el);
            this.bindHeadingHover(el);
        });
    },

    splitHeadingChars(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        const textNodes = [];
        let node;
        while ((node = walker.nextNode())) {
            const parent = node.parentNode;
            if (parent && parent.classList && parent.classList.contains('h-char')) continue;
            if (node.nodeValue.trim()) textNodes.push(node);
        }
        
        textNodes.forEach(tn => {
            const text = tn.nodeValue;
            const frag = document.createDocumentFragment();
            for (const ch of text) {
                if (ch === ' ' || ch === '\n' || ch === '\t' || ch === '\u00A0') {
                    frag.appendChild(document.createTextNode(ch));
                } else {
                    const span = document.createElement('span');
                    span.className = 'h-char';
                    span.textContent = ch;
                    frag.appendChild(span);
                }
            }
            tn.parentNode.replaceChild(frag, tn);
        });
    },

    bindHeadingHover(el) {
        // Bind per karakter — masing-masing huruf punya event sendiri
        el.querySelectorAll('.h-char').forEach(ch => {
            ch.addEventListener('mouseenter', () => {
                gsap.killTweensOf(ch);
                gsap.to(ch, {
                    y: -14,
                    scale: 1.08,
                    duration: 0.35,
                    ease: 'power3.out',
                });
            });
            ch.addEventListener('mouseleave', () => {
                gsap.killTweensOf(ch);
                gsap.to(ch, {
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    ease: 'elastic.out(1, 0.45)',
                });
            });
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
                    rotateY: x * 8, rotateX: -y * 8, transformPerspective: 1000,
                    duration: 0.5, ease: "power2.out",
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

    // --- FILTERS ---
    initFilters() {
        const cats = ["all", "video", "motion", "edit"];
        const container = document.getElementById('filters');
        const current = (document.querySelector('.filters li.active')?.dataset.filter) || 'all';
        container.innerHTML = '';
        cats.forEach(cat => {
            const li = document.createElement('li');
            li.textContent = i18n[this.lang]["filter." + cat];
            li.dataset.filter = cat;
            if (cat === current) li.classList.add('active');
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
            const lang = this.lang;
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
            item.onclick = (e) => { e.preventDefault(); this.openDetail(work); };
            grid.appendChild(item);
        });
        
        gsap.fromTo(".work-item", 
            { opacity: 0, y: 60 }, 
            { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: "power3.out", delay: 0.1 }
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
        const t = i18n[this.lang];
        const local = work[this.lang] || work.en;

        content.innerHTML = `
            <div class="detail-header">
                <p class="label">${work.category} — ${work.year}</p>
                <h1 class="detail-title">${work.title}</h1>
                <p class="detail-desc">${local.desc}</p>
            </div>
            <div class="detail-video">
                <video src="${work.video}" controls playsinline></video>
            </div>
            <div class="detail-credits">
                <p>${t["detail.credits"]}</p>
                <p style="color:var(--text); text-transform:none; letter-spacing:0; font-size:1rem;">${local.credits}</p>
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
            content.querySelectorAll('video').forEach(v => { v.pause(); v.currentTime = 0; });
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
    },

    // --- FLOW FIELD BACKGROUND ---
    initChapterRail() {
        const rail = document.querySelector('.chapter-rail');
        if (!rail) return;

        const nodes = rail.querySelectorAll('.rail-node');
        const fill = rail.querySelector('.rail-fill');
        const sections = ['top', 'about', 'work', 'contact'];

        // Click to scroll
        nodes.forEach(node => {
            node.addEventListener('click', (e) => {
                e.preventDefault();
                const target = node.dataset.section;
                const el = document.getElementById(target);
                if (el) this.lenis.scrollTo(el, { offset: -80 });
            });
        });

        // Active state via IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    nodes.forEach(n => n.classList.toggle('active', n.dataset.section === id));
                }
            });
        }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Scroll-linked fill
        this._setFill = gsap.quickTo(fill, 'scaleY', { duration: 0.2, ease: 'power2.out' });

        const updateFill = () => {
            if (!this._railReady) return;
            const h = document.documentElement.scrollHeight - window.innerHeight;
            const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
            this._setFill(p);
        };
        window.addEventListener('scroll', updateFill, { passive: true });
    },

    initRailDraw() {
        const rail = document.querySelector('.chapter-rail');
        if (!rail) return;

        rail.classList.add('visible');

        const line = rail.querySelector('.rail-line');
        const nodes = rail.querySelectorAll('.rail-node');
        const fill = rail.querySelector('.rail-fill');
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;

        gsap.set(line, { scaleY: 0, transformOrigin: 'top' });
        gsap.set(nodes, { opacity: 0, x: -8 });

        const tl = gsap.timeline({ delay: 0.2 });
        tl.to(line, { scaleY: 1, duration: 1.1, ease: 'expo.inOut' })
          .to(nodes, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.8')
          .to(fill, {
              scaleY: p,
              duration: 1.4,
              ease: 'expo.inOut',
              onComplete: () => { this._railReady = true; }
          }, '-=0.6');
    },

    initBgFlow() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const canvas = document.createElement('canvas');
        canvas.id = 'bg-flow';
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        let w, h;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.fillStyle = 'rgba(18, 18, 18, 1)';
            ctx.fillRect(0, 0, w, h);
        };
        resize();
        window.addEventListener('resize', resize);

        const mouse = { x: -9999, y: -9999, active: false };
        const isCoarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        if (!isCoarse) {
            window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; });
            window.addEventListener('mouseleave', () => { mouse.active = false; });
            window.addEventListener('blur', () => { mouse.active = false; });
        }

        const palette = [[194,181,155],[220,180,140],[150,165,200],[200,190,175]];
        const isMobile = w < 768;
        const count = isMobile ? 280 : 520;

        const particles = [];
        for (let i = 0; i < count; i++) {
            const color = palette[i % palette.length];
            particles.push({
                x: Math.random() * w, y: Math.random() * h,
                px: 0, py: 0,
                speed: 0.2 + Math.random() * 0.5,
                color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${0.15 + Math.random() * 0.22})`,
                life: Math.random() * 300, maxLife: 300 + Math.random() * 400,
                freq: 0.6 + Math.random() * 0.8,
                angleOffset: Math.random() * Math.PI * 2,
            });
        }

        const noise = (x, y, z, freq) => {
            const s1 = Math.sin(x * 0.008 * freq + z * 0.0006) * Math.cos(y * 0.008 * freq - z * 0.0004);
            const s2 = Math.sin(x * 0.003 * freq - z * 0.0003) * Math.cos(y * 0.005 * freq + z * 0.0007);
            const s3 = Math.sin((x + y) * 0.004 * freq + z * 0.0005) * 0.4;
            return s1 * 0.45 + s2 * 0.35 + s3 * 0.2;
        };

        const CURSOR_RADIUS = 220;
        let t = 0, running = false, rafId;

        const tick = () => {
            if (!running) return;
            t += 1;
            ctx.fillStyle = 'rgba(18, 18, 18, 0.02)';
            ctx.fillRect(0, 0, w, h);

            if (mouse.active) {
                const outer = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 260);
                outer.addColorStop(0, 'rgba(60, 100, 180, 0.06)');
                outer.addColorStop(0.5, 'rgba(60, 100, 180, 0.025)');
                outer.addColorStop(1, 'rgba(60, 100, 180, 0)');
                ctx.fillStyle = outer;
                ctx.fillRect(mouse.x - 260, mouse.y - 260, 520, 520);
                const inner = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 120);
                inner.addColorStop(0, 'rgba(170, 35, 45, 0.11)');
                inner.addColorStop(1, 'rgba(170, 35, 45, 0)');
                ctx.fillStyle = inner;
                ctx.fillRect(mouse.x - 120, mouse.y - 120, 240, 240);
            }

            for (const p of particles) {
                p.life += 1;
                let alpha = 1;
                if (p.life > p.maxLife) p.life = 0;
                const r = p.life / p.maxLife;
                if (r < 0.1) alpha = r / 0.1;
                else if (r > 0.85) alpha = (1 - r) / 0.15;

                const n = noise(p.x, p.y, t, p.freq);
                const angle = n * Math.PI * 2.5 + p.angleOffset;
                let vx = Math.cos(angle) * p.speed;
                let vy = Math.sin(angle) * p.speed;
                let thickness = 0.5;

                if (mouse.active) {
                    const dx = mouse.x - p.x, dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CURSOR_RADIUS && dist > 6) {
                        const strength = Math.pow(1 - dist / CURSOR_RADIUS, 2.2);
                        const tx = -dy / dist, ty = dx / dist;
                        const rx = dx / dist, ry = dy / dist;
                        let tvx, tvy;
                        if (dist < 90) {
                            tvx = tx * p.speed * 2.6 + rx * p.speed * 0.7;
                            tvy = ty * p.speed * 2.6 + ry * p.speed * 0.7;
                            thickness = 0.5 + strength * 1.5;
                        } else {
                            tvx = tx * p.speed * 1.8;
                            tvy = ty * p.speed * 1.8;
                            thickness = 0.5 + strength * 0.6;
                        }
                        vx = vx * (1 - strength) + tvx * strength;
                        vy = vy * (1 - strength) + tvy * strength;
                    }
                }

                p.px = p.x; p.py = p.y;
                p.x += vx; p.y += vy;
                if (p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
                    p.x = Math.random() * w; p.y = Math.random() * h;
                    p.px = p.x; p.py = p.y; p.life = 0;
                    continue;
                }

                ctx.strokeStyle = p.color;
                ctx.globalAlpha = alpha;
                ctx.lineWidth = thickness;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(p.px, p.py);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
            rafId = requestAnimationFrame(tick);
        };

        this.bgFlow = {
            start: () => { if (!running) { running = true; tick(); } },
            stop: () => { running = false; if (rafId) cancelAnimationFrame(rafId); }
        };

        if (this.theme === 'dark') this.bgFlow.start();
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
