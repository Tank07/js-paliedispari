// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// let parola = prompt("Inserisci una parola");
// console.log(`${parola} è la parola inserita`)

// function palindroma (parola) {
//     let splitParola = parola.split("");
    
//     let reverseParola = splitParola.reverse();
    
//     return reverseParola.join("");

// }

// console.log(`La parola inserita dopo essere invertita è ${palindroma (parola)}`)

//     if (parola == palindroma (parola) ) {
//         console.log(`${parola} è una parola palindroma`)
//     } else {
//         console.log(`${parola} non è una parola palindroma`)        
//     }

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"))
console.log(numeroUtente)

let min = 1;
let max = 5;

function numeroComputer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(`Il numero scelto da pc è ${numeroComputer(min, max)}`)

