$(document).ready(function() {
    $('#ex-name').on('keyup', function() {
      let val = false;
      $('.exp').each(function() {
        val = $(this).val().length == 0;
        console.log($(this).val(), val);
      });
  
      if (val)
        $('#btn-add').attr('disabled', 'disabled');
      else
        $('#btn-add').attr('disabled', false);
    });

    $("#btn-add").click (function(){
        let x = $('#ex-name').val();
        let y = $('#ex-num').val();
        $('table').append('<tr><td>'+x+'</td><td>'+y+'</td><td><i class="fas fa-trash"></i></td></tr>');
        $(this).val('');
    });
    $("table").on ("click","fa-trash", function(){
        $("fa-trash").parent().remove();
    });
  });

var temp = 0;
$('td').each(function(){

var tdTxt = $(this).text();
     if($(this).hasClass('total')) {
         $(this).text(temp);
         temp = 0;
    } else {
       temp+= parseFloat(tdTxt);    
    } 

});