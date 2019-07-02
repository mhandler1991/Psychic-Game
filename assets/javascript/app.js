// * * Game * * 
  
funciton startGame() {

    // Variables //
    var playerWins = 0;
    var playerLoses = 0;
    var playerGuessesLeft = 5;
    var playerGuesses = 0;
    var letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "x",
        "y",
        "z"
    ];
    var userInput = event.key.toLocaleLowerCase();
    var computerChoice = letters[Math.floor(mamth.random()*letters.length)];

        //Display Starting Board & Messages
        document.getElementById("startMessage").innerHTML = "You have 5 gueses, lets begin...";
        document.getElementById("playerWins").innerHTML = 0;
        document.getElementById("playerLoses").innerHTML = 0;
        document.getElementById("playerGuessesLeft").innerHTML = 5;
        document.getElementById("playerGuesses").innerHTML = "";

        // Determine if player guess is a match
        if (computerChoice = userInput){
            // + Win
            playerWins++;
            // Print Win Value
            document.getElementById("playerWins").innerHTML = playerWins;
            // Update Guesses Left
            playerGuessesLeft = 5;
            // Print Guesses Left
            document.getElementById("playerGuessesLeft").innterHTML = playerGuessesLeft;

        }
        else {
            // - Guesses Left
            playerGuessesLeft--;
            // Print Guesses Left
            document.getElementById("playerGuessesLeft").innerHTML = playerGuessesLeft;
            // Update Guesses so Far
            playerGuesses = playerGuesses + "; " + userInput
            // Print Guesses so Far
            document.getElementById("playerGuesses").innerHTML = playerGuesses;
        }

        if (playerGuessesLeft = 0){
            // + Loses
            playerLoses--;
            // Print Loss 
            document.getElementById("playerLoses").innerHTML = playerLoses;
        }
        else {

        }
}


// Reset Means: Update Computer Guess, Update Guesses Left, Update Guesses so far




// document.writeln(); << this adds
// document.onkeyup = function (event) {
// Object.addEventListener("click", startGame);