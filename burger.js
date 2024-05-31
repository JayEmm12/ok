document.addEventListener('DOMContentLoaded',() => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click',() => {

  
        menu.classList.toggle('mobile-navbar-link-show')
        

    });
});