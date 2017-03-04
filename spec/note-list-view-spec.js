function testNoteListViewCreation() {
  var list = new NoteList();
  var noteView = new NoteListView(list);
  assert.isTrue( noteView )
  console.log( "testNoteListViewCreation returned: " + noteView.list )
};

function testNoteListConvertsListToHTML() {
  var list = new NoteList();
  list.createNote("hello!");
  var noteView = new NoteListView(list);
  assert.isTrue( noteView.convertToHTML() === "<ul><li><div>hello!</div></li></ul>"  )
  console.log( "testNoteListConvertsToHTML returned: " + noteView.convertToHTML() )
};

testNoteListViewCreation();
testNoteListConvertsListToHTML();
