// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
return `![${license}](https://img.shields.io/badge/License-${license}-blue)`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'no license link') {
return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No license provided') {
return `## License
${data.license}
${renderLicenseLink(data.license)}
`    
} else {
  return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## [Description](#Table-of-Contents)
  ${data.description}

  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [License](#License)
  * [Questions](#Questions)
  
  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## License
  ${data.license}
  Please visit the link to view the License link.
  ${renderLicenseLink(data.license)}

  ## Questions
  Please contact me using the following links:
  [Github](https://github.com/${data.username})
  [Email: ${data.email}](mailto:${data.email})



`;
}

module.exports = generateMarkdown;
