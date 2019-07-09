

//* The random number shown at the start of the game should be between 19 - 120.

//* Each crystal should have a random hidden value between 1 - 12.

$(document).ready(function() {
// GLOBAL VARIABLES

// Scores
var currentScore = 0;
var winScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;

var crystalIcons = ["#crystal1","#crystal2","#crystal3","#crystal4"]  

var goalNumber = Math.floor(Math.random() * (120) + 19)
$("#goal-number").text(randomNumber);  


var crystalNumbers = Math.floor(Math.random() * (11) + 1)


// FUNCTIONS



// MAIN PROCESS