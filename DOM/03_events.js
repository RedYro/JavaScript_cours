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
    divRed.style.backgroundColor = `darkred`;
    divRed.style.borderRadius = `50%`;
    divRed.innerHTML = `#darkred`;
}

// 3 /div #orange

// Avec fonction anonyme // dblclick()

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

// 5 /div #primary

// Avec fonction anonyme // mouseout()

let h1 = document.querySelector(`#h1`);
let divPrimary = document.querySelector(`#primary`)
divPrimary.addEventListener(`mouseout`, function (){
    divPrimary.style.backgroundColor = `lightblue`;
    divPrimary.style.borderRadius = `50%`;
    divPrimary.innerHTML = `#lightblue`;
    h1.style.color = `gray`;
})

// 6 /div #success

// Click and Click 

let divSuccess = document.querySelector(`#success`)
divSuccess.addEventListener(`click`, function (){
    if(divSuccess.classList.contains(`success`)){
        divSuccess.classList.remove(`success`); // Suppression de la classe 'success'
        //divSuccess.classList.add(`green`); // Ajout de la classe 'green'
        divSuccess.style.borderRadius = `50%`;
        divSuccess.style.backgroundColor = `green`;
        divSuccess.innerHTML = `#green`;
    } else {
        //divSuccess.classList.remove(`green`);
        divSuccess.classList.add(`success`);
        divSuccess.innerHTML = `#success`
        divSuccess.style.backgroundColor = `rgb(0, 55, 25)`;
        divSuccess.style.borderRadius = `0%`;
    }
})

let imageV1 = document.querySelector(`img`);
imageV1.style.width = `500px`;
imageV1.style.borderRadius = `30px`
imageV1.style.border = `4px solid darkblue`
let lesP = document.querySelectorAll(`.toggle p`);
for(let tabP of lesP){
    tabP.style.textDecoration = `underline`;
    tabP.style.color = `darkblue`;
    tabP.style.fontWeight = `bolder`;
}
lesP[0].addEventListener(`click`, function(){
    imageV1.classList.add(`hide`);
})
lesP[1].addEventListener(`click`, function(){
    imageV1.classList.remove(`hide`);
})
lesP[2].addEventListener(`click`, function(){
    imageV1.classList.toggle(`hide`);
})

// Modifier le comportement par défaut en cas d'évènement //

// Les events sont associés à une action par défaut,
// La fonction de gestionnaire ("function" dans les paramètres de l'écouteur d'évènement), par défaut, lorqu'elle est exécutée, reçoit l'event objet en tant qu'argument (cet objet a été crée lorsque l'event / l'action qui vous intéresse s'est produit)
// l'objet "event", "e", "ev" est un objet JS, contient des informations sur l'action qui vient de se produire, avec de nombreuses propriétés et méthodes.
// Définir l'event en tant que paramètre de votre fonction est facultatif mais, parfois il est utile que la fonction de gestionnaire connaisse l'event qui s'est produit

// Il est possible d'annuler ce comportement par défaut en appelant la méthode "preventDefault()" sur l'objet event
let interdit = document.querySelector(`#interdit`);
interdit.addEventListener(`click`, function(event){
    // event.preventDefault();
    alert(`Continuez plutôt à lire le cours !`);
})
// Méthode "preventDefault()", particulièrement utile pour éviter la soumission d'un formulaire recharge la page

// --------------------------------- Gestion formulaires --------------------------------- //

let prenom = document.querySelector(`#prenom`);
// En JS, pour accéder à la valeur d'une zone de texte dans un formulaire, on utilise la propriété ".value"
// prenom.value = `Greg`;

let submit = document.querySelector(`#submit`);
submit.addEventListener(`click`, (event)=>{
    // On récupère la valeur de l'élément input "prenom"
    let prenomValue = prenom.value;  
    event.preventDefault();
    console.log(prenomValue);
})

// --- Focus / Blur ---/

// Focus // 

prenom.addEventListener(`focus`, ()=>{ // L'utilisateur clique à l'intérieur du champ (input prenom)
    prenom.style.width = `250px`;
})
// Focus au chargement de la page // 

// prenom.focus();

// Blur // 

prenom.addEventListener(`blur`, ()=>{ // L'utilisateur clique à l'extérieur du champ (input prenom)
    prenom.style.width = `500px`
})

// Change event // => déclenché lors d'un changement de valeur d'un élément HTML effectué par l'utilisateur 

// Méthode 1 : sélection de chaque élément à part // 

// document.querySelector(`#html`).addEventListener(`change`, (event)=>{
//     if(event.target.checked){
//         document.querySelector(`#labelHTML`).style.color = `red`;
//     } else{
//         document.querySelector(`#labelHTML`).style.color = `blue`;
//     }
// });
// document.querySelector(`#css`).addEventListener(`change`, (event)=>{
//     if(event.target.checked){
//         document.querySelector(`#labelCSS`).style.color = `red`;
//     } else{
//         document.querySelector(`#labelCSS`).style.color = `blue`;
//     }
// });
// document.querySelector(`#js`).addEventListener(`change`, (event)=>{
//     if(event.target.checked){
//         document.querySelector(`#labelJS`).style.color = `red`;
//     } else{
//         document.querySelector(`#labelJS`).style.color = `blue`;
//     }
// });

// Change / for //

// Méthode 2 : sélection d'un élément via index.array // 

let check = document.getElementsByName(`technologies`); // Variable "check" dans laquelle on stock les input => array
for(let button of check){
    button.addEventListener(`change`, (event)=>{ // Event "change" sur les éléménts input cases à cochées 
        // On vérifie la valeur "checked" de l'élément de l'objet event => "true" si la case est cochée
        if(event.target.checked){
            event.target.labels[0].style.color = `red`; // Application couleur "red"
        } else{ // "false" si la case est décochée
            // "event.target.labels[0]" représente le label de la case à cocher
            // indice 0 au niveau du label car on possède un seul élément (balise) label
            event.target.labels[0].style.color = `blue`; // Application couleur "blue"
        }
    })    
};

// Bouton "radio" // 
let radio = document.getElementsByName(`level`);
for(let button of radio){
    button.addEventListener(`change`, (event)=>{
        if(event.target.checked){
            switch(event.target.value){
                case `Acquis`:
                    event.target.labels[0].style.color = `green`;
                    break;
                case `En cours d'acquisition`:
                    event.target.labels[0].style.color = `orange`;
                    break;
                case `Non acquis`:
                    event.target.labels[0].style.color = `red`;
                    break;
            }
        }
    })
};