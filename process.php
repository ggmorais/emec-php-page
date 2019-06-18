<?php 

header("Content-Type: text/html;  charset=ISO-8859-1", true);

require "src/MecApi.php";

use App\MecApi;

$mec = new MecApi;

if (isset($_POST["uf"])) {

	foreach ($mec->getMunicipios($_POST["uf"]) as $city => $code) {
		
		$response[] = [
			"city" => $city,
			"code" => $code
		];

	}

	echo trim(json_encode($response));

}

if (isset($_POST["city"])) {
	
	//echo "<div class='content'>" . $mec->getInstituicoes("RS", "000000004313409") . "</div>";
	echo "<div class='page_ies' style='display: none'>" . $mec->getInstituicoes($_POST["uf_ies"], $_POST["city"]) . "</div>";		
}

//$_POST["ies_locais"] = 23;

if (isset($_POST["ies_locais"])) {

	foreach ($mec->getInstituicaoEnderecos($_POST["ies_locais"]) as $local => $value) {

		$response[] = [
			"cod_local" => $local,
			"nome" => $value["denominacao"],
			"endereco" => $value["endereco"],
			"municipio" => $value["municipio"],
			"uf" => $value["UF"]
		];
	}

	echo json_encode($response);
}


if (isset($_POST["code_local"])) {

	echo $mec->getInstituicaoCursos($_POST["code_local"], $_POST["code_ies"]);
	
}


?>


