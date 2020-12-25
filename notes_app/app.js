const chalk = require("chalk")
const yargs = require("yargs")
 const nodes = require('./ulti.js')

const val = require("validator")
const { title, argv } = require("process")
const { demandOption, describe } = require("yargs")
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
    handler: (argv) => nodes.addnotes(argv.title , argv.body)
    
       
})

yargs.command({
    command: "remove",
    describe: "remove new note",
     builder: {
         title: {
            describe : "title",
            demandOption : true,
            type : 'string'
         }
     },

    handler:(argv) => {
        console.log("removing")
       nodes.removenotes(argv.title , argv.body)
    }
    
})



yargs.command({
    command: "list",
    describe: "list the notes",  
    
    handler: () => {
        nodes.listnotes()
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


