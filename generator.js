module.exports = (data) => {

    return `# ${data.projectTile}

    ## Table of Contents

    ## ${data.projectDescription}
    ## ${data.projectInstallation}
    ## ${data.projectUsage}
    ## ${data.projectContribution}
    ## ${data.projectLicence}
`
}