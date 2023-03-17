// // --------------------------
    // 04 STRING
// // --------------------------
document.write(`<h1> STRING </h1>`);

const PRENOM = `Grégory`;
const NOM = `Lyfoung`;
document.write(PRENOM + ` ` + NOM + `<br>`);
const PRENOM2 = `Thao`, NOM2 = `Lau`;
document.write(PRENOM2 + ` ` + NOM2 + `<br>`);

let a = 10;
let b = 5; 
let c = `5`;
document.write(a + b + `<br>`);
document.write(a + ` ` + c + `<br>`);

// Exercice //
// Réaliser un prompt demandant l'âge de l'utilisateur, récupérer cette donnée et l'utiliser pour afficher :
// Vous avez X ans !

// let votreAge = prompt(`Indiquez votre âge`);

// alert(`Vous avez` + ` ` + votreAge + ` ` + `ans !`); // 1ère façon
// alert(`Vous avez ` + votreAge + ` ans !`); // 2ème façon
// document.write(`Vous avez` + ` ` + votreAge + ` ` + `ans !`); // 3ème façon

// document.write(`Vous avez ` + votreAge + ` ans !`); // 4ème façon

let fruits = `Pommes`;
console.log(fruits);
fruits += `Fraises`;
console.log(fruits);
fruits += `Mangues`;
console.log(fruits);
// Contrairement au "=" qui remplace la valeur de la variable, on utilise ici "+=" qui va conserver la valeur de base de la variable et ajouter la nouvelle valeur à celle-ci

let quelqueChose; 
console.log(quelqueChose);
// "Undefined" car aucune valeur n'est affectée, possibilité de garder la valeur sans contenu mais restera "undefined"
// console.log(autreChose); // Affiche une erreur, "not defined" car aucune variable n'est affectée avec ce nom

let unNombre = `24`;
// console.log(unNombre); // Affiche le contenu de la variable 
// console.log(typeof(unNombre)); // Affiche le type de la variable

// String => to Number
// Pour convertir le "string" 24 en nombre 24 // "parseFloat()" //
unNombre = parseFloat(unNombre);
console.log(unNombre); 
console.log(typeof(unNombre)); 

// Number => to String
// On utilise de nouveau la variable pour la reconvertir en "string" // ".toString()" // 
unNombre = unNombre.toString();
console.log(unNombre); 
console.log(typeof(unNombre)); 