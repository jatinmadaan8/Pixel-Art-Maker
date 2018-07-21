(function () {
  'use strict';
  // get variables
  const $colorPicker = document.getElementById("colorPicker");
  const $sizePicker = document.getElementById("sizePicker");
  const $table = document.getElementById("pixelCanvas");
// get the size of grid
  $sizePicker.addEventListener('submit', function() {

    event.preventDefault();

// Get height and width
    let width = document.getElementById("inputWidth").value;
    let height = document.getElementById("inputHeight").value;
    makeGrid(width, height);
  })

// Draw Grid
  function makeGrid(width, height) {
    $table.innerHTML = '';
    for (let row = 0; row < height; row++) {
      let newRow = $table.insertRow();
        for (let cell= 0; cell < width; cell++ ) {
// add new cells
          let newCell = newRow.insertCell();
          newCell.onclick = changeColor;
        }
    }
  }

// to change color of clicked cells
  function changeColor() {
    this.style.background = $colorPicker.value;
  }

})();
