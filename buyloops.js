var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
// var n = prompt('How many more times? ');


var balance = 100;
while (balance > 0){;
    var spent = prompt ("how much do you want to spend");
while (spent > balance){

spent = prompt ("Thats too much, your balance is " + balance + "How much do you want! ");

}

balance = balance - spent;
console.log ('Youre balance is' + balance)
}