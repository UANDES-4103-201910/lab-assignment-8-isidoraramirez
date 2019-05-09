// Note: $(() => {}); is equivalent to $(document).ready(function(){})
		//var '#output' = '#output'
		
$(() => {
	var i = 1;
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function(){

		var textadded = "";
		var keytoggled = $(this).text();
		if ( keytoggled == "Bksp"){
			textadded = $('#output').text().slice(0,-1);
			$('#output').html(textadded) ;
			
		}
		else if (keytoggled == "Enter"){
			//var textadded2 = $('#output').append('</br>');
			textadded = $('#output').text() + ("\n");
			//$('#output').print(textadded) ;
			

		}
		else {
			textadded =  $('#output').text() + textadded + $(this).text();
   			$('#output').html(textadded) ;
   		}
   		console.log($(this).text());
   		
   		
     });


});

function hide(){
	if (document.getElementById('kcontainer').style.display === "none") {
		document.getElementById('kcontainer').style.display = "block";
	}
	else{
		document.getElementById('kcontainer').style.display = "none";
	}
}