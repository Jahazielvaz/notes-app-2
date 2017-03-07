(function(outputs) {

  function Note(text, id=null) {
    this._text = text;
    this._id = id;
  };

  Note.prototype.readNote = function() {
    return this._text;
  };

  outputs.Note = Note;

})(this);
