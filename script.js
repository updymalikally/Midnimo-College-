/* ====================================
   MIDNIMO COLLEGE — JavaScript v2
   ==================================== */

// ============= Course Data =============
const courseData = {
    frontend: {
        title: 'Frontend Development',
        icon: '<i class="fab fa-html5"></i>',
        duration: '4 Months',
        lessonCount: '12 Lessons',
        techs: ['HTML', 'CSS', 'JavaScript'],
        lessons: [
            'HTML Fundamentals',
            'HTML Forms and Tables',
            'CSS Basics',
            'CSS Flexbox and Grid',
            'Responsive Design',
            'CSS Animations',
            'JavaScript Basics',
            'DOM Manipulation',
            'Events Handling',
            'Fetch API',
            'Modern UI Design',
            'Final Project'
        ]
    },
    backend: {
        title: 'Backend Development',
        icon: '<i class="fab fa-node-js"></i>',
        duration: '4 Months',
        lessonCount: '12 Lessons',
        techs: ['Node.js', 'Express', 'MongoDB'],
        lessons: [
            'Programming Basics',
            'JavaScript Advanced',
            'Node.js Basics',
            'Express Framework',
            'REST API Development',
            'Databases Introduction',
            'MongoDB Basics',
            'Authentication System',
            'File Upload System',
            'API Security',
            'Deployment Basics',
            'Final Project'
        ]
    },
    fullstack: {
        title: 'Full Stack Development',
        icon: '<i class="fas fa-layer-group"></i>',
        duration: '6 Months',
        lessonCount: '24 Lessons',
        techs: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
        lessons: [
            'HTML Fundamentals',
            'HTML Forms and Tables',
            'CSS Basics',
            'CSS Flexbox and Grid',
            'Responsive Design',
            'CSS Animations',
            'JavaScript Basics',
            'DOM Manipulation',
            'Events Handling',
            'Fetch API',
            'Modern UI Design',
            'Frontend Final Project',
            'Programming Basics',
            'JavaScript Advanced',
            'Node.js Basics',
            'Express Framework',
            'REST API Development',
            'Databases Introduction',
            'MongoDB Basics',
            'Authentication System',
            'File Upload System',
            'API Security',
            'Deployment Basics',
            'Full Stack Final Project'
        ]
    },
    dataanalysis: {
        title: 'Data Analysis',
        icon: '<i class="fas fa-chart-bar"></i>',
        duration: '3 Months',
        lessonCount: '8 Lessons',
        techs: ['Excel', 'SQL', 'Power BI'],
        lessons: [
            'Excel Basics',
            'Excel Formulas',
            'Data Cleaning',
            'Pivot Tables',
            'Charts and Dashboards',
            'SQL Basics',
            'Data Visualization',
            'Final Project'
        ]
    },
    datascience: {
        title: 'Data Science',
        icon: '<i class="fas fa-brain"></i>',
        duration: '6 Months',
        lessonCount: '8 Lessons',
        techs: ['Python', 'Pandas', 'Machine Learning'],
        lessons: [
            'Python Basics',
            'Numpy',
            'Pandas',
            'Data Cleaning',
            'Data Visualization',
            'Machine Learning Basics',
            'Model Training',
            'Final Project'
        ]
    },
    webdesign: {
        title: 'Web Design',
        icon: '<i class="fas fa-palette"></i>',
        duration: '4 Months',
        lessonCount: '10 Lessons',
        techs: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'],
        lessons: [
            'Design Principles',
            'Color Theory & Typography',
            'Figma Basics',
            'Component Design',
            'Layout & Composition',
            'Responsive Design Patterns',
            'Prototyping & Interactions',
            'Design Systems',
            'User Research & Testing',
            'Final Project'
        ]
    }
};

// ============= DOM Ready =============
document.addEventListener('DOMContentLoaded', () => {

    // ---- Particles ----
    const particlesEl = document.getElementById('particles');
    if (particlesEl) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 6 + 's';
            p.style.animationDuration = (4 + Math.random() * 4) + 's';
            particlesEl.appendChild(p);
        }
    }

    // ---- Navbar Scroll ----
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');

    function handleScroll() {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 50);

        // Active link
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            if (y >= top && y < top + height) {
                navLinksAll.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
                });
            }
        });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ---- Hamburger ----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navActions = document.getElementById('navActions');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            if (navActions) navActions.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                if (navActions) navActions.classList.remove('active');
            });
        });
    }

    // ---- Scroll Animations ----
    const animEls = document.querySelectorAll('.anim');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.d || 0;
                setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    animEls.forEach(el => obs.observe(el));

    // ---- Counter Animation ----
    const counters = document.querySelectorAll('.stat-num[data-target]');
    const cObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                cObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(el => cObs.observe(el));

    function animateCounter(el, target) {
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = Math.floor(current);
        }, 25);
    }

    // ---- Smooth Scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ---- Portal Tabs ----
    const tabs = document.querySelectorAll('.ptab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.ptab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    // ---- Contact Form ----
    setupForm('contactForm', 'contactMsg');
    setupForm('admissionsForm', 'admMsg');

    function setupForm(formId, msgId) {
        const form = document.getElementById(formId);
        const msg = document.getElementById(msgId);
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-glow');
            const orig = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = orig;
                btn.disabled = false;
                msg.classList.add('show');
                form.reset();
                setTimeout(() => msg.classList.remove('show'), 5000);
            }, 1500);
        });
    }

    // ---- Hero Tilt ----
    const heroVisual = document.querySelector('.hero-visual-inner');
    if (heroVisual && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const rect = heroVisual.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / rect.width;
            const dy = (e.clientY - cy) / rect.height;
            heroVisual.style.transform = `perspective(1000px) rotateX(${dy * -4}deg) rotateY(${dx * 4}deg)`;
        });
    }

    // ---- Code typing effect ----
    const codeLines = document.querySelectorAll('.hero-code-block .code-line');
    codeLines.forEach((line, i) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-10px)';
        line.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        setTimeout(() => { line.style.opacity = '1'; line.style.transform = 'translateX(0)'; }, 800 + i * 200);
    });

});

// ============= Course Modal =============
function openCourseModal(courseKey) {
    const data = courseData[courseKey];
    if (!data) return;

    document.getElementById('modalIcon').innerHTML = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDuration').innerHTML = `<i class="fas fa-clock"></i> ${data.duration}`;
    document.getElementById('modalLessons').innerHTML = `<i class="fas fa-book-open"></i> ${data.lessonCount}`;

    const techsEl = document.getElementById('modalTechs');
    techsEl.innerHTML = data.techs.map(t => `<span class="tech-pill">${t}</span>`).join('');

    const listEl = document.getElementById('modalLessonsList');
    listEl.innerHTML = data.lessons.map(l => `<li>${l}</li>`).join('');

    document.getElementById('courseModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCourseModal() {
    document.getElementById('courseModal').classList.remove('open');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) closeCourseModal();
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCourseModal();
});
