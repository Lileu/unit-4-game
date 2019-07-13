// GLOBAL VARIABLES
// =================================================================================
var goalValue = 0; //"#goal-number
var currentScore = 0; //#progress-number
var winCount = 0; //#win-count
var lossCount = 0; //#loss-count
var crystalIDs = ["crystal1", "crystal2", "crystal3", "crystal4"] 
var crystalValue = 0;
var crystalValuesArr = [];

// FUNCTIONS
// =================================================================================
// Start Game function - generate icons (inc classes and attributes), define game rules and outcomes, logging
var startGame = function () {
    resetGame();

    for (i = 0; i < crystalValuesArr.length; i++) {

        var crystalBtn = $("<i>");
        crystalBtn.addClass("crystal-icon far fa-gem fa-5x");
        crystalBtn.attr("id", crystalIDs[i]);
        crystalBtn.attr("data-crystalValue", crystalValuesArr[i]);

        crystalBtn.on("click", function (clickEvent) {
            var crystalValue = $("#" + clickEvent.target.id).attr("data-crystalValue"); // jquery to directly target the required attribute
            crystalValue = parseInt(crystalValue);
            currentScore += crystalValue;
            $("#progress-number").text(currentScore);

            if (currentScore > goalValue) {
                alert("You lost this round... give it another go!");
                lossCount++;
                $("#loss-count").text(lossCount);
                resetGame();
            } else if (currentScore === goalValue) {
                alert("Congrats! You won this round... see if you can do it again!");
                winCount++;
                $("#win-count").text(winCount);
                resetGame();
            }
        });

        $(".crystalDiv").append(crystalBtn);

    }
    // Logging
    console.log("-----------------------------------");
    console.log("Target Score: " + goalValue);
    console.log("Green Crystal:" + crystalValuesArr[0]);
    console.log("Pink Crystal:" + crystalValuesArr[1]);
    console.log("Blue Crystal:" + crystalValuesArr[2]);
    console.log("Yellow Crystal:" + crystalValuesArr[3]);
    console.log("-----------------------------------");
};

// Reset Game - generate random goal, reset current score, assign values to crystals
var resetGame = function () {
    
    goalValue = Math.floor(Math.random() * (120) + 19); 
    $("#goal-number").text(goalValue);

    currentScore = 0;
    $("#progress-number").text(currentScore);

    setCrystalValues();
};

var setCrystalValues = function () {
    crystalValuesArr = [Math.floor(Math.random() * (12) + 1), Math.floor(Math.random() * (12) + 1),
        Math.floor(Math.random() * (11) + 1), Math.floor(Math.random() * (12) + 1)
    ];
};


// MAIN PROCESS
// =================================================================================
$("#loss-count").text(lossCount);
$("#win-count").text(winCount);
startGame();