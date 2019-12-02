$(document).ready(function(){
	let formInputs = $('input[type="email"],input[type="password"]');
	formInputs.focus(function() {
       $(this).parent().children('p.formLabel').addClass('formTop');
       $('div#formWrapper').addClass('darken-bg');
       $('#cat').hide();
       $('#cat1').show();
	});
	formInputs.focusout(function() {
		if ($.trim($(this).val()).length == 0){
		$(this).parent().children('p.formLabel').removeClass('formTop');
		}
		$('div#formWrapper').removeClass('darken-bg');
		$('#cat').show();
		$('#cat1').hide();
	});
	$('p.formLabel').click(function(){
		 $(this).parent().children('.form-style').focus();
	});



	// let images = document.getElementById('#cat','#cat1');
	// formInputs.focus(function() {
	// 	$('#cat') slideUp();
	// });

});