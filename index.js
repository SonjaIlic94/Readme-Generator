// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's tile?",
    "Please enter a description of your project.",
    "Please enter installation instructions for your project.",
    "Please enter usage information.",
    "Please enter your cotribution guidelines."
];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: "What is your project's tile?"
        },
    ])
    .then(answers => {
        console.info('Answer:', answers.projectTitle);

    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
