/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui. Deve:
//  - accettare una stringa
//  - riconoscere e contare quante vocali contiene
//  - restituire il numero di vocali contate

function trovaNumeroVocali(stringa){
    // definisco l'array con le vocali
    const vocali = ["a", "e", "i", "o", "u"];
    // definisco la variabile che indicherà il numero di vocali contate, a partire da zero
    let vocaliContate = 0;

    // uso un ciclo for() per controllare ogni lettera della stringa
    for (let i = 0; i < stringa.length; i++){
        // uso if per verificare se la lettera in questione è una vocale; se si la conteggio
        if (vocali.includes(stringa[i])){
            vocaliContate++;
        }
    }

    return vocaliContate;
}


// Invoca la funzione qui e stampa il risultato in console
let esitoFunzione = trovaNumeroVocali(word);
console.log(`Le vocali contenute in ${word} sono ${esitoFunzione}`);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)