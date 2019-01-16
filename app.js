
$(document).ready(function(){
	
    var uf = '(#UF)';
    var dolar = '(#Dolar)';
    var utm = '(UTM)';
    var euro = '(Euro)';
    var divisa = '(Divisa)';

	 
	$.ajax ({
		url:  'https://mindicador.cl/api',
		method:'GET'
	}).then(function (data) {
			 console.log(data);
			 $('#Dolar').text(data.dolar.valor);
			 $('#Euro').text(data.euro.valor);
			 $('#UF').text(data.uf.valor);
			 $('#UTM').text(data.utm.valor);


	});

	$( "input_div" ).click(function() {
		  var divisa = $( this ).input_div();
		  $( "BTN" ).val('')
	});


});




 $('.indicador.uf').html(formatNumber(rates.uf.valor));
