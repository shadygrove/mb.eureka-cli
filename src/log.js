const chalk = require('chalk');

// Chalk docs: https://www.npmjs.com/package/chalk
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const info = chalk.cyan;
const log = chalk.default;

module.exports = {
    log () {
        let mapped = Object.keys(arguments).map((arg) => { return log(arguments[arg]) });
        console.log.apply(this, mapped);
    },
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