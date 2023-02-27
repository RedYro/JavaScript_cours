// // --------------------------
    // EXERCICE 1 : 
// // --------------------------

// // 2 utilisateurs viennent de s'inscrire sur votre site
// // Le premier est : Jean, 58 ans 
// // Le deuxième est : Xavier, 32 ans
// // Créez des variables "prenoms" et "age" pour chacun
// // Afficher dans la console le résultat 

let prenoms1 = `Jean`;
console.log(prenoms1);
let age1 = 58 + ` ans`;
console.log(age1);
let prenoms2 = `Xavier`;
console.log(prenoms2);
let age2 = 32 + ` ans`;
console.log(age2);


// // --------------------------
    // EXERCICE 2 : 
// // --------------------------

// // Générer une phrase à l'aide de 2 variables, qui sera : "Bonjour ....., tu as .... ans"
// // Afficher string avec "console.log()"
let answer1 = `Bonjour Grégory, `;
let answer2 = `tu as 21 ans.`;
let reponse = answer1 + answer2;
console.log(reponse);
// Correction exo 2 //
const PRENOM = `Grégory`;
let age = 21;
let hello = `Bonjour ${PRENOM}, tu as ${age} ans.`;
console.log(hello);
console.log(`Bonjour ${PRENOM}, tu as ${age} ans.`);
console.log(`Bonjour ` + PRENOM + `, tu as ` + age + ` ans.`);


// // --------------------------
    // EXERCICE 3 : 
// // --------------------------

// // Demander à l'utilisateur son prénom via un prompt
// // Afficher dans la page : "Bonjour "prénom de l'utilisateur" "
// // Demander à l'utilisateur de saisir 2 nombres entiers
// // Afficher le résultat de l'addiction de ces chiffres 
// document.write(`<h2> Exercice 3 </h2>`);
// let prenom = prompt(`Quel est votre nom ?`);
// // document.write(`Bonjour`+ ` ` + prenom + ` ` + `!` + `<br>`); // Façon 1
// document.write(`Bonjour ${prenom} !` + `<br>`); // Façon 2
// let number1 = prompt(`Donnez un premier nombre`);
// let number2 = prompt(`Donnez un deuxième nombre`);
// let numberResult = parseFloat(number1) + parseFloat(number2);
// // document.write(`<br>` + `Voici l'addition de vos nombres` + ` ` + numberResult +`<br>`); // Façon 1
// document.write(`Voici l'addition de vos nombres ${numberResult}` +`<br>`); // Façon 2


// // --------------------------
    // EXERCICE 4 : 
// // --------------------------

// Demander à l'utilisateur son âge 
// Utilier la condition "if" pour vérifier l'âge de l'utilisateur
// => si il est majeur, je lui souhaite la bienvenue
// => si il est mineur, je lui conseille d'aller dormir
// document.write(`<h2> Exercice 4 </h2>`);
// let ageTest1 = parseFloat(prompt(`Indiquez votre âge`));
// if (ageTest1 >= 18){
//     document.write(`Bienvenue !`);
// } else {
//     document.write(`Bonne nuit !`);
// }
// Correction exo 4 // 
// let votreAge = parseFloat(prompt(`Veuillez entre votre âge`));
// // let type = typeof votreAge
// let ageLimite = 18;
// if(votreAge >= ageLimite && Number.isInteger(votreAge)){ // "Number.isInteger()" vérifie que la variable contient bien un nombre entier  
//     // document.write(`Bienvenue !`);
//     alert(`Bienvenue !`);
// }else if (votreAge < ageLimite && Number.isInteger(votreAge)){
//     // document.write(`Bonne nuit !`);
//     alert(`Bonne nuit !`);
// }else {
//     alert(`Entrez votre âge avec un nombre !`);
// }


// // --------------------------
    // EXERCICE 5 : 
// // --------------------------
// J'arrive sur un Espace sécurisé au moyen du prénom et de l'âge
// Je dois saisir mon prénom et mon âge pour être authentifié sur le site (ces infos seront stockées au préalable dans des variables "prenom" et "age")
// En cas d'échec, une alerte m'informe du problème
// Sinon, un message de bienvenue s'affiche 
// document.write(`<h2> Exercice 5 </h2>`);
// let prenom = prompt(`Entrez votre prénom`);
// let age3 = parseFloat(prompt(`Entrez votre âge`));

// if(Number.isInteger(age3) && prenom){
//     alert(`Bienvenue !`);
//     // document.write(`Bienvenue !`);
// } else {
//     alert(`Vérifiez les informations`);
// }
// Correction //
// let prenom = `GRÉGORY`;
// let prenom = `grégory`;
// let monAge = 21;
// let id1 = prompt(`Saisissez votre prénom`);
// // id1 = id1.toUpperCase();
// id1 = id1.toLowerCase();
// let id2 = parseFloat (prompt(`Saisissez votre âge`));
// if(id1 === prenom && id2 === monAge){
//     alert (`Bienvenue sur votre espace`);
// } else{
//     alert (`Identifiants inconnus`);
// }


// // --------------------------
    // EXERCICE 6 : 
// // --------------------------
// Utilisez la méthode "slice" pour renvoyer le mot "banane".
let txt = `I can eat bananas all day`;

// Alerter le nombre d'éléments dans un tableau en utilisant la bonne méthode.
let cars = [`Volvo`, `Jeep`, `Mercedes`];

// Utilisez la méthode "splice" pour supprimer "Orange" et "Apple" de 'fruits'.
let fruits = [`Banane`, `Orange`, `Pomme`, `Kiwi`];

// Choisissez l'opérateur conditionnel (ternaire) correct pour alerter "Trop jeune" si l'âge est inférieur à 18 ans, sinon alerter "Assez vieux".

// On reçoit un nombre, par exemple "let number = 42"; comment savoir de combien de dizaines (4) et de combien d'unités (2) est composé ce nombre ? (opérateur "modulo")

// Utilisez la méthode "string" correcte pour remplacer le mot "Hello" par le mot "Welcome" // Cherchez sur internet // 
let txt2 = `Hello World`;

// Utilisez des caractères d'échappement pour alerter (We are "Vikings").
