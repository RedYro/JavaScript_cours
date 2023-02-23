// Commentaire en JS pour une seule ligne (//)

/* 

Commentaire d'un bloc de texte sur plusieurs lignes

*/

// // --------------------------
    // 01 VARIABLES 
// // --------------------------
/* Les variables sont comme des boîtes
    Vous pouvez y stocker ce que vous souhaitez 
    On initialise une variable avec son nom (par choix)
    Puis on attribue une valeur
    Pour déclarer une variable on utilise un préfixe :
    -const
    -let ou "var ==> (obsolète)"
    ATTENTION on utilise les préfixe seulement lors de l'initialisation
*/

const test = `Hello World`;
// console.log(test);
// Pour afficher une info saisie ou une erreur produite lors de la programmation
// test = `Hello Guys !` -> provoque une erreur : une constante ne peut être modifiée

// var test2 = `Bonjour !`; (obsolète)
// console.log(test2);

let test3 = `Colombbus`;
// console.log(test3);
test3 = `10mentionweb`;
// console.log(test3);
test3 = `Bientôt l'heure de manger !`;
// console.log(test3);
// Avec le préfixe "let", je peux changer la valeur de ma variable 
// Les caractères acceptés : de 0 à 9, de A à Z, de a à z, + $ _ mais jamais comme premier ou dernier caractère
// La valeur d'une variable peut être de différent type comme des mots ou des chiffres

let test4 = 10;
let test5 = `10`;
// console.log(test4);
// console.log(test5);