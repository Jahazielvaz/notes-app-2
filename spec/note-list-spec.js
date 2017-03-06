function testNoteListCreation() {
  var noteList = new NoteList();
  assert.isTrue( noteList.seeList() instanceof Array );
  console.log( "testNoteListCreation returned: " + noteList.seeList() )
};

function testNoteListHasNote() {
  var list = new NoteList();
  list.createNote("hello!");
  assert.isTrue( list.seeList().length === 1);
  assert.isTrue( list.seeList()[0]._text === "hello!");
  console.log( "testNoteListHasNote returned: " + list.seeList() );
};

function testNoteListAssignsNoteID() {
  var list = new NoteList();
  list.createNote("First note!");
  list.assignNoteId();
  assert.isTrue( list._list[0].id === 0 );
  console.log( "testNoteListAssignsNoteID returned: " + list._list[0].id );
};


testNoteListCreation();
testNoteListHasNote();
testNoteListAssignsNoteID();
