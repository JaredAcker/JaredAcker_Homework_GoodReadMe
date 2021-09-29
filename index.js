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
]