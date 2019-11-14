var Letter = require("./letter")


var Word = function(letterArr) {
    this.wordString = "",
    this.letters = letterArr,
    this.displayWord = function(letter) {
        
        var word = ""
        for (i = 0; i < letterArr.length; i++) {
            word += letterArr[i]
            if (i === letterArr.length - 1) {
            this.wordString = word
            console.log(this)
            }
        }
    }
    
}