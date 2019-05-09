// Note: $(() => {}); is equivalent to $(document).ready(function(){})
		//var target = '#output'
		
$(() => {
	var i = 1;
		var target = "#" + i;
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	$('.key').click(function(){

		var textadded = "";
		var keytoggled = $(this).text();

		if ( keytoggled === "Bksp"){
			if ($(target).text().len() == 0 ){
				i -= 1;
				target = "#" + i;
				$(target).html(textadded);
			}
			else{
				target = "#" + i;
				textadded = $(target).text().slice(0,-1);
				$(target).html(textadded) ;
			}
			
		}
		else if (keytoggled === "Enter"){
			i = i + 1;
			target = "#" + i;
			//var textadded2 = $(target).append('</br>');
			textadded = $(target).text() + " ";
			//$(target).print(textadded) ;
			

		}
		else {
			textadded =  $(target).text() + textadded + $(this).text();
   			$(target).html(textadded) ;
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