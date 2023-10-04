const inquirer = require('inquirer');
const fs = require('fs');

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
    // {
    //     type:'input',
    //     name: 'TableOfContents',
    //     message: 'Enter your project title:',
    // },
    {
        type:'input',
        name: 'Installation',
        message: 'Enter installation instructions:',
    },
    {
        type:'input',
        name: 'Usage',
        message: 'Enter usage information:',
    },
    // {
    //     type:'input',
    //     name: 'License',
    //     message: 'Enter your project title:',
    // },
    {
        type:'input',
        name: 'Contributing',
        message: 'Enter contributers:',
    },
    {
        type:'input',
        name: 'Tests',
        message: 'Enter test instructions:',
    },
    {
        type:'input',
        name: 'GithubUsername',
        message: 'Enter your github username:',
    },
    {
        type:'input',
        name: 'Email',
        message: 'Enter your email:',
    },
];

inquirer.prompt(questions).then((answers) => {

})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err)=> {
        if (err) {
            console.error('Error writingto README.md:',err);
        }else{
            console.log('README.md generated successfully!');
        }    
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
