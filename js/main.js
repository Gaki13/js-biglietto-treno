//1.Chiedo quanti chilometri vuole percorre il passeggero
const Kilometers = Number(prompt ("Quanti chilometri è lungo il tragitto?"));
//2.Chiedo l'età del passeggero
const age = Number(prompt("Quanti anni ha il passeggero?"))
//3.Calcolo il prezzo del biglietto
let price = Kilometers * 0.21
console.log(price);
//4.SE il passeggero è minorenne applico uno sconto del 20%

//5.SE il passeggerto è over 65 anno applico uno sconto del 60%

//6.Assicurarsi che il prezzo finale venga mostrato in massimo 2 decimali