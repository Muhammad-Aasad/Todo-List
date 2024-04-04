import inquirer from "inquirer";
let todos = [];
let condition = true;




while(condition){
let addTask = await inquirer.prompt([
  {
    name: "todo",
    type: "input",
    message: "What you want to add in your TODOS",
  },
  {
    name: "addMore",
    type: "conform",
    message: "Do Tou want to add more ",
    default:"y/n"
  },
]);

todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos);
}