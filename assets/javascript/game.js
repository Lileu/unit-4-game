//$(document).ready(function() {
// GLOBAL VARIABLES

var currentScore = 0; //#progress-number
var winScore = 0; //#goal-number
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

    // 6. Finally, append each "crystalBtn" to the ".far" div 
    $(".far").append(crystalBtn);

}


 // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
      // =================================================================================

      // 7. Create an "on-click" event attached to the ".letter-button" class.
      $(".crystal-icon").on("click", function() {

        //retrieve the random number assigned to the variable and declare as crystalValue variable
        var crystalValue = ($("this").attr("data-crystalValue"));
        // and parse as an integer
        crystalValue = parseInt(crystalValue);
        //add the crystal value to the current score
        currentScore += crystalValue;
        //updating the 'Your Progress' number
        $("#progress-number").text(currentScore);
        //logging
        console.log(crystalValue);
        console.log(currentScore);
    })

   