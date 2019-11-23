const inquirer = require('inquirer');
const prompt = require('prompt');
const chalk = require('chalk');

const Word = require('./word');

//const wordBank = ['pikachu', 'bulbasaur', 'charmander', 'greninja', 'litten', 'vulpix', 'muk', 'jigglypuff', 'magikarp', 'eevee', 'mewtwo']
const wordBank = ['litten']
let unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let selectedWord;

function pickAWord () {
    return Math.floor(Math.random() * wordBank.length);
}

function reset() {
    unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

}

function startGame() {
    console.log(chalk.bgCyan.blackBright.bold("Hello World!")) //test

    selectedWord = new Word(wordBank[pickAWord()]);
    selectedWord.initArray();
    letterInput();

}

function checkWin() {
    if(!selectedWord.displayWord().includes("_")) {
        console.log('win')
    } else {
        console.log(selectedWord.word);
        console.log(selectedWord.displayWord());
        letterInput()
    }
    
}

function letterInput () {
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a letter",
            validate: function(inputLetter) {
                if(unguessedLetters.indexOf(inputLetter) > -1) {
                    unguessedLetters.splice(unguessedLetters.indexOf(inputLetter), 1);
                    return true;
                }
                unguessedLetters.splice(unguessedLetters.indexOf(inputLetter), 1)
                return 'Please enter a valid letter'
            }
        }
    ]).then((answer) => {
        selectedWord.checkWord(answer.guess)
        checkWin();
    })
}

startGame()

