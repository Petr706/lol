$( document ).ready(function() {
  $("#btn").click(
  function(){
    sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
    return false; 
  }
);
});

$(document).ready(function(){
	$(".button__big").click(function(){
		$(".modal").toggleClass("modal_visible"); return false;
	});
});

$(document).ready(function(){
	$(".modal__close").click(function(){
		$(".modal").toggleClass("modal_visible"); return false;
	});
});

axios.get('https://www.google.ru/search?q=имя')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });