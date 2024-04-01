import inquirer from "inquirer";
let todo = [];
let addTask = await inquirer.prompt([
  {
    name: "todo",
    type: "input",
    message: "What you want to add in your TODOS",
  },
  {
    name: "addmore",
    type: "conform",
    message: "Do Tou want to add more",
  },
]);
console.log(addTask.todo);