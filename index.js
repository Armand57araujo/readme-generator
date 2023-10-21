// TODO: Include packages needed for this application
const { generate } = require('rxjs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:'
    },
    // need more questions
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about? Give a description'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?'
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'How many collaborators were apart of your application?'

    },
    {
        type: 'input',
        name: 'license',
        message: 'What licenses are associated with your application?'
    },
    {
        type: 'input',
        name: 'badges',
        message: 'What badges are associated with your application?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are the features of your application?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can one contribute to your application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your application?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How do submit questions regarding your application?'
    },
];








// This is what your answers object will look like once all
// the questions have been answered...
/*
{
    title: "Here's your title",
    description: "Some description",
    install: "Just click install"
}
*/

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 

}

// TODO: Create a function to initialize app
function init() {
    //console.log("Hi, you ran a Node application!");
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            // now that you hve answers, call your function generateMarkdown, and pass them in as the outside data
            //calling the function
            const myMarkdown = generateMarkdown(answers);
            // return myMarkdown
            return myMarkdown;
        })
        .then((yourGeneratedMarkdown) => {
            // now you can run your function writeToFile
            writeToFile('README.md', yourGeneratedMarkdown);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
