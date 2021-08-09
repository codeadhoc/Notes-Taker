const yargs = require('yargs');
const notes = require('./notes.js');
const chalk = require('chalk');

// create add commond
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note tile",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// create remove commond
yargs.command({
    command: 'remove',
    describe: 'remove the notes',
    builder: {
        title: {
            describe: "Note tile",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// create read commond
yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title: {
            describe: "Note tile",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(notes.readNote(argv.title).title);
    }
});


// create list commond
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler(argv) {
        console.log(notes.listNotes());
    }
});

yargs.parse();
