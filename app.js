/**
 * FNS Padel Academy - JavaScript Functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- STICKY HEADER ON SCROLL ---
    const header = document.getElementById('header');
    const scrollThreshold = 50;

    const handleScrollHeader = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScrollHeader);
    handleScrollHeader(); // Initialize on load


    // --- MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    };

    const closeMenu = () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') && 
            !navMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });


    // --- ACTIVE LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    
    const handleActiveNavLink = () => {
        const scrollPosition = window.scrollY + 200; // Offset for header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', handleActiveNavLink);


    // --- SCROLL REVEAL ANIMATIONS (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Stop observing after animation runs
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(element => {
            element.classList.add('active');
        });
    }


    // --- CONTACT FORM SUBMISSION TO WHATSAPP ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const programSelect = document.getElementById('program-select');
            const messageInput = document.getElementById('message');
            
            // Reset error messages
            document.querySelectorAll('.error-msg').forEach(msg => msg.style.display = 'none');
            
            let isValid = true;
            
            // Validation
            if (!nameInput.value.trim()) {
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }
            
            if (!phoneInput.value.trim()) {
                document.getElementById('phone-error').style.display = 'block';
                isValid = false;
            }
            
            if (!messageInput.value.trim()) {
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            }
            
            if (!isValid) return;
            
            // Format WhatsApp Message
            const academyPhone = '34647847065'; // Spanish prefix +34 and phone number
            const name = nameInput.value.trim();
            const email = emailInput.value.trim() || 'No especificado';
            const phone = phoneInput.value.trim();
            const program = programSelect.value;
            const userMessage = messageInput.value.trim();
            
            const text = `¡Hola FNS Padel Academy! 🎾\n\n` + 
                         `Me gustaría apuntarme a las clases o solicitar información:\n\n` +
                         `*Nombre:* ${name}\n` +
                         `*Teléfono:* ${phone}\n` +
                         `*Email:* ${email}\n` +
                         `*Programa de interés:* ${program}\n\n` +
                         `*Mensaje:* ${userMessage}`;
            
            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${academyPhone}?text=${encodedText}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
            
            // Optional: reset form after brief delay
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }

    // --- BACKGROUND MUSIC CONTROLS ---
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');

    if (musicToggle && bgMusic) {
        musicToggle.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play()
                    .then(() => {
                        musicToggle.classList.add('playing');
                        musicToggle.setAttribute('aria-label', 'Silenciar música');
                        musicToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
                    })
                    .catch(err => {
                        console.error("Autoplay/play blocked by browser:", err);
                    });
            } else {
                bgMusic.pause();
                musicToggle.classList.remove('playing');
                musicToggle.setAttribute('aria-label', 'Activar música motivadora');
                musicToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            }
        });
    }

    // --- PROMOTIONAL MODAL (VENTANA EMERGENTE) ---
    const promoModal = document.getElementById('promo-modal');
    const modalClose = document.getElementById('modal-close');

    if (promoModal && modalClose) {
        let autoCloseTimer;

        const openPromoModal = () => {
            promoModal.classList.add('active');
            promoModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            // Auto close after 7 seconds
            autoCloseTimer = setTimeout(() => {
                closePromoModal();
            }, 7000);
        };

        const closePromoModal = () => {
            promoModal.classList.remove('active');
            promoModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            clearTimeout(autoCloseTimer);
        };

        // Open modal after 800ms delay for smooth entrance
        setTimeout(openPromoModal, 800);

        // Close on button click
        modalClose.addEventListener('click', closePromoModal);

        // Close on overlay click
        promoModal.addEventListener('click', (e) => {
            if (e.target === promoModal) {
                closePromoModal();
            }
        });

        // Close on Esc key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && promoModal.classList.contains('active')) {
                closePromoModal();
            }
        });
    }
});
