$(document).ready(function(){

	$(".select-uf").on("change", function(){
		getMunicipios(this.value);
	})

	$(".select-city").on("change", function(){
		getIES($(".select-uf").val(), this.value);
	})

	$(".select-institution").on("change", function(){
		getLocais(this.value);
	})

	$(".select-campus").on("change", function(){
		getCursos(this.value, $(".ies_code_hidden").val());
	})

})

function processCursos() {

	$("a").each(function(){
		$(".cursos").append("<li class='lista_cursos'>"+ $(this).text() +"</li>");
	})

}

function onContentLoad() {

	$(".ies_name").each(function(){
		$(this).click(function(){
			getLocais(this.title);
		})
	})
	$(".tr-infos").each(function(){
		$(this).click(function(){
			var ies_code = $(".ies_code_hidden").val();
			getCursos(this.title, ies_code);
		})
	})
}

function processDataIES() {

	$("img").each(function(){
        $(this).remove();
    })
    $("span").each(function(){
        $(this).remove();
    })

    var count = 0;

    $(".select-institution").empty();
    $(".select-institution").append("<option>Selecione uma instituição</option>");

    $("tr td:first-child").each(function(){

        var str = $(this).text();
        var str = str.split(')');
        var name = str[1];
        var code = str[0].replace("(", "");
       	//this.splice()
       		
       	//console.log(str[1] == "undefined");
       	if (typeof name != "undefined") {
       		count += 1;
       		$(".select-institution").append("<option value='" + parseInt(code) +"'><b>" + name + "</b></option>");
       	}
        
    })

   	if (count == 0) {
   		$(".aviso").text("Nenhuma Instituição encontrada.");
   		$(".selecione_facul").hide();
   	} else {
   		$(".selecione_facul").show();
   	}

    $(".page_ies").remove();

}

function getMunicipios(uf) {

	$(".aviso").text("");
	$(".cursos").empty();
	$(".result").empty();
	$(".load").show();

	$.ajax({
		url: './src/process.php',
		type: 'POST',
		cache: false,
		data: {'uf': uf},
		dataType: 'json',
		success: function(response) {

			$(".load").hide();

			$(".select-city").empty();

			$(".select-city").append("<option>Selecione um municipio</option>");

			const keys = Object.keys(response);

			Object.keys(response).forEach(key => {

				var value = response[key];

				$(".select-city").append("<option value='" + value["code"] + "'>" + value["city"] + "</option>");

			})
		}
	})
}

function getIES(uf, city) {

	$(".load").show();

	$(".cursos").empty();

	$(".selecione_campus").hide();

	$(".aviso").text("");

	$.ajax({
		url: './src/process.php',
		type: 'POST',
		cache: false,
		data: {'city': city, 'uf_ies': uf},
		//dataType: 'json',
		success: function(response) {
			$(".result").empty();
			$(".load").hide();
			$(".result").append(response);
			processDataIES();
			onContentLoad();
		}
	})

}

function getLocais(ies) {

	$(".load").show();

	$(".cursos").empty();

	$(".aviso").text("");

	$(".ies_code_hidden").val(parseInt(ies));

	ies = parseInt(ies);

	$.ajax({
		url: './src/process.php',
		type: 'POST',
		cache: false,
		data: {'ies_locais': ies},
		dataType: 'json',
		success: function(response) {
		
			$(".info_locais").empty();
			$(".select-campus").empty();
			//$(".ies_locais").show();
			//$(".locais").show();
			$(".result").hide();

			$(".select-campus").append("<option>Selecione um campus desta instituição</option>");

			const keys = Object.keys(response);

			Object.keys(response).forEach(key => {

				var value = response[key];

				$(".select-campus").append("<option value='"+ value["cod_local"] +"'>" + value["nome"] + "</option>");

			})

			$(".selecione_campus").show();

			onContentLoad();

			$(".load").hide();
		}
	})
}

function getCursos(local_code, ies_code) {

	$(".load").show();

	$.ajax({
		url: './src/process.php',
		type: 'POST',
		cache: false,
		data: {'code_local': local_code, 'code_ies': ies_code},
		//dataType: 'json',
		success: function(response) {

			$(".cursos_content").empty();

			$(".cursos_content").append(response);

			processCursos();

			$(".cursos").show();
			$(".cursos_content").empty();
			$(".ies_locais").hide();
			$(".load").hide();

			/*Object.keys(response).forEach(key => {
				$(".cursos").append("<li class='lista_cursos'>"+ response[key] +"</li>");
			})*/
		}
	})

}

function voltar() {

	if ($(".cursos").is(":visible")) {
		$(".cursos").hide();
		$(".ies_locais").show();
	}

}