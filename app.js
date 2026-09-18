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
            threshold: 0.08,
            rootMargin: '0px 0px -10px 0px'
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
            const currentLanguage = window.FNS_LANGUAGE || 'es';
            const formCopy = {
                es: {
                    empty: 'No especificado',
                    greeting: '¡Hola FNS Padel Academy! 🎾',
                    intro: 'Me gustaría apuntarme a las clases o solicitar información:',
                    name: 'Nombre', phone: 'Teléfono', email: 'Email', program: 'Programa de interés', message: 'Mensaje'
                },
                en: {
                    empty: 'Not provided',
                    greeting: 'Hello FNS Padel Academy! 🎾',
                    intro: 'I would like to join the lessons or request more information:',
                    name: 'Name', phone: 'Phone', email: 'Email', program: 'Program of interest', message: 'Message'
                },
                fr: {
                    empty: 'Non renseigné',
                    greeting: 'Bonjour FNS Padel Academy ! 🎾',
                    intro: 'Je souhaiterais m’inscrire aux cours ou demander plus d’informations :',
                    name: 'Nom', phone: 'Téléphone', email: 'E-mail', program: 'Programme souhaité', message: 'Message'
                }
            }[currentLanguage];
            const email = emailInput.value.trim() || formCopy.empty;
            const phone = phoneInput.value.trim();
            const program = programSelect.value;
            const userMessage = messageInput.value.trim();
            
            const text = `${formCopy.greeting}\n\n${formCopy.intro}\n\n` +
                         `*${formCopy.name}:* ${name}\n` +
                         `*${formCopy.phone}:* ${phone}\n` +
                         `*${formCopy.email}:* ${email}\n` +
                         `*${formCopy.program}:* ${program}\n\n` +
                         `*${formCopy.message}:* ${userMessage}`;
            
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

    // --- WELCOME MESSAGE ---
    const welcomeMessage = document.getElementById('welcome-message');
    const welcomeClose = document.getElementById('welcome-close');
    const welcomeLink = document.querySelector('.welcome-link');

    if (welcomeMessage && welcomeClose) {
        let welcomeTimer;

        const closeWelcomeMessage = () => {
            welcomeMessage.classList.remove('active');
            welcomeMessage.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            clearTimeout(welcomeTimer);
        };

        const openWelcomeMessage = () => {
            welcomeMessage.classList.add('active');
            welcomeMessage.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            welcomeTimer = setTimeout(closeWelcomeMessage, 3000);
        };

        setTimeout(openWelcomeMessage, 500);
        welcomeClose.addEventListener('click', closeWelcomeMessage);
        welcomeLink?.addEventListener('click', closeWelcomeMessage);

        welcomeMessage.addEventListener('click', (event) => {
            if (event.target === welcomeMessage) closeWelcomeMessage();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && welcomeMessage.classList.contains('active')) {
                closeWelcomeMessage();
            }
        });
    }

});
