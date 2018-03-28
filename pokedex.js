// var myPokedex = " ";
// $.ajax({
// 	type:'GET',
// 	url:"https://pokeapi.co/api/v2/pokemon/ninetales/",
// 	success: function(data){
// 		console.log("asd");
// 		var name = data.forms[0].name;
// 		var hp = data.stats[5].base_stat;
// 		var attack = data.stats[4].base_stat;
// 		//var abilities = [data.abilities[0].name, data.abilities[1].name];
// 		var abilities = [];
// 		//loop through abilities array and push to empty abilities variable.
// 		for (i = 0; i < data.abilities.length; i++) {
// 			//this follows api path
// 			abilities.push(data.abilities[i].ability.name)
// 		}
// 		var defense = data.stats[3].base_stat;
// 		console.log(abilities);
// 	}
// })




// $(document).ready(function getPokemon (){
// 	$.ajax({
// 		type:'GET',
// 		url:"https://pokeapi.co/api/v2/pokemon/ninetales/",
// 		data: hp, attack, 
// 		success: function(pokemon){
// 			// I want to get the information inside of pokemon
// 			// object and displayed
// 		}

// 	});     
// });
// var ninetales = new Pokemon ("name");
// console.log(ninetales);


class Trainer {
	constructor(name, pokemon){
		this.name = name;
		this.pokemon = pokemon;

	// 	function getPokemon(){
	// 		ret;
	}
	
}

 var celina = new Trainer ("Celina");
 // console.log(celina);


class Pokemon{
	constructor(name){
		this.name = name;
		$.ajax({
			type:'GET',
			url:"https://pokeapi.co/api/v2/pokemon/" + name,
			success: function(data){
				var hp = data.stats[5].base_stat;
				var attack = data.stats[4].base_stat;
				// var abilities = [data.abilities[0].name, data.abilities[1].name];
				var abilities = [];
				//loop through abilities array and push to empty abilities variable.
				for (var i = 0; i < data.abilities.length; i++) {
					//this follows api path
					abilities.push(data.abilities[i].ability.name)
				}
				var defense = data.stats[3].base_stat;
								// console.log(abilities);
				// this.name = name;
				this.hp = hp;
				this.attack = attack;
				this.defense = defense;
				this.abilities = abilities;
				console.log(this.hp);
			}
		})		
	}
}
 var ninetales = new Pokemon ("ninetales");
 console.log(ninetales);

