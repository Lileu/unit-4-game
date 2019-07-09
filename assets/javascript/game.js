//$(document).ready(function() {
// GLOBAL VARIABLES

var currentScore = 0; //#
var winScore = 0; //#
var winCount = 0; //#win-count
var lossCount = 0; //#loss-count

var iconsArr = ["#crystal1","#crystal2","#crystal3","#crystal4"]  //

var goalValue = Math.floor(Math.random() * (120) + 19); //random "#goal-number"
$("#goal-number").text(goalValue);  


var crystalValuesArr = [Math.floor(Math.random() * (11) + 1), Math.floor(Math.random() * (11) + 1), Math.floor(Math.random() * (11) + 1), Math.floor(Math.random() * (11) + 1)];


// FUNCTIONS

// For-loop to iterate through the crystal icons array.
for (i = 0; i < crystalValuesArr.length; i++) {

    // 2. Create a variable named "crystalBtn" equal to the icon
    var crystalBtn = $("<i>");

    crystalBtn.addClass("crystal-icon"); // assigning a new class

    // 4. Then give each "crystalBtn" a data-attribute called "data-crystalValue".
    crystalBtn.attr("data-crystalValue", crystalValuesArr.length[i]);

    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    $("#buttons").append(crystalBtn);

    //console.log($(this));
   // console.log(this);
}
