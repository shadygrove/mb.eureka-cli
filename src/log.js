const chalk = require('chalk');

// Chalk docs: https://www.npmjs.com/package/chalk
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const info = chalk.cyan;

module.exports = {
    info () {
        let mapped = Object.keys(arguments).map((arg) => { return info(arguments[arg]) });
        console.log.apply(this, mapped);
    },
    warn () { 
        let mapped = Object.keys(arguments).map((arg) => { return warning(arguments[arg]) });
        console.log.apply(this, mapped);
    },
    error () { 
        let mapped = Object.keys(arguments).map((arg) => { return error(arguments[arg]) });
        console.log.apply(this, mapped);
    }
}