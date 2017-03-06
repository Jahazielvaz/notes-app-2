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
    assignNoteId();
  }

  NoteList.prototype.assignNoteId = function() {
    var assignID = this._list;
    for ( var i = 0; i < assignID.length; i++ ) {
      assignID[i].id = assignID.indexOf(assignID[i])
    }
  }

  outputs.NoteList = NoteList;

})(this);
