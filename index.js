var randomNumber1 = Math.floor(Math.random() * 6) + 1;      //This gives a random number between 1 and 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png";        //dice1.png - dice6.png

var randomImageSource1 = "Images/" + randomDiceImage1;          //Images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "Images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!!!";
}


document.querySelector(".play-button").addEventListener("click", function () {
    window.location.reload();
})


document.querySelector(".player1-score").innerHTML = "Player 1 Score is " + randomNumber1;

document.querySelector(".player2-score").innerHTML = "Player 2 Score is " + randomNumber2;




