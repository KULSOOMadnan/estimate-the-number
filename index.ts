#! /usr/bin/env node 

import inquirer from "inquirer"

let irregularNumber = Math.floor(Math.random() * 6 + 1  )
 
console.log("welcome to the number guessing game ");

let result = await inquirer.prompt([
    { 
        name: "userEstimateNo",
        type: "number",
        message: "please enter the number between 1 to 6: "
    },
])

if(result.userEstimateNo == irregularNumber){
    console.log("Yayy!, You did it.YOU GUESS the correct number ");
}else {
    console.log("Opps!, NOT CORRECT TRY AGAIN");
    
}

