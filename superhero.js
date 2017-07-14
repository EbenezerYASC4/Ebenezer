function superhero (realname, ability, gender, archEnemy){
    this.realname = realname;
    this.ability = ability;
    this.archEnemy= archEnemy;
    this.gender = gender;
    
    this.newAbility = function (ability2) {
        this.ability = ability2
    }
}

var superman = { 
    "realname" : "Clark Kent"

};
var batman = new superhero ("Bruce Wayne", "dat money", "male", "joker");
var staticShock = new superhero("Virgil");

return (superman.realname);
console.log (superman.realname);
batman.newAbility("drop kick");
console.log (batman.ability);