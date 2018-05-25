// Select color input


// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function makeGrid(grid) {
  $('table tr').remove();
  var row_input = $('#input_height').val();// Select size input
  var col_input = $('#input_width').val();// Select size input
  for (var i = 1; i <= row_input; i++) {
   $('table').append("<tr></tr>");
   for (var j = 1; j <= col_input; j++) {
    $('tr:last').append("<td></td>");//from the last tr(table row) add td(item within tr, the color)
    $('td').attr("class", 'cells');//within the td, update the class to cells
   }
  }
  grid.preventDefault();
});

$('body').on('click', 'td', function() {
  var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
});