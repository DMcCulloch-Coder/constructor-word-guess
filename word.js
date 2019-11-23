const Letter = require('./letter');

class Word {
    constructor (word) {
        this.word = word;
    }
    initArray() {
        let tempArr = [];
        let splitArr = this.word.split('');
        for (let i = 0; i < splitArr.length; i++) {
            let tempValue = new Letter (splitArr[i]);
            tempArr.push(tempValue);
        }
        this.word = tempArr;
    }
    displayWord() {
        let tempArr = [];
        for (let i = 0; i < this.word.length; i++) {
            tempArr.push(this.word[i].wordVisual());
        }
        let temp = tempArr.join('');
        return temp;
    }
    checkWord(guessedLetter) {
        for (let i = 0; i < this.word.length; i++) {
            this.word[i].checkLetter(guessedLetter);
            
        }
    }
}

module.exports = Word;