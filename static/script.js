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
});

/*Fecha o menu quando click em algum intem e mudar o icon list para x */
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach((item) => {
    item.addEventListener("click", () => {                          /*Quando tiver um evento de click */
        if (body.classList.contains("menu-nav-active")){            /*If vai conferir se o menu esta como ativo */
            body.classList.remove("menu-nav-active")                /*Se estiver verdadeiro vai reomover o menu-nav-active, fechando o menu*/
            menuMobile.classList.replace("bi-x", "bi-list");        /*no modo mobile vai trocar o icon x para lista*/
        }
    });
});

const item = document.querySelectorAll("[data-anime]");
const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    item.forEach((eLement) => {
        if (windowTop > eLement.offsetTop) {
            eLement.classList.add("animate");
        } else{
            eLement.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
});

/* ------------------------------------ Botao enviar -------------------------------- */

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", () => {
btnEnviarLoader.style.display = 'block';
btnEnviar.style.display = 'none';
});

/* ------------------------------------ Botao enviar -------------------------------- */

/*-------------------------------------------------- Inicio Alerta ------------------------------------------------------*/
setTimeout(() => {
        document.querySelector('#alerta')
        .style.display = 'none'
    },
    10000 /*10s*/
);
/*-------------------------------------------------- Fim Alerta ------------------------------------------------------*/

/*-------------------------------------------------- Inicio Calc Ano ------------------------------------------------------*/
const nowDay = new Date();
const birth = new Date('Oct 16 1988 00:00:00'); //Meu aniversário
const ageDiff = Math.abs(nowDay.getTime() - birth.getTime()); // Caluclando a idade em miles.
//const age = Math.ceil(ageDiff / (1000*60*60*24*365)); // Este calc ira mostrar o resultado em anos. Arredondamento para cima. 
const age = Math.trunc(ageDiff/(1000*60*60*24*365)); // Este calc ira mostrar o resultado em anos, Somente a parte interira. 
idade.innerHTML = age +" anos"; // Colcoar o valor da constante no site onde tem o id = #idade
//document.getElementById("idade").innerHTML = '<strong>Eu tenho </strong> ${age} anos'
/*-------------------------------------------------- Fim Calc Ano ------------------------------------------------------*/


let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById("switch");
const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
    console.log("I give you dark")
}

const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light')
    console.log("I give you light")
}

if(theme === 'dark'){
    changeThemeToDark()
}

checkbox.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
});