// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What would you like your Title Name to be?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please input your Table of Contents.',
        name: 'toC',
    },
    {
        type: 'input',
        message: 'Provide some information about Installation please.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide some information about Usage please.',
        name: 'usage',
    },
    {
        type: 'rawlist', 
        choices: ["MIT", "ISC", "APATCHI 2.0", "NONE"],
        message: 'Please choose from one of the following licenses:',
        name: 'licenses',
    },
    {
        type: 'input',
        message: 'Please input your contributions.',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Do you have any questions about this project?',
        name: 'questions',
    },
    {
        type: "input",
        message: "What is your gitHub URL?",
        name: "gitHub",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },

  ])
  .then((response) =>{
    let readme = 
    `#${response.title}
    \n  
    ## Description
    \n
    ${response.description}
    \n
    ## Table of Contents
    * [installation](#installation) 
    \n
    *${response.toC} #${response.toC}
    \n
    ## Installation
    \n
    ${response.install}
    \n
    ## Usage
    \n
    ${response.usage}
    \n
    ## Licenses
    \n
    ${response.licenses}
    \n
    ## Contributions
    \n
    ${response.contributions}
    \n
    ## Questions
    \n
    ${response.questions}
    \n
    ## Email & Github Link
    \n
    ${response.gitHib}
    \n
    ${response.email}
    `;
    fs.writeFile("README.md", readme, err => err ? console.error(err) : console.log("success!"));
  });
