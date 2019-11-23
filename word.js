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
        console.log(temp);
    }
    
    //fUNCTION WITH CHECK LETTER
}


let temp = new Word("elephant"); //test
temp.initArray(); //test
console.log(temp.word); //test
temp.displayWord(); //test

module.exports = Word;