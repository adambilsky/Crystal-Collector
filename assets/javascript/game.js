// This is the Crystal Collector Game

$(document).ready(function() {
    // Generate a random number to serve as the "target"
    // Note: "target" will need parameters so it is large enough that
    // button numbers can be added in a reasonable number of clicks
    var targetNum = Math.floor(Math.random()*20 + Math.floor(Math.random()*20) + Math.floor(Math.random()*20) + 11);
    
    // // Assign four random numbers to serve as hidden button values
    // // Note: random number generators will need parameters so they create
    // // manageable numbers for "target"
    var button1 = Math.floor(Math.random()*11 + 7);
    var button2 = Math.floor(Math.random()*9 + 5);
    var button3 = Math.floor(Math.random()*7 + 3);
    var button4 = Math.floor(Math.random()*5 + 1);
    
    // The current state of wins and losses
    var wins=0;
    var losses=0;

    // The current sum of button clicks
    var currentSum=0;

    // Sets initial conditions to reflect that the currentSum and targetNum are not equal 
    // (in other words, that the game is not yet won)
    var currentSumEqualsTarget = false;
    
    var printStart = function() {
        console.log("button 1: " + button1);
        console.log("button 2: " + button2);
        console.log("button 3: " + button3);
        console.log("button 4: " + button4);
        console.log("target: " + targetNum);
        console.log("current sum: " + currentSum);   
        console.log("Win?: " + currentSumEqualsTarget);
    }

    var resetGame = function() {
        targetNum = Math.floor(Math.random()*20 + Math.floor(Math.random()*20) + Math.floor(Math.random()*20) + 11);
        button1 = Math.floor(Math.random()*11 + 7);
        button2 = Math.floor(Math.random()*9 + 5);
        button3 = Math.floor(Math.random()*7 + 3);
        button4 = Math.floor(Math.random()*5 + 1);    
        currentSum=0;
        currentSumEqualsTarget = false;
        $("#target").html("<h3>Target: " + targetNum + "</h3>");
        $("#currentScore").html("<h3>Current Score: " + currentSum + "</h3>");
        $("#winLoss").html("<h3>Wins: " + wins + " Losses: " + losses + "</h3>");

        printStart();
    }
    resetGame();

    // The following function will run each time a button is clicked to check if the current sum matches the target.
        // Allow for more clicks if the sum is below the "target"
        // Add a "loss" (and an alert?) if the sum exceeds the "target"
        // Add a "win" (and an alert?) if the sum matches the "target"

    var winCheck = function() {
        if (currentSum===targetNum) {
            currentSumEqualsTarget = true;
            console.log(currentSumEqualsTarget);
            wins++;
            alert("you win!");
            console.log("wins "+ wins, "losses " + losses);
            resetGame();
        }

        else if (currentSum>targetNum) {
            alert("you lose!");
            losses++;
            console.log("wins "+ wins, "losses " + losses);
            resetGame();
        }

        else {
            console.log(currentSumEqualsTarget);
        }    
    }
    // Button Function Section
    // Define function for getting button click and adding pre-generated 
        // number to current total
    $("#button-1").on("click", function() {
        currentSum = currentSum + button1;
        $("#currentScore").html("<h3>Current Score: " + currentSum + "</h3>");
        console.log("current sum: " + currentSum);
        winCheck();
    })

    $("#button-2").on("click", function() {
        currentSum = currentSum + button2;
        $("#currentScore").html("<h3>Current Score: " + currentSum + "</h3>");
        console.log("current sum: " + currentSum);
        winCheck();
    })

    $("#button-3").on("click", function() {
        currentSum = currentSum + button3;
        $("#currentScore").html("<h3>Current Score: " + currentSum + "</h3>");
        console.log("current sum: " + currentSum);
        winCheck();
    })

    $("#button-4").on("click", function() {
        currentSum = currentSum + button4;
        $("#currentScore").html("<h3>Current Score: " + currentSum + "</h3>");
        console.log("current sum: " + currentSum);
        winCheck();
    })

})