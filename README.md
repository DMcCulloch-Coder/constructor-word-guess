# constructor-word-guess

---------------------------
Purpose:
-Create a hangman game using constructors in Javascript.

---------------------------
Instructions:
-Letter.js and word.js aren't used directly, letter contains the constructor that interacts with the individual letters and is only called by the word.js file.
-Word.js file contains the constructor that deals with the words as a whole and calls the letter.js file.  This is called in the last js file, index.js which is the file we use to run the program.

-Once you have downloaded the directory, in the terminal run "npm install" to get the node_modules folder.
-Then run "node index.js", which will initiate the program.
-Inquirer will prompt you to enter a letter, but won't accept non-letters or previously guessed letters.
-Once you have guessed the word or run out of guessed the game will end and let you know the word you were working on.

---------------------------
Tech Used:
-Used Node js to write the backend.
-Used npm packages for user interface.
-These packages were:
    -inquirer (to format questions and answers)
    -Chalk (to color the command line)

---------------------------
