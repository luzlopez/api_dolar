
$(document).ready(function(){
    var url = 'https://mindicador.cl/api';
    var uf = 'uf';
    var dolar = 'dlr';
    var utm = 'utm';
    var euro = 'eu';

	 
	$('#select').on('change', function () {
		$.ajax ({
		url:  url + key + '/' + coords ['scl'],
		method:'GET'
	}).then(function (data) {
			   console.log(data);
		});
	  });



 