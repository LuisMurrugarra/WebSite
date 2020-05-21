let buttonMenu = document.getElementById(`menu__button`);
let menu = document.getElementById(`menu__box--secundary`);
if(menu && buttonMenu){
    buttonMenu.addEventListener(`click`,() =>{
        menu.classList.toggle(`menu__box--activate`);
    })
}