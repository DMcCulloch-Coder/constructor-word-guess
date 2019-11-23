const inquirer = require('inquirer');
const prompt = require('prompt');
const chalk = require('chalk');

const Word = require('./word');

const wordBank = ['']





console.log(chalk.bgCyan.blackBright.bold("Hello World!")) //test


let guess = process.argv[2]; //test
let temp = new Word("elephant gun"); //test
temp.initArray(); //test
temp.checkWord(guess) //test
console.log(temp.word); //test
console.log(temp.displayWord()); //test