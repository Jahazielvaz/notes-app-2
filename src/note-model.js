(function(outputs) {

  function Note(text) {
    this._text = text;
  };

  Note.prototype.readNote = function() {
    return this._text;
  };

  outputs.Note = Note;

})(this);
