// WHEN I am prompted for information about my application repository

function renderLicenseBadge(license) {
  // WHEN I choose a license for my application from a list of options
    if(license !== "none") {
    return (
      `## License
      
      This project is licensed under the ${license} license.`
  // THEN a badge for that license is added near the top of the README
    )} 
    return " ";
  };

// function to generate markdown for README
function generateMarkdown (data) {
// a notice is added to the section of the README entitled License that explains which license the application is covered under // (Line 23)

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description
  
  ${data.description}
  ## Installation
  ${data.installation}
   
  ## Usage
    
  ${data.usage}
  ## Contributing
  
  ${data.contributing}
  ## Tests
  
  ${data.tests}
  ## Questions
  You can reach out to me if you have any questions with the following links:
  * GitHub: [${data.github}](#https://github.com/${data.github})
  * Email: [${data.email}](#${data.email})
  
`;

};

module.exports = generateMarkdown;