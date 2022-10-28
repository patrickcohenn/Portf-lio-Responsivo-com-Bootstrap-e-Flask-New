/*Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector ('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () =>{ 
    menuMobile.classList.contains("bi-list")            /*If ternário*/
    ? menuMobile.classList.replace("bi-list", 'bi-x')   /*If ternário*/
    : menuMobile.classList.replace("bi-x", "bi-list");  /*If ternário*/
})
