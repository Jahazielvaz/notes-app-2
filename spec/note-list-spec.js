function testNoteListCreation() {
  var noteList = new NoteList();
  assert.isTrue( noteList.seeList() instanceof Array )
  console.log( "testNoteListCreation returned: " + noteList.seeList() )
};

function testNoteListHasNote() {
  var list = new NoteList();
  var note = new Note("hello!");
  list.saveNote(note);
  assert.isTrue( list.seeList().length === 1)
  console.log("testNoteListHasNote returned: " + list.seeList());
};


testNoteListCreation();
testNoteListHasNote();
