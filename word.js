var Letter = require("./letter")


var Word = function (word) {
    this.wordString = word,
        this.lettersDisplayed = [],
        this.lettersArray = [],
        this.createLetterObjs = function (letter) {
            this.lettersArray.push(new Letter(letter))
            this.checkLength(this.wordString)
        },
        this.checkLength = function(word) {
            if (this.lettersArray.length === word.length) {
                // console.log(this)
            } else {
                // console.log("Still adding letters to: " + word)
            }
        }, 
        this.reviewGuess = function(guess) {
            
            for ( i = 0; i < this.lettersArray.length; i++ ) {
                this.lettersArray[i].checkGuess(guess)
            }
            console.log(this.lettersArray)
        }
}

// var apples = new Word("apples")

var populateLetters = function (object) {
    for (i = 0; i < object.wordString.length; i++) {
        object.createLetterObjs(object.wordString[i])
    }
}

// populateLetters(apples)

// apples.reviewGuess("e")

module.exports = Word