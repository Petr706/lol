$( document ).ready(function() {
  $("#btn").click(
  function(){
    sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
    return false; 
  }
);
});

 
/*
$(document).ready(function() {  
  $("#validate").keyup(function(){
     
     var email = $("#validate").val();
   
     if(email != 0)
     {
     if(isValidEmailAddress(email))
     {
     $("#validEmail").css({
   "background-image": "url('validyes.png')"
     });
     } else {
     $("#validEmail").css({
   "background-image": "url('validno.png')"
     });
     }
     } else {
     $("#validEmail").css({
   "background-image": "none"
     }); 
     }
   
     });
   
     });
  */
     function isValidEmailAddress(emailAddress) {
     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
     return pattern.test(emailAddress);
     }
     
     $(function() {
      $('.error').hide();
      $(".button").click(function() {
        // validate and process form here
        
        $('.error').hide();
        var name = $("input#name").val();
        if (name == "") {
          $("input#name").focus();
          return false;
        }
        var email = $("input#email").val();
        if (email == "") {
          $("input#email").focus();
          return false;
        }

        
      });
    });

