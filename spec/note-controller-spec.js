function testNoteControllerCreation() {
  var controller = new NoteController();
  assert.isTrue( controller instanceof NoteController );
  console.log( "testNoteControllerCreation returned " + controller )
};

 

testNoteControllerCreation();
