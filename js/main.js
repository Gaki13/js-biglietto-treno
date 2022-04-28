//1.Chiedo quanti chilometri vuole percorre il passeggero
const Kilometers = Number(prompt ("Quanti chilometri è lungo il tragitto?"));
//2.Chiedo l'età del passeggero
const age = Number(prompt("Quanti anni ha il passeggero?"))
//3.Calcolo il prezzo del biglietto
let price = Kilometers * 0.21
price = price.toFixed(2);
console.log(price);
//4.SE il passeggero è minorenne applico uno sconto del 20%
//5.SE il passeggerto è over 65 anno applico uno sconto del 40%
//6.SE l'età del passeggero è compresa tra 18 e 65 non applico nessuno sconto
if (age < 18 ) {
    let discountChilds = price * 0.2
    let discountPrice = price - discountChilds;
    discountPrice = discountPrice.toFixed(2);
    document.getElementById("final-price").innerHTML = discountPrice + "€";
} else if ( age >= 65 ){
    let discountOlds = price * 0.4
    let discountPrice = price - discountOlds
    discountPrice = discountPrice.toFixed(2);
    document.getElementById("final-price").innerHTML = discountPrice + "€";
} else {
    document.getElementById("final-price").innerHTML = price + "€";
}

//7.Assicurarsi che il prezzo finale venga mostrato in massimo 2 decimali