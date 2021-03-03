const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw ("la base debe ser un numero");
        }
        return true;
    })
    .argv;

console.log('base: yargs', argv.base);

module.exports = argv;