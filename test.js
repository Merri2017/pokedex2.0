var apiUrl =  "https://pokeapi.co/api/v2/pokemon/";
var pokemon = ["clefairy, togepi, ninetales"]

function getPokemon(url){
	$.ajax({
		type:'GET',
		url: "https://pokeapi.co/api/v2/pokemon/togepi","https://pokeapi.co/api/v2/pokemon/ninetales/","https://pokeapi.co/api/v2/pokemon/clefairy/"
		success: function(data){
			var name = data.forms[0].name;
			var hp = data.stats[5].base_stat;
			var attack = data.stats[4].base_stat;
			var abilities = [];
			//loop through abilities array and push to empty abilities variable.
			for (i = 0; i < data.abilities.length; i++) {
				//this follows api path
				abilities.push(data.abilities[i].ability.name)

		}
	})
	}

	// type:'GET',
	// 	url:"https://pokeapi.co/api/v2/pokemon/ninetales/",
	// 	success: function(data){
	// 		var name = data.forms[0].name;
	// 		var hp = data.stats[5].base_stat;
	// 		var attack = data.stats[4].base_stat;
	// 		var abilities = [];
	// 		//loop through abilities array and push to empty abilities variable.
	// 		for (i = 0; i < data.abilities.length; i++) {
	// 			//this follows api path
	// 			abilities.push(data.abilities[i].ability.name)
	// 		}