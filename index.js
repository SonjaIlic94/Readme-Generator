// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's tile?",
    "Please enter a description of your project.",
    "Please enter installation instructions for your project.",
    "Please enter usage information.",
    "Please enter your cotribution guidelines.",
    "What license are you using?"
];

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectTitle',
                message: questions[0],
                validate: projectTitleInput => {
                    if (projectTitleInput) {
                        return true;
                    } else {
                        console.log('Please enter a project title.');
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'projectDescription',
                message: questions[1],
                validate: projectDescriptionInput => {
                    if (projectDescriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter a description of your project.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'projectInstallation',
                message: questions[2],
                validate: projectInstallationInput => {
                    if (projectInstallationInput) {
                        return true;
                    } else {
                        console.log('Please enter installation instruction for your project.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'projectUsage',
                message: questions[3],
                validate: projectUsageInput => {
                    if (projectUsageInput) {
                        return true;
                    } else {
                        console.log('Please enter usage information.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'projectContribution',
                message: questions[4],
                validate: projectContributionInput => {
                    if (projectContributionInput) {
                        return true;
                    } else {
                        console.log('Please enter contribution guidelines.');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'projectLicence',
                message: questions[5],
                choices: ['MIT', '1', '2', '3', 'none'],
                validate: projectLicenceInput => {
                    if (projectLicenceInput) {
                        return true;
                    } else {
                        console.log('Please choose a licence.');
                        return false;
                    }
                }
            },
        ])

    // .then(answers => {
    //     console.info('Answer:', answers.projectTitle);

    // });
};
promptUser().then(answers => console.log(answers));



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
