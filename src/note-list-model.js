(function(outputs) {

  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.seeList = function() {
    return this._list
  }

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this._list.push(note);
  }

  NoteList.prototype.assignNoteId = function() {
    var array = this._list;
    for ( var i = 0; i < array.length; i++ ) {
      array[i].id = array.indexOf(array[i])
    }
  };

  outputs.NoteList = NoteList;

})(this);
