// Carousel functionality (Dagstuhl)
(function initCarousel() {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicators = document.querySelectorAll('.carousel-indicator');

    if (!track) return; // Exit if carousel doesn't exist

    let currentIndex = 0;
    const totalSlides = 3;
    let autoplayInterval;

    function updateCarousel(index) {
        // Update track position
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;

        // Update indicators
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('!bg-white');
                indicator.setAttribute('aria-selected', 'true');
            } else {
                indicator.classList.remove('!bg-white');
                indicator.setAttribute('aria-selected', 'false');
            }
        });

        currentIndex = index;
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel(newIndex);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Button click handlers
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });
    }

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            updateCarousel(index);
            resetAutoplay();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only handle arrow keys when focus is in carousel
        const carouselContainer = document.querySelector('.carousel-container');
        if (!carouselContainer || !carouselContainer.contains(document.activeElement)) {
            return;
        }

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
            resetAutoplay();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
            resetAutoplay();
        }
    });

    // Pause autoplay on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', startAutoplay);
    }

    // Initialize first indicator and start autoplay
    updateCarousel(0);
    startAutoplay();
})();

// Personal Carousel functionality
(function initPersonalCarousel() {
    const track = document.getElementById('carousel-track-personal');
    const prevBtn = document.getElementById('carousel-personal-prev');
    const nextBtn = document.getElementById('carousel-personal-next');
    const indicators = document.querySelectorAll('.carousel-indicator-personal');

    if (!track) return; // Exit if carousel doesn't exist

    let currentIndex = 0;
    const totalSlides = 6;
    let autoplayInterval;

    function updateCarousel(index) {
        // Update track position
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;

        // Update indicators
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('!bg-white');
                indicator.setAttribute('aria-selected', 'true');
            } else {
                indicator.classList.remove('!bg-white');
                indicator.setAttribute('aria-selected', 'false');
            }
        });

        currentIndex = index;
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel(newIndex);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Button click handlers
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });
    }

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            updateCarousel(index);
            resetAutoplay();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only handle arrow keys when focus is in carousel
        const carouselContainer = document.querySelector('.carousel-container-personal');
        if (!carouselContainer || !carouselContainer.contains(document.activeElement)) {
            return;
        }

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
            resetAutoplay();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
            resetAutoplay();
        }
    });

    // Pause autoplay on hover
    const carouselContainer = document.querySelector('.carousel-container-personal');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', startAutoplay);
    }

    // Initialize first indicator and start autoplay
    updateCarousel(0);
    startAutoplay();
})();

// Community Carousel functionality
(function initCommunityCarousel() {
    const track = document.getElementById('carousel-track-community');
    const prevBtn = document.getElementById('carousel-community-prev');
    const nextBtn = document.getElementById('carousel-community-next');
    const indicators = document.querySelectorAll('.carousel-indicator-community');

    if (!track) return; // Exit if carousel doesn't exist

    let currentIndex = 0;
    const totalSlides = 2;
    let autoplayInterval;

    function updateCarousel(index) {
        // Update track position
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;

        // Update indicators
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('!bg-white');
                indicator.setAttribute('aria-selected', 'true');
            } else {
                indicator.classList.remove('!bg-white');
                indicator.setAttribute('aria-selected', 'false');
            }
        });

        currentIndex = index;
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel(newIndex);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Button click handlers
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });
    }

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            updateCarousel(index);
            resetAutoplay();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only handle arrow keys when focus is in carousel
        const carouselContainer = document.querySelector('.carousel-container-community');
        if (!carouselContainer || !carouselContainer.contains(document.activeElement)) {
            return;
        }

        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
            resetAutoplay();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
            resetAutoplay();
        }
    });

    // Pause autoplay on hover
    const carouselContainer = document.querySelector('.carousel-container-community');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', startAutoplay);
    }

    // Initialize first indicator and start autoplay
    updateCarousel(0);
    startAutoplay();
})();

// Accordion functionality
(function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');

        function toggleAccordion() {
            const isOpen = content.classList.contains('open');

            if (isOpen) {
                content.classList.remove('open');
                trigger.setAttribute('aria-expanded', 'false');
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Click handler
        trigger.addEventListener('click', toggleAccordion);

        // Keyboard handler (Enter/Space)
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion();
            }
        });
    });
})();

// Scroll animations (fade in on scroll)
(function initScrollAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        return; // Skip animations if user prefers reduced motion
    }

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index > 0) { // Skip hero section
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(section);
        }
    });
})();

// Smooth scroll for anchor links (if any are added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Floating contact button
(function initContactButton() {
    const toggleBtn = document.getElementById('contact-toggle');
    const menu = document.getElementById('contact-menu');

    if (!toggleBtn || !menu) return;

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menu.classList.add('hidden');
        }
    });
})();
