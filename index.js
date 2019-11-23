const inquirer = require('inquirer');
const prompt = require('prompt');
const chalk = require('chalk');

const Word = require('./word');

const wordBank = ['pikachu', 'bulbasaur', 'charmander', 'greninja', 'litten', 'vulpix', 'muk', 'jigglypuff', 'magikarp', 'eevee', 'mewtwo']
let unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let selectedWord;

function pickAWord () {
    return Math.floor(Math.random() * wordBank.length);
}

function reset() {
    unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

}

function letterInput () {
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a letter",
            validate: function(inputLetter) {
                if(unguessedLetters.indexOf(inputLetter) > -1) {
                    ungessedLetters.splice(unguessedLetters.indexOf(inputLetter), 1)
                    return true;
                }
                ungessedLetters.splice(unguessedLetters.indexOf(inputLetter), 1)
                return 'Please enter a valid letter'
            }
        }
    ]).then((answer) => {
        temp.checkWord(answer) //test
        console.log(temp.word); //test
        console.log(temp.displayWord()); //test
    })
}

function startGame() {
    selectedWord = new Word(wordBank[pickAWord()]);
    selectedWord.initArray();
    letterInput();

}


console.log(chalk.bgCyan.blackBright.bold("Hello World!")) //test

startGame()

