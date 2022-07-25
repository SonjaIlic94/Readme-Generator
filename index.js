// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
                // when: ({ confirmTitle }) => {
                //     if (confirmTitle) {
                //         return true;
                //     } else {
                //         return false;
                //     }
                // },
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


// let data = "this is the readme";
// let fileName = data.projectTitleInput;
// fs.writeFileSync(fileName, data);


// Formats the file
function generatePage(data) {
    return `# ${data.projectTitle}

## Table of Contents
    1. Description (#description) 
    2. Installation (#installation)
    3. Usage (#usage)
    4. Contribution (#Contribution)
    5. Licence (#licence)

## Description ${data.projectDescription}
## Installation ${data.projectInstallation}
## Usage ${data.projectUsage}
## Contribution ${data.projectContribution}
## Licence ${data.projectLicence}
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
