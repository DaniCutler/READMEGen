// function to generate markdown for README
function generateMarkdown(data) {

// gets license info
data.licenseLogo = getLicenseLogo(data.license)


// when user selects a certain license, the logo is grabbed from a link
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
  if (license === "NONE") {
    return ""
  }

} catch (error) {
  console.log(error);
 }
}
return `# ${data.title}

`;
}

module.exports = generateMarkdown;
