const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
   {
    type: "input",
    name:"github",
    messages: "What is your Github username?", 

   },
    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generationg Readme...");
        writeToFile("README.md", generateMarkdown);
    })

}

// function call to initialize program
init();
