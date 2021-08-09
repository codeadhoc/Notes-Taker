//load require package/library/modules
const fs = require("fs");

//globle variables to module
const strFileName = "store.json";

//function to retrieve the notes from file
const listNotes = () => {
    return loadNotes();
}

//function to save note to file
const addNote = (title, body) => {

    //load existing notes
    const arryNotes = loadNotes(title);

    const duplicateNotes = arryNotes.find((note) => note.title === title);

    if (!duplicateNotes) {

        //add notes to existing list of notes
        arryNotes.push({
            title: title,
            body: body
        });

        //fianally save the notes
        saveNotes(arryNotes);

        console.log('Note added');
    }
    else {
        console.log('Note Title Taken ! :(');
    }
};


//function to remove note from file
const removeNote = (title) => {

    //load existing notes
    const arryNotes = loadNotes();

    //check notes are avaiable to remove
    if (arryNotes.length > 0) {

        //filter non matching notes
        const arryFilteredNotes = arryNotes.filter((note) => note.title !== title);

        //finally save only non matching notes
        saveNotes(arryFilteredNotes);

        console.log('Note removed');
    }
    else {
        console.log('No notes found !');
    }
};

//function to read note from file based on title
const readNote = (title) => {

    //load existing notes
    const arryNotes = loadNotes();

    //check notes are avaiable to read
    if (arryNotes.length > 0) {

        //filter non matching notes
        return arryNotes.find((note) => note.title === title);
    }
    else {
        console.log('No notes found !');
    }
};


/************************ LOCAL RESUABLE FUNCTIONS ************************/
//local function to load notes from file
const loadNotes = () => {

    try {
        //get all the notes list
        return JSON.parse(fs.readFileSync(strFileName).toString());
    }
    catch (err) {
        return [];
    }
}

//local function to store notes in file
const saveNotes = (notes) => {

    //convert the array of note to string
    const dataJSON = JSON.stringify(notes);

    //write data to file
    fs.writeFileSync(strFileName, dataJSON);
}


/********************   EXPORT *********************/
module.exports = {

    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}