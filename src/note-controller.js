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
    // will trigger to other functions to watch for click get mapped note to display
  };

  NoteController.prototype.displayCurrentNote = function() {
    // triggers function that gets note id from url
    this.displayNote(this.getNoteFromURL(window.location));
  };

  NoteController.prototype.getNoteFromURL = function() {
    var noteID = location.hash.split("#")[1]; // this is fine gets the note id
    return noteID;
  };

  NoteController.prototype.findNoteById = function(id) {
    // should take the note id from url, match it to cooresponding id in notelist and return the text
  };

  NoteController.prototype.displayNote = function(note) {
    // gets note and updates the innerhtml of the app div
    document.getElementById("app").innerHTML = note;
  };

  outputs.NoteController = NoteController;

})(this);
