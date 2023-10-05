const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

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
    // {
    //     type:'input',
    //     name: 'License',
    //     message: 'Enter your project title:',
    // },
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
        let readmeTemplate = 
        `# ${answers.projectTitle}
    
## Description 
    
${answers.projectDescription}
    
## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
    
## Installation
    
${answers.installation}
    
## Usage
    
${answers.usage}
    
## Contributing
    
${answers.contributing}
    
## Tests
    
${answers.tests}
    
## Questions
    
GitHub Profile: ${answers.githubUsername}
Email: ${answers.email}
    
## License
        
`;
    
        writeToFile('README.md',readmeTemplate);
    });
}

init();
