$(document).ready(function getPokemon (){
	$.ajax({
		type:'GET',
		url:"https://pokeapi.co/api/v2/pokemon/ninetales/",
		data: hp, attack, 
		success: function(pokemon){
			// I want to get the information inside of pokemon
			// object and displayed
		}

	});     
// var ninetales = new Pokemon ("name");
// console.log(ninetales);


class Trainer {
	constructor(name, pokemon){
		this.name = name;
		this.pokemon = pokemon;


	}
	
}

 var celina = new Trainer ("Celina");
 console.log(celina);


class Pokemon{
	constructor(name,hp,attack,defense,abilities){
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.abilities = abilities;
	}
}
 var ninetales = new Pokemon ("ninetales");
 console.log(ninetales);

