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
// let day = prompt(`Saisissez un jour de de la semaine`).toLowerCase();

// switch (day) {
//     case `lundi`:
//         alert(`Demain c'est mardi`)
//         break;
//     case `mardi`:
//         alert(`Demain c'est mercredi`)
//         break;
//     case `mercredi`:
//         alert(`Demain c'est jeudi`)
//         break;
//     case `jeudi`:
//         alert(`Demain c'est vendredi`)
//         break;
//     case `vendredi`:
//         alert(`Demain c'est samedi`)
//         break;
//     case `samedi`:
//         alert(`Demain c'est dimanche`)
//         break;
//     case `dimanche`:
//         alert(`Demain c'est lundi`)
//         break;
//     default:
//         alert(`Le mot saisi, "${day}" ne correspond pas à un jour de la semaine.`)
//         break;
// }

// Correction //
// 'switch' //
// let day = prompt(`Saisissez un jour de de la semaine`).toLowerCase();

// switch (day) {
//     case `lundi`:
//         document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est mardi !`)
//         break;
//     case `mardi`:
//         document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est mercredi !`)
//         break;
//     case `mercredi`:
//         document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est jeudi !`)
//         break;
//     case `jeudi`:
//         document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est vendredi !`)
//         break;
//     case `vendredi`:
//         document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est samedi !`)
//         break;
//     case `samedi`:
//         document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est dimanche !`)
//         break;
//     case `dimanche`:
//         document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est lundi !`)
//         break;
//     default:
//         document.querySelector(`#p1`).innerHTML = (`Le mot saisi, "${day}" ne correspond pas à un jour de la semaine.`)
//         break;
// }

// 'array' with 'for' //
// let day = prompt(`Saisissez un jour de de la semaine`).toLowerCase();
// let weekDays = [`lundi`,`mardi`,`mercredi`,`jeudi`,`vendredi`,`samedi`,`dimanche`];

// for(let i = 0 ; i < weekDays.length ; i++){
//     i = weekDays.indexOf(day);
//     if(weekDays.includes(day)){
//         if(i === 6){
//             document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est ${weekDays[i = 0-1]} !`);
//         } else{
//             document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est ${weekDays[i+1]} !`);
//         }
//         document.querySelector(`#p1`).innerHTML = (`Nous sommes ${day}, demain c'est ${weekDays[i+1]} !`);
//     } else {
//         document.querySelector(`#p1`).innerHTML = (`Le mot saisi, "${day}" ne correspond pas à un jour de la semaine.`)
//    }
//    break;
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

// let month = parseFloat(prompt(`Saisissez un nombre entre 1 et 12 correspondant aux mois de l'année`)) ;

// switch (month) {
//     case 1:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 31 jours dans le mois de janvier.`)
//         break;
//     case 2:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 28 jours dans le mois de février.`)
//         break;
//     case 3:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 31 jours dans le mois de mars.`)
//         break;
//     case 4:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 30 jours dans le mois de avril.`)
//         break;
//     case 5:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 31 jours dans le mois de mai.`)
//         break;
//     case 6:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 30 jours dans le mois de juin.`)
//         break;
//     case 7:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 31 jours dans le mois de juillet.`)
//         break;
//     case 8:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 31 jours dans le mois d'août.`)
//         break;
//     case 9:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 30 jours dans le mois de septembre.`)
//         break;
//     case 10:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 31 jours dans le mois de octobre.`)
//         break;
//     case 11:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 30 jours dans le mois de novembre.`)
//         break;
//     case 12:
//         document.querySelector(`#p2`).innerHTML = (`Il y a 31 jours dans le mois de décembre.`)
//         break;
//     default:
//         document.querySelector(`#p2`).innerHTML = (`Le nombre saisi, "${month}" ne correspond pas à un mois de l'année.`)
//         break;
// }

// let month = parseFloat(prompt(`Saisissez un chiffre correspondant au mois de l'année`));
// let monthYear = [`janvier`,`février`,`mars`,`avril`,`mai`,`juin`,`juillet`,`août`,`septembre`,`octobre`,`novembre`,`décembre`];
// let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// for(let i = 0 ; i < monthYear.length ; i++){
//     i = monthYear.indexOf(month) ;
//     if(monthYear.includes(month)){
//         document.querySelector(`#p1`).innerHTML = (`Dans le mois de ${month}, `);
//     } else {
//         document.querySelector(`#p1`).innerHTML = (`Le nombre saisi, "${month}" ne correspond pas à un mois de l'année.`)
//    }
//    for (let i = 0; i < monthDays.length; i++) {
//     i = monthDays.indexOf(month)
//     if (monthDays.includes(month)) {
//         document.querySelector(`#p1`).innerHTML = (`il y a ${monthDays[i+1]} jours !`);
//     }
//    }
//    break;
// }

// Correction //
// 'array' with 'for' //
// const TAB1 =[4,6,9,11];
// const TAB2 = [1,3,5,7,8,10,12];
// const FEV = 2

//      if (isNaN(mois)) { // si la personne ne rentre pas un nombre
//           document.getElementById('p2').innerHTML = 'Vous n\'avez pas mis un chiffre';
//      } else {// ici c'est forcément un nombre

//           for(let i=0; i<= moisNom.length; i++){
//                               //4
//                if(TAB1.includes(mois)){
//                     document.getElementById('p2').innerText = `Le mois n° ${mois}, ${moisNom[mois]}, fait 30 jours.`;
//                }else if(TAB2.includes(mois)){
//                     document.getElementById('p2').innerText = `Le mois n° ${mois}, ${moisNom[mois]}, fait 31 jours.`;
//                }else if( mois === 2){
//                     document.getElementById('p2').innerText = `Le mois n° ${mois}, ${moisNom[mois]}, fait 28 jours.`;
//                }else{
//                     document.getElementById('p2').innerText = `vous devez saisir un nombre entre 1 et 12 `;

//                }

//           }
             
//      }

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

// Correction // 
// "for" //
// let email = prompt(`Veuillez saisir votre mail`);
// let mdp = prompt(`Veuillez saisir votre mot de passe`);

// for(let i = 0; i < BaseDeDonnees.length; i++){
//     if(email === (BaseDeDonnees[i][`email`]) && mdp === (BaseDeDonnees[i][`mdp`])){
//         document.write(`Bonjour ${BaseDeDonnees[i][`prenom`]} ${BaseDeDonnees[i][`nom`]} !`);
//         break;
//     } else {
//         document.write(`Vos informations sont incorrectes`);
//     }
//     break;
// }


// function loginBis() {
//     let userMail = prompt(`Saisissez votre adresse mail`)
//     for(i = 0; i < BaseDeDonnees.length; i++){
//         i = BaseDeDonnees.includes(userMail);
//         if(userMail.match(BaseDeDonnees[i+1][`email`])){
//             alert(`Entrez votre mot de passe`);
//         } else {
//             return alert(`Vos informations sont incorrectes`);
//         }
//     }
// }

// function login() {
//         let userMail = prompt(`Saisissez votre adresse mail`)
//         if (userMail.match(BaseDeDonnees[0][`email`])){
//             alert(`Entrez votre mot de passe`);
//         } else if(userMail.match(BaseDeDonnees[1][`email`])) {
//             alert(`Entrez votre mot de passe`);
//         } else if(userMail.match(BaseDeDonnees[2][`email`])) {
//             alert(`Entrez votre mot de passe`);
//         }
//         else {
//             return alert(`Vos informations sont incorrectes`);
//         }
//         let password = prompt(`Votre mot de passe`);
//         if(password.match(BaseDeDonnees[0][`mdp`])){
//             alert(`Mot de passe correct`)
//             return document.write(`<p> Bienvenue ${BaseDeDonnees[0][`prenom`]} ${BaseDeDonnees[0][`nom`]} ! </p>`)
//         } else if(password.match(BaseDeDonnees[1][`mdp`])) {
//             alert(`Mot de passe correct`)
//             return document.write(`<p> Bienvenue ${BaseDeDonnees[1][`prenom`]} ${BaseDeDonnees[1][`nom`]} ! </p>`)
//         } else if(password.match(BaseDeDonnees[2][`mdp`])) {
//             alert(`Mot de passe correct`)
//             return document.write(`<p> Bienvenue ${BaseDeDonnees[2][`prenom`]} ${BaseDeDonnees[2][`nom`]} ! </p>`)
//         } 
//         else {
//            return alert(`Vos informations sont incorrectes`);
//         }
//     }

// // --------------------------
    // EXERCICE 13 : 
// // --------------------------

        /*
        Ecrivez un programme qui permet à l'utilisateur de deviner un nombre entier compris entre 0 et 100 générer automatiquement et aléatoirement en JS 
        l'utilisateur a le droit à 6 essais :
             - en cas de réussite -> message affiche sur la page: Vous avez gagné, bravo ! La réponse était bien "le nombre"
             - le nombre deviné est inférieur à celui qui est généré  -> Visez plus haut ! 
             - le nombre deviné est supérieur à celui qui est généré -> Visez plus bas ! 
             - n'oubliez pas de traiter les essais avec des erreurs (ex : l'utilisateur a choisi un nombre supérieur à 100 !!!)
       */

// --- Jeu fait grâce à MDN --- //
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let guesses = document.querySelector(`.guesses`);
// let lastResult = document.querySelector(`.lastResult`);
// let lowOrHi = document.querySelector(`.lowOrHi`);
// let guessSubmit = document.querySelector(`.guessSubmit`);
// let guessField = document.querySelector(`.guessField`);
// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//     let userGuess = Number(guessField.value);
//     if (guessCount === 1) {
//         guesses.textContent = `Propositions précédentes : `;
//     }
//     guesses.textContent += userGuess + ` `;
//     if (userGuess === randomNumber) {
//         lastResult.textContent = `Bravo ! Vous avez trouvé le nombre exact qui était ${randomNumber}.`;
//         lastResult.style.backgroundColor = `green`;
//         lastResult.style.width = `50%`;
//         lowOrHi.textContent = ``;
//         setGameOver();
//     } else if (guessCount === 6) {
//         lastResult.textContent = `Vous avez perdu(e) ! Le nombre exact était ${randomNumber}.`
//         lastResult.style.width = `50%`;
//         setGameOver();
//     } else {
//         lastResult.textContent = `Mauvaise réponse !`
//         lastResult.style.backgroundColor = `red`;
//         lastResult.style.borderRadius = `15px`;
//         if (userGuess < randomNumber) {
//             lowOrHi.textContent = `Le nombre saisi est trop bas. Visez plus haut !`
//         } else if (userGuess > randomNumber) {
//             lowOrHi.textContent = `Le nombre saisi est trop élevé. Visez plus bas !`
//         } if (userGuess > 100) {
//             alert(`Le nombre saisi est supérieur à 100 !`);
//             lowOrHi.textContent = `Le nombre saisi est supérieur à 100 ! Veuillez saisir un nombre en 1 et 100.`
//         } else if (userGuess === 0) {
//             // alert(`Votre saisie n'est pas nombre ou doit être supérieur à 0`);
//             lowOrHi.textContent = `Votre saisie n'est pas nombre ou doit être supérieur à 0 ! Veuillez saisir un nombre en 1 et 100.`
//         } 
//     }
//     guessCount++;
//     guessField.value = ``;
//     guessField.focus();
// }
// guessSubmit.addEventListener(`click`, checkGuess);

// function setGameOver() {
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     resetButton = document.createElement(`button`);
//     resetButton.textContent = `Commencer une nouvelle partie`;
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener(`click`, resetGame);
// }

// function resetGame() {
//     guessCount = 1;
//     let resetParas = document.querySelectorAll(`.resultParas p`);
//     for (let i = 0 ; i < resetParas.length ; i++) {
//         resetParas[i].textContent = ``;
//     }
//     resetButton.parentNode.removeChild(resetButton);
//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = ``;
//     guessField.focus();
//     lastResult.style.backgroundColor = '#393939';
//     randomNumber = Math.floor(Math.random() * 100) + 1;
// }

// Correction //

// function devinette(){
//     let nombreArrondi = parseInt(Math.random()*100);
//         //  console.log(nombreArrondi);
//          let essai = 0;
//             for(let i = 1 ; i <= 6 ; i++){ //2
//                 let choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris e,tre 0 et 100, Attention vous avez 6 essais !'));
//                     if(choixUser === nombreArrondi){
//                         document.write("Vous avez gagné, bravo la réponse était bien  <strong> " + nombreArrondi+ '</strong>.' );
//                         break
//                     }else {
//                             if(choixUser < 0 || choixUser > 100 || isNaN(choixUser)){
//                                 alert('Vous devez saisir un nombre compris entre 0 et 100 !' + i  +'/6');
//                                 i--; // ici on décrémente i car l'uilisateur n'a pas rentré une valeur compris entre 0 et 100 -> ça ne compte pas dans les essais ( si je suis sur le 3 ème essai je ne perds ma position )
//                                 essai = 0;
//                                 // console.log(essai);     
//                            }else if(choixUser > nombreArrondi){
//                                    alert('Visez plus bas ! '  + i  +'/6 ');
//                                    essai = 0;
//                                 //    console.log(essai);        
//                            }else{
//                                    alert('Visez plus haut ! '  + i  +'/6 ');
//                                    essai = 0;
//                                    console.log(essai);    
//                            }
//                            essai++
//                     }                   
//             }// Fin de la boucle
//             if(essai === 1){
//                 document.write("Dommage, vous n\'avez pas trouvé la bonne réponse, c\'était <strong>" + nombreArrondi+ '</strong>.' );     

//             }

//   }
         
// devinette()


// let nombreArrondi = parseInt(Math.random()*100);
// for(let i = 1; i <= 6; i++){
// let choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris entre 0 et 100. Attention, vous avez 6 essais !'));
// if(choixUser === nombreArrondi){
//     document.getElementById('p4').innerHTML = 'Vous avez gagné, bravo ! La réponse était bien ' + nombreArrondi + '.';
//     break; // on casse la boucle pour qu'elle ne fasse pas les 6 tours demandés
// }else if(choixUser < 0 || choixUser > 100){
//     alert('Vous devez saisir un nombre compris entre 0 et 100 ! ' + i +  '/6');
//     i--; // on décrémente i car l'utilisateur n'a pas rentré une valeur comprise entre 0 et 100 // ça ne compte pas dans les essais
// }else if(isNaN(choixUser)){ // isNaN = is Not a Number : on vérifie si dans le prompt la personne a mis quelque chose qui n'est pas un nombre
//     alert('Vous devez saisir un nombre compris entre 0 et 100 ! ' + i +  '/6');
//     i--; // ça ne compte pas dans les essais 
// }else if(choixUser > nombreArrondi){
//     alert('Visez plus bas ! ' + i + '/6');
// }else {
//     alert('Visez plus haut ! ' + i + '/6');
// }
// document.getElementById('p3').innerHTML ='Dommage, vous n\'avez pas toruvé la bonne réponse, c\'était ' + nombreArrondi + '.';
// }


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
// let section1 = document.querySelector(`#first-section`);
// let h1 = document.querySelector(`h1`);
// let p = document.querySelector(`p`);
// let img = document.querySelector(`img`);
// let btn = document.querySelector(`button`);
// let section2 = document.querySelector(`#second-section`);
// let h2 = document.querySelector(`h2`);
// let a = document.querySelector(`a`);

// let a1 = section1.getAttributeNames()
// let a2 = h1.getAttributeNames(`h1`)
// let a3 = p.getAttributeNames(`p`)
// let a4 = img.getAttributeNames(`img`)
// let a5 = btn.getAttributeNames(`button`)
// let a6 = section2.getAttributeNames()
// let a7 = h2.getAttributeNames(`h2`)
// let a8 = a.getAttributeNames(`a`)

// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)
// console.log(a6)
// console.log(a7)
// console.log(a8)

// // Première Section   
// // section => 'id'
// // h1 => 'null' (aucun attribut)
// // p => 'null' (aucun attribut)
// // img => 'src' ; 'alt'
// // button => 'null' (aucun attribut)

// // Seconde Section
// // section => 'id'
// // h2 => 'null' (aucun attribut)
// // p => 'null' (aucun attribut)
// // a => 'href'


// // Donnez à l'image une largeur de 600px ; //
// img.style.width = `600px`;

// // Donnez aux sections : un padding et une couleur de fond ; //

// // Section 1 style //
// section1.style.backgroundColor = `black`;
// section1.style.color = `white`;
// section1.style.padding = `30px`;
// section1.style.display = `flex`;
// section1.style.flexDirection = `column`;
// section1.style.justifyContent = `center`;
// section1.style.alignItems = `center`;
// section1.style.textAlign = `center`;
// section1.style.borderRadius = `20px`;

// // button style //
// btn.style.backgroundColor = `gray`;
// btn.style.color = `white`;
// btn.style.cursor = `pointer`;
// btn.style.borderRadius = `5px`;
// btn.style.padding = `8px`;

// // Image style //
// img.style.margin = `25px`;
// img.style.background = `rgb(200,4,4)`;
// img.style.background = `linear-gradient(90deg, rgba(200,4,4,1) 0%, rgba(0,0,0,1) 45%, rgba(0,14,255,1) 100%)`;
// img.style.borderRadius = `20px`;

// //Section 2 style //
// section2.style.background = `rgb(200,4,4)`;
// section2.style.background = `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(200,4,4,1) 5%, rgba(0,0,0,1) 50%, rgba(200,4,4,1) 95%, rgba(0,0,0,1) 100%)`;
// section2.style.color = `white`;
// section2.style.padding = `20px`;
// section2.style.display = `flex`;
// section2.style.flexDirection = `column`;
// section2.style.justifyContent = `center`;
// section2.style.textAlign = `center`;
// section2.style.padding = `30px`;
// section2.style.borderRadius = `20px`;

// //  a "lien" style //
// a.style.color = `gray`;
// a.style.textDecoration = `none`;
// a.style.margin = `15px`;

// //  Création d'une 3ème section avec un titre ('h2'), un paragraphe ('p') et un bouton ('button') //
// let body = document.querySelector(`body`)
// let section3 = document.createElement(`section`);
// section3.setAttribute(`class`, `third-section`);
// body.appendChild(section3);
// let titleH2 = document.createElement(`h2`);
// let paragapah4 = document.createElement(`p`);
// let button2 = document.createElement(`button`);
// section3.appendChild(titleH2);
// titleH2.innerHTML = `Sous titre bis`;
// section3.appendChild(paragapah4);
// paragapah4.innerHTML = `Paragraphe 4`;
// section3.appendChild(button2);
// button2.innerHTML = `Je suis un nouveau bouton !`

// // Section 3 style //
// section3.style.display = `flex`;
// section3.style.flexDirection = `column`;
// section3.style.justifyContent = `center`;
// section3.style.alignItems = `center`;
// section3.style.textAlign = `center`;
// section3.style.background = `rgba(0,14,255)`;
// section3.style.background = `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,14,255,1) 5%, rgba(0,0,0,1) 50%, rgba(0,14,255,1), rgba(0,0,0,1) 100%)`;
// section3.style.color = `white`;
// section3.style.padding = `30px`;
// section3.style.borderRadius = `20px`;

// // body style //
// body.style.backgroundColor = `#393939`

// // button bis //
// button2.style.backgroundColor = `gray`;
// button2.style.color = `white`;
// button2.style.cursor = `pointer`;
// button2.style.borderRadius = `5px`;
// button2.style.padding = `8px`;
// button2.style.margin = `10px`;

// Correction //
// Première Section   
let section1 = document.querySelector(`#first-section`);
let section1Title = document.querySelector(`#first-section > h1`);
section1Title.innerHTML = `Titre de niveau 1`
let sectionParagraphe = document.querySelectorAll(`p`);
sectionParagraphe[0].innerHTML = `Paragraphe de la section 1`;
let sectionImage = document.querySelector(`img`);
sectionImage.setAttribute(`src`, `Red_Blue_New_v6.png`);
sectionImage.setAttribute(`alt`, `Blue Empress and Red Emeperor`);
sectionImage.setAttribute(`width`, `600px`);
let button = document.querySelector(`button`);
button.innerHTML = `Envoyer`;

// Deuxième Section   
let section2 = document.querySelector(`#second-section`);
let section2Title = document.querySelector(`#second-section > h2`);
section2Title.innerHTML = `Titre de niveau 2`;
sectionParagraphe[1].innerHTML = `Paragraphe 1 de la section 2`;
sectionParagraphe[2].innerHTML = `Paragraphe 2 de la section 2`;
let link = document.querySelector(`a`);
link.innerHTML = `Lien`;
link.setAttribute(`target`, `_blank`);

// Donnez aux sections : un padding et une couleur de fond ;

// // Section 1 style //
section1.style.backgroundColor = `black`;
section1.style.color = `white`;
section1.style.padding = `30px`;
section1.style.display = `flex`;
section1.style.flexDirection = `column`;
section1.style.justifyContent = `center`;
section1.style.alignItems = `center`;
section1.style.textAlign = `center`;
section1.style.borderRadius = `20px`;

// // button style //
button.style.backgroundColor = `gray`;
button.style.color = `white`;
button.style.cursor = `pointer`;
button.style.borderRadius = `5px`;
button.style.padding = `8px`;

// // Image style //
sectionImage.style.margin = `25px`;
sectionImage.style.background = `rgb(200,4,4)`;
sectionImage.style.background = `linear-gradient(90deg, rgba(200,4,4,1) 0%, rgba(0,0,0,1) 45%, rgba(0,14,255,1) 100%)`;
sectionImage.style.borderRadius = `20px`;

// //Section 2 style //
section2.style.background = `rgb(200,4,4)`;
section2.style.background = `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(200,4,4,1) 5%, rgba(0,0,0,1) 50%, rgba(200,4,4,1) 95%, rgba(0,0,0,1) 100%)`;
section2.style.color = `white`;
section2.style.padding = `20px`;
section2.style.display = `flex`;
section2.style.flexDirection = `column`;
section2.style.justifyContent = `center`;
section2.style.textAlign = `center`;
section2.style.padding = `30px`;
section2.style.borderRadius = `20px`;

// //  a "lien" style //
link.style.color = `gray`;
link.style.textDecoration = `none`;
link.style.margin = `15px`;

// //  Création d'une 3ème section avec un titre ('h2'), un paragraphe ('p') et un bouton ('button') //
let body = document.querySelector(`body`);
let main = document.querySelector(`main`);
let section3 = document.createElement(`section`);
section3.setAttribute(`class`, `third-section`);
main.appendChild(section3);
let titleH2 = document.createElement(`h2`);
let paragapah4 = document.createElement(`p`);
let button2 = document.createElement(`button`);
section3.appendChild(titleH2);
titleH2.innerHTML = `Sous titre bis`;
section3.appendChild(paragapah4);
paragapah4.innerHTML = `Paragraphe 4`;
section3.appendChild(button2);
button2.innerHTML = `Je suis un nouveau bouton !`

// // Section 3 style //
section3.style.display = `flex`;
section3.style.flexDirection = `column`;
section3.style.justifyContent = `center`;
section3.style.alignItems = `center`;
section3.style.textAlign = `center`;
section3.style.background = `rgba(0,14,255)`;
section3.style.background = `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,14,255,1) 5%, rgba(0,0,0,1) 50%, rgba(0,14,255,1), rgba(0,0,0,1) 100%)`;
section3.style.color = `white`;
section3.style.padding = `30px`;
section3.style.borderRadius = `20px`;

// // body style //
body.style.backgroundColor = `#393939`

// // button bis //
button2.style.backgroundColor = `gray`;
button2.style.color = `white`;
button2.style.cursor = `pointer`;
button2.style.borderRadius = `5px`;
button2.style.padding = `8px`;
button2.style.margin = `10px`;