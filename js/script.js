// === Menu Toggle voor mobiel ===
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show'); // komt overeen met je CSS
    });
}

// === Smooth Scroll naar secties ===
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// === Projecten Knoppen ===
document.querySelectorAll('.project .btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        alert('Hier zou je project detailpagina openen.');
    });
});

// === Scroll Animatie voor secties (fade-in) ===
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// === Typing Effect ===
const typedText = document.getElementById('typed');
const texts = ["UI&UX Designen", "Illustreren", "Grafisch Vormgeven", "UX Onderzoeken"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typedText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 90);
    } else {
        setTimeout(erase, 2500);
    }
}
function erase() {
    if (charIndex > 0) {
        typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}
if(typedText) type();

// === Carousel ===
document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".image-carousel .carousel-slide"));
    const prevBtn = document.querySelector(".image-carousel .prev");
    const nextBtn = document.querySelector(".image-carousel .next");
    let index = 0;

    const show = (i) => {
        index = (i + slides.length) % slides.length;
        slides.forEach((s, idx) => {
            s.style.display = idx === index ? "block" : "none";
        });
    };
    show(0);

    prevBtn?.addEventListener("click", () => show(index - 1));
    nextBtn?.addEventListener("click", () => show(index + 1));
});

// === Zoom functionaliteit ===
document.addEventListener("DOMContentLoaded", () => {
    const zoomOverlay = document.getElementById("zoom-overlay");
    const zoomedImg = document.getElementById("zoomed-img");

    // klik op carousel-afbeelding => open fullscreen
    document.querySelectorAll(".carousel-slide img").forEach(img => {
        img.addEventListener("click", () => {
            zoomedImg.src = img.src;
            zoomOverlay.style.display = "flex";
        });
    });

    // klik ergens op overlay => sluit fullscreen
    zoomOverlay.addEventListener("click", () => {
        zoomOverlay.style.display = "none";
        zoomedImg.src = "";
    });
});


// === Taal switchen ===

const toggleBtn = document.getElementById('lang-toggle');
let currentLang = 'nl';

function switchLanguage() {
    currentLang = currentLang === 'nl' ? 'en' : 'nl';

    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = el.dataset.lang === currentLang ? 'inline' : 'none';
    });

    toggleBtn.textContent = currentLang === 'nl' ? 'EN' : 'NL';
}

// initialiseren
switchLanguage();

// Event listener
toggleBtn.addEventListener('click', switchLanguage);

