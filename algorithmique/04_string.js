// // --------------------------
    // 04 STRING
// // --------------------------

const prenom = `Grégory`;
const nom = `Lyfoung`;
document.write(prenom + ` ` + nom + `<br>`);
const prenom2 = `Thao`, nom2 = `Lau`;
document.write(prenom2 + ` ` + nom2 + `<br>`);

let a = 10;
let b = 5; 
let c = `5`;
document.write(a + b + `<br>`);
document.write(a + ` ` + c + `<br>`);

// Exercice //
// Réaliser un prompt demandant l'âge de l'utilisateur, récupérer cette donnée et l'utiliser pour afficher :
// Vous avez X ans !

let votreAge = prompt(`Indiquez votre âge`);
// alert(`Vous avez` + ` ` + votreAge + ` ` + `ans !`); // 1ère façon
// alert(`Vous avez ` + votreAge + ` ans !`); // 2ème façon
// document.write(`Vous avez` + ` ` + votreAge + ` ` + `ans !`); // 3ème façon
document.write(`Vous avez ` + votreAge + ` ans !`); // 4ème façon
