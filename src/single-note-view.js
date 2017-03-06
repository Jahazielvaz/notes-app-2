(function(outputs) {

  function SingleNoteView(note) {
    this._note = note;
  };

  SingleNoteView.prototype.convertNoteToHTML = function() {
    var convert = "<div>" + this._note._text + "</div>";
    return convert
  };

  outputs.SingleNoteView = SingleNoteView;

})(this);
