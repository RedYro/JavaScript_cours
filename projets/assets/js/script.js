// btn "Abonnez-vous" //

let btnAbonne = document.querySelector(`.btn-abonner`);
let check = document.createElement(`i`);
check.setAttribute(`class`, `bi`);

// btnAbonne.addEventListener(`click`, function abonne(){
//     if(btnAbonne.classList.contains(`btn-abonner`)){
//         btnAbonne.innerText = `Abonné`;
//         btnAbonne.appendChild(check);
//         check.classList.toggle(`bi-check-lg`);
//     }  
// })

btnAbonne.addEventListener(`click`, function abonne(){
    if(btnAbonne.classList.contains(`btn-abonner`)){
        btnAbonne.innerText = `Abonné`;
        btnAbonne.appendChild(check);
        check.classList.add(`bi-check-lg`);
        btnAbonne.classList.remove(`btn-abonner`)
        btnAbonne.classList.add(`btn-abonner-check`)
    } else{
        btnAbonne.innerText = `Abonnez-vous`;
        check.classList.remove(`bi-check-lg`);
        btnAbonne.classList.remove(`btn-abonner-check`)
        btnAbonne.classList.add(`btn-abonner`)
    }
})

// smiley //

let smiley = document.querySelector(`.bi-emoji-neutral`);

smiley.addEventListener(`click`, function smileyCheck(){
    smiley.classList.toggle(`bi-emoji-wink-fill`);
})

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
        btnAbonne.classList.add(`btn-abonner-ter`);
        smiley.classList.add(`bi-emoji-neutral-bis`);
        progressBarre.classList.remove(`progress-color-light`);
        progressBarre.classList.add(`progress-color-dark`);
        // slider.classList.remove(`slider`);
        slider.classList.add(`slider-dark-mode`);
    } else{
        btnChange.classList.remove(`bi-moon-fill`);
        btnChange.classList.add(`bi-sun-fill`);
        btnAbonne.classList.remove(`btn-abonner-ter`);
        smiley.classList.remove(`bi-emoji-neutral-bis`);
        progressBarre.classList.remove(`progress-color-dark`);
        progressBarre.classList.add(`progress-color-light`);
        slider.classList.remove(`slider-dark-mode`);
        // slider.classList.add(`slider`);
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
    menuList.classList.toggle(`bi-x`);
})

// Dark mode responsive //

let switchBoxResponsive = document.querySelector(`.switch-bis`);
let navMobile = document.querySelector(`.navbar-mobile-menu`);
let linksRespoonsive = document.querySelectorAll(`.navbar-mobile-list a`);
let btnBis = document.querySelector(`.btn-bis`);
let btnChangeResponsive = document.querySelector(`.switch-bis i`);

switchBoxResponsive.addEventListener(`click`, function changeModeResponsive(){
    // div "switch"
    switchBoxResponsive.classList.toggle(`switch-change`);
    // nav background
    navMobile.classList.toggle(`nav-bis-change`);
    // container background
    container.classList.toggle(`container-change-responsive`);
    // title color
    title.classList.toggle(`title-change-responsive`);
    // links color
    for (let a of linksRespoonsive) {
        a.classList.toggle(`link-change-bis`);
    }
    // btn border color 
    btnBis.classList.toggle(`btn-change-bis`);
    // icône change
    if (btnChangeResponsive.classList.contains(`bi-sun-fill`)){
        btnChangeResponsive.classList.remove(`bi-sun-fill`);
        btnChangeResponsive.classList.add(`bi-moon-fill`);
        btnAbonne.classList.add(`btn-abonner-responsive`);
        smiley.classList.add(`bi-emoji-neutral-responsive`);
        menuList.classList.add(`bi-list-responsive`);
        menuList.classList.add(`bi-x-responsive`);
    } else{
        btnChangeResponsive.classList.remove(`bi-moon-fill`);
        btnChangeResponsive.classList.add(`bi-sun-fill`);
        btnAbonne.classList.remove(`btn-abonner-responsive`);
        smiley.classList.remove(`bi-emoji-neutral-responsive`);
        menuList.classList.remove(`bi-list-responsive`);
        menuList.classList.remove(`bi-x-responsive`);
    }
    // btn position 
    if (btnBis.classList.contains(`btn-bis`)){
        btnBis.classList.remove(`btn-bis`);
        btnBis.classList.add(`btn-position-bis`);
    } else{
        btnBis.classList.remove(`btn-position-bis`);
        btnBis.classList.add(`btn-bis`);
    }
})

// --------------------- Loader --------------------- //

let loader = document.querySelector(`#loader`);

// Méthode 1 //
window.addEventListener(`load`, function loadingScreen(){
    loader.classList.add(`hide-loader`);
})

// Méthode 2 //
// window.onload = function () {
//     loader.classList.add(`hide-loader`);
// }

// --------------------- Progress barre --------------------- //

let body = document.querySelector(`body`);
let progressBarre = document.querySelector(`#progress`);

// Pour récupérer la hauteur de "body" (ou n'importe quel élément) //
body.clientHeight;

// Quantité du scroll parcouru en px //
window.scrollY;

// Pour obtenir le % scrollé sur le doc //
window.scrollY / body.clientHeight;

window.addEventListener(`scroll`, function(){
    // Pour arriver à avoir 1 au plus bas de la page, on soustrait le % obtenu avec window.innerHeight
    let pourcentageScroll = window.scrollY / (body.clientHeight - window.innerHeight);
    let roundScroll = Math.round(pourcentageScroll*100);
    progressBarre.style.width = `${roundScroll}%`;
})

// --------------------- Slider --------------------- //

let slider = document.querySelector(`.slider`);
let left = document.querySelector(`.left`);
let mid = document.querySelector(`.mid i`);
let right = document.querySelector(`.right`);
let img = document.querySelector(`img`);

let i = 12;
left.addEventListener(`click`, previousSlide) 
function previousSlide(){
    i--;
    img.setAttribute(`src`, `assets/img/` + i + `.jpg`);
    if(i == 1){
        i = 12;
    }
}

let u = 1
right.addEventListener(`click`, nextSlide);
function nextSlide(){
    u++;
    img.setAttribute(`src`, `assets/img/` + u + `.jpg`);
    if(u == 11){
        u = 0;
    }
}

let statut = null;
mid.addEventListener(`click`, function autoSlider(){
    if(mid.classList.contains(`bi-play-fill`) && statut == null){
        mid.classList.remove(`bi-play-fill`);
        mid.classList.add(`bi-pause-fill`);
        statut = window.setInterval(nextSlide, 1500);
    } else{
        mid.classList.remove(`bi-pause-fill`);
        mid.classList.add(`bi-play-fill`);
        window.clearInterval(statut);
        statut = null;
    }
})
