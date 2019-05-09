// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function(){

		var textadded = "";
		var keytoggled = $(this).text();
		if ( keytoggled == "Bksp"){
			textadded = $('#output').text().slice(0,-1);
		}
		else if (keytoggled == "Enter"){
			b = document.createElement('br');
			textadded =  $('#output').text() + ' <p>'+ '</p>' ;

		}
		else {
			textadded =  $('#output').text() + textadded + $(this).text();
   		}
   		console.log($(this).text());
   		$('#output').html(textadded) ;
   		
     });


});