var prompt = require('prompt-sync')();



var mashArray = [" Bronx", "Brooklyn", "Manhattan", "Staten Island", "Queens" ];
var secondArray = [ 2, 5, 15, 30];
var thirdArray = ["Mario,", "Luigie ","Kerby", "Pikachu", "Donkey Kong "];

var question = prompt ("How many times would you like to strike? You have 5 chances ");

var strikeChances = 5;

 strikeChances = strikeChances - question;


while ( strikeChances > 0) {

question = prompt( " Thats ok, you have "+strikeChances + " left " ) ;
console.log (question);
 
 
if (strikeChances - question >=0){
  
     strikeChances = strikeChances - question;
}
else{console.log(" sorry you have "+ strikeChances+ " left ");
}; 

 }
var playerChoice ="";

var secondQuestion = prompt("who would you like to Use to attack, Mario, Pickachu, Kerby , Donkey Kong, Luigie");
  for (var playerChoice = 0; playerChoice===thirdArray; playerChoice++);
  secondQuestion = (playerChoice);
    // thirdArray = [secondQuestion];
    console.log(playerChoice);

 console.log (" Good choice you have picked "+ thirdArray);



