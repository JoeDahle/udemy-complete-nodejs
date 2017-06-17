// let obj = {
//   name: 'Joe'
// };
//
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj, stringObj);

// let personString = '{"name": "Joe", "age": 23}';
// let person = JSON.parse(personString);
// console.log(typeof person, person);

const fs = require('fs');

var originalNote = {
  title: 'Some Title',
  body: 'some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note, note.title);
