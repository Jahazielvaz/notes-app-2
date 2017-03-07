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
  assert.isTrue( app.innerHTML === '<ul><li><div><a href="#0">test note 1</a></div></li></ul>' )
};

function testFullNoteDisplayForURL() {
  var list = new NoteList();
  list.createNote("This is a full test note with url mapped by note id viewable in full upon click");
  var controller = new NoteController(list);
  var app = document.getElementById('app');
  controller.getHTML();
  console.log( "testFullNoteDisplayForURL returned " + controller.displayNoteForURL );
  assert.isTrue( controller.displayNoteForURL() === "<div>This is a full test note with url mapped by note id viewable in full upon click</div>" );
}

testNoteControllerCreation();
testAddsNotesToDOM();
testFullNoteDisplayForURL();
