(function(outputs) {

  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.seeList = function() {
    return this._list
  }

  outputs.NoteList = NoteList;

})(this);
