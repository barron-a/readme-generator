const fs = require('fs');

// function to generate markdown for README
const generateMarkdown = readMeData => {
  return `# ${readMeData.title}

`;
}

module.exports = generateMarkdown;
