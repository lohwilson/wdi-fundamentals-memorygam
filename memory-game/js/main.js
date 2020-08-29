
let cards = ['queen', 'queen', 'king', 'king'];

let cardsInPlay =[];

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      } 
};

let cardId = Math.floor(Math.random()*4);

function flipCard(cardId){
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert ("You found a match!");
        } else {
            alert ("Sorry, try again.");
        }
    }
    console.log("User flipped "+ cards[cardId]);
};

// flipCard[0];
// flipCard[2];

cardsInPlay.push(cards[cardId]);
console.log(cardsInPlay);



// const cards = [
//     {
//         rank: "queen",
//         suit: "hearts",
//         cardImage: "images/queen-of-hearts.png"
//     },

//     {
//         rank: "queen",
//         suit: "diamonds",
//         cardImage: "images/queen-of-diamonds.png"
//     },

//     {
//         rank: "king",
//         suit: "hearts",
//         cardImage: "images/king-of-hearts.png"
//     },

//     {
//         rank: "king",
//         suit: "diamonds",
//         cardImage: "images/king-of-diamonds.png"
//     }
// ];



