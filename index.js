const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
   {
    type: "input",
    messages: "What is your Github username?",
    name:"github",
     

   },
   {
    type: "input",
    messages: "What is your email address?", 
    name:"email",
     

   },
   {
    type: "input",
    messages: "What is your project's name?", 
    name:"title",
    

   },
   {
    type: "input",
    messages: "Please write a short description of your project", 
    name:"description",
     

   },
   {
    type: "input",
    messages: "What kind of license should your project have?",
    choices: ["MIT","APACHE 2.0","GPL 3.0","BSD 3", "None"] ,
    name:"license",
    
   },
   {
    type: "input",
    messages: "What command should be run to onstall dependencies?",  
    name:"installation",
    

   },
   {
    type: "input",
    messages: "What command should be run to run tests?",
    name:"test",
     

   },
   {
    type: "input",
    messages: "What does the user need to know abotu the repo?", 
    name:"usage",
    
   },
   {
    type: "input",
    messages: "What does the user need to know about contributing to the repo?", 
    name:"contributing",
    

   }
];






//tdb fs.writeFileSync(.... filename, data);
function writeToFile(fileName, data,) {
    
        fs.writeFileSync("./markdown.pl"+fileName, data, function(err) {
            if(err) {
                return console.log(err);
            }
         console.log("Successfully wrote: " + fileName);
        })
        
    }
     
    
// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then(function(data) {
        console.log("Generating Readme...");
        writeToFile("markdown.pl", generateMarkdown(data));
    })

}

// function call to initialize program
init();
