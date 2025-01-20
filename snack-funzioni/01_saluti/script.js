/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function funzioneSaluto(nome) {
    return "Ciao " + nome;
}


// Invoca la funzione qui e stampa il risultato in console
const saluto = funzioneSaluto(userName);
console.log(saluto);


//Risultato atteso se si passa 'Mario': // ciao Mario
