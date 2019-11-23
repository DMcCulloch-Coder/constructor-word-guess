class Letter {
    constructor (letter) {
        this.letter = letter;
        this.isGuessed = false;

    };
    wordVisual() {
        if (this.letter === " ") {
            return " "
        }
        if (this.isGuessed) {
            return this.letter
        }
        return "_"
    }
    checkLetter(guessLetter) {
        if(guessLetter === this.letter || this.letter === " ") {
            this.isGuessed = true
        }
    }
}

module.exports = Letter