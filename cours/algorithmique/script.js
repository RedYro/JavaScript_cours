let myArray = [];
let colors= [`Red`, `Blue`, `Red`, `Blue`];
myArray[0] = `Yro`;
myArray[1] = `Hada`;
myArray[2] = `Lya`;
myArray[3] = `Yato`;
let annuaire = [colors, myArray];
let ulArrayCours = document.querySelector(`.array-js > ul`);
for (let i = 0; i < annuaire[0].length && i <= annuaire[1].length; i++){
    let liArrayCours = document.createElement(`li`);
    liArrayCours.innerText = `${annuaire[0][i]} ${annuaire[1][i]}`; 
    ulArrayCours.appendChild(liArrayCours);
};

let arrayMultiDimensional = [
    [
        `prenom :`,`nom :`,`tel :`
    ],
    [
        `Thao`,`Lau`,`065821245`
    ],
];

let ulArrayCoursBis = document.querySelector(`.array-js > :nth-child(3)`);
let liArrayCoursBis = document.createElement(`li`);
liArrayCoursBis.innerText = `${arrayMultiDimensional[0][1]} ${arrayMultiDimensional[1][1]}, ${arrayMultiDimensional[0][0]} ${arrayMultiDimensional[1][0]}, ${arrayMultiDimensional[0][2]} ${arrayMultiDimensional[1][2]}`;
ulArrayCoursBis.appendChild(liArrayCoursBis);
