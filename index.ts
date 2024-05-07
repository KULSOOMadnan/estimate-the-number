#! /usr/bin/env node 

import inquirer from "inquirer"
import chalk from "chalk";

let irregularNumber = Math.floor(Math.random() * 6 + 1  )
 
console.log(chalk.magenta.italic.bold
("\n\t -----------------------------------------------\n\t\twelcome to the number guessing game \n \t------------------------------------------------\n\t"));

let result = await inquirer.prompt([
    { 
        name: "userEstimateNo",
        type: "number",
        message:chalk.italic.yellow ("please enter the number between 1 to 6: ")
    },
])

if(result.userEstimateNo == irregularNumber){
    console.log(chalk.italic.green.bold("\t\nYayy!, You did it.YOU GUESS the correct number \n\t"));
}else {
    console.log(chalk.italic.red.bold("\t\n Error: Opps!, NOT CORRECT TRY AGAIN\t\n"));

    
}

console.log(chalk.italic.bold.cyan("\t\tThank you!\n\t-----------------------------\n\t\t"));


