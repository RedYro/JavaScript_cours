// // --------------------------
    // 05 ARRAY
// // --------------------------
document.write(`<h1> Array </h1>`);

// -------------------------- Tableaux indexés -------------------------- //

// Déclarer un tableau indexé 

let monTableau = []; // 1ère façon 
// console.log(monTableau)
// console.log(typeof(monTableau));

let myArray = new Array; // 2ème façon
// console.log(myArray)
// console.log(typeof(myArray));

// "monTableau" et "myArray" sont des tableaux qui peuvent contenir plusieurs informations 

// Affecter des valeurs au tableau, plusieurs méthodes :
// A - //
let nosPrenoms = [`Sancy`, `Choaiab`, `Grégory`];
// Affiche toutes les données de mon tableau "nosPrenoms"
console.log(nosPrenoms);
// B - //
monTableau[0] = `Patrick`;
monTableau[1] = `Sahar`;
monTableau[2] = `Yacine`;
monTableau[3] = `Bechir`;
monTableau[4] = `Justine`;
console.log(monTableau);

// Afficher l'index[3] de "monTableau" ("Bechir")
console.log(monTableau[3]);

// Création de 2 tableaux indéxés //
let listeDePrenom = [`Mana `, ` Laurence `, `Zaahid `];
let listeDeNom = [`HEDDAR `, `WATTIER `, `ALI`];
let annuaire = [listeDePrenom, listeDeNom];
// "annuaire" est un tableau indéxé multidimensionnel
console.log(annuaire);

// Exercice //
// 1st méthode 
document.write(`1st method` + `<br>` + `<br>`);
document.write(annuaire[0][0], annuaire[1][0], `<br>`); // Mana HEDDAR
document.write(annuaire[0][1], annuaire[1][1], `<br>`); // Laurence WATTIER
document.write(annuaire[0][2], annuaire[1][2], `<br>`); // Zaahid ALI

// 2nd méthode 
document.write(`<br>` + `2nd method` + `<br>` + `<br>`);
document.write(annuaire[0][0],annuaire[1][0], `<br>`, annuaire[0][1],annuaire[1][1], `<br>`, annuaire[0][2],annuaire[1][2], `<br>`, `<br>`);

// Tableau multidimensionnel indexé
let tableau = [
    // index 0
    [
        // 0     // 1  // 2
        `prenom`,`nom`,`tel`
    ],
    // index 1
    [
        // 0     // 1       // 2
        `Hasna`, `Godart`, `1514161616`
    ], 
]

// Exercice // Nom : Godart, Prénom : Hasna, Téléphone : 1514161616

document.write(`Exercice`, `<br>`);
document.write(tableau[0][1], ` ` ,`: ` ,tableau[1][1], ` ` ,`, ` , tableau[0][0], ` ` , `: `, tableau[1][0], ` ` ,`, ` , tableau[0][2], ` ` ,`: ` , tableau[1][2],` `, `<br>`, `<br>`);

// Correction //
document.write(`Exercice : correction`, `<br>`);
document.write(`Nom : `, tableau[1][1], `, Prénom : ` , tableau[1][0], `, Téléphone : `, tableau[1][2]);

//--------------------------  Tableax non indéxés -------------------------- //

let coordonnee = {
    prenom : `Grégory`,
    nom : `Lyfoung`,
    age : 21,
    tel : 202020202,
};
// Afficher toutes les infos de mon tableau
console.log(coordonnee);
// Afficher seulement le prénom
console.log(coordonnee[`prenom`]);
console.log(coordonnee.nom);
console.log(coordonnee.tel);

//--------------------------  Tableaux non indéxés multidimensionnel -------------------------- //

// Tableau à 2 dimensions
let contact = [
    {prenom:`Linda`, nom:`Bentouil`, tel:`1010101010`},
    {prenom:`Maryam`, nom:`Cisse`, tel:`1010101010`},
    {prenom:`Rayen`, nom:`Daly`, tel:`1010101010`},
]
console.log(contact);
// Afficher le nom seulement
// console.log(contact[1].nom); // 1st method // 
console.log(contact[1][`nom`]); // 2nd method // 
// Afficher le prénom seulement
console.log(contact[2][`prenom`]);

// Tableau à 4 dimensions
let array4Dimensions = [
    {
        prenom: `Hugo`, 
        nom: `Liegeard`,
        coordonnees: {
            email: `hugo.liegeard@mail.fr`,
            tel: {
                fixe: 1212121212,
                fax: 2323232323,
                port: {
                    prive:4545454545,
                    pro: 5656565656,
                }
            },
            adresse: {
                ville: `Évry`,
                cp: 91000,
                pays: {
                    code: `FR`,
                    nom: `France`,
                }
            },
        }
    }
]

// Afficher l'email seulement //
console.log(array4Dimensions[0][`coordonnees`][`email`]);
console.log(array4Dimensions[0][`coordonnees`][`adresse`][`pays`][`code`]);

// Test //
// console.log(array4Dimensions[0][`prenom`]);
// console.log(array4Dimensions[0][`nom`]);
// console.log(array4Dimensions[0][`coordonnees`][`email`]);
// console.log(array4Dimensions[0][`coordonnees`][`tel`][`fixe`]);
// console.log(array4Dimensions[0][`coordonnees`][`tel`][`fax`]);
// console.log(array4Dimensions[0][`coordonnees`][`tel`][`port`][`pro`]);
// console.log(array4Dimensions[0][`coordonnees`][`tel`][`port`][`prive`]);
// console.log(array4Dimensions[0][`coordonnees`][`adresse`][`ville`]);
// console.log(array4Dimensions[0][`coordonnees`][`adresse`][`cp`]);
// console.log(array4Dimensions[0][`coordonnees`][`adresse`][`pays`][`code`]);
// console.log(array4Dimensions[0][`coordonnees`][`adresse`][`pays`][`nom`]);


//--------------------------  Les propriétés et les méthodes des tableaux -------------------------- //

// "Lenght" => pour connaître le nombre d'élément dans un tableau //
let color = [`Red`, `Blue`, `Yellow`];
console.log(color);
console.log(color.length); // Affiche sur ma console le nombre d'élément dans mon tableau
// Stockage de la valeur dans une variable //
// let longueurTableau = color.length;
// console.log(longueurTableau);


// Pour ajouter un élément à la fin de mon tableau, on utilise la méthode "push()" //
color.push(`Purple`); 
console.log(color) // (4) ['Red', 'Blue', 'Yellow', 'Purple']
console.log(color.length);

// Pour supprimer le dernier élément du tableau, on utilise la méthode "pop()" //
color.pop();
console.log(color) // (3) ['Red', 'Blue', 'Yellow']
console.log(color.length);

// Pour ajouter un (ou des) élément(s) au début du tableau, on utilise la méthode "unshift()" //
color.unshift(`Pink`, `Orange`);
console.log(color) // (5) ['Pink', 'Orange', 'Red', 'Blue', 'Yellow']
console.log(color.length);

// Pour ajouter, supprimer ou remplacer des éléments n'importe où dans le tableau, on utilise la méthode "splice()" //
// "splice()" va prendre 3 arguments :
    // - position de départ : à partir d'où commence le changement
    // - nombre d'éléments à remplacer ou enlever
    // - éléments à ajouter au tableau

// Ajout(s) de valeurs 
color.splice(1, 0, `Brown`, `Black`)
console.log(color) // (7) ['Pink', 'Brown', 'Black', 'Orange', 'Red', 'Blue', 'Yellow']
console.log(color.length);

// Remplacement(s) de valeurs 
color.splice(2, 1, `White`)
console.log(color); // (7) ['Pink', 'Brown', 'White', 'Orange', 'Red', 'Blue', 'Yellow']
console.log(color.length);

// Pour découper un tableau et en créer un autre, on utilise la méthode "slice()" //
// 1st argument : position de départ : où commence la découpe du tableau de départ //
// Si la position passée est un nombre négatif -> le début de la coupe sera calculé à partir de la fin du tableau de départ //
// Si aucune position de départ n'est passée, la découpe commencera depuis le début du tableau de départ //

// 2nd argument : position d'arrêt de la découpe du tableau de départ 
// Si la postion passée est un nombre négatif, alors la fin de la découpe sera calculée à partir de la fin du tableau de départ //
// Si aucune postion de fin n'est passée, alors on récupérera le tableau de départ jusqu'à la fin pour créer notre nouveau tableau //

let joursSemaine = [`Lundi`, `Mardi`, `Mercredi`, `Jeudi`, `Vendredi`, `Samedi`, `Dimanche`];

let joursTravail = joursSemaine.slice(0, 5);
console.log(joursTravail); // Création d'un nouveau tableau, (5) ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
console.log(joursSemaine); // Aucun changement, (7) ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
let joursRepos = joursSemaine.slice(5, 7);
console.log(joursRepos); // (2) ['Samedi', 'Dimanche']
let joursTravail10MentionWeb = joursSemaine.slice(0, 5);
console.log(joursTravail10MentionWeb); // (5) ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']

// Exercice // joursTravailsColombbus
// joursTravail.splice(2, 1);
// let joursTravailColombbus2 = joursTravail
// console.log(joursTravailColombbus2);

// Exercice : correction //
joursTravail.splice(2, 1);
let joursTravailColombbus = joursTravail;
console.log(joursTravailColombbus);

// Pour choisir le séparateur entre les éléménts, on utilise la méthode "join()" : retourne une chaîne de caractères créee en concaténant les différentes valeurs d'un tableau //
let concatColor = color.join(` - `); // Impératif de stocker le string dans une autre variable // 
console.log(color);
document.write(`<br>` + concatColor);

// Pour déterminer si un tableau contient une valeur précise, on utilise la méthode "includes()" : Passe la valeur cherchée en argument dans la méthode //
let languages = [`HTML`, `CSS`, `JS`];
// let verif = languages.includes(`PHP`); // "false"
let verif = languages.includes(`CSS`); // "true"
//  ATTENTION : la méthode vérifie l'écriture, sensible à la casse 
console.log(typeof(verif));
console.log(verif);

// Pour fusionner différents tableaux entre eux pour en créer un nouveau, on utilise la méthode "concat()" //
let totalTableau = languages.concat(color, monTableau, array4Dimensions);
console.log(totalTableau);
// document.write(`<br>` + totalTableau);