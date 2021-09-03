const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { rejects } = require("assert");
const { resolve } = require("path");

// array of questions for user
const questions = [
   {
    type: "input",
    name:"github",
    messages: "What is your Github username?", 

   },
   {
    type: "input",
    name:"email",
    messages: "What is your email address?", 

   },
   {
    type: "input",
    name:"title",
    messages: "What is your project's name?", 

   },
   {
    type: "input",
    name:"description",
    messages: "Please write a short description of your project", 

   },
   {
    type: "input",
    name:"license",
    messages: "What kind of license should your project have?",
    choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3", "None"] 

   },
   {
    type: "input",
    name:"installation",
    messages: "What command should be run to onstall dependencies?", 

   },
   {
    type: "input",
    name:"test",
    messages: "What command should be run to run tests?", 

   },
   {
    type: "input",
    name:"usage",
    messages: "What does the user need to know abotu the repo?", 

   },
   {
    type: "input",
    name:"contributing",
    messages: "What does the user need to know about contributing to the repo?", 

   }
];


// function to write README file


//tdb fs.writeFileSync(.... filename, data);
function writeToFile(fileName, data, path) {
    return new Promise((fileName,data,path) => {
        fs.writeFileSync(path(fileName),data, path);
        
        
       if (path) {
           rejects(path);
           return;
       }
    });
}

// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating Readme...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })

}

// function call to initialize program
init();
