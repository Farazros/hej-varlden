let hello = "Svampbob"

let manadspeng = 1;
let months = 12;

let summa = manadspeng * months;

console.log("Hello " + hello + "!")
console.log("Du får på " + months + " månader " + "sammanlagt " + summa + " kr!")

let doColorBtn = document.getElementById("doColorBtn")

doColorBtn.addEventListener("click",  () => {

    let setColor = document.getElementById("setColor").value
    console.log("click på knapp! " + setColor)

    document.body.style.backgroundColor = setColor;

})

