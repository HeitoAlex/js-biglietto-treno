// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.276 € al km)
// va applicato uno sconto del 21% per i minorenni
// va applicato uno sconto del 42% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]


const userKm = prompt ('Inserisci i km da percorrere');
const userAge = prompt ('Inserisci la tua età');
let price = (userKm * 0.276);
price.toFixed(2)

if (userAge < 18){ 
    document.getElementById('output').innerHTML = (price) - (price /100) *21
} else if (userAge >= 65){
    document.getElementById('output').innerHTML = (price) - (price /100) *42
} else {
    document.getElementById('output').innerHTML = (price)
}


