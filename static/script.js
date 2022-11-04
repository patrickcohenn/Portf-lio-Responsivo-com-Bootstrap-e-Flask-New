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

/*Fecha o menu quando click em algum intem e mudar o icon list para x */
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {                          /*Quando tiver um evento de click */
        if (body.classList.contains("menu-nav-active")){            /*If vai conferir se o menu esta como ativo */
            body.classList.remove("menu-nav-active")                /*Se estiver verdadeiro vai reomover o menu-nav-active, fechando o menu*/
            menuMobile.classList.replace("bi-x", "bi-list");        /*no modo mobile vai trocar o icon x para lista*/
        }
    })
})
