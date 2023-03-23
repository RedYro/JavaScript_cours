let links = document.querySelectorAll('nav a');
let pageActive = window.location.href; // Stockage localisation dans une variable
for (let i = 0; i < links.length; i++){ // On boucle sur le tableau "links" qui contient les "a"
    if(pageActive.includes(links[i].href)){ // On vérifie si la localisation de la page contient le lien sur lequel on clique // si true
        links[i].classList.add(`actuel`); // Ajout de la classe "actuel"
    }
}