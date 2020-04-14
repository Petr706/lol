$( document ).ready(function() {
  $("#btn").click(
  function(){
    sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
    return false; 
  }
);
});

$(document).ready(function(){
	$(".button").click(function(){
		$(".popup").toggleClass("popup_visible"); return false;
	});
});