var myArray = [ [  ]];

function people (name , type, HP, defense, attack, legend){
    this.name = name,
     this.type = type,    
     this.HP= HP,   
     this.defense= defense,   
     this.attack= attack,
     this.legend = legend
}

var Pikachu =   {
    "name" : "Pikachu",
    "type" : " electric ",
    "HP"  :  20,
    "defense": 84,
    "attack" : "choke slam",
    "legend" : " false"
}
var Charizard = new people("Charizard", "Fire", 180, " butt clap", "false" );
var Balbasaur = new people ("Balbasaur", "water");
var Eevee = new people ( "Eevee", "Earth", 200,"Slap", "true");
var snorlax = new people ("Snorlax", "Lightening", 300, "slap sack", "true ");
var ditto =  new people("Ditto", "fire", 300, 120, "lava", "true");
 
var lineup = [Pikachu, Charizard, Balbasaur,Eevee, snorlax, ditto];

 function printRoster(){
     for(var i=0;i<6; i++){
    console.log (lineup[i])
 }}
 printRoster();




pokemonAttacked() = lineup
while (pokemonAttacked = 0, pokemonAttacked <100){ 

}
