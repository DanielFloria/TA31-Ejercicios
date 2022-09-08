//El array guarda las apariciones de los números del 2 al 12 en orden ascendente
let apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let tiradas = 36000;
let dado1;
let dado2;
let suma;
let min = 1;
let max = 6;

for (let i = 0; i < tiradas; i++) {
    dado1 = Math.round(Math.random() * (max - min)) + min;
    dado2 = Math.round(Math.random() * (max - min)) + min;

    suma = dado1 + dado2;
    
    apariciones[suma - 2]++;
}

console.log(apariciones);