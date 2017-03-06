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
  assert.isTrue( noteView.convertToHTML() === "<ul><li><div>hello!</div></li></ul>"  );
  console.log( "testNoteListConvertsToHTML returned: " + noteView.convertToHTML() );
};

function testNoteShowsOnly20Chars() {
  var list = new NoteList();
  list.createNote("hello! I am a veeeerrrry long note!");
  var noteView = new NoteListView(list);
  assert.isTrue( noteView.convertToHTML() === "<ul><li><div>hello! I am a veeeer</div></li></ul>"  );
  console.log( "testNoteShowsOnly20Chars returned: " + noteView.convertToHTML() );
};

function testNoteListCreatesNoteLink() {
  var list = new NoteList();
  list.createNote( "note linked url" );
  list.assignNoteId();
  assert.isTrue( list.createLink() === "<a href='#note/0'>Note #0</a>" );
  console.log( "testNoteListCreatesNoteLink returned: " + list.createLink() );
};



testNoteListViewCreation();
testNoteListConvertsListToHTML();
testNoteShowsOnly20Chars();
testNoteListCreatesNoteLink();
