// function to generate markdown for README
function generateMarkdown(data) {
  data.licenseLogo = getLicenseLogo(data.license)

  function getLicenseLogo(license) {

    // when user selects license the logo is pulled from github

    try {
      if (license === "APACHE 2.0") {
        return "![Github license](https://img.shields.io/badge/License-Apache-2.svg)";
      }
      if (license === "MIT") {
        return "![Github license](https://img.shields.io/badge/License-MIT-yellow.svg)";

      }
      if (license === "BSD 3") {
        return "![Github license](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";

      }
      if (license === "GPL 3.0") {
        return "![Github license](https://img.shields.io/badge/License-GPL-3.svg)";

      }
      if (license === "None") {
        return " "
      }
    } catch (error) {
      console.log(error);
    }
  }


return `# ${data.project.trim()}
  ${data.licenseLogo}


  ## Description
  ${data.description.trim()}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  Use the following to install the package: 
  \`\`\`
  ${data.install.trim()}
  \`\`\`
  
  ## Usage
  ${data.usage.trim()}
  
  
  ## Contributing
  ${data.contributing.trim()}
  
  
  ## License
  This application is licensed under the ${data.license.trim()} license.
  
  ## Tests
  \`\`\`
  ${data.tests.trim()}
  \`\`\`
  
  
  ## Questions
  If you have any questions about the application you can open a ticket or contact ${data.name.trim()} directly at ${data.email.trim()}
  
  
  \n
  <img src="https://avatars.githubusercontent.com/${data.username.trim()}" style="width: 40px; hight:40px; border-radius:100%">\n
  
  
  ## Copyright:
  ${data.name} (${data.username.trim()})
  
  
  © 2020 All Rights Reserved
  `;
}

module.exports = generateMarkdown;