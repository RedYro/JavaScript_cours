// let btn = document.querySelector(`.btn`);
// let BgBtn = document.querySelector(`.switch`);
// let icone = document.querySelector(`i`);
// let navBarDesktop = document.querySelector(`.navbar-desktop`);
// let containerNight = document.querySelector(`.container-fluid`);
// let title1 = document.querySelector(`h1`);


// btn.addEventListener("click", function(){
//     if(btn.classList.contains(`btn`)){
//         btn.classList.remove(`btn`);
//         btn.classList.add(`btnNight`);
//         BgBtn.classList.remove(`switch`);
//         BgBtn.classList.add(`switchNight`);
//         icone.classList.remove(`bi-sun-fill`);
//         icone.classList.add(`bi-moon-fill`);
//         navBarDesktop.classList.remove(`navbar-desktop`);
//         navBarDesktop.classList.add(`navbar-desktopNight`);
//         containerNight.classList.remove(`container-fluid`);
//         containerNight.classList.add(`container-fluidNight`);
//         title1.style.color = `white`;
//     } else {
//         btn.classList.remove(`btnNight`);
//         btn.classList.add(`btn`);
//         BgBtn.classList.remove(`switchNight`);
//         BgBtn.classList.add(`switch`);
//         icone.classList.add(`bi-sun-fill`);
//         icone.classList.remove(`bi-moon-fill`);
//         navBarDesktop.classList.add(`navbar-desktop`);
//         navBarDesktop.classList.remove(`navbar-desktopNight`);
//         containerNight.classList.add(`container-fluid`);
//         containerNight.classList.remove(`container-fluidNight`);
//         title1.style.color = `black`;
//     }
// })

// On sélectionne et on stock //

// div "switch"
let switchBox = document.querySelector(`.switch`);

// div "btn"
let btn = document.querySelector(`.btn`);

// icône
let btnChange = document.querySelector(`.switch i`);

// Navbar
let nav = document.querySelector(`.navbar-desktop`);

// liens dans la navbar 
let links = document.querySelectorAll(`.navbar-desktop a`);

// div container 
let container = document.querySelector(`.container-fluid`);

// titre h1
let title = document.querySelector(`h1`);

// switchBox.addEventListener(`click`, changeMode);
switchBox.addEventListener(`click`, function changeMode(){
    // div "container-fluid"
    container.classList.toggle(`container-change`);
    // div "switch"
    switchBox.classList.toggle(`switch-change`);
    // nav background
    nav.classList.toggle(`nav-change`);
    // links color
    for (let a of links) {
        a.classList.toggle(`link-change`);
    }
    // title color
    title.classList.toggle(`title-change`);
    // btn border color 
    btn.classList.toggle(`btn-change`);
    // icône change
    if (btnChange.classList.contains(`bi-sun-fill`)){
        btnChange.classList.remove(`bi-sun-fill`);
        btnChange.classList.add(`bi-moon-fill`);
    } else{
        btnChange.classList.remove(`bi-moon-fill`);
        btnChange.classList.add(`bi-sun-fill`);
    }
    // btn position 
    if (btn.classList.contains(`btn`)){
        btn.classList.remove(`btn`);
        btn.classList.add(`btn-position`);
    } else{
        btn.classList.remove(`btn-position`);
        btn.classList.add(`btn`);
    }
})

// Affichage menu list //

let menuList = document.querySelector(`.navbar-mobile > i`)
let menuListBis = document.querySelector(`.navbar-mobile-menu`)
menuList.addEventListener(`click`, function menuResponsive(){
    menuListBis.classList.toggle(`menu-display`);
    menuList.classList.toggle(`bi-x-lg`);
})