const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown, licenseBadges} = require('./utils/generateMarkdown');

const questions = [
    {
        type:'input',
        name: 'projectTitle',
        message: 'Enter your project title:',
    },
    {
        type:'input',
        name: 'projectDescription',
        message: 'Enter your project description:',
    },
    {
        type:'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type:'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type:'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT License',
        'Apache License 2.0',
        'GNU General Public License (GPL) 3.0',
        'BSD 3-Clause "New" or "Revised" License',
        'None',
        ]
    },
    {
        type:'input',
        name: 'contributing',
        message: 'Enter contributers:',
    },
    {
        type:'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    {
        type:'input',
        name: 'githubUsername',
        message: 'Enter your github username:',
    },
    {
        type:'input',
        name: 'email',
        message: 'Enter your email:',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err)=> {
        if (err) {
            console.error('Error writing to README.md:',err);
        }else{
            console.log('README.md generated successfully!');
        }    
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const badge = licenseBadges[answers.license] || '';
        const readmeTemplate = generateMarkdown(answers,badge);
        writeToFile('README.md',readmeTemplate);
    });
}

init();
