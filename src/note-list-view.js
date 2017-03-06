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

  NoteListView.prototype.createLink = function() {
    var array = this.noteList._list;
    for ( var i = 0; i < array.length; i++ ) {
      // assign an id assignNoteId() , than create a link with the note objec id `<a href=#notes/${array._list[i].id}>${array._list[i]._text}</a>`
    }
  };


  outputs.NoteListView = NoteListView;

})(this);
