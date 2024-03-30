#! /usr/bin/env/node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 1 + 6);
console.log(randomNumber);
// const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-6 : ",
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulation! you Guessed a right number.");
}
else {
    console.log("you guessed wrong number");
}
