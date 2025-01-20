/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letteraDaCercare = "A";

// Dichiara la funzione qui.
function trovaParoleConIniziale(nomi, iniziale){

    let paroleTrovate = [];
    for (let i = 0; i < nomi.length; i++){
        if (nomi[i][0] === iniziale){
            paroleTrovate.push(nomi[i]);
        }
    }

    return paroleTrovate;

}


// Invoca la funzione qui e stampa il risultato in console
let esito = trovaParoleConIniziale(names, letteraDaCercare);
console.log(esito);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]