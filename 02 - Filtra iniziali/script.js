/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const chartstr = []
function arraystring(arraychart, chartA) {
    for (let i = 0; i < arraychart.length; i++) {
        const element = arraychart[i];
        if (chartstr === chartA) {

            chartstr.push(element)
        }
    }
    return chartstr
}

// Invoca la funzione qui e stampa il risultato in console

console.log(arraystring(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]