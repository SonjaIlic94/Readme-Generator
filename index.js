// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's tile?",
    "Please enter a description of your project.",
    "Please enter installation instructions for your project.",
    "Please enter usage information.",
    "Please enter your contribution guidelines.",
    "What license are you using?",
    "Please enter your GitHub username.",
    'Please enter your e-mail.'
];

const licenseToBadgeLink = {
    "MIT": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "IBM": "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
};

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
                type: 'list',
                name: 'projectLicense',
                message: questions[5],
                choices: ["MIT", "IBM"],
                validate: projectLicenseInput => {
                    if (projectLicenseInput) {
                        return true;
                    } else {
                        console.log('Please choose a license.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: questions[6],
                validate: projectContributionInput => {
                    if (projectContributionInput) {
                        return true;
                    } else {
                        console.log('Please enter your github username.');
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'userEmail',
                message: questions[7],
                validate: projectContributionInput => {
                    if (projectContributionInput) {
                        return true;
                    } else {
                        console.log('Please enter your e-mail.');
                        return false;
                    }
                }

            },
        ])
};

// Formats the file
function generatePage(data) {
    return `# ${data.projectTitle}

## Table of Contents:
1. [Title](#title)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [License](#license)
6. [GitHub](#github)
7. [Email](#email)

## Description 
${data.projectDescription}

## Installation 
${data.projectInstallation}

## Usage 
${data.projectUsage}

## Contribution 
${data.projectContribution}

## License 
${licenseToBadgeLink[data.projectLicense]}

## GitHub
https://github.com/${data.githubUsername}

## Email
Send me an email at ${data.userEmail} to reach me!
       `;
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('ReadMe.md', generatePage(data), function (err, file) {
        if (err) throw err;
        console.log('read me done!');
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then(answers => writeToFile(answers));
}

// Function call to initialize app
init();
