(function(outputs) {

  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.seeList = function() {
    return this._list
  }

  NoteList.prototype.saveNote = function(note) {
    this._list.push(note)
  }

  outputs.NoteList = NoteList;

})(this);
