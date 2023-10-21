// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string - almost done
function renderLicenseBadge(license) {
  switch (license) {

    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';


    default:
      return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string - almost done
function renderLicenseLink(license) {
  switch (license) {

    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';

    case 'Apache 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';

    case 'GPL 3.0':
      return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';


    default:
      return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {

    case license1:
      return `## License

      This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).`;

    case license2:
      return `
      ## License
      
      This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).`;

    case license3:
      return `
      ## License
      
      This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).`;


    default:
      return '';
  }

}

// TODO: Create a function to generate markdown for README -done
function generateMarkdown(data) {
  return `# ${data.title}
    
    ## Description
    
    Add your project description here.
    ${data.description}
    
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
    ${data.badges}

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
    
    If you have any questions, feel free to [contact me](mailto:youremail@example.com).
    ${data.questions}
    `;
}

module.exports = generateMarkdown;
