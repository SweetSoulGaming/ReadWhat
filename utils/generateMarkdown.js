function renderLicenseBadge(license){
    if (license =)
  }
  
  
  // function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
   ${renderLicenseBadge(data.lincense)}
  `;
  }
  
  module.exports = generateMarkdown;
  