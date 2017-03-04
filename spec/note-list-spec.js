function testNoteListCreation() {
  var noteList = new NoteList();
  assert.isTrue( noteList.seeList() instanceof Array )
  console.log( "This test returned: " + noteList.seeList() )
};


testNoteListCreation();
