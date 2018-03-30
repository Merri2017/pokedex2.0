function getNinetales(){
	$.ajax({
		type:'GET',
		url:"https://pokeapi.co/api/v2/pokemon/ninetales/",
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
			var defense = data.stats[3].base_stat;
			var ninetales = new Pokemon (name, hp, attack, defense, abilities);
			document.getElementById("moo").innerHTML= "NINETALES";
			document.getElementById("moo2").innerHTML= "HP"+":"+ " "+ hp;
			document.getElementById("moo3").innerHTML= "Attack"+":"+ " "+ attack;
			document.getElementById("moo4").innerHTML= "Defense"+":"+ " "+ defense;
			document.getElementById("moo5").innerHTML= "Abilities"+":"+ " "+ abilities;
		} 
	})
}
getNinetales();

function getClefairy() {
	$.ajax({
		type:'GET',
		url:"https://pokeapi.co/api/v2/pokemon/clefairy/",
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
			var defense = data.stats[3].base_stat;
			var clefairy = new Pokemon (name, hp, attack, defense, abilities);
			document.getElementById("dog").innerHTML= "CLEFAIRY";
			document.getElementById("dog2").innerHTML= "HP"+ ":"+ " " + hp;
			document.getElementById("dog3").innerHTML= "Attack"+ ":"+" "+ attack;
			document.getElementById("dog4").innerHTML= "Defense"+ ":"+"   "+ defense;
			document.getElementById("dog5").innerHTML= "Abilities"+":"+ " "+ abilities;
		}
	})
}
getClefairy();

function getTogepi () {
	$.ajax({
		type:'GET',
		url:"https://pokeapi.co/api/v2/pokemon/togepi/",
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
			var defense = data.stats[3].base_stat;
			var togepi = new Pokemon (name, hp, attack, defense, abilities);
			document.getElementById("bug").innerHTML= "TOGEPI";
			document.getElementById("bug2").innerHTML= "HP"+ ":" + " "+ hp;
			document.getElementById("bug3").innerHTML= "Attack"+ ":"+" "+attack;
			document.getElementById("bug4").innerHTML= "Defense"+":"+ " "+defense;
			document.getElementById("bug5").innerHTML= "Abilities"+ ":"+" "+abilities;
		}
	})
}
getTogepi();

class Pokemon{
	constructor(name, hp, attack, defense, abilities){
		this.obj = {
			name: name,
			hp: hp,
			attack: attack,
			defense: defense,
			abilities: abilities,
		}
	} 
	returnData() {return this.obj}			
};

 var clefairy = new Pokemon ();
 // console.log("clefairy");
			

class Trainer {
	constructor(name){
		this.name = name;
		this.pokemon=[];

	}
	add(pokemon){
		this.pokemons.push(obj)
	}
displayAll() {
    for(let i = 0; i < this.children.length; ++i) {
      console.log(this.children[i])
    }
}
}

var celina = new Trainer ();
 
// jquery onclick newDayCare.displayAll()

