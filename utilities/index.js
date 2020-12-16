// modules
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utilities/generateMarkdown.js");




// array of questions for user
const questions = [
    {
        type:"input",
        name:"name",
        message:"What is your full name?",
    },
    {
        type:"input",
        name:"username",
        message:"What is your GitHub user name?",
    },
    {
        type:"input",
        name:"email",
        message:"What is your email?",
    },
    {
        type:"input",
        name:"url",
        message:"What is the URL to your project?",
    },
    {
        type:"input",
        name:"project name",
        message:"What is the name of  your project?",
    },
    {
        type:"input",
        name:"description",
        message:"How would you describe your project?",
    },

    {
        type:"input",
        name:"install",
        message:"What command should be ran to invoke the application?",
    },

{
        type:"input",
        name:"usage",
        message:"How will your app be used?",
    },
    {
        type:"input",
        name:"contributing",
        message:"What should a user know about contributing, can they contribute?",
    },
    {
        type:"input",
        name:"license",
        message:["APACHE 2.0", "GPL 3.0", "MIT","BSD 3", "NONE"],
    },
    {
        type:"input",
        name:"tests",
        message:"What command should be run for tests?",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((inquirerResponse) => {
    writeToFile("README.md", generateMarkdown({...inquirerResponse}));
});
}

// function call to initialize program
init();
