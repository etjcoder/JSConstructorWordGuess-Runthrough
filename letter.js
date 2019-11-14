
function Letter(str) {
    this.character = str,
    this.characterShown = "_",
    this.guessed = false,
    this.beenGuessed = function() {
        if (this.guessed === false) {
            this.characterShown = "_"
        } else {
            this.characterShown = str
        }
    }
    this.checkGuess = function(guess) {
        if (guess === this.character) {
            this.guessed = true;
            this.characterShown = str
            console.log("Your guess of: " + guess + " was correct!")
        } else {
            console.log("That was an incorrect guess!")
        }
    }
}

var a = new Letter("a")

console.log(a)

module.exports = Letter