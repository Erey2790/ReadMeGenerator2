// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description',
    },
    {
        type: 'input', 
        message: 'Include installation instructions here',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the guideline for contributors to contribute?',
        name: 'contribution'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'APACHE 2.0', 'Academic', 'GNU', 'Mozilla', 'ISC']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), "output" , fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown)
    })
}

// Function call to initialize app
init();
