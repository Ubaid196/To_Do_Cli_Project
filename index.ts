#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

async function myBanner() {
  await showBanner("\nToDo App", chalk.blue("Welcome!"), "green");
}
await myBanner();

async function toDos() {
  type answer = {
    yourToDos: string;
  };
  let isValid =true
  var to_Dos: string[] = [];
  while (isValid) {
    let toDoList: answer = await inquirer.prompt([
      {
        name: "yourToDos",
        type: "string",
        message: "Enter your to Dos: ",
      },
    ]);
    const{yourToDos}=toDoList;
    if(yourToDos){
      to_Dos.push(yourToDos)
      isValid=true
    }else {  
      console.log(`Your To Do List`);
      for(let i=0;i<to_Dos.length;i++){
        console.log(to_Dos[i]);
                
      }
      isValid=false
      break;
    }
  }
  return to_Dos;
}
let myToDoList=toDos();


