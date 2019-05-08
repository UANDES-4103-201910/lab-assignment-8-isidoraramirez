// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function(){

		var textadded = ""
		textadded =  $('#output').text() + textadded + $(this).text();
   		console.log($(this).text());
   		$('#output').text(textadded) ;
   		
     });


});