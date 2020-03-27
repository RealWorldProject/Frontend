const btn = document.querySelector('.ham button');
const nav = document.querySelector('nav');
const img = document.querySelector('.ham button img');


btn.addEventListener('click', () => {
    if (nav.classList.contains('collapse')) {
        img.setAttribute('src', 'images/close.png') 
    } else {
        img.setAttribute('src', 'images/HamMenu.png') 
    }
    nav.classList.toggle('collapse');

});
