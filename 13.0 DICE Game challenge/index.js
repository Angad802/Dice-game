
function rollDice() {
    var randomnumber1 = Math.floor( Math.random() *6) + 1;//1-6

var randomimagesource1 = "images/dice" + randomnumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomimagesource1);

var randomnumber2 = Math.floor( Math.random() * 6) + 1;

var randomimagesource2 = "images/dice" + randomnumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomimagesource2);

if(randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "👑 player 1 wins!"
} else if(randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "👑 player2 wins!"
} else {
    document.querySelector("h1").innerHTML = "📍Draw!"
}
}
document.querySelector(".btn").addEventListener("click", rollDice);