// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![license badge](https://img.shields.io/badge/license-${license}-blue.svg)`;

  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string - almost done
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`;

  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`;

  }
  return "";
}



// TODO: Create a function to generate markdown for README -done
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
    
## Description
    
Add your project description here.
${data.description}

## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}

    
    ## Installation
    
    Add installation instructions here.
    ${data.install}

    ## Usage
   
    Add usage instructions here.
    ${data.usage}

    ## Credits

    Credit collaborators here.
    ${data.credits}
    
    ## License
    
    This project is licensed under the [MIT License](LICENSE).
    ${data.license}

    ## Badges

    Associated Badges.
    ${renderLicenseBadge(data.license)}

    ## Features.

    Associated Features
    ${data.features}
    
    ## Contributing
    
    If you'd like to contribute, please follow these guidelines...
    ${data.contributing}
    
    ## Tests
    
    Add test instructions here.
    ${data.tests}
    
    ## Questions
    
    If you have any questions, feel free to [contact me](mailto:armand_araujo@yahoo.com).
    ${data.questions}
    `;
}


module.exports = generateMarkdown;
