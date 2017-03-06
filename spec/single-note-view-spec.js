function testSingleNoteViewCreation() {
  var note = new Note('New single note');
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue( singleNoteView.convertNoteToHTML() === "<div>New single note</div>" )
  console.log( "testSingleNoteViewCreation returned " + singleNoteView.convertNoteToHTML() );
};

testSingleNoteViewCreation();
