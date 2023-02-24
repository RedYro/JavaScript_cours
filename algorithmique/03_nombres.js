// // --------------------------
    // 03 NOMBRES
// // --------------------------

// Pour initialiser un nombre, il suffit de l'écrire sans (""), (''), (``)

const A = 5 * 10;
const B = 10 / 2;
const C = 15 - 5;
const D = 20 + 10;
const F = 5 % 10; 

// L'on peut effectuer tout type de calcul 

const E = A + B;
// console.log(e)

// Addition 
let addition = 10 + 5;
document.write(`Le résultat de l'addition est égal à : ` + addition + `<br>`); // On concatène avec une chaîne de caractères avec le signe "+"

// Soustraction
let soustraction = 16 - 4;
document.write(`Le résultat de la soustraction est égal à : ` + soustraction + `<br>`);

// Multiplication
let multiplication = 5 * 4;
document.write(`Le résultat de la multiplication est égal à : ` + multiplication + `<br>`);

// Division
let division = 20 / 4;
document.write(`Le résultat de la division est égal à : ` + division + `<br>`);

// Modulo 
let modulo = 10 % 3;
document.write(`Le résultat du modulo est égal à : ` + modulo + `<br>`);

// ---------------- Les raccourcis ---------------- //
let g = 10;
// g = g + 5; // g = 10 + 5 //
    // ou
g += 5; // raccourci de "g = 10 + 5" //

// ---------------- Incrémentation et Décrémentation ---------------- //
// L'on peut ajouter 1 ou soustraire 1 discrètement avec (++) ou (--) //
let h = 50;
h++; // Résultat : 51 //
// h--; // Résultat : 50 //
document.write(`Résultat avec (++) ` + h + `<br>`)

let i = 50;
i--;
document.write(`Résultat avec (--) ` + i + `<br>`)

let o = 1;
// console.clear(); // Nettoyer la console
// console.log(o);
let j = ++o; // Incrémente puis affecte nouvelle valeur incrémentée 
// let j = o++; // Affecte valeur d'origine puis incrémente valeur d'origine
// console.log(j);
// console.log(o);

// Exercice : //
// Récupérer dans un prompt la valeur souhaitée par l'utilisateur
// Envoyez une alerte indiquant le résultat au carré et au cube de la valeur

let valeur = prompt(`Votre nombre`);
let valeurAuCarre = valeur ** 2;
let valeurAuCube = valeur ** 3;
alert(`Votre valeur au carré `+ valeurAuCarre + ` Et votre valeur au cube ` + valeurAuCube);
