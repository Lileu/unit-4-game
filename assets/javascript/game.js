

//* The random number shown at the start of the game should be between 19 - 120.

//* Each crystal should have a random hidden value between 1 - 12.

$(document).ready(function() {
// GLOBAL VARIABLES

// Scores
var currentScore = 0;
var winScore = 0;

// Wins and Losses
var winCont = 0;
var lossCount = 0;

var imagesArr = ["assets/images/blue-crystal.svg","assets/images/yellow-crystal.svg","assets/images/purple-crystal.svg","assets/images/green-crystal.svg"]  
]



// FUNCTIONS
function randomCrystal
Math.floor(Math.random() * (12 - 1)) + 1


// MAIN PROCESS