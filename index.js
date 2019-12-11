const inquirer = require('inquirer');
const chalk = require('chalk');

const Word = require('./word');

const wordBank = ['pikachu', 'bulbasaur', 'charmander', 'greninja', 'litten', 'vulpix', 'muk', 'jigglypuff', 'magikarp', 'eevee', 'mewtwo']
let unguessedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let selectedWord;
let answer;
let guessesLeft = 10;

function pickAWord () {
    return Math.floor(Math.random() * wordBank.length);
}

function startGame() {
    answer = wordBank[pickAWord()]
    selectedWord = new Word(answer);
    selectedWord.initArray();
    letterInput();

}

function checkWin() {
    if(!selectedWord.displayWord().includes("_")) {
        console.log(chalk.green(`The word was ${answer}`))
        console.log(chalk.green('You Won!!'))
    } else {
        if(guessesLeft) {
            console.log(selectedWord.displayWord());
            console.log(chalk.blue(`Guesses Left: ${guessesLeft}`))
            letterInput()
        } else {
            console.log(chalk.red(`The word was ${answer}`))
            console.log(chalk.red('You Lost!!'))
        }
    }
    
}

function letterInput () {
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a letter",
            validate: function(inputLetter) {
                inputLetter = inputLetter.toLowerCase();
                if(unguessedLetters.indexOf(inputLetter) > -1) {
                    unguessedLetters.splice(unguessedLetters.indexOf(inputLetter), 1);
                    return true;
                }
                unguessedLetters.splice(unguessedLetters.indexOf(inputLetter), 1)
                return 'Please enter a valid letter'
            }
        }
    ]).then((answer) => {
        let temp = selectedWord.displayWord()
        selectedWord.checkWord(answer.guess)
        if(temp === selectedWord.displayWord()) {
            guessesLeft--;
        }
        checkWin();
    })
}

startGame()

