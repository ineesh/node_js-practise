const chalk = require("chalk")
const yargs = require("yargs")
 const nodes = require('./ulti.js')

const val = require("validator")
const { title } = require("process")
const { demandOption } = require("yargs")
const { type } = require("os")


// const str_1 = str


// console.log(chalk.green.inverse(str_1))
// console.log(chalk.red.bgGray(val.isEmail("israina27@gmail.com")))
// console.log(process.argv)


// powershell : node app.js --help
yargs.command({
    command: "add",
    describe: "add new note",
    builder: {
        body: {
            describe: "add body",
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: "add title",
            demandOption: true,
            type:'string',
        }
    },
    handler: function(argv){
       nodes.addnotes(argv.title , argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "remove new note",
    handler: function(){
        console.log("removing")
    }
})

yargs.command({
    command: "list",
    describe: "list the notes",
    handler: function(){
        console.log("listing")
    }
})

yargs.command({
    command: "read",
    describe: "reading the notes",
    handler: function(){
        console.log("reading")
    }
})


// console.log(yargs.argv)
yargs.parse()


