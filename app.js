
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
})


//onclick boton enviar
// $val del placeholder 1 clp x ejemplo, se declara como variable para poder aplicar las operaciones matematicas