

// Show Menu Bar

const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const close = document.querySelector('.nav-close');

toggle.onclick = function(){
    nav.classList.toggle('show-menu');
    close.classList.add('visible')
}
close.onclick = function(){
    nav.classList.remove('show-menu')
    close.classList.remove('visible')
}

// Remove Menu bar on Mobile
const navLink = document.querySelectorAll('.nav-link');
function linkAction(){
    const navMenu = document.querySelector('.nav');
    nav.classList.remove('show-menu');
    close.classList.remove('visible');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Change Active Link

const linkColor = document.querySelectorAll('.nav-link');
function colorLink(){
    if(colorLink){
        linkColor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(L => L.addEventListener('click', colorLink))


// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.decoration-container, .goodies-container, .social-container`)
sr.reveal(`.social-img, .accessories-card-left, .subscribe-title`,{origin: 'left'})
sr.reveal(`.social-info, .accessories-card-right, .box-input`, {origin: 'right'})
sr.reveal(`.footer-container`, {origin: 'bottom'})


// Scroll Top Button

const up = document.querySelector('.up');
window.onscroll = function(){
    up.classList.toggle('show', window.scrollY >= 560)
}
up.onclick = function(){
    window.scrollTo({behavior: 'smooth', top: '0'})
}