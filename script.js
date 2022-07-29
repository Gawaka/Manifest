let hamburger = document.querySelector('.js-hamburger');
let nav = document.querySelector('.nav');

hamburger.addEventListener('click',function(){
    nav.classList.toggle('nav__list--open');
})

