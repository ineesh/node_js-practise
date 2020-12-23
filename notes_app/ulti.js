const fs = require('fs')
const str = function() {

    return 'Success!!'
}
const add_note = function(title , body) {
    const note = loadnotes()
    const duplicate_node = note.filter(function(note_1) {

        return note_1.title === title
    })

    if(duplicate_node.length === 0){
        note.push({
            title: title,
            body: body,
        })
    
        savenotes(note)
        console.log("new note added")
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
module.exports = {
    getnotes : str,
    addnotes : add_note,
}
