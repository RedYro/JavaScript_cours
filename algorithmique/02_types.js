// // --------------------------
    // 02 DIFFÉRENTS TYPES DE VALEURS
// // --------------------------

/* 
Il existe plusieurs types de valeurs, que l'on peut assigner à nos variables

-> chaînes de caractères (string) => phrase, entre ('') ("") (``) 
-> nombres : 5, 10, 12.8
-> boolean => "true" ou "false"
-> array (tableau) => ["Julien", 10]
-> null 
-> class 
-> objets
-> function
*/

// String //

// Plusieurs possibilités d'initialiser une chaîne de caractères : //
// ("") double quote
let variable = "test";
// ('') simple quote
let variable2 = 'test2';
// (``) back quote
let variable3 = `test3`;

// En JS, la convention de nommage est le CamelCase : chaque nouveau mot de notre variable doit être en majuscule
let monTexte = "Voici une phrase écrite dans une double quote";
// console.log(monTexte);
let monTexte2 = 'Voici une phrase écrite dans une simple quote aujourd\'hui';
// L'anti-slash permet d'échapper un caractère dans le string 
// console.log(monTexte2);
let monTexte3 = `Voici une phrase écrite aujourd'hui`;
// console.log(monTexte3);

// const BIENVENUE = `Aujourd'hui c'est l'arrivée de Grégory`;
let bienvenue = `Aujourd'hui c'est l'arrivée de Grégory`;
document.write(bienvenue)
const PRENOM = `Grégory`; 
bienvenue = `<br>` + `Aujourd'hui c'est l'arrivée de ${PRENOM}` + `<br>`;
// bienvenue = bienvenue + ` ` + PRENOM + `<br>`; 
document.write(bienvenue)

// Number //

let chiffre = 55; // affectation sans quote 
let negatif = -51; // tous types d'écritures numériques sont possibles 
let decimal = 5.5; 

// Boolean // => il ne prend que 2 valeurs : "true" ou "false"

let choix = true;
console.log(choix);
let choix2 = false;
console.log(choix2);

// ("typeof()") => Pour savoir ou vérifier le type d'une variable // 

console.log(typeof(variable));
console.log(typeof(choix));
console.log(typeof(chiffre));

// "document.write()" => permet d'afficher sur une page le contenu d'une variable

document.write(monTexte);
document.write(`<br>`);
document.write(`<br>`);
document.write(chiffre);

// Boîte de dialogue // (non-considérée comme un type)

// alert(`Ceci est un message d'alerte !`); // Permet d'afficher un message d'alerte
// confirm(`Confirmez-vous ?`); // Permet de confirmer une action
// prompt(`Voici un "prompt"`); // Permet de récupérer une donnée de l'utilisateur

// let monAge = prompt(`Quel est votre âge ?`);
// console.log(monAge);
