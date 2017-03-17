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

// function testFullNoteDisplayForURL() {
//   var list = new NoteList();
//   list.createNote("1 This is a full test note with url mapped by note id viewable in full upon click");
//   list.createNote("2 This is a full test note with url mapped by note id viewable in full upon click");
//   var controller = new NoteController(list);
//   controller.getHTML();
//   console.log( "testFullNoteDisplayForURL returned " + controller.makeURLChangeShowNoteInCurrentPage() );
//   assert.isTrue( controller.makeURLChangeShowNoteInCurrentPage() === "<div>This is a full test note with url mapped by note id viewable in full upon click</div>" );
// } // functions do work in console unsure of how to get this test to pass since it can't click the link to create the hashchange event. 

testNoteControllerCreation();
testAddsNotesToDOM();
testFullNoteDisplayForURL();
