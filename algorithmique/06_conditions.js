// // --------------------------
    // 06 CONDITIONS
// // --------------------------

// -------------------------- Conditions et opérateurs de comparaison -------------------------- //

document.write(`<h2> Opérateurs logiques </h2>`);
/*
    Opérateurs de comparaison pour structure traditionnelle 

    ">" = strictement supérieur
    "<" = strictement inférieur
    ">=" = supérieur ou égal
    "<=" = inférieur ou égal
    "==" = faire une comparaison de valeur // permet de vérifier si 2 VALEURS de 2 variables sont identiques
    "===" = comparaison de valeur ET de type // signifie "STRICTEMENT ÉGAL À" // permet de vérifier la VALEUR et le TYPE (string, number, etc.)
    "!=" = différent "de" en Valeur 
    "!==" = strictement différent de (VALEUR et TYPE)
 */

let br = `<br>`;

let nb1 = 1, nb2 = 2;
document.write(`" > " `);
// document.write(br);
document.write(nb1 > nb2); // false
document.write(br);
document.write(`" < " `);
// document.write(br);
document.write(nb1 < nb2); // true
document.write(br);
document.write(`" >= " `);
// document.write(br);
document.write(nb1 >= nb2); // false
document.write(br);
document.write(`" <= " `);
// document.write(br);
document.write(nb1 <= nb2); // true
document.write(br);

let nb3 = 1, nb4 = `1`;
document.write(`" == " `);
// document.write(br);
document.write(nb3 == nb4); // true
document.write(br);
document.write(`" === " `);
// document.write(br);
document.write(nb3 === nb4); // false => comparaison de type et de valeur, ils ont bien la même valeur mais pas le même type 
document.write(br);

/*
    Opérateurs logiques

    "&&" = AND
    "||" = OR
    "!" = NOT    
 */


document.write(`<h3> Opérateur : "&&" = AND </h3>`);
/*
    Opérateur : "&&" = AND

    Évalue le résultat en "TRUE" si les expressions sont "TRUE".
    Si 1 des 2 expressions testée est "FALSE" alors le résultat sera égal à "FALSE"
 */
document.write(`" true && true " = `);
document.write(true && true);
document.write(br);
document.write(`" true && false " = `);
document.write(true && false);
document.write(br);
document.write(`" false && false " = `);
document.write(false && false);
document.write(br);

/* 
    (A) && (B)
    => si A est "FALSE" et B est "TRUE" = FALSE
    => si A est "TRUE" et B est "FALSE" = FALSE
    => si A est "FALSE" et B est "FALSE" = FALSE
    => si A est "TRUE" et B est "TRUE" = TRUE
*/


document.write(`<h3> Opérateur : "||" = OR </h3>`);
/* 
    Opérateur : "||" = OR

    Évalue le résultat en "TRUE" si 1 ou 2 expressions sont "TRUE".
    Si les 2 expressions sont "FALSE" alors le résultat sera "FALSE"
*/
document.write(`" false || false " = `);
document.write(false || false); // FALSE
document.write(br);
document.write(`" true || false " = `);
document.write(true || false); // TRUE
document.write(br);
document.write(`" true || true " = `);
document.write(true || true); // TRUE
document.write(br);
document.write(`" false || true " = `);
document.write(false || true); // TRUE
document.write(br);

/* 
    (C) || (D)
    => si A est "FALSE" et B est "FALSE" = FALSE
    => si A est "TRUE" et B est "FALSE" = TRUE
    => si A est "FALSE" et B est "TRUE" = TRUE
    => si A est "TRUE" et B est "TRUE" = TRUE
*/


document.write(`<h3> Opérateur : "!" = NOT </h3>`);
/* 
    Opérateur : "!" = NOT

    Transforme ce qui est "TRUE" en "FALSE" et ce qui est "FALSE" en "TRUE"
*/
document.write(`" !true " = `);
document.write(!true); // FALSE
document.write(br); 
document.write(`" !false " = `);
document.write(!false); // TRUE
document.write(br);


// -------------------------- Structure conditionnelle -------------------------- //
document.write(`<h2> Structure conditionnelle "if", "else", "else if"</h2>`);
// -------------------------- Syntaxe -------------------------- //
if(true){
    /* Code si condition = "TRUE" */
} else{
    /* Code si condition = "FALSE" */
}

if(true){
    /* Code si condition = "TRUE" */
} else if(true){
    /* Code si condition = "TRUE" */
} else{
    /* Code si toutes les conditions = "FALSE" */
}

let a = 10, b = 5, c = 2;
document.write(`<h4> " (a > b) " </h4>`); 
if(a > b){ // si "a" est supérieur à "b" => si condition = TRUE alors JS applique ce code
    document.write(`<p> "a" est supérieur à "b" </p>`);
} else { // sinon si condtion = FALSE alors JS applique ce code
    document.write(`<p> "a" est inférieur à "b" </p>`);
}

document.write(`<h4> " (a < b) " </h4>`);
if(a < b){
    document.write(`<p> "b" est supérieur à "a" </p>`);
} else {
    document.write(`<p> "b" est inférieur à "a" </p>`);
}

// "if" with "&&"
document.write(`<h4> " ' if ' with ' && ' " </h4>`);
if((a > b ) && (b > c)){
    document.write(`<p> OK pour les deux conditions </p>`);
} else {
    document.write(`<p> Une des deux conditions est fausse </p>`);
}

// "if" with "||"
document.write(`<h4> " ' if ' with ' || ' " </h4>`); 
if((a == 9 ) || (b < 9)){ // a = FALSE , b = TRUE ; (FALSE + TRUE = TRUE)
    document.write(`<p> OK pour les deux conditions </p>`);
} else {
    document.write(`<p> Les deux conditions sont fausses </p>`);
}

// "if" / "else if " / "else"
document.write(`<h4> "if" / "else if " / "else" </h4>`); 
document.write(`<h4> Exemple 1 </h4>`); 
if(a == 8){ // false
    document.write(`<p> "a" est égal à 8 </p>`);
} else if(a != 10) { // false
    document.write(`<p> "a" est différent de 10 </p>`);
} else { // true
    document.write(`<p> "a" est faux </p>`);
}

document.write(`<h4> Exemple 2 </h4>`); 
if(a == 10){ // true
    document.write(`<p> "a" est égal à 10 </p>`);
} else if(a > b) { // true
    document.write(`<p> "a" est supérieur à "b" </p>`);
} else { 
    document.write(`<p> "a" est faux </p>`);
}

// Avec seulement des "if", les conditions sont toutes exécutées et dès que l'une des conditions est vrai alors le résultat s'affiche // 
document.write(`<h4> Exemple 3 </h4>`);
if(a == 10){ // true
    document.write(`<p> "a" est égal à 10 </p>`);
}
if(a > b){ // true
    document.write(`<p> "a" est supérieur à "b" </p>`);
}
if(a < b){ // false // résultat non affiché 
    document.write(`<p> "b" est inférieur à "b" </p>`);
}

// "if" avec variable "FALSE" // 

let test = 3 < 1; // false
document.write(`<h4> "if" avec variable "FALSE" </h4>`);
document.write(`<h4> Exemple 1 : " test = 3 < 1 " </h4>`);
document.write(test);
document.write(`<h4> Exemple 2 : " (!test) " </h4>`);
if(!test){ // "!" (inversion de la valeur 'boolean') false to true = affichage du code 
    document.write(`<p> Exécution du code </p>`);
}


// -------------------------- Condition ternaire -------------------------- //

// La condition ternaire nous permet de faire une vérification mais seulement sur une ligne
document.write(`<h2> Condition ternaire </h2>`); 
let meteo = `pluie`;
document.write((meteo == `pluie`) ? `<p> Prenez un parapluie </p>` : `<p> Mettez un short </p>`);
// Est-ce que "meteo" = "pluie" (? = if) si oui, affichage message "Prenez un parapluie", sinon (: = else) affichage message "Mettez un short".S

let monAge = 21;
let isMajor = (monAge >= 18) ? `<p> Vous êtes majeur </p>` : `<p> Vous n'êtes pas majeur </p>`; 
document.write(isMajor);

// age < 13 -> Rentres chez toi petit
// age < 18 -> Tu n'as pas le droit de boire 
// Tu as le droit de boire

// let age = parseFloat(prompt(`Votre âge`));
// let ageResult = (age <= 13) ? `<p> Rentres chez toi petit </p>` : (age >= 18) ? `<p> Tu as le droit de boire </p>` : `<p> Tu n'as pas le droit de boire </p>`
// document.write(ageResult);

// -------------------------- Condition Switch -------------------------- //

// La condition switch répond à des cas bien spécifiques 
// Vous devez écrire chaque condition à l'intérieur d'un "case"
// Et sortir de ce "case" par un "break" (stop la condition) 
document.write(`<h2> Condition switch </h2>`); 
let valeur = 5 + 3; 
switch(valeur){
    case 5 :
        document.write(`La valeur est égale à 5`);
        break
    case 8 :
        document.write(`La valeur est égale à 8`);
        break
    case 12 :
        document.write(`La valeur est égale à 12`);
        break
    default :
        document.write(`La valeur est indéterminée`);
        break
}   
