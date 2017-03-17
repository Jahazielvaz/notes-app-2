(function(outputs) {

  function NoteController(NoteList) {
    this.list = NoteList;
    this.view = new NoteListView(this.list);
  };

  NoteController.prototype.preventSubmit = function() {
    document
    .querySelector('#text')
    .addEventListener('click', function(event) {
	       alert("Unable to submit this!");
	       console.log(event);
	       event.preventDefault();
    }, false);
  };

  NoteController.prototype.getHTML = function() {
    var swap = document.getElementById("app");
    swap.innerHTML = this.view.convertToHTML();
  };

  NoteController.prototype.makeURLChangeShowNoteInCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage.bind (this));// will trigger to other functions to watch for click get mapped note to display
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    this.findNote(this.getNoteFromURL(window.location)); // <- this gets the ID
    // triggers function that gets note id from url
  };

  NoteController.prototype.getNoteFromURL = function() {
    return window.location.hash.split("#")[1]; // this is fine gets the note id
  };

  NoteController.prototype.findNote = function(id) {
    note = this.list._list[id];
    singleNoteView = new SingleNoteView(note);
    this.showNote(singleNoteView); // gets note and updates the innerhtml of the app div
  };

  NoteController.prototype.showNote = function(note) {
    document
    .getElementById("app")
    .innerHTML = note.convertNoteToHTML(); // singleNoteView method //note.viewNote();
  };

  outputs.NoteController = NoteController;

})(this);
