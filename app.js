// HAMBURGER BUTTON

const btn = document.querySelector('.burger');
const nav = document.querySelector('nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('open')
})

window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('show');
        }
    }
}

// ABOUT LETTER BREAK

const aboutText= document.getElementById('about-text');
const wordsPerLine= 6;

const words = aboutText.innerText.split(' ');
let newText = '';

words.forEach((word, index) => {newText += word + ' ';
    if ((index + 1) % wordsPerLine === 0) {
        newText += '<br>';
    }
});

aboutText.innerHTML = newText;

// PARALLAX

window.addEventListener('scroll', ()=>{
    const elements = document.querySelectorAll('.parallax');
    const scrollY = window.scrollY;

    elements.forEach(el =>{
        const speed = el.dataset.speed || 0.2;
        el.style.transform = `translateY(${scrollY * speed}px)`
    });
});

// SCROLL EVENT (PERFORMANCE)

const elements = document.querySelectorAll('.parallax');
let latestSrollY = 0;

window.addEventListener('scroll', () => {
    latestScrollY = window.scrollY;
});

function animateParallax() {
    elements.forEach(el => {
        const speed = el.dataset.speed;
        el.style.transform = `translateY(${latestSrollY * speed}px)`;
    });
    requestAnimationFrame(animateParallax);   
}
animateParallax();


// MOBIL

const isMobile = window.innerWidth < 768;

elements.forEach(el=> {
    if (isMobile) {
        el.dataset.speed = el.dataset.speed * 0.4;
    }
});

// DONT TOUCH ELEMENTS OUTSIDE THE VIEWPORT
const parallaxElements = document.querySelectorAll('.parallax');
let latestScrollY = 0;

window.addEventListener('scroll', () => {
  latestScrollY = window.scrollY;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.isVisible = entry.isIntersecting;
  });
});

elements.forEach(el => observer.observe(el));

function animateParallax() {
  elements.forEach(el => {
    if (!el.isVisible) return;
    const speed = el.dataset.speed;
    el.style.transform = `translateY(${latestScrollY * speed}px)`;
  });
  requestAnimationFrame(animateParallax);
}

animateParallax();
