function testNoteControllerCreation() {
  var controller = new NoteController();
  assert.isTrue( controller instanceof NoteController );
  console.log( "testNoteControllerCreation returned " + controller )
};

function testAddsNotesToDOM() {
  var list = new NoteList();
  list.createNote("test note 1");
  var controller = new NoteController(list);
  var app = document.getElementById('app');
  controller.getHTML();
  console.log( "testAddsNotesToDOM returned " + app.innerHTML )
  assert.isTrue( app.innerHTML === "<ul><li><div>test note 1</div></li></ul>" )
};

testNoteControllerCreation();
testAddsNotesToDOM();
