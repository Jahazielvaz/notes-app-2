function testNoteCreation() {
  var note = new Note("I'm a note!");
  assert.isTrue( note.readNote() === "I'm a note!" )
  console.log( "This test returned: " + note.readNote() )
};
testNoteCreation();
