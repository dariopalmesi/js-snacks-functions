/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.
function initialnames(arraynames) {
    const chartNames = []
    for (let i = 0; i < arraynames.length; i++) {
        const element = arraynames[i]; 
         chartNames.push(element.chartAt(0))
       
    }
    return chartNames
}
// Invoca la funzione qui e stampa il risultato in console

console.log(initialnames(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]