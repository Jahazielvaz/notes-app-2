(function(outputs) {

  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.seeList = function() {
    return this._list
  }

  NoteList.prototype.createNote = function(text) {
    note = new Note(text)
    this._list.push(note)
  }

  outputs.NoteList = NoteList;

})(this);
