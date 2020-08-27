// console.log("Up and running!");

// let cardOne = "queen";
// let cardTwo = "king";
// let cardthree = "queen";
// let cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

let cards = ['queen', 'king', 'queen', 'king'];

let cardsInPlay =[];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

let cardTwo = cards[1];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}


