const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('active');
});

const fadeItems = document.querySelectorAll('.fade-in');
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.18,
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
    }
    });
}, observerOptions);

fadeItems.forEach((item) => fadeObserver.observe(item));


const openIkeja = document.getElementById('openIkeja');
const ikejaMall = document.getElementById('ikejaMall');
const closeIkeja = document.getElementById('closeIkeja');
// const mainPage = document.getElementById('mainPage');

openIkeja.addEventListener('click', () => {
    ikejaMall.style.display = 'flex';
    mainPage.classList.add('blur');
});

closeIkeja.addEventListener('click', () => {
    ikejaMall.style.display = 'none';
    mainPage.classList.remove('blur');
});

const openLekki = document.getElementById('openLekki');
const lekkiPhase1 = document.getElementById('lekkiPhase1');
const closeLekki = document.getElementById('closeLekki');


openLekki.addEventListener('click', () => {
    lekkiPhase1.style.display = 'flex';
    mainPage.classList.add('blur');
});

closeLekki.addEventListener('click', () => {
    lekkiPhase1.style.display = 'none';
    mainPage.classList.remove('blur');  });

const openVictoria = document.getElementById('openVictoria');
const victoriaIsland = document.getElementById('victoriaIsland');
const closeVictoria = document.getElementById('closeVictoria');


openVictoria.addEventListener('click', () => { 
    victoriaIsland.style.display = 'flex';
    mainPage.classList.add('blur');
});

closeVictoria.addEventListener('click', () => {
    victoriaIsland.style.display = 'none';
    mainPage.classList.remove('blur');
});

const openYaba = document.getElementById('openYaba');
const yabaCentral = document.getElementById('yabaCentral');
const closeYaba = document.getElementById('closeYaba');

openYaba.addEventListener('click', () => {
    yabaCentral.style.display = 'flex';
    mainPage.classList.add('blur');
});

closeYaba.addEventListener('click', () => {
    yabaCentral.style.display = 'none';
    mainPage.classList.remove('blur');
}); 