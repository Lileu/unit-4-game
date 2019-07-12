// GLOBAL VARIABLES
var goalValue = 0; //"#goal-number
var currentScore = 0; //#progress-number
var winCount = 0; //#win-count
var lossCount = 0; //#loss-count
var crystalIDs = ["crystal1", "crystal2", "crystal3", "crystal4"]
var crystalValue = 0;
var crystalValuesArr = [];

// FUNCTIONS
// =================================================================================
//start game function
var startGame = function () {
    //reset current score
    currentScore = 0;
    //assign random goal number
    goalValue = Math.floor(Math.random() * (120) + 19); //random "#goal-number" values between 19-120
    $("#goal-number").text(goalValue); //update 'Goal number:' on UI

    //create array of four random crystal values between 1-12
    crystalValuesArr = [Math.floor(Math.random() * (12) + 1), Math.floor(Math.random() * (12) + 1),
        Math.floor(Math.random() * (11) + 1), Math.floor(Math.random() * (12) + 1)
    ];

    // For-loop to iterate through the crystal icons array.
    for (i = 0; i < crystalValuesArr.length; i++) {
        // 2. Create a variable named "crystalBtn" equal to the icon
        var crystalBtn = $("<i>");
        crystalBtn.addClass("crystal-icon far fa-gem fa-5x"); // assigning a new class
        //crystalBtn.attr(id, crystalValuesArr[i].length);

        crystalBtn.attr("id", crystalIDs[i]);
        // 4. Then give each "crystalBtn" a data-attribute called "data-crystalValue".
        var crystalValue = crystalValuesArr[i];
        crystalBtn.attr("data-crystalValue", crystalValuesArr[i]);
        
        // and parse as an integer
       // crystalValue = parseInt(crystalValue);
        // 6. Finally, append each "crystalBtn" to the ".far" div 
        $(".crystalDiv").append(crystalBtn);

        //retrieve the random number assigned to the variable and declare as crystalValue variable
        
        console.log("-----------------------------------");
        console.log("Target Score: " + goalValue);
        console.log("Green Crystal:" + crystalValue);
        console.log("Pink Crystal:" + crystalValue);
        console.log("Blue Crystal:" + crystalValue);
        console.log("Yellow Crystal:" + crystalValue);
        console.log(crystalValuesArr);
        console.log("-----------------------------------");
    }
};



// ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
// =================================================================================

// 7. Create an "on-click" event attached to the ".letter-button" class.
$(".crystal-icon").on("click", function (clicked) {
    //add the crystal value to the current score
    currentScore += crystalValue;
    //update the 'Your Progress' number on UI
    $("#progress-number").text(currentScore);
    
    if (currentScore > goalValue) {
        alert("You lost this round... give it another go!");
        
        lossCount++;

        $("#loss-count").text(lossCount);
    } else if (currentScore === goalValue) {
        alert("Congrats! You won this round... see if you can do it again!");
        
        winCount++;

        $("#win-count").text(winCount);
    }
    
});
startGame();