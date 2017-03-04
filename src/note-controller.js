(function(outputs) {

  function NoteController() {

  };

  NoteController.prototype.swapHTML = function() {
    swap = document.getElementById("app");
    console.log(swap);
    swap.innerHTML = "yo";
  };

  outputs.NoteController = NoteController;

})(this);
