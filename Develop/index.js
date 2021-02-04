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
        message: "What is your gitHub repo-name?",
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
    \n## Description
    \n
    ${response.description}
    \n
    \n## Table of Contents
    \n* [installation](#installation)  
    \n* [Usage](#Usage)
    \n* [Licenses](#Licenses)  
    \n* [Contributions](#Contributions)  
    \n* [Questions](#Questions)  
    \n* [Github](#Github)
    \n* [Email](#Email)
    *${response.toC} #${response.toC}
    \n
    \n## Installation
    \n
    ${response.install}
    \n
    \n## Usage
    \n
    ${response.usage}
    \n
    \n## Licenses
    \n
    ${response.licenses}
    \n![GitHub license](https://img.shields.io/badge/license-${response.licenses}-blue.svg)
    \n
    \n## Contributions
    \n
    ${response.contributions}
    \n
    \n## Questions
    \n
    ${response.questions}
    \n
    \n## Github 
    \n
    ${response.gitHub}
    \n! [Github Profile](https://github.com/${response.gitHub})
    \n
    \n## Email 
    \nPlease reach me at: ${response.email} with any questions.

    `;
    fs.writeFile("README.md", readme, err => err ? console.error(err) : console.log("success!"));
  });
