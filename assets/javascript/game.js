//id's in html to link to js:
//<div id="winningScore">Score to Match:</div>
//<div id="winsTotal">Wins:</p>
//<div id="lossesTotal">Losses:</p>
//<div id="red-crystal">Ruby</div>
//<div id="blue-crystal">Diamond</div>
//<div id="yellow-crystal">Sapphire</div>
//<div id="green-crystal">Emerald</div>
//<div id="totalScore">Your Total Score Is:</div>
//<div id="scoreDisplay">" "</div>

//pseudocode:
//At start of game, there are: 4 crystals displayed on page, 
//Each representing a different point total to add to user score.
//player will click the gems in order to raise their score in hopes of
//matching the winningScore. If player matches their score (totalScore) to
//the winningScore, wins + 1. If player's totalScore goes over winningScore
//total, losses + 1.  Game resets after win/loss is determined, new winningScore
//picked, each gem takes on a different/random value.

//variables to use:
var winsTotal = 0;
var lossesTotal = 0;
var winningScore = 0;
var totalScore = 0;
var rubyPoints = " ";
var diamondPoints = " ";
var sapphirePoints = " ";
var emeraldPoints = " ";

//calls start Game function
startGame();


//function to generate winningScore 
function generateWinningScore(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//function to display winningScore
function updateWinningScore() {
    document.getElementById("winningScore").innerHTML = "Score to Match: " + winningScore;
}
//function to display current player score (scoreDisplay)
function updateTotalScore() {
    document.getElementById("totalScore").innerHTML = " " + totalScore;
}
//function to display winsTotal
function updateWinsTotal() {
    document.getElementById("winsTotal").innerHTML = "Wins: " + winsTotal;
}
//function to display lossesTotal
function updateLossesTotal() {
    document.getElementById("lossesTotal").innerHtml = "Losses: " + lossesTotal;
}
function compare() {
    updateTotalScore();
    if (totalScore === winningScore) {
        winsTotal++;
        updateWinsTotal();
        startGame();
    }
    if (totalScore > winningScore) {
        lossesTotal++;
        updateLossesTotal();
        startGame();
    }
}
//function for starting game: display random winningScore, sets all player totals to 0, chooses
//random points for gems to be added to scoreDisplay
function startGame() {
    winningScore = generateWinningScore(75, 150);
    updateWinningScore();
    updateTotalScore();
    updateWinsTotal();
    updateLossesTotal();
    crystalPoints(1, 12);
    totalScore = 0;
}

//functions to set up values of crystals, random values from 1 to 12 to each crystal
function crystalPoints(min, max) {
    rubyPoints = Math.floor(Math.random() * (max - min + 1) + min);
    diamondPoints = Math.floor(Math.random() * (max - min + 1) + min);
    sapphirePoints = Math.floor(Math.random() * (max - min + 1) + min);
    emeraldPoints = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("Ruby: " + rubyPoints + ", Diamond: " + diamondPoints + ", Sapphire: " + sapphirePoints + ", Emerald: " + emeraldPoints);
}

function rubyButton() {
    totalScore = totalScore + rubyPoints;
    compare();
}

function diamondButton() {
    totalScore = totalScore + diamondPoints;
    compare();
}

function sapphireButton() {
    totalScore = totalScore + sapphirePoints;
    compare();
}

function emeraldButton() {
    totalScore = totalScore + emeraldPoints;
    compare();
}

