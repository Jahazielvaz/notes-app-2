(function(outputs) {


  function NoteList() {
    this._list = [];
    this._notesId = 0;
  };


  NoteList.prototype.seeList = function() {
    return this._list
  }

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text, this._notesId);
    this._notesId++;
    this._list.push(note);
  }

  outputs.NoteList = NoteList;

})(this);
