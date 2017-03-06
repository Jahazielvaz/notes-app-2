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
  console.log("testNoteListHasNote returned: " + list.seeList());
};

function testNoteListAssignsNoteID() {
  var list = new NoteList();
  list.createNote("First note!");
  list.createNote("Second note!");
  assert.isTrue( list._list[0].id === 0 );
  assert.isTrue( list._list[1].id === 1 );
  console.log("testNoteListAssignsNoteID returned: " + list._list[0].assignNoteId() + list._list[1].assignNoteId() );
};


testNoteListCreation();
testNoteListHasNote();
testNoteListAssignsNoteID();
