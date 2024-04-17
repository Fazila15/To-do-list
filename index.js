import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: "What would you like to add to your todo list?",
            type: "input",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more ??",
            default: "true",
        }
    ]);
    todo.push(todoQuestion.firstQuestion);
    console.log(todo);
    condition = todoQuestion.secondQuestion;
}
;
