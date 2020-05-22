let buttonMenu = document.getElementById(`header__button`);
let menu = document.getElementById(`menu`);
if(menu && buttonMenu){
    buttonMenu.addEventListener(`click`,() =>{
        menu.classList.toggle(`menu--activate`);
    })
}