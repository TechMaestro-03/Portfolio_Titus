// =========================
// TITUS PORTFOLIO - ENHANCED JAVASCRIPT
// Complete interactive functionality
// =========================

// DOM ready helper
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Main initialization function
function initializePortfolio() {
    // Initialize all components
    initPreloader();
    initProgressBar();
    initStickyHeader();
    initMobileMenu();
    initActiveNav();
    initSmoothScroll();
    initTypingAnimation();
    initLazyLoading();
    initSkillAnimations();
    initStatsCounter();
    initProjectModals();
    initTestimonialCarousel();
    initContactForm();
    initBackToTop();
    initDarkMode();
    initCustomCursor();
    initSearchFunctionality();
    initParticles();
    initScrollAnimations();
    initKeyboardShortcuts();
    initDownloadCV();
    initInteractiveTimeline();
    initTechCarousel();
    initQuickInfo();
    initSkillBars();
}

// =========================
// COMPONENT INITIALIZATION
// =========================

// 1. Preloader
function initPreloader() {
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                loader.style.opacity = '0';
                setTimeout(function() {
                    loader.style.display = 'none';
                }, 500);
            }, 800);
        });
    }
}

// 2. Progress Bar
function initProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
}

// 3. Sticky Header
function initStickyHeader() {
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}
// 4. Initialize Quick Info Panel
function initQuickInfo() {
    const quickInfoWrapper = document.querySelector('.quick-info-wrapper');
    const quickInfoIcon = document.querySelector('.quick-info-icon');

    if (quickInfoIcon && quickInfoWrapper) {
        // Toggle panel on icon click
        quickInfoIcon.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent click from bubbling to document
            quickInfoWrapper.classList.toggle('active');
        });

        // Close panel when clicking outside
        document.addEventListener('click', function(e) {
            if (!quickInfoWrapper.contains(e.target) && !quickInfoIcon.contains(e.target)) {
                quickInfoWrapper.classList.remove('active');
            }
        });
    }
}

// Call the initializer
initQuickInfo();
// 5. Mobile Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (!menuToggle || !navLinks) return;

    // Toggle menu open/close
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // prevent document click from immediately closing
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.classList.toggle('active', isOpen);

        // Update aria-expanded for accessibility
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking on any link
    navLinks.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            navLinks.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Optional: Close menu on Escape key press
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            navLinks.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Initialize mobile menu
initMobileMenu();





// 6. Tech Stack Carousel
function initTechCarousel() {
    const track = document.querySelector('.tech-stack-track');
    if (!track) return;
  
    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame
  
    function scrollTech() {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= track.scrollWidth / 2) {
            scrollAmount = 0; // reset for seamless loop
        }
        track.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scrollTech);
    }
  
    scrollTech();
}

// 7. Active Navigation
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (sections.length && navLinks.length) {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Remove active class from all links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Add active class to corresponding link
                    const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// 8. Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('site-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 9. Typing Animation
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing');
    if (!typingElement) return;
    
    const roles = ['Software Developer', 'AI Engineer', 'Full-stack Developer', 'Machine Learning Engineer', 'Technical & Academic Writer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newRoleDelay = 2000;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Remove character
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = erasingDelay;
        } else {
            // Add character
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at end of word
            isDeleting = true;
            typingDelay = newRoleDelay;
        } else if (isDeleting && charIndex === 0) {
            // Move to next word
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500;
        }
        
        setTimeout(type, typingDelay);
    }
    
    // Start typing animation after a short delay
    setTimeout(type, 1000);
}

// 10. Lazy Loading
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc) {
                        img.src = dataSrc;
                    }
                    img.classList.add('fade-in');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        lazyImages.forEach(img => {
            // Store original src in data-src if not already
            if (!img.hasAttribute('data-src') && img.src) {
                img.setAttribute('data-src', img.src);
                // Set a tiny placeholder
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz4KPC9zdmc+';
            }
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
                img.src = dataSrc;
            }
            img.classList.add('fade-in');
        });
    }
}

// 11. Skill Animations
function initSkillAnimations() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    if ('IntersectionObserver' in window) {
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-bar span');
                    skillBars.forEach((bar, index) => {
                        const percentage = bar.parentElement.parentElement.getAttribute('data-percent') || '80';
                        setTimeout(() => {
                            bar.style.width = percentage + '%';
                        }, index * 200);
                    });
                    skillObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });
        
        skillCategories.forEach(card => {
            skillObserver.observe(card);
        });
    }
}

// 12. Skill Bars with Percentage
function initSkillBars() {
    const skillCategories = document.querySelectorAll('.skill-category');
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target.querySelector('.skill-bar > span');
                const skillBarsContainer = entry.target.querySelector('.skill-bars');
                const percent = parseInt(skillBarsContainer.getAttribute('data-percent'));

                // Animate width
                skillBar.style.width = percent + '%';

                // Create percentage label
                let current = 0;
                const label = document.createElement('span');
                label.classList.add('skill-percent');
                label.style.position = 'absolute';
                label.style.right = '5px';
                label.style.top = '50%';
                label.style.transform = 'translateY(-50%)';
                label.style.fontSize = '12px';
                label.style.color = '#fff';
                skillBar.parentElement.style.position = 'relative';
                skillBar.parentElement.appendChild(label);

                // Count up percentage
                const duration = 1500;
                const stepTime = 16;
                const step = percent / (duration / stepTime);

                const counter = setInterval(() => {
                    current += step;
                    if (current >= percent) {
                        current = percent;
                        clearInterval(counter);
                    }
                    label.textContent = Math.floor(current) + '%';
                }, stepTime);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillCategories.forEach(cat => observer.observe(cat));
}

// 13. Stats Counter
function initStatsCounter() {
    const statsContainer = document.querySelector('.stats-container');
    if (!statsContainer) return;

    const statNumbers = statsContainer.querySelectorAll('.stat-number');

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const targetAttr = stat.getAttribute('data-count');
                    const target = parseInt(targetAttr);
                    const addPlus = targetAttr.includes('+') ? '+' : '';
                    const duration = 2000;
                    const step = target / (duration / 16);

                    let current = 0;

                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            stat.textContent = target + addPlus;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + addPlus;
                        }
                    }, 16);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statsObserver.observe(statsContainer);
}

// 14. Project Modals
function initProjectModals() {
    const modal = document.getElementById('project-modal');
    const modalInner = document.getElementById('modal-inner');
    const modalClose = document.getElementById('modal-close');
    const openModalButtons = document.querySelectorAll('.open-modal');
    
    if (!modal || !modalInner) return;
    
    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
        modal.setAttribute('aria-hidden', 'true');
    }
    
    function openModal() {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        modal.setAttribute('aria-hidden', 'false');
        modal.focus();
    }
    
    // Open modal
    openModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectData = JSON.parse(this.getAttribute('data-project'));
            
            modalInner.innerHTML = `
                <h2>${projectData.title}</h2>
                <img src="${projectData.img}" alt="${projectData.title}" loading="lazy">
                <p>${projectData.desc}</p>
                <div class="project-details">
                    <h3>Project Details</h3>
                    <p>More information about this project would go here...</p>
                </div>
                <div class="modal-actions">
                    <a href="${projectData.repo}" class="btn" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    <a href="${projectData.demo}" class="btn outline" target="_blank" rel="noopener">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            `;
            
            openModal();
        });
    });
    
    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
}

// 15. Testimonial Carousel
function initTestimonialCarousel() {
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.getElementById('testi-prev');
    const nextBtn = document.getElementById('testi-next');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    const testimonialCards = track.querySelectorAll('.testimonial-card');
    const cardWidth = testimonialCards[0].offsetWidth + parseInt(getComputedStyle(track).gap);
    let currentPosition = 0;
    let autoScrollInterval;
    
    function nextTestimonial() {
        const maxScroll = track.scrollWidth - track.clientWidth;
        currentPosition = Math.min(currentPosition + cardWidth, maxScroll);
        track.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    }
    
    function prevTestimonial() {
        currentPosition = Math.max(currentPosition - cardWidth, 0);
        track.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    }
    
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            const maxScroll = track.scrollWidth - track.clientWidth;
            if (currentPosition >= maxScroll) {
                currentPosition = 0;
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                nextTestimonial();
            }
        }, 5000);
    }
    
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);
    
    // Auto-scroll
    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('mouseleave', startAutoScroll);
    
    startAutoScroll();
    
    // Update position on manual scroll
    track.addEventListener('scroll', function() {
        currentPosition = track.scrollLeft;
    });
}

// 16. Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contact-status');
    const newsletterForm = document.getElementById('newsletter');
    
    if (contactForm && contactStatus) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                const formData = new FormData(contactForm);
                
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    contactStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                    contactStatus.style.color = 'var(--accent)';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                contactStatus.textContent = 'Sorry, there was an error sending your message. Please email me directly at mboyatitus11@gmail.com';
                contactStatus.style.color = '#ff6b6b';
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    contactStatus.textContent = '';
                }, 5000);
            }
        });
    }
    
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[name="newsletter-email"]');
            
            if (emailInput.value && isValidEmail(emailInput.value)) {
                emailInput.value = '';
                showNotification('Thanks for subscribing!', 'success');
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }
}

// 17. Back to Top
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
// 18. Dark Mode
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;

    if (!darkModeToggle) return;

    // Update the button icon and labels based on current theme
    function updateDarkModeButton() {
        const isDark = html.getAttribute('data-theme') === 'dark';
        const icon = darkModeToggle.querySelector('i');

        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }

        const label = `Switch to ${isDark ? 'light' : 'dark'} mode`;
        darkModeToggle.setAttribute('aria-label', label);
        darkModeToggle.setAttribute('title', label);
    }

    // Set initial theme based on saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || savedTheme === 'dark') {
        html.setAttribute('data-theme', savedTheme);
    } else {
        html.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }

    updateDarkModeButton();

    // Toggle theme on button click
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        updateDarkModeButton();

        // Smooth transition
        html.classList.add('theme-transition');
        setTimeout(() => html.classList.remove('theme-transition'), 300);
    });

    // Listen for system theme changes (only if user hasn't set a preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            updateDarkModeButton();
        }
    });
}

// Initialize Dark Mode
initDarkMode();



// 19. Custom Cursor
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    
    if (window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-category, .testimonial-card');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                cursor.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', function() {
                cursor.classList.remove('hover');
            });
        });
        
        // Click effect
        document.addEventListener('mousedown', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });
        
        document.addEventListener('mouseup', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    } else {
        cursor.style.display = 'none';
    }
}

// 20. Search Functionality
function initSearchFunctionality() {
    const searchToggle = document.getElementById('search-toggle');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    
    if (!searchToggle || !searchContainer || !searchInput) return;
    
    function closeSearch() {
        searchContainer.classList.remove('open');
        searchInput.value = '';
    }
    
    function performSearch(term) {
        const searchableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .project-card, .skill-category');
        let found = false;
        
        searchableElements.forEach(el => {
            const text = el.textContent.toLowerCase();
            if (text.includes(term)) {
                found = true;
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }
        });
        
        if (!found) {
            console.log('No results found for:', term);
        }
    }
    
    // Toggle search
    searchToggle.addEventListener('click', function() {
        searchContainer.classList.add('open');
        searchInput.focus();
    });
    
    // Close search when clicking outside
    searchContainer.addEventListener('click', function(e) {
        if (e.target === searchContainer) {
            closeSearch();
        }
    });
    
    // Close search with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchContainer.classList.contains('open')) {
            closeSearch();
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm.length > 2) {
            performSearch(searchTerm);
        }
    });
}

// 21. Particles Background
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4f46e2'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 30,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4f46e5',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.4
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// 22. Scroll Animations
function initScrollAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    } else {
        const animatedElements = document.querySelectorAll('[data-aos]');
        
        if ('IntersectionObserver' in window && animatedElements.length) {
            const animationObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        animationObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                animationObserver.observe(el);
            });
        }
    }
}

// 23. Keyboard Shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // '/' to open search
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const searchToggle = document.getElementById('search-toggle');
            if (searchToggle) searchToggle.click();
        }
        
        // 'Escape' to close modals/search
        if (e.key === 'Escape') {
            const modal = document.getElementById('project-modal');
            if (modal && modal.classList.contains('open')) {
                document.getElementById('modal-close').click();
            }
            
            const searchContainer = document.getElementById('search-container');
            if (searchContainer && searchContainer.classList.contains('open')) {
                searchContainer.classList.remove('open');
            }
        }
        
        // 'D' to toggle dark mode (with Ctrl/Cmd)
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            if (darkModeToggle) darkModeToggle.click();
        }
    });
}

// 24. Download CV
function initDownloadCV() {
    const downloadBtn = document.getElementById('downloadcv');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const cvUrl = this.getAttribute('href') || 'Titus_Mboya_SoftwareEngCV.pdf';
            window.open(cvUrl, '_blank');
            console.log('CV download initiated');
        });
    }
}

// 25. Interactive Timeline
function initInteractiveTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// =========================
// UTILITY FUNCTIONS
// =========================

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    if (type === 'success') {
        notification.style.background = 'var(--accent)';
    } else if (type === 'error') {
        notification.style.background = '#ff6b6b';
    } else {
        notification.style.background = 'var(--primary)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =========================
// GLOBAL EXPORTS
// =========================

window.portfolio = {
    init: initializePortfolio,
    showNotification: showNotification,
    debounce: debounce,
    throttle: throttle
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}