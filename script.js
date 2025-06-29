// Language switching logic
const translations = {
    en: {
        nav: ["Home", "Curriculum", "Practice Tests", "Mistake Center", "Progress"],
        logo: "SAT Master",
        heroTitle: "Master the SAT with Confidence",
        heroDesc: "Comprehensive study platform with structured curriculum, video lessons, and intelligent mistake tracking to help you achieve your target score.",
        startLearning: "Start Learning",
        takePractice: "Take Practice Test",
        progress: "Your Progress",
        englishComplete: "English Complete",
        mathComplete: "Math Complete",
        testsTaken: "Tests Taken",
        curriculumTitle: "Comprehensive Curriculum",
        practiceTitle: "Practice Tests",
        practiceSubtitle: "6 full-length SAT simulations to build confidence and track your progress",
        mistakesTitle: "Mistake Center",
        mistakesSubtitle: "Track your errors and get personalized recommendations",
        progressTitle: "Your Progress"
    },
    zh: {
        nav: ["首页", "课程表", "模拟考试", "错题中心", "进度"],
        logo: "SAT 大师",
        heroTitle: "自信应对SAT考试",
        heroDesc: "结构化课程、视频讲解和智能错题追踪，助你高效备考，取得理想分数。",
        startLearning: "开始学习",
        takePractice: "参加模拟考试",
        progress: "你的进度",
        englishComplete: "英语完成度",
        mathComplete: "数学完成度",
        testsTaken: "已完成测试",
        curriculumTitle: "完整课程表",
        practiceTitle: "模拟考试",
        practiceSubtitle: "6套完整SAT模拟考试，助你自信应考，追踪进步",
        mistakesTitle: "错题中心",
        mistakesSubtitle: "追踪错题，获得个性化建议",
        progressTitle: "你的进度"
    },
    es: {
        nav: ["Inicio", "Currículo", "Exámenes Prácticos", "Centro de Errores", "Progreso"],
        logo: "SAT Maestro",
        heroTitle: "Domina el SAT con Confianza",
        heroDesc: "Plataforma de estudio integral con currículo estructurado, lecciones en video y seguimiento inteligente de errores para ayudarte a alcanzar tu puntaje objetivo.",
        startLearning: "Comenzar a aprender",
        takePractice: "Tomar examen práctico",
        progress: "Tu Progreso",
        englishComplete: "Inglés Completado",
        mathComplete: "Matemáticas Completadas",
        testsTaken: "Exámenes Realizados",
        curriculumTitle: "Currículo Integral",
        practiceTitle: "Exámenes Prácticos",
        practiceSubtitle: "6 exámenes SAT completos para ganar confianza y seguir tu progreso",
        mistakesTitle: "Centro de Errores",
        mistakesSubtitle: "Sigue tus errores y recibe recomendaciones personalizadas",
        progressTitle: "Tu Progreso"
    }
};

function setLanguage(lang) {
    // Highlight active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    const t = translations[lang];
    // Sidebar nav
    document.querySelectorAll('.sidebar-link').forEach((link, i) => {
        link.textContent = t.nav[i];
    });
    // Logo
    const logo = document.querySelector('.sidebar-logo span');
    if (logo) logo.textContent = t.logo;
    // Hero
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    const heroDesc = document.querySelector('.hero-content p');
    if (heroDesc) heroDesc.textContent = t.heroDesc;
    // Hero buttons
    const heroBtns = document.querySelectorAll('.hero-buttons .btn');
    if (heroBtns[0]) heroBtns[0].textContent = t.startLearning;
    if (heroBtns[1]) heroBtns[1].textContent = t.takePractice;
    // Progress card
    const progressCard = document.querySelector('.card-header h3');
    if (progressCard) progressCard.textContent = t.progress;
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.englishComplete;
    if (statLabels[1]) statLabels[1].textContent = t.mathComplete;
    if (statLabels[2]) statLabels[2].textContent = t.testsTaken;
    // Curriculum title
    const curriculumTitle = document.querySelector('#curriculum h2');
    if (curriculumTitle) curriculumTitle.textContent = t.curriculumTitle;
    // Practice title/subtitle
    const practiceTitle = document.querySelector('#practice h2');
    if (practiceTitle) practiceTitle.textContent = t.practiceTitle;
    const practiceSubtitle = document.querySelector('#practice .section-subtitle');
    if (practiceSubtitle) practiceSubtitle.textContent = t.practiceSubtitle;
    // Mistakes title/subtitle
    const mistakesTitle = document.querySelector('#mistakes h2');
    if (mistakesTitle) mistakesTitle.textContent = t.mistakesTitle;
    const mistakesSubtitle = document.querySelector('#mistakes .section-subtitle');
    if (mistakesSubtitle) mistakesSubtitle.textContent = t.mistakesSubtitle;
    // Progress section title
    const progressTitle = document.querySelector('#progress h2');
    if (progressTitle) progressTitle.textContent = t.progressTitle;
}

// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
// Only apply to anchors that are NOT sidebar links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // If this is a sidebar link, let the sidebar logic handle it
        if (this.classList.contains('sidebar-link')) return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Curriculum Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const curriculumContents = document.querySelectorAll('.curriculum-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        curriculumContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding content
        const targetTab = btn.getAttribute('data-tab');
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// Progress Circle Animation
function animateProgressCircle() {
    const progressCircle = document.querySelector('.progress-circle circle:last-child');
    if (progressCircle) {
        const progress = 75; // 75% progress
        const circumference = 2 * Math.PI * 50; // r = 50
        const offset = circumference - (progress / 100) * circumference;
        
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;
        
        setTimeout(() => {
            progressCircle.style.strokeDashoffset = offset;
        }, 500);
    }
}

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.bar-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('progress-circle')) {
                animateProgressCircle();
            }
            if (entry.target.classList.contains('mistake-breakdown') || 
                entry.target.classList.contains('progress-stats')) {
                animateProgressBars();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const progressCircle = document.querySelector('.progress-circle');
    const mistakeBreakdown = document.querySelector('.mistake-breakdown');
    const progressStats = document.querySelector('.progress-stats');
    
    if (progressCircle) observer.observe(progressCircle);
    if (mistakeBreakdown) observer.observe(mistakeBreakdown);
    if (progressStats) observer.observe(progressStats);
});

// Mock data for dynamic content
const mockData = {
    userProgress: {
        english: 80,
        math: 60,
        testsCompleted: 3,
        totalTests: 6
    },
    recentMistakes: [
        { category: 'Geometry', count: 15 },
        { category: 'Grammar', count: 12 },
        { category: 'Reading Comprehension', count: 8 },
        { category: 'Algebra', count: 6 },
        { category: 'Vocabulary', count: 6 }
    ],
    recommendations: [
        {
            title: 'Focus on Geometry',
            description: 'Review Unit 4.1: Geometry and Trigonometry. You\'ve made 15 mistakes in this area.',
            action: 'Review'
        },
        {
            title: 'Grammar Practice',
            description: 'Complete Unit 3.1: Grammar Fundamentals. Your grammar skills need improvement.',
            action: 'Review'
        },
        {
            title: 'Reading Strategy',
            description: 'Practice Unit 1.1: Active Reading Strategies to improve comprehension.',
            action: 'Review'
        }
    ]
};

// Update progress numbers with animation
function updateProgressNumbers() {
    const progressNumbers = document.querySelectorAll('.stat-number');
    progressNumbers.forEach(number => {
        const finalValue = parseInt(number.textContent);
        if (!isNaN(finalValue)) {
            animateNumber(number, 0, finalValue, 1000);
        }
    });
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(updateProgressNumbers, 500);
});

// Add hover effects to cards
document.querySelectorAll('.unit-card, .test-card, .feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Practice test functionality
document.querySelectorAll('.test-card .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.textContent === 'Start Test') {
            // Mock test start
            alert('Practice test will start in a new window. This is a demo.');
        } else if (this.textContent === 'Review Test') {
            // Mock test review
            alert('Test review will open in a new window. This is a demo.');
        }
    });
});

// Unit card functionality
document.querySelectorAll('.unit-card .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const unitCard = this.closest('.unit-card');
        const unitTitle = unitCard.querySelector('h3').textContent;
        
        if (this.textContent === 'Start Learning') {
            alert(`Starting ${unitTitle}. This will open the lesson in a new window.`);
        } else if (this.textContent === 'Continue Learning') {
            alert(`Continuing ${unitTitle}. This will resume your progress.`);
        }
    });
});

// Recommendation buttons
document.querySelectorAll('.recommendation-item .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const recommendation = this.closest('.recommendation-item');
        const title = recommendation.querySelector('h4').textContent;
        
        alert(`Opening ${title} review. This will navigate to the relevant lesson.`);
    });
});

// Add loading states to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (!this.disabled) {
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Scroll to top functionality
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scrollTop > 300) {
        // Show scroll to top button (you can add this element to HTML)
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            scrollTopBtn.style.display = 'block';
        }
    } else {
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTopBtn) {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Add search functionality (mock)
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            // Mock search functionality
            console.log('Searching for:', query);
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    
    // Add active class to current navigation item
    const currentSection = window.location.hash || '#home';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
    
    // Update active navigation based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Sidebar navigation logic
// Remove logic that hides/shows sections. Sidebar links just scroll to the section.
// No JS needed for sidebar navigation now. 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.getAttribute('data-lang'));
        });
    });
    // Set default language to English on load
    setLanguage('en');
}); 