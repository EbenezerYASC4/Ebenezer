
// //button executes this function
// function updateDB(){
//     var name = $("#name").val();
//     console.log(name);
// }

//button executes this function
function updateDB(){
   var name = $("#name").val();
   console.log(name);
}
var choice = ["Rock","Paper","Scissorrs"];
var humanpick = [0];
var techpick = math.random();
outcome.pop();
console.log(outcome);
var names = ["Rock","Paper","scissors"]
for(var i = 0; i<2; i++){
   console.log(choice[i])
}
for (var i = 0; i <2; i++);{
   console.log(choice[i]);
}
if (choice1 == "paper") {
   if (choice2 == "rock") {
       return "paper wins";
   } else {
       if (choice2 == "scissors") {
           return "scissors wins";
       }
   }
   if (choice1 == "scissors") {
       if (choice2 == "rock") {
           return "rock wins";
       } else {
           if (choice2 == "paper") {
               return "scissors wins";
           }
       }
   }
}
{
console.log("humanpick: " + humanpick);
console.log("techpick: " + techpick);
compare(humanpick, techpick)
}