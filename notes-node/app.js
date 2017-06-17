// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
.command('add', 'Add a new note', {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of your note',
    demand: true,
    alias: 'b'
  }
})
.help()
.argv;

let command = argv._[0];

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log(`Note ${note.title} has been added.`);
  } else {
    console.log('Duplicate Note');
  }
} else if (command === 'list') {
  console.log('Listing all notes');
  res = notes.getAll();
  res;
} else if (command === 'read') {
  let noteToRead = notes.getNote(argv.title);
  if (noteToRead) {
    console.log(`Your note: ${noteToRead.title}--> ${noteToRead.body}`);
  } else {
    console.log(`The note ${argv.title} was not found!`);
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
