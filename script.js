const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay');
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //Close hamburger menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        menuMobile.classList.add('fade-out');
        menuMobile.classList.remove('fade-in');
        body.classList.remove('noscroll');


    }
    else{ //Open hamburger menu
    header.classList.add('open'); 
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
    menuMobile.classList.add('fade-in');
    menuMobile.classList.remove('fade-out');
    body.classList.add('noscroll');
}
})