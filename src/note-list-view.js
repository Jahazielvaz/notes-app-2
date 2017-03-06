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
    this.noteList.assignNoteId();
    var array = this.noteList._list;
    console.log(array);
    for ( var i = 0; i < array.length; i++ ) {
      link = "<a href=#notes/" + array._list[i].id + ">" + array._list[i]._text + "</a>"
    }
  };


  outputs.NoteListView = NoteListView;

})(this);
