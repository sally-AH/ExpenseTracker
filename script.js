$(document).ready(function () {
  var $input = $('input');
  var $add = $('#btn-add');


  $input.keyup(function () {
      var check = false;
      $input.each(function () {
          if ($(this).val().trim() === '') {
            check = true;
          }
      });
      check ? $add.attr('disabled', true) : $add.removeAttr('disabled');
  });



  $("#btn-add").click (function(){
    addExp($add);
    getTotal();
  });



  $(document).on("click", ".fa-trash", function() {
    var deleteindex = $(this).index('.fa-trash') + 1;
    document.getElementById("tempTable").deleteRow(deleteindex);
    getTotal();
  });

  $(document).on("click", ".fa-check", function() {
    var rowNumber = parseInt($(this).index('.fa-trash') + 2);
    console.log(rowNumber);
    console.log($('#tempTable tr:nth-child(' + rowNumber + ')'));
  
    // Only strike the tds in the row
    var tds = $('#tempTable tr:nth-child(' + rowNumber + ')').find('td');
    for (var i = 0; i < tds.length; i++) {
      tds[i].classList.toggle('completed');
    }
  });
});


function addExp ($add){
  let x = $('#ex-name').val();
  let y = $('#ex-num').val();
  $('table').append('<tr><td class="l"><i class="fas fa-trash"></i></td><td><i class="fas fa-check"></i></td><td>'+x+'</td><td class="amt">'+y+'</td></tr>');
  $('#ex-name').val('');$('#ex-num').val('');
  $add.attr('disabled', true);
}

function getTotal(){
  let totalAmount = 0;
  var rowCount = $('#tempTable tr').length;
  $('.amt').each(function(index) {
    const cellValue = parseFloat($(this).text());
    totalAmount+=cellValue
    console.log(`Row ${index + 1}, Cell ${index + 1}: ${cellValue}`);
    console.log("\n"+totalAmount);
    $('#totalAmount').text(totalAmount);
  });    
  if (rowCount <= 2){
    $('#totalAmount').text('0');
  }
  totalAmount = 0
}