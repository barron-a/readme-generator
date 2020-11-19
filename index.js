const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('Please enter a title for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for your project (Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please provide a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the the steps required to install your project? (Required)',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('Please provide installation instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What instructions should the user follow to properly use your project? (Required)',
            validate: instructions => {
                if (instructions) {
                    return true;
                } else {
                    console.log('Please enter usage instructions.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license does your project use? (Required)',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License', 'The Unlicense'],
            loop: false
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What guidelines should developers follow when contributing to your project? (Required)',
            validate: contribution => {
                if (contribution) {
                    return true;
                } else {
                    console.log('Please provide contribution guidelines for other developers.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are some tests for your application and how do you run them? (Required)',
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log('Please provide some test examples and how to run them.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your preferred email address for questions regarding this project? (Required)',
            validate: emailAddress => {
                if (emailAddress) {
                    return true;
                } else {
                    console.log('Please enter your preferred email address.');
                    return false;
                }
            }
        }
    ]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(data), function (err) {
        if (err) 
        console.log(err);

        console.log('README.md complete! Check the dist/ folder to see the output.');
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
        })
}

// function call to initialize program
init();
