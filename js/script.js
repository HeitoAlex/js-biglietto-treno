// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.276 € al km)
// va applicato uno sconto del 21% per i minorenni
// va applicato uno sconto del 42% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]


const userKm = prompt ('Inserisci i km da percorrere');
const userAge = prompt ('Inserisci la tua età');
let price = (userKm * 0.276);
let prezzoOutput;

if (userAge < 18){ 
    document.getElementById('output').innerHTML =  ( (price) -  ((price /100) *21) ).toFixed(2);
} else if (userAge >= 65){
    document.getElementById('output').innerHTML =  ( (price) -  ((price /100) *42) ).toFixed(2);
} else {
    document.getElementById('output').innerHTML = price.toFixed(2);
}



// const userDistance = Number.parseFloat(prompt('inserisci la distanza in km'), 10);
// const userAge = Number.parseInt(prompt('inserisci età passeggero'), 10);

// const prezzoAlKm = 0.276;
// let sconto = 0;

// if (userAge >= 65){
//     sconto = 42;
// } else if (userAge){
//     sconto = 21;
// }

// let prezzo = prezzoAlKm * userDistance;
// prezzo - prezzo - ((prezzo /100) + sconto)

// console.log(prezzo.toFixed(2))