var Word = require("./word")
var inquirer = require("inquirer")

var guessesRemaining = 5;
var blanksRemaining = 0;
var wordsToGuess = ["apples", "bananas", "cherries", "doughnuts", "eggplants"];
var firstTurn = true

var randomWordIndex = Math.ceil(Math.random() * 5)

var setGame = function (word) {

    console.log("Game has started!")
    console.log(word)
    for (i = 0; i < word.wordString.length; i++) {
        console.log(word.wordString[i])
        word.createLetterObjs(word.wordString[i])
        blanksRemaining++
    }
    setTimeout(function () {
        console.log("Starting game...")
        playGame(word)
    }, 1000)
}

var createNewWord = function (wordFromArr) {
    var newWord = new Word(wordFromArr)
    setGame(newWord)
}

createNewWord(wordsToGuess[randomWordIndex])


var playGame = function (word) {
    console.log("New Round!")
    console.log("Last Round Blanks: " + blanksRemaining)
    var currentWordDisplay = []
    var currentWordString = ""
    var numBlanks = 0;
    // var numBlanksTally = function() {
    //     for (i = 0; i < currentWordDisplay.length; i++) {
    //         if (currentWordDisplay[i] === "_") {
    //             numBlanks++
    //         }
    //     }
    // }
    for (i = 0; i < word.lettersArray.length; i++) {
        currentWordDisplay.push(word.lettersArray[i].characterShown)
        // console.log(word.lettersArray[i].characterShown)
        if(word.lettersArray[i].characterShown === "_") {
            numBlanks++
        }
        // console.log(numBlanks)
    }

    var checkBlanks = function() {
        if (numBlanks === blanksRemaining) {
            console.log("No blanks changed, so your guess was wrong")
                guessesRemaining--
             
        } else if (numBlanks === 0) { 
            endGameWin()

        } else {
            console.log("Blanks changed from: " + blanksRemaining + " to " + numBlanks)
            blanksRemaining = numBlanks
        }
    }

    setTimeout(function () {
        if (firstTurn === false) {
        checkBlanks()
        }
        console.log(currentWordDisplay)

        if (guessesRemaining > 0) {
            console.log("You have: " + guessesRemaining + " guesses left!")

            inquirer.prompt([
                {
                    type: "input",
                    name: "letter",
                    message: "Please guess a letter"
                }
            ]).then(function (response) {

              word.reviewGuess(response.letter)
              if (firstTurn === true ) { 
                  firstTurn = false
              }
              playGame(word)

            })

        } else if (guessesRemaining < 1) {
            endGame()
        }
    }, 1000)
}

var checkCorrect = function(status) {
    if (status === false) {
        console.log("That guess didn't match anything")
        guessesRemaining--
    }
}


var endGame = function () {

    console.log("GAME IS OVER!!! YOU LOSE!!")

}

var endGameWin = function() {

    console.log("CONGRATULATIONS YOU ARE A WINNER!!")

}