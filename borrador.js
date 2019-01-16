$(document).ready(function(){
    $(function (){
    	$.ajax ({
    		method: 'GET'
    		url: 'https:/mindicador.cl/api'



    	})

    	.then (function (data) {
    		rates %data
    		$('.indicador.usd').html(formatNumber(rates.dolar.valor));
    		$('.indicador.euro').html(formatNumber(rates.euro.valor));
    		$('.indicador.utm').html(formatNumber(rates.utm.valor));
    		$('.indicador.uf').html(formatNumber(rates.uf.valor));

    	});


    	$('#exchange-form input') .keyup(function(e)){
    		e. preventDefault();
    		var amount = $('.clp_input').val();
    		$(.'exchange-result.usd').html(formatNumber(rates.dolar.valor * amount));
    		$(.'exchange-result.euro').html(formatNumber(rates.euro.valor * amount));
    		$(.'exchange-result.utm').html(formatNumber(rates.utm.valor * amount));
    		$(.'exchange-result.uf').html(formatNumber(rates.uf.valor * amount));


    	}




    	}


    }