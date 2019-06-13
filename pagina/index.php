<!DOCTYPE html>
<html>
<head>
	<title>Instituições</title>
	<script type="text/javascript" src="jquery.js"></script>
	<link rel="stylesheet" type="text/css" href="index.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
	<div class="main">
		<div class="center">
			<div class="content">
				<form class="form-1" method="post">
					<p>Selecione seu estado</p>
					<select class="select-uf">
						<option>Selecione um estado</option>
						<option value="AC">Acre</option>
					    <option value="AL">Alagoas</option>
					    <option value="AP">Amapá</option>
					    <option value="AM">Amazonas</option>
					    <option value="BA">Bahia</option>
					    <option value="CE">Ceará</option>
					    <option value="DF">Distrito Federal</option>
					    <option value="ES">Espírito Santo</option>
					    <option value="GO">Goiás</option>
					    <option value="MA">Maranhão</option>
					    <option value="MT">Mato Grosso</option>
					    <option value="MS">Mato Grosso do Sul</option>
					    <option value="MG">Minas Gerais</option>
					    <option value="PA">Pará</option>
					    <option value="PB">Paraíba</option>
					    <option value="PR">Paraná</option>
					    <option value="PE">Pernambuco</option>
					    <option value="PI">Piauí</option>
					    <option value="RJ">Rio de Janeiro</option>
					    <option value="RN">Rio Grande do Norte</option>
					    <option value="RS">Rio Grande do Sul</option>
					    <option value="RO">Rondônia</option>
					    <option value="RR">Roraima</option>
					    <option value="SC">Santa Catarina</option>
					    <option value="SP">São Paulo</option>
					    <option value="SE">Sergipe</option>
					    <option value="TO">Tocantins</option>
					    <option value="ES">Estrangeiro</option>
					</select>
					<p>Selecione seu municipio</p>
					<select class="select-city">
						<option>Selecione um municipio</option>
							<!-- ajax -->
					</select>
					<br>
					<div class="selecione_facul" style="display: none">
						<p>Selecione uma instituição</p>
						<select class="select-institution">
							<option>Selecione uma instituição</option>
							<!-- ajax -->
						</select>
					</div>
					<div class="selecione_campus" style="display: none">
						<p>Selecione um campus</p>
						<select class="select-campus">
							<option>Selecione um campus</option>
							<!-- ajax -->
						</select>
					</div>
					<input class="ies_code_hidden" type="hidden" name="ies_code" value="">
				</form>
				<p class="load" style="display: none; font-weight: bold">Carregando...</p>
				<p class="aviso" style="font-weight: bold"></p>
				<p class="ies_code" style="display: none"></p>

				<div class="result">
					<li class="ies_name"></li>
						<!-- ajax -->
				</div>
				<p class='locais' style="font-size: 23px; font-weight: bold; display: none;">Cursos disponiveis nesta instituição</p>
				<div class="cursos"></div>	
			</div>
		</div>
	</div>
	<script type="text/javascript" src="index.js"></script>
</body>
</html>