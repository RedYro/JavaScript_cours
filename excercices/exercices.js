// // --------------------------
    // EXERCICE 1 : 
// // --------------------------

// // 2 utilisateurs viennent de s'inscrire sur votre site
// // Le premier est : Jean, 58 ans 
// // Le deuxième est : Xavier, 32 ans
// // Créez des variables "prenoms" et "age" pour chacun
// // Afficher dans la console le résultat 

/* let prenoms1 = `Jean`;
console.log(prenoms1);
let age1 = 58 + ` ans`;
console.log(age1);
let prenoms2 = `Xavier`;
console.log(prenoms2);
let age2 = 32 + ` ans`;
console.log(age2); */


// // --------------------------
    // EXERCICE 2 : 
// // --------------------------

// // Générer une phrase à l'aide de 2 variables, qui sera : "Bonjour ....., tu as .... ans"
// // Afficher string avec "console.log()"
/* let answer1 = `Bonjour Grégory, `;
let answer2 = `tu as 21 ans.`;
let reponse = answer1 + answer2;
console.log(reponse);
// Correction exo 2 //
const PRENOM = `Grégory`;
let age = 21;
let hello = `Bonjour ${PRENOM}, tu as ${age} ans.`;
console.log(hello);
console.log(`Bonjour ${PRENOM}, tu as ${age} ans.`);
console.log(`Bonjour ` + PRENOM + `, tu as ` + age + ` ans.`); */


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
/* document.write(`<h2> Exercice 4 </h2>`);
let ageTest1 = parseFloat(prompt(`Indiquez votre âge`));
if (ageTest1 >= 18){
    document.write(`Bienvenue !`);
} else {
    document.write(`Bonne nuit !`);
} */
// Correction exo 4 // 
/* let votreAge = parseFloat(prompt(`Veuillez entre votre âge`));
// let type = typeof votreAge
let ageLimite = 18;
if(votreAge >= ageLimite && Number.isInteger(votreAge)){ // "Number.isInteger()" vérifie que la variable contient bien un nombre entier  
    // document.write(`Bienvenue !`);
    alert(`Bienvenue !`);
}else if (votreAge < ageLimite && Number.isInteger(votreAge)){
    // document.write(`Bonne nuit !`);
    alert(`Bonne nuit !`);
}else {
    alert(`Entrez votre âge avec un nombre !`);
} */


// // --------------------------
    // EXERCICE 5 : 
// // --------------------------
// J'arrive sur un Espace sécurisé au moyen du prénom et de l'âge
// Je dois saisir mon prénom et mon âge pour être authentifié sur le site (ces infos seront stockées au préalable dans des variables "prenom" et "age")
// En cas d'échec, une alerte m'informe du problème
// Sinon, un message de bienvenue s'affiche

/* document.write(`<h2> Exercice 5 </h2>`);
let prenom = prompt(`Entrez votre prénom`);
let age3 = parseFloat(prompt(`Entrez votre âge`));

if(Number.isInteger(age3) && prenom){
    alert(`Bienvenue !`);
    // document.write(`Bienvenue !`);
} else {
    alert(`Vérifiez les informations`);
}  */
// Correction //
/* let prenom = `GRÉGORY`;
let prenom = `grégory`;
let monAge = 21;
let id1 = prompt(`Saisissez votre prénom`);
// id1 = id1.toUpperCase();
id1 = id1.toLowerCase();
let id2 = parseFloat (prompt(`Saisissez votre âge`));
if(id1 === prenom && id2 === monAge){
    alert (`Bienvenue sur votre espace`);
} else{
    alert (`Identifiants inconnus`);
} */


// // --------------------------
    // EXERCICE 6 : 
// // --------------------------
// document.write(`<h2> Exercice 6 </h2>`);
// // Utilisez la méthode "slice" pour renvoyer le mot "banane".
/* let txt = `I can eat bananas all day`;
let txtBis = txt.slice(9, 17);
document.write(txtBis);
let txtTer = txt.slice(9, 16);
document.write(`<br>`, txtTer);
 */
// // Alerter sur le nombre d'éléments dans un tableau en utilisant la bonne méthode.
/* let cars = [`Volvo`, `Jeep`, `Mercedes`];
alert(`Il y a `+ cars.length + ` éléments dans le tableau`);
 */
// // Utilisez la méthode "splice" pour supprimer "Orange" et "Apple" de 'fruits'.
/* let fruits = [`Banane`, `Orange`, `Pomme`, `Kiwi`];
fruits.splice(1, 2);
document.write(`<br>`, fruits); */

// // Choisissez l'opérateur conditionnel (ternaire) correct pour alerter "Trop jeune" si l'âge est inférieur à 18 ans, sinon alerter "Assez vieux".
// let ageAdult = parseFloat(prompt(`Indiquez votre âge`));
// let isAdult = (ageAdult >= 18) ? alert(`Assez vieux`) : alert(`Trop jeune`)

// // On reçoit un nombre, par exemple "let number = 42"; comment savoir de combien de dizaines (4) et de combien d'unités (2) est composé ce nombre ? (opérateur "modulo")
/* let number = 42
let numberModulo1 = number % 19;
let numberModulo2 = number % 10;
document.write(`<br>`, `Il y a `, numberModulo1, ` dizaines et `, numberModulo2, ` unités dans 42`); // exemple 1
document.write(`<br>`, `Il y a `, number % 19, ` dizaines et `, number % 10, ` unités dans 42`); // exemple 2 */

// // Correction // 
/* let number = parseFloat(prompt(`Entrez une valeur maximale de 2 chiffres`));
let unite = number % 10; // unités 
let dizaine = (number - unite) / 10;
// if (unite !== 0){
//     document.write(`<br>`, `Il y a `, dizaine, ` dizaines et `, unite, ` unités dans votre chiffre`);
// } 
document.write(`<br>`, `Il y a `, dizaine, ` dizaines et `, unite, ` unités dans votre chiffre`); */

// // Utilisez la méthode "string" correcte pour remplacer le mot "Hello" par le mot "Welcome" // Cherchez sur internet // 
/* let txt2 = `Hello World`;
document.write(`<br>`, txt2.replace(`Hello`, `Welcome`)); */

// // Utilisez des caractères d'échappement pour alerter (We are "Vikings").
/* // let answer = `We are "Vikings"`;
let answer = "We are \"Vikings\"";
alert(answer); */


// // --------------------------
    // EXERCICE 7 : 
// // --------------------------
// document.write(`<h2> Exercice 7 </h2>`);
/* 
    J'ai 1000€ sur mon compte
    chaque mois j'ajoute 50€
    combien de temps me faut-il pour avoir 2000€ sur mon compte ?
*/

/* let i = 50;
while(i <= 1000){
    document.write(i + `Voici l'argent actuel `);
    i+=50
}

for(let i = 50; i <= 1000; i+=50){
    document.write(` Voici l'argent déposer chaque mois ${i} <br>`);
}
document.write(`<br> Il faut 20 mois pour avoir au total 2000€`); */

// Correction // 
/* Boucle "while" -
let soldeCompte = 1000;
let nbrMois = 0;

while(soldeCompte < 2000){
    soldeCompte += 50;
    nbrMois++;
    document.write(`<p> Ce mois, j'ai sur mon compte : </p> ${soldeCompte} €`);
}
document.write(`<p> Pour atteindre la somme de 2000€, il me faut : </p> ${nbrMois} mois`); */

// Boucle "for" -
/* let nbrMoisBis = 0;
for(let soldeCompteBis = 1000; soldeCompteBis <= 2000; soldeCompteBis += 50){
    document.write(`<p> Ce mois, j'ai sur mon compte : </p> ${soldeCompteBis} €`);
    nbrMoisBis++;
}
document.write(`<p> Pour atteindre la somme de 2000€, il me faut : </p> ${nbrMoisBis - 1} mois`)*/


// // --------------------------
    // EXERCICE 8 : 
// // --------------------------
// Réaliser une fonction permettant à un internaute de :
// - Saisir son Prénom dans un Prompt
// - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
// - Saisir son âge
// - Afficher ensuite un récapitulatif dans la page.
// Bonjour [PRENOM], tu as [AGE] !
// En cas d'échec une alert m'informera le problème.

// function nameAge(){
//     let name = prompt(`Entrez votre prénom`);
//     let lettersOnly = /^[A-Za-zéèÉÈ]+$/; // /^[A-Za-zéèÉÈ]+$/ (regex) => lettres seulement avec caractères spéciaux "é", "É", "è", "È" inclus; nombres => exclus
//     if(name.match(lettersOnly)){
//         alert(`Bonjour ${name}, Quel âge avez-vous ?`);
//     } else{
//         alert(`Veuillez vérifier les informations`);
//         return document.write(`<h2> Exercice 8 </h2> <p> Vérifiez votre prénom </p>`);
//     }
//     let age = parseFloat(prompt(`Entrez votre âge`));
//     if(age >= 1){
//         document.write(`<h2> Exercice 8 </h2>`);
//         document.write(`<p> Bonjour ${name}, vous avez ${age} ans ! </p>`);
//     } else{
//         alert(`Veuillez vérifier les informations`);
//         return document.write(`<h2> Exercice 8 </h2> <p> Vérifiez votre âge </p>`);
//     }
// }
// nameAge();

// Correction // 
// function hello() {
//     let prenom = prompt(`Saisissez votre prénom :`);
//     if (prenom !== ` ` && isNaN(prenom)) {
//         let age = prompt(`Bonjour ${prenom}; Quel est votre âge ?`)
//         if (age !== null && !isNaN(age)){
//             document.write(`Bonjour ${prenom} ! Vous avez ${age} ans !`)
//         } else{
//             alert(`Entrez votre âge !`)
//         }
//     } else {
//         alert(`Entrez votre prénom !`)
//     }
// }
// hello();


// // --------------------------
    // EXERCICE 10 : 
// // --------------------------
       
        /*   
         Ecrivez un programme qui fait saisir un nom de jour de la semaine à l'utilisateur, puis affiche le nom du jour suivant.
         Les erreurs de saisie (jour incorrect) doivent être gérées.
         Effectuez l'exercice avec des if/if else puis avec un switch.
         */

// Avec "switch" //
// let day = prompt(`Saisissez un jour de de la semaine`);

// switch (day) {
//     case `Lundi`:
//         alert(`Demain c'est mardi`)
//         break;
//     case `Mardi`:
//         alert(`Demain c'est mercredi`)
//         break;
//     case `Mercredi`:
//         alert(`Demain c'est jeudi`)
//         break;
//     case `Jeudi`:
//         alert(`Demain c'est vendredi`)
//         break;
//     case `Vendredi`:
//         alert(`Demain c'est samedi`)
//         break;
//     case `Samedi`:
//         alert(`Demain c'est dimanche`)
//         break;
//     case `Dimanche`:
//         alert(`Demain c'est lundi`)
//         break;
//     default:
//         alert(`Le mot saisi, "${day}" ne correspond pas à un jour de la semaine.`)
//         break;
// }

// Avec "function" // 

// function weekDay() {
//     let days = prompt(`Saisissez un jour de de la semaine`);
//     if (days !== ` ` && isNaN(days)){

//     }
// }





// // --------------------------
    // EXERCICE 11 : 
// // --------------------------

       /*
       Ecrivez un programme JS qui permet à l'utilisateur d'insérer le numéro du mois afin que le programme lui réponde le nombre de jours.
       Ex : 
            mois février => 28 jours (on considère que c'est toujours 28 ;) )
            mois juin => 30 jours
            mois octobre = > 31jours
       */

// function month() {
//     let numberMonth = parseFloat(prompt(`Saisissez un chiffre correspondant à un mois`));
//     if (numberMonth === 1 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 31 jours dans le mois de janvier`);
//     } else if (numberMonth === 2 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 28 jours dans le mois de février`);
//     } else if (numberMonth === 3 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 31 jours dans le mois de mars`);
//     } else if (numberMonth === 4 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 30 jours dans le mois de avril`);
//     } else if (numberMonth === 5 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 31 jours dans le mois de mai`);
//     } else if (numberMonth === 6 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 30 jours dans le mois de juin`);
//     } else if (numberMonth === 7 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 31 jours dans le mois de juillet`);
//     } else if (numberMonth === 8 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 31 jours dans le mois d'août`);
//     } else if (numberMonth === 9 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 30 jours dans le mois de septembre`);
//     } else if (numberMonth === 10 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 31 jours dans le mois de octobre`);
//     } else if (numberMonth === 11 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 30 jours dans le mois de novembre`);
//     } else if (numberMonth === 12 && numberMonth !== 0 && numberMonth < 13){
//         return alert(`Il y a 31 jours dans le mois de décembre`);
//     } else {
//         alert(`Saisissez un chiffre entre 1 et 12`);
//     }
// }
// month();


// // --------------------------
    // EXERCICE 12 : 
// // --------------------------

        /* 
        À partir du tableau fourni, vous devez mettre en place un système d'authentification.
        Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et son prénom (document.write);
        En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.
        ar BaseDeDonnees = [
                    {"prenom": "Tom","nom": "Lechat","email": "tom.lechat@gmail.com", "mdp": "poisson!"},
                    {"prenom": "Jerry","nom": "Lasouris","email": "jerry.lasouris@gmail.com","mdp": "fromage!"},
                    {"prenom": "twity","nom": "Lecanard","email": "twity.lecanard@gmail.com","mdp": "mignon!"}
                ];
        */

// let BaseDeDonnees = [
//     {"prenom": "Tom","nom": "Lechat","email": "tom.lechat@gmail.com", "mdp": "poisson!"},
//     {"prenom": "Jerry","nom": "Lasouris","email": "jerry.lasouris@gmail.com","mdp": "fromage!"},
//     {"prenom": "twity","nom": "Lecanard","email": "twity.lecanard@gmail.com","mdp": "mignon!"}
// ];

// function login() {
//     let userMail = prompt(`Saisissez votre adresse mail`)
//     if (userMail.match(BaseDeDonnees[0][`email`])){
//         alert(`Entrez votre mot de passe`);
//     } else if(userMail.match(BaseDeDonnees[1][`email`])) {
//         alert(`Entrez votre mot de passe`);
//     } else if(userMail.match(BaseDeDonnees[2][`email`])) {
//         alert(`Entrez votre mot de passe`);
//     }
//     else {
//         return alert(`Vos informations sont incorrectes`);
//     }
//     let password = prompt(`Votre mot de passe`);
//     if(password.match(BaseDeDonnees[0][`mdp`])){
//         alert(`Mot de passe correct`)
//         return document.write(`<p> Bienvenue ${BaseDeDonnees[0][`prenom`]} ${BaseDeDonnees[0][`nom`]} ! </p>`)
//     } else if(password.match(BaseDeDonnees[1][`mdp`])) {
//         alert(`Mot de passe correct`)
//         return document.write(`<p> Bienvenue ${BaseDeDonnees[1][`prenom`]} ${BaseDeDonnees[1][`nom`]} ! </p>`)
//     } else if(password.match(BaseDeDonnees[2][`mdp`])) {
//         alert(`Mot de passe correct`)
//         return document.write(`<p> Bienvenue ${BaseDeDonnees[2][`prenom`]} ${BaseDeDonnees[2][`nom`]} ! </p>`)
//     } 
//     else {
//        return alert(`Vos informations sont incorrectes`);
//     }
// }
// login();


// // --------------------------
    // EXERCICE 13 : 
// // --------------------------

        /*
        Ecrivez un programme  qui permet à l'utilisateur de deviner un nombre entier compris entre 0 et 100 générer automatiquement et aléatoirement en JS 
        l'utilisateur a droit à 6 essais :
             - en cas de réussite -> message affiche sur la page: Vous avez gagné, bravo ! La réponse était bien " le nombre"
             - le nombre deviné est inférieur à celui qui est généré  -> Visez plus haut ! 
             - le nombre deviné est supérieur à celui qui est généré -> Visez plus bas ! 
             - n'oubliez pas de traiter les essais avec des erreurs (ex : l'utilisateur a choisi un nombre supérieur à 100 !!!)
       */
let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    let userGuess = parseFloat(prompt(`Entrez un nombre`));
    if (userGuess === randomNumber){
        return document.write(`Bravo vous avez trouvé le numéro !`)
    } else if(userGuess < randomNumber) {
        alert(`Visez plus haut`)
    }
}


// // --------------------------
    // EXERCICE 14 : 
// // --------------------------

     /*
        // Via Javascript :
        // Écrivez le contenu de tous les éléments HTML de la page exercice.html et renseignez leurs attributs ;
        // Remplacer la --> avec votre réponse 

        // Première Section   
                -->

        // Seconde Section
                -->

        // Donnez à l'image une largeur de 600px ;
                -->
        
        // Donnez aux sections : un padding et une couleur de fond ;
                -->

        // Créez une troisième section qui aura une classe et qui comprend : un titre 2, un paragraphe et un boutton ;
                -->

        // Ajoutez les flexbox à cette section : le contenu doit être centré verticalement et horizontalement.
                -->
       */
