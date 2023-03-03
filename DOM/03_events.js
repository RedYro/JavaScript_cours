/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..
// OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction 
    Les Évènements MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : la souris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*
    
    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche du clavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre 
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>, <select> et <textearea>
        submit    : à l'envoi du formulaire 
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------
    Pour attacher un évènement à un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, on va utiliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Étape 1 -> Sélectionner les éléments
          Étape 2 -> Créer les fonctions qui seront executées par l'évènement
          Étape 3 -> Poser l'écouteur d'évènement pour l'intéraction
*/

// 1 /p #p1

// document.querySelector(`#p1`).addEventListener(`click`, functionP1);

// On place la fonction JS qu'on veut exécuter à l'intérieur de la balise ouvrante "p"
function functionP1() {
    alert(`Vous avez cliqué sur l'élément !`);
}

// 2 /div #red

let divRed = document.querySelector(`#red`); // Sélection de la div par son id, par la suite on lui ajoute un écouteur d'évènement
divRed.addEventListener(`click`, functionDivRed);
// l'écouteur d'évènement se décompose en 2 arguments :
    // 1 - action d'évènement (`click`)
    // 2 - nom de la fonction "functionDivRed"

function functionDivRed() {
    divRed.style.backgroundColor = `blue`;
    divRed.style.borderRadius = `50%`;
    divRed.innerHTML = `#blue`;
}

// 3 /div #orange

// Avec fonction anonyme

let divOrange = document.querySelector(`#orange`);
divOrange.addEventListener(`dblclick`, function(){
    divOrange.style.backgroundColor = `gold`;
    divOrange.style.borderRadius = `50%`;
    divOrange.innerHTML = `#gold`;
})

// 4 /div #info

// Avec fonction anonyme // mouseover()

let divInfo = document.querySelector(`#info`);
divInfo.addEventListener(`mouseover`, function (){
    divInfo.style.backgroundColor = `darkblue`;
    divInfo.style.borderRadius = `50%`;
    divInfo.innerHTML = `#darkblue`;
})