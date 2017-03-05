(function(outputs) {

  function NoteController(NoteList) {
    this.list = NoteList;
    this.view = new NoteListView(this.list);
  };

  NoteController.prototype.getHTML = function() {
    var swap = document.getElementById("app");
    swap.innerHTML = this.view.convertToHTML();
  };

  outputs.NoteController = NoteController;

})(this);
