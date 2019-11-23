const inquirer = require('inquirer');
const prompt = require('prompt');
const chalk = require('chalk');

const Word = require('./word');





console.log(chalk.bgCyan.blackBright.bold("Hello World!"))



let temp = new Word("elephant"); //test
temp.initArray(); //test
temp.checkWord('e') //test
console.log(temp.word); //test
console.log(temp.displayWord()); //test