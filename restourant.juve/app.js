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