/*Abre e fecha menu lateral em modo mobile */
/*Pegando a class .menu-moblie */
const menuMobile = document.querySelector ('.menu-mobile')
const body = document.querySelector('body')

/* if ternário no qual ele vai conferi se o icon esta list ou x*/
menuMobile.addEventListener('click', () =>{ 
    menuMobile.classList.contains("bi-list")            /*If ternário*/
    ? menuMobile.classList.replace("bi-list", 'bi-x')   /*If ternário*/
    : menuMobile.classList.replace("bi-x", "bi-list");  /*If ternário*/
    body.classList.toggle("menu-nav-active")          /*Vai add una class a tag no body*/
})

