(function(outputs) {

  function NoteListView(list) {
    this.noteList = list;
  };

  NoteListView.prototype.convertToHTML = function() {
    var array = this.noteList._list;
    var convert = "<ul>";
    for ( var i = 0; i < array.length; i++ ) {
      convert += "<li><div>" + array[i]._text.substring(0, 20) + "</div></li>"
    }
    return convert + "</ul>"
  };

  outputs.NoteListView = NoteListView;

})(this);
