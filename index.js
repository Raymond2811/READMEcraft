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
    {
        type:'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['Mit License',
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

 ${answers.license === 'None' ? '' : `This project is licensed under the terms of the ${answers.license}`}

`;
    
        writeToFile('README.md',readmeTemplate);
    });
}

init();
