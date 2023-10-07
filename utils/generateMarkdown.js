const licenseBadges = {
  'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'Apache License 2.0': '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)',
  'GNU General Public License (GPL) 3.0':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'BSD 3-Clause "New" or "Revised" License':'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
}


function generateMarkdown(answers, badge) {
  return `# ${answers.projectTitle} ${badge}
    
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
  
GitHub Profile: https://github.com/${answers.githubUsername}
  
Best way to reach me is through email, ${answers.email}.
      
## License
  
 ${answers.license === 'None' ? '' : `This project is licensed under the terms of the ${answers.license}`} 

`;
}

module.exports = {generateMarkdown, licenseBadges};
