#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

let todo: any = [];
let condition = true;

while(condition)
{let todoQuestion = await inquirer.prompt([
    {
        name: "firstQuestion",
        message: `${chalk.yellow.bold("What would you like to your to do list: ")}`,
        type: "input",
    }
]);

if (todoQuestion.firstQuestion === ""){
    console.log(chalk.red.italic('Sorry!!! You forgot to enter anything in your todo list.'))
}else {
    todo.push(todoQuestion.firstQuestion);
    console.log(todo);
}

let answer = await inquirer.prompt(
    {
        name: "option",
        type: "list",
        message: `${chalk.cyan.bold("Select an option: ")}`,
        choices: ["Add More", "Exit"]
    }
);

if (answer.option === "Exit"){
    condition = false
    console.log(chalk.red.bold("Good Bye!!! \nThanks for trying my todo list. \nRegards Fazila Malik"))
};

};



