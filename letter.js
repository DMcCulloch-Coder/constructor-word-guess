class Letter {
    constructor (letter, isGuessed) {
        this.letter = letter;
        this.isGuessed = false;

    }
    wordVisual() {
        if (this.isGuessed) {
            return "_"
        } 
        return this.letter
    }
    checkLetter(guessLetter) {
        if(guessLetter === letter) {
            this.isGuessed = true
        }
    }
}

module.exports = Letter