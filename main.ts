#! usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";


const questions = [{
    question:chalk.greenBright("what is full form in HTML"),
    choices:[
        "A programming language",
        "Hyper Text MarkUp Language",
        "None  of the Above",
    ],
    correct_answer: "Hyper Text MarkUp Language",
},
{
    question:chalk.greenBright("which tag is used to define an order list"),
    choices : ["td","ol","ul"],
    correct_answer: "ol",
},
{
    question:chalk.greenBright("what does HTML do?"),
    choices:["web structure ","app structure","none of them"],
    correct_answer:"web structure",
},


];
async function startQuiz(){

    console.log(
        chalk.yellowBright("\n\t ********Welcome To The Quiz Game ********\n")
    );
    let score = 0;

    for (let question of questions){
const answer = await inquirer.prompt([
    {
        type :"list",
        name : "Answer",
        message : question.question,
        choices : question.choices,
    },
]);

if (answer.Answer === question.correct_answer){
    console.log(chalk.magenta("correct Answer"));
    score++;
}else {
    console.log(chalk.redBright("Incorrect please try again"))
}
    }

    console.log(chalk.cyan("Quiz end: Here are your results"));
    console.log(
        chalk.yellowBright(
            `\n\tyour score is ${score} out of ${questions.length}\n`
        )
    );
}

startQuiz();