const path = require('path');
const fs = require('fs');

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.name) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    if (query.id) {
        filteredResults = filteredResults.filter(note => note.id === query.id);
    }

    return filteredResults;
}
  
  function findById(id, noteArray) {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
  }
  
  function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({notes: noteArray}, null, 2)
    );
    return note;
  }
  
  function validateNote(note) {
    if (!note.name || typeof note.name !== 'string') {
      return false;
    }
    if (!note.content || typeof note.content !== 'string') {
      return false;
    }
    if (!note.id || typeof note.id !== 'string') {
      return false;
    }
    return true;
  }

    module.exports = {
        findById,
        createNewNote,
        validateNote
      };