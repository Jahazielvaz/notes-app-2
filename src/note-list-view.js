(function(outputs) {

  function NoteListView(list) {
    this.noteList = list;
  };

  NoteListView.prototype.convertToHTML = function() {
    var array = this.noteList._list;
    var html = "<ul>";
    for ( var i = 0; i < array.length; i++ ) {
      html += `<li><div><a href='#${ array[i]._id }'>${ array[i]._text.substring(0, 20) }</a></div></li>`;
    }
    return html + "</ul>"
  };

  NoteListView.prototype.createLink = function() {
    var array = this.noteList._list;
    for ( var i = 0; i < array.length; i++ ) {
      link = `<a href=‘#${array._list[i].id}’>${array._list[i]._text}</a>`
    }
    return link;
  };


  outputs.NoteListView = NoteListView;

})(this);
