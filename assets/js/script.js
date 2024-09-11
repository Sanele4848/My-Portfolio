const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const sections = document.querySelectorAll('section');
    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };
    const sectionObserver = new IntersectionObserver(fadeInSection, {
        root: null,
        threshold: 0.1
    });
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Header background change on scroll
    const header = document.querySelector('header');
    const sticky = header.offsetTop;
    const scrollCallback = () => {
        if (window.pageYOffset > sticky) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
    window.addEventListener('scroll', scrollCallback);

    // Parallax effect
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            let scrollPosition = window.pageYOffset;
            parallaxBg.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const nav = document.getElementById('nav');

    menuIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideNav && !isClickOnMenuIcon && nav.classList.contains('active')) {
            menuIcon.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) { // You can adjust this value
            scrollToTopBtn.classList.add('visible'); // Change: add class to show button
        } else {
            scrollToTopBtn.classList.remove('visible'); // Change: remove class to hide button
        }
    });

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, #skills dt, #skills dd, #projects article, .contact-info ul li, .form-group').forEach((el) => {
        animateOnScroll.observe(el);
    });
});



