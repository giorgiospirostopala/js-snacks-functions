/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const names = 'Mario';

// Dichiara la funzione qui.
const tiSaluto = (nome) => {

    const oraCorrente = new Date().getHours();
    
    //dichiaro la variabile "saluto" che costituirà la somma di ${name} + la parolina richiesta in base all'ora
    let saluto;

    if (oraCorrente >= 0 && oraCorrente < 13) {
        saluto = "Buongiorno " + nome;
    } else if (oraCorrente >= 13 && oraCorrente < 17) {
        saluto = "Buon pomeriggio " + nome;
    } else {
        saluto = "Buonasera " + nome;
    }

    return saluto;
}

// Invoca la funzione qui e stampa il risultato in console
let restituisciSaluto = tiSaluto(names);
console.log(restituisciSaluto);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.