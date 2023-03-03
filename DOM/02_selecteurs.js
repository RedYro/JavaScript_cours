// ---------- 1ère Méthode (non recommandé) ---------- //

// let select1 = titreNiveau1;
// console.log(select1);


// ---------- 2ème Méthode : getElementById() ---------- //
// Sélection via "id" //
let select2 = document.getElementById(`titreNiveau1`);
// console.log(select2);


// ---------- 3ème Méthode : getElementsByClassName() ---------- //
// Sélection via "class" // 
// let select3 = document.getElementsByClassName(`selectClass`);
// console.log(select3);
// Lorsqu'on sélectionne plusieurs éléments en même temps avec "getElementsByClassName()", on crée un array en JS qui affichera dans la console avec l'intitulé "HTMLCollection".
// Comme un array, le 1er élément aura l'index 0
// Grâce à cet index, je peux viser un seul des éléments : 
// console.log(select3[1]);
// On va aller plus loin en ciblant ce qui se trouve dans l'élément
// console.log(select3[1].innerHTML);
// "innerHTML" permet de définir le contenu de la balise et le sélectionner dans le but de l'identifier, modifier ou le manipuler autrement 

// Exo : modifier le contenu du h2 qui a la classe "change" : `Je change le titre`

let changePara = document.getElementsByClassName(`changePara`);
// let changePara = document.querySelector(`.changePara`);
// let contenu = changePara.innerHTML;
changePara[0].innerHTML = `Changement de titre`;

// ---------- 4ème Méthode : getElementsByTagName() ---------- //
// Sélection via les balises seulement 
let lesP = document.getElementsByTagName(`p`); // On va chercher tous les paragraphes de notre page 
// On récupère un array d'éléments
console.log(lesP);
lesP[0].style.backgroundColor = `darkblue`;

// Exo : sélectionner le premier paragraphe et lui donner le style suivant ; border-radius (20px), color (#fff), padding (10px)

lesP[0].style.color = `#fff`;
lesP[0].style.borderRadius = `20px 10px`;
lesP[0].style.padding = `10px`;

// Grâce à ma variable dans laquelle on a sélectionné tous les p, on peut viser un seul des éléments en utilisant son index. 
// Pour faire du CSS, on utilise la propriété "style" suivi des mêmes déclarations que l'on utilise en CSS, avec du CamelCase à la place du Kebab-Case.
// La propriété style permet d'accéder finement aux styles qui concernent un élément particulier.

// Sélectionner tous les "p" dans la page et changer le contenu en majuscule

// 1st méthode //
// for(let i = 0; i < lesP.length; i++){
//     lesP[i].style.textTransform = `uppercase`;
// }

// 2nd méthode //
// Boucle "for of" // Déclaration d'une variable "p" qui représente chaque élément dans le tableau "lesP", au niveau de l'instruction à exécuter on appel la variable "p" en lui attribuant le style souhaité avec la propriété "style" 
for(let p of lesP){
    p.style.textTransform = `uppercase`;
}

// Changement de couleur du background du titre "h1"

select2.style.backgroundColor = `darkred`;
select2.style.color = `#fff`;
select2.style.borderRadius = `10px 20px`;
select2.style.padding = `10px`;


// ---------- 5ème Méthode : querySelector() ---------- //

let div = document.querySelector(`div`);
// console.log(div);
div.style.border = `1px solid #000`
// querySelector() retourne le 1er élément trouvé spécifié en paramètre
// l'avantage de "querySelector()" est qu'il utilise la syntaxe de sélection CSS -> #id , .class, <balise>


// ---------- 6ème Méthode : querySelectorAll() ---------- //
// sélectionne toutes les balises en ensemble et retourne un array d'éléments
let query = document.querySelectorAll(`.selectClass`);
// On a deux "p" qui ont la classe ".selectClass"
console.log(query);
// On affiche le contenu du "p" dans la console
console.log(query[1].textContent);
console.log(query[1].innerHTML);

let pAdd = document.querySelector(`div.col-4>p.selectClass`);
console.log(pAdd);

pAdd.innerHTML += `<span> Paragraphe supplémentaire </span>`;
// pAdd.innerText += `<span> Paragraphe supplémentaire </span>`;


// CRÉATION D'UN NOUVEL ÉLÉMENT //

let section = document.querySelector(`section`);

// Pour créer un élément, on utilise la méthode "createElement()", puis on l'intègre dans le noeud souhaité

let newParaEnd = document.createElement(`p`);
newParaEnd.innerHTML = `Bye bye !`;
section.append(newParaEnd); // append() -> insère du contenu à la fin de la section // append() accepte tous les éléments (balise ou string)

// appendChild() -> méthode qui ajoute un élément HTML enfant à la fin d'un élément parent, n'accepte que les éléments de type "balise"

let newParaBegin = document.createElement(`p`);
newParaBegin.innerHTML = `Hi there !`;
section.prepend(newParaBegin); // prepend() insère du contenu au début de la section


// DÉPLACER UN ÉLÉMENT //
// Pour déplacer un élément, il nous faut 3 paramètres : 
    // - parent
    // - élément à déplacer
    // - élément qui vient après 

// Parent 
let parent = document.querySelector(`main`);
// élément à déplacer 
let subTitle = document.querySelector(`h2`);
// élement qui vient après 
let toMove = document.querySelector(`h4`)

parent.insertBefore(toMove, subTitle);


// SUPPRIMER UN ÉLÉMENT //
// Pour supprimer un élément, il nous faut 2 paramètres :
    // - parent
    // - élément à supprimer

// Parent
let ul = document.querySelector(`ul`)
// élément à supprimer 
let li = document.getElementsByTagName(`li`)[1];
// ".removeChild()" => pour supprimer l'élément
ul.removeChild(li);


// CRÉER UN ATTRIBUT ET SA VALEUR // 
// "setAttribute()" : méthode pour ajouter un nouvel attribut ou changer la valeur d'un attribut existant pour un élément 

let baliseA1 = document.querySelector(`a`);
baliseA1.setAttribute(`monAttribut`, `valeurAttribut`) // Ajout d'un attribut
console.log(baliseA1);

baliseA1.setAttribute(`href`, `attribut.html`); // Changement de valeur d'un attribut
console.log(baliseA1);

let lesA = document.querySelectorAll(`a`);
// Pour récupérer l'attribut du 3ème "a" dans la liste "ul", il faut indiquer l'index 1 car le 2ème "a" a été supprimé du DOM
let valeurA2 = lesA[2].getAttribute(`href`);
console.log(valeurA2);

/* Autres méthodes pour manipuler les attributs :
    -> "hasAttribute()" : teste la présence d'un attritbut particulier pour un élément, cette méthode retourne une valeur "boolean" (ex : hasAttribute(`id`) )
    -> "getAttributeNames()" : renvoie les noms des attributs d'un élément sous forme d'un tableau (ex : h1.getAttributeNames())
    -> "removeAttribute()" : supprimer un attribut d'un élément (ex : p.remove.Attribute(`class`))
    -> "attributes" : liste les attributs d'un élément spécifié, renvoie un objet avec les noms et valeurs associés d'un élément
*/

// Exo //
// Grâce à votre script, créer une balise "a" dans la balise "h1" avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet
// Ce lien sera de couleur Blanche et non souligné.

// Méthode 1 //
let selectH1 = document.createElement(`a`);
// select2.innerHTML = ``;
// ou
select2.innerHTML = null;
select2.appendChild(selectH1);
selectH1.innerHTML = `Cours JavaScript`;
selectH1.setAttribute(`href`, `https://developer.mozilla.org/fr/docs/Web/JavaScript`);
selectH1.setAttribute(`target`, `_blank`);
selectH1.style.textDecoration = `none`;
selectH1.style.color = `#fff`;
console.log(selectH1);

// Méthode 2 //
// select2.innerHTML=`<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"> Cours JavaScript </a>`
// let aH1 = document.querySelector(`h1>a`)
// aH1.style.color = `#fff`;
// aH1.style.textDecoration = `none`;
