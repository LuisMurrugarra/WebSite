let buttonMenu = document.getElementById(`header__button`);
let menu = document.getElementById(`menu`);
let linkSubMenu = document.getElementById(`linkSubMenu`);
let subMenu = document.getElementById(`subMenu`);
if(menu && buttonMenu){
    buttonMenu.addEventListener(`click`,() =>{
        menu.classList.toggle(`menu--activate`);
    })
}
if(linkSubMenu && subMenu){
    linkSubMenu.addEventListener(`click`,() =>{
        subMenu.classList.toggle(`submenu--activate`);
    });
}