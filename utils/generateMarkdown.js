// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![License Badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ${data.badge}

  ## Description
  ${data.description}

  ## Table of Contents

  [Installation](#installation)</br>
  [Usage](#usage)</br>
  [License](#license)</br>
  [Contributing](#contributing)</br>
  [Tests](#tests)</br>
  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is covered under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this project, please connect with me via GitHub or Email!</br>
  Github Profile: https://www.github.com/${data.username}</br>
  Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;