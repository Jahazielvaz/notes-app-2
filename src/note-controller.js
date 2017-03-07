(function(outputs) {

  function NoteController(NoteList) {
    this.list = NoteList;
    this.view = new NoteListView(this.list);
  };

  NoteController.prototype.getHTML = function() {
    var swap = document.getElementById("app");
    swap.innerHTML = this.view.convertToHTML();
  };

  NoteController.prototype.displayNoteForURL = function() {
    window.addEventListener("hashchange", this.displayCurrentNote() );
    console.log(this.displayCurrentNote());
  };

  NoteController.prototype.displayCurrentNote = function() {
    this.displayNote(this.getNoteFromURL(window.location));
  };

  NoteController.prototype.getNoteFromURL = function() {
    return location.hash.split("#")[1];
  }

  NoteController.prototype.displayNote = function(note) {
    document.getElementById("app").innerHTML = note;
  };

  outputs.NoteController = NoteController;

})(this);
