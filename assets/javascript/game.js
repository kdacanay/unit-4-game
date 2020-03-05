//id's in html to link to js:
//<div id="winningScore">Score to Match:</div>
//<div id="winsTotal">Wins:</p>
//<div id="lossesTotal">Losses:</p>
//<div id="red-button">Ruby</div>
//<div id="blue-button">Diamond</div>
//<div id="yellow-button">Sapphire</div>
//<div id="green-button">Emerald</div>
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
var scoreDisplay = " ";
var rubyPoints = " ";
var diamondPoints = " ";
var sapphirePoints = " ";
var emeraldPoints = " ";

//calls start Game function
startGame();


//function to generate winningScore 
function generateWinningScore(min,max) {
     return Math.floor(Math.random() * (max-min) + min);
}
//function to display winningScore
function displayWinningScore() {
    document.getElementById("winningScore").innerHTML = "Score to Match: " + winningScore;    
}
//function to display current player score (totalScore)
function updateTotalScore() {
    document.getElementById("scoreDisplay").innerHTML = " " + totalScore;
}

//function for starting game: display random winningScore, sets all player totals to 0, chooses
//random points for gems to be added to totalScore
function startGame() {
    winningScore = generateWinningScore(75, 150);
    displayWinningScore();
    updateTotalScore();
}

