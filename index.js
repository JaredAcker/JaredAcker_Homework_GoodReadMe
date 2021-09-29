const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./util/generateFile')

const questions = [
    {
        type: 'input', 
        name:'title',
        message: "Name your project's title"
    },
    {
        type: 'input', 
        name:'description',
        message: "Describe your project"
    },
    {
        type: 'input', 
        name:'installation',
        message: "How do you install your project?"
    },
    {
        type: 'input', 
        name:'usage',
        message: "What is the usage informaton for your project?"
    },
    {
        type: 'input', 
        name:'contribution',
        message: "What are the guidelines for the contributions in your project?"
    },
    {
        type: 'input', 
        name:'testing',
        message: "How did you test your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: 'input', 
        name:'Issues',
        message: "What problems did you run into in this project?"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
]
