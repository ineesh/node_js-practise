const chalk = require('chalk')
const fs = require('fs')
const str = () => 'Success!!'
const add_note = (title , body) => {
    const note = loadnotes()
    const duplicate_node = note.filter((note_1) => note_1.title === title)

    if(duplicate_node.length === 0){
        note.push({
            title: title,
            body: body,
        })
    
        savenotes(note)
        console.log(chalk.green.inverse("new note added"))
    }
    else { 
        console.log("duplicate note added")

    }

  
}

const savenotes = function(notes) {

    const data = JSON.stringify(notes)
    fs.writeFileSync('notes_ver1.json' , data)

}

const loadnotes = function() {

    try {

    const data = fs.readFileSync('notes_ver1.json')
    const data_str = data.toString()
    return JSON.parse(data_str)

    }
    catch(e){

        return []

    }

}

const remove_notes = function(title , body) {

    const notes_23 = loadnotes()

    const check_1 = notes_23.filter(function(note_2){ 
        return note_2.title !== title
    })

    savenotes(check_1)
    

}

const list_notes = function() {
    const notes_90 = loadnotes()

    console.log(chalk.green.inverse("Your Notes"))
    notes_90.forEach((element) => {
        console.log(element.title)
    });

}

module.exports = {
    getnotes : str,
    addnotes : add_note,
    removenotes : remove_notes,
    listnotes : list_notes,
}
