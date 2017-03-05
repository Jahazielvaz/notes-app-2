function testNoteControllerCreation() {
  var controller = new NoteController();
  assert.isTrue( controller instanceof NoteController );
  console.log( "testNoteControllerCreation returned " + controller )
};

function testAddsNotesToDOM() {
  function NoteListDouble() {
    return ["This is a test note"];
  };

  var list = NoteListDouble();

  function NoteListViewDouble(list) {
    return "<ul><li><div>" + list + "</div></li></ul>"
  };

  NoteListViewDouble.prototype.conve

  var controller = new NoteController(list)
  controller.getHTML


};

testNoteControllerCreation();
