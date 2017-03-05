list = new NoteList();
list.createNote("test note 1");
list.createNote("test note 2");
controller = new NoteController(list);
controller.getHTML();
