'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
    name: chalk.white('      Michael Tsouchlarakis'),
    handle: chalk.white('michaeltd'),
    work: chalk.white('tsouchlarakis@gmail.com'),
    opensource: chalk.white('Gentoo Linux avocado.'),
    twitter: chalk.gray('https://') + chalk.white('twitter.com/') + chalk.magenta('tsouchlarakismd'),
    npm: chalk.gray('https://') + chalk.white('npmjs.com/') + chalk.red('~michaeltd'),
    github: chalk.gray('https://') + chalk.white('github.com/') + chalk.green('michaeltd'),
    gitlab: chalk.gray('https://') + chalk.white('gitlab.com/') + chalk.green('michaeltd'),
    linkedin: chalk.gray('https://') + chalk.white('linkedin.com/in/') + chalk.blue('michaeltd'),
    web: chalk.grey('https://') + chalk.yellow('michaeltd') + chalk.white('.netlify.com/'),
    npx: chalk.red('npx') + ' ' + chalk.white('michael') + chalk.green('t') + chalk.red('d'),
    labelWork: chalk.white.bold('       Work:'),
    labelOpenSource: chalk.white.bold('Open Source:'),
    labelTwitter: chalk.white.bold('    Twitter:'),
    labelnpm: chalk.white.bold('        npm:'),
    labelGitHub: chalk.white.bold('     GitHub:'),
    labelGitLab: chalk.white.bold('     GitLab:'),
    labelLinkedIn: chalk.white.bold('   LinkedIn:'),
    labelWeb: chalk.white.bold('        Web:'),
    labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const gitlabing = `${data.labelGitLab}  ${data.gitlab}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               webing + newline + // data.labelWeb + data.web
               gitlabing + newline + // data.labelGitLab + data.github
               npming + newline + // data.labelnpm + data.npm
               twittering + newline + newline + // data.labelTwitter + data.twitter
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
