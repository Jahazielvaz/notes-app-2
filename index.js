var list = new NoteList();
list.createNote("test note 1");
list.createNote("test note 2");
var controller = new NoteController(list);
controller.getHTML();
