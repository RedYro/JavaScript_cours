// // --------------------------
    // 08 FUNCTIONS
// // --------------------------
document.write(`<h1> FONCTIONS </h1>`);

// -------------------------- Fonctions prédéfinies et utilisateurs -------------------------- //
document.write(`<h2> Fonctions prédéfinies et utilisateurs </h2>`);
// JS possède des fonctions "function". Ce sont des morceaux de codes encapsulés qu'on appel au besoin pour exécuter une action précise.
// On distingue les fonctions prédéfinies et utilisateurs

// -------------------------- Fonctions prédéfinies -------------------------- //
document.write(`<h3> Fonctions prédéfinies </h3>`);

// Fonctions prédéfinies sur des nombres //
document.write(`<h4> Exemples sur des nombres </h4>`);
let testNumber = 1.555555555555;
document.write(`typeof "testNumber" = ` + typeof(testNumber) + `<br>`);
let number = testNumber.toFixed(2)
document.write(`typeof "number" = ` + typeof(number) + `<br>`); // "toFixed()" => défini un nombre de chiffre à afficher après la virgule // retourne une chaîne de caractères
document.write(`typeof avec parseFloat "number" = ` + typeof parseFloat(number) + `<br>`);
let testMath = Math.pow(2,3); // puissance 
document.write(`2e+3 = ` + testMath + `<br>`);

let testMathBis = Math.PI; // 3,14
document.write(`PI = ` + testMathBis + `<br>`);

let testMathTer = Math.floor(1.9) // 1 -> va chercher le nombre entier inférieur
document.write(`Math.floor(1.9) = ` + testMathTer + `<br>`);

let testMath4 = Math.max(10,8,14,50,6); // 50 -> retourne la valeur la plus haute
document.write(`Math.max = ` + testMath4 + `<br>`);

let testMath5 = Math.min(10,8,14,50,6); // 6 -> retourne la valeur la plus basse
document.write(`Math.min = ` + testMath5 + `<br>`);

let testMath6 = Math.random(); // retourne un nombre décimal entre 0 et 1, qui change à chaque rafraîchissement de page, c'est un nombre totalement aléatoire
document.write(`Math.random() = ` + testMath6 + `<br>`);

// On veut un nombre entier entre 0 et 100 de façon aléatoire 
let nombre = Math.random() * 100;
document.write(`Math.random() * 100 = ` + Math.round(nombre) + `<br>`);

document.write(`<hr>`);

// Fonctions prédéfinies sur des chaînes de caractères //
document.write(`<h4> Exemples sur des chaînes de caractères </h4>`);
let answer = `Hello`;
document.write(`answer.length = ` + answer.length + `<br>`); // retourne le nombre de cractères 
document.write(`answer.indexOf() = ` + answer.indexOf(`l`) + `<br>`); // 2 // retourne la position de l'argument passé en paramètre
document.write(`answer.toLowerCase() = ` + answer.toLowerCase() + `<br>`); // retourne la chaîne de caractères en miniscules
document.write(`answer.toUpperCase() = ` + answer.toUpperCase() + `<br>`); // retourne la chaîne de caractères en majuscules 

let answer2 = `     some text       `;
document.write(`answer2.trim() = ` + answer2.trim() + `<br>`); // supprime tous les espaces avant et après 
console.log(answer2);
console.log(answer2.trim());

let answer3 = `metro, work, sleep`;
document.write(`answer3.split(',') = ` + answer3.split(`,`) + ` (string => array)` + `<br>`); // retourne un tableau à partir d'une chaîne de caractères 
console.log(answer3.split(`,`));

document.write(`<hr>`);


// -------------------------- Fonctions utilisateurs -------------------------- //
document.write(`<h3> Fonctions utilisateurs </h3>`);
// Un des grands principes en programmation est d'avoir un code "DRY" (Don't Repeat Yourself)
// Les fonctions sont des blocs de codes réutilisables et modifiables à volonté 

// Initialisation d'une fonction //
document.write(`<h4> Exemples de fonctions </h4>`);
document.write(`Syntaxe 1 <br>`)
function myFunction(){
    document.write(`<p> My first function </p>`);
}
// Exécution de la fonction //
myFunction(); // en exécutant une fonction nous exécutons le code qui s'y trouve et déclenchons ses instructions

// Syntaxe alternative pour déclarer une fonction //
// Consiste à assigner une fonction à une variable 
document.write(`Syntaxe 2 <br>`)
let sayHello = function(){
    document.write(`<p> Hello ! </p>`);
}
sayHello();

// Fonction avec paramètre // 
// Afin que notre fonction soit paramétrable, nous allons utiliser des paramètres
document.write(`<h4> Exemples de fonctions avec paramètres </h4>`);
function sayHelloBis(prenom){
    document.write(`<p> Hello ! ${prenom}</p>`);
}
sayHelloBis(`Greg`);
sayHelloBis(`Hada`);
sayHelloBis(`Yro`);

// Vous pouvez mettre autant de paramètres que nécessaire 

// Fonction avec 2 variables en paramètres // 
function sayHelloTer(nom, age){
    document.write(`<p> Hello ! ${nom} you have ${age} years old</p>`);
}
sayHelloTer(`Hada`, 150);
sayHelloTer(`Yro`, 25);

function addition(number, numberBis){
    document.write(`"function addition" : Résultat de l'addition = ${number + numberBis}`);
}
addition(5, 10);

// Protection des fonctions // 
function sayHi(prenomHi = ``){
    document.write(`<p> Hi ! ${prenomHi}</p>`);
}
sayHi(`Yro`);
sayHi();

// Création d'une fonction pour "document.write()" //
function docW1(content, balise){
    if(balise === 1){
        document.write(`<h2>${content}</h2>`);
    } else{
        document.write(`<p>${content}</p>`);
    }
}
// docW1(`Title`, 1);

function docW2(content){
    document.write(`<h3>${content}</h3>`);
}
// docW2(`Title`);

function docW3(content){
    document.write(`<h4>${content}</h4>`);
}
// docW3(`Title`);

// Fonctions avec "return" // retourne une valeur 
docW1(`"function" avec "return"`)
function calculAge(anneeActuelle, anneeNaissance){
    // Pour extraire le résultat et le stocker dans une variable, on utlise un "return"
    return anneeActuelle - anneeNaissance;
    // Tout ce qui se trouve après le "return" ne s'exécute pas 
    // "return" arrête complètement l'exécution d'une fonction
}
let age = calculAge(2023,2001);
docW1(age);

// Il existe une autre façon d'écrire nos fonctions 
docW2(`"Syntaxe alternative" = let myFunctionBis = (x,y) =>{ }`)
docW3(`Exemples`)
let myFunctionBis = (x,y) =>{
    docW1(x + y);
}
myFunctionBis(5,2);

// Fonction fléchée : les accolades ne sont pas nécessaires si il n'y qu'une seule instruction //
let myFunctionTer = (f,r) => f * r;
let result = myFunctionTer(6,5);
docW1(result);

document.write(`<hr>`);

// -------------------------- Portée des variables-------------------------- //
document.write(`<h3> Portée des variables </h3>`);
// En JS, il existe deux espaces de portée différents : espace global et local
    // -> espace global : désigne l'entièreté d'un script, à l'exception de ce qu'il y a à l'intérieur des fonctions
    // -> espace local : désigne l'espace dans une fonction 

    // ATTENTION // Éviter de déclarer plusieurs variables dans différents espaces en utilisant un même nom 

docW3(`Exemples`)
    // 2 variables globales 
let x = 5;
let y = 10;

function portee1() {
    document.write(`Depuis "portee1()", la valeur de 'x' est ${x} et la valeur de 'y' est ${y} `)
}
portee1();

function portee2() {
    // Ici nos variables portent le même nom que les variables globales définies à la ligne 173 et 174, bien qu'elles portent le même nom, dù à leur portée différentes, ce sont 4 entités distinctes. 'x' (ligne 173) != 'x' (ligne 183), 'y' (ligne 174) != 'y' (ligne 184)
    let x = 20;
    let y = 40;
    document.write(`<br> Depuis "portee2()", la valeur de 'x' est ${x} et la valeur de 'y' est ${y} `)
}
portee2()

document.write(`<br> Lorsque je me trouve en dehors d'une fonction (dans l'espace global), la valeur de 'x' est ${x} et la valeur de 'y' est ${y} `)

function portee3() {
    let a = 1;
    let b = 2; 
    document.write(`<br> Depuis "portee3()", la valeur de 'a' est ${a} et la valeur de 'b' est ${b} `)
}
portee3()

// Test = erreur lors de l'exécution du code suivant : 
// document.write(`<br> Depuis "portee3()", la valeur de 'a' est ${a} et la valeur de 'b' est ${b} `)

// "a" ayant une portée locale, la variable n'est pas reconnue et le navigateur nous informe que cette variable n'a pas été définie 

document.write(`<hr>`);
