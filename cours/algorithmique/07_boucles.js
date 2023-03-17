// // --------------------------
    // 07 BOUCLES
// // --------------------------
document.write(`<h1> BOUCLES </h1>`);

// Les boucles nous permettent d'exécuter une ou plusieurs instructions un certains nombre de fois 
// Une boucle respecte une condition
// Tant que cette condition est respectée, nous allong effectuer des instructions en boucle
// La plupart du temps, on utilise les boucles pour passer sur chaque élément d'un "Array"
// Il y a différents types de boucles, les plus utilisés sont "FOR" et "WHILE"

// -------------------------- TYPE : "FOR" -------------------------- //
document.write(`<h2> Boucle : "FOR" </h2>`);
// Boucle "for"
/* 
    Syntaxe :

    "for"; 3 arguments : 
    - initialisation
    - condition de continuation
    - incrémentation

    for(initialisation; condition de continuation; incrémentation){
        // Code à exécuter 
    }
*/
document.write(`<h3> Exemple 1 </h3>`);
for(let i = 0; i <= 10; i++){
    document.write(`<p> Instruction exécutée : ${i} </p>`);
}
// "i = 0" => initialisation du départ de la boucle à 0 
// "i <= 10" => tant que la valeur de i est inférieure ou égale à 10
// "i++" => incrémentation d'un tour dans la boucle 

document.write(`<hr>`);

document.write(`<h3> Exemple 2 </h3>`);
for(let i = 0; i <= 10; i+=2){
    document.write(`<p> On compte deux par deux : ${i} </p>`);
}

document.write(`<hr>`);

document.write(`<h3> Exemple 3 : Array </h3>`);
// Boucle sur un tableau "array"
let users = [`Sahar `, `Zaahid `, `Bakary `, `Ludovic`];
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
// console.log(users[3])

for(let i = 0; i < users.length; i++){
    document.write(users[i]);
}

document.write(`<hr>`);

// -------------------------- TYPE : "WHILE" -------------------------- //
document.write(`<h2> Boucle : "WHILE" </h2>`); // WHILE -> TANT QUE
// Boucle "while"
/* 
    Syntaxe :

    "while" -> expression qui vaut "true" ou "false" 

    while(expression "true" ou "false"){
        // Tant que l'expression = "true", code à exécuter 
    }
*/
document.write(`<h3> Exemple </h3>`);
let i = 0 // Initialisation d'une variable à 0
while(i <= 5){ // Tant que "i" est inférieur ou égal à 5 à chaque tour de boucle 
    document.write(i + `----`);
    // ATTENTION // Ne pas OUBLIER l'incrémentation
    i++ // À chaque tour de boucle, on incrémente la variable 
}

document.write(`<hr>`);
