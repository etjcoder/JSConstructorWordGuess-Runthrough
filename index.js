var Word = require("./word")
var inquirer = require("inquirer")

var guessesRemaining = 5;
var wordsToGuess = ["apples", "bananas", "cherries", "doughnuts", "eggplants"];


var randomWordIndex = Math.ceil(Math.random() * 5)

var setGame = function (word) {

    console.log("Game has started!")
    console.log(word)
    for (i = 0; i < word.wordString.length; i++) {
        console.log(word.wordString[i])
        word.createLetterObjs(word.wordString[i])
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
    var currentWordDisplay = []
    var currentWordString = ""
    for (i = 0; i < word.lettersArray.length; i++) {
        currentWordDisplay.push(word.lettersArray[i].characterShown)
        // console.log(word.lettersArray[i].characterShown)
        
    }

    setTimeout(function () {
        console.log(currentWordDisplay)

        if (guessesRemaining > 0) {
            var correct = false
            console.log("You have: " + guessesRemaining + " guesses left!")

            inquirer.prompt([
                {
                    type: "input",
                    name: "letter",
                    message: "Please guess a letter"
                }
            ]).then(function (response) {

                word.reviewGuess(response.letter)
                playGame(word)

            })

        } else if (guessesRemaining < 1) {
            endGame()
        }
    }, 1000)
}


var endGame = function () {

    console.log("GAME IS OVER!!! YOU LOSE!!")

}