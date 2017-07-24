var input; 
var attackTime;
function setup(){
    createCanvas(750, 600);
    background(150);

    input = createInput();      // Create input box
    input.position(20, 440);     // Set x,y position of input box
    
    button = createButton('submit');                // Create button with text 'submit'
    button.position(input.x + input.width, 440);     // Set x,y position of submit button
    button.mousePressed(doSomething);               // Do something when button pressed  

  
    button1 = createButton("Yes");
    button1.position(259, 450);
    button1.mousePressed(doSomething1);

     button2= createButton("No");
    button2.position(300, 470);
    button2.mousePressed(doSomething2);
}    

function doSomething() {
    var name = input.value();   // Get input value
    console.log(name);          // DO ANYTHING - For example, console.log input value
    input.value('');            // Make input box blank again
}

function doSomething1() {
    console.log("yes");          
}

function doSomething2() {
    console.log("no");         
}
 
 function draw(){
    rect(0, 399,399,200);
    text("Hey welcome to our game, would you like to start?", 1, 410,410,200)
    textSize(14); 
    if (doSomething() == "yes"){
        console.log("Youre on!")
    }
    else {
        exit()
    }
     text("who would you like to use to attack?");
        textSize(12);
    rect(350, 399,399,200);
 }
function pokemaker(name, HP, type, attack ) {
    this.name = name,this.HP =  HP,
    this.type = type,
    this.attack = attack
}
 var Charizard = {"name": "Charizard",
 "HP":100,
 "Type" : "Fire",
 "attack": 60}

var eevee = new pokemaker("Eevee", 80, "water", 40);
var Balbasaur = new pokemaker("Balbasaur", 120, "Fire", 100);
var Chamander =  new pokemaker("Chamander", 150, "earth", 60);
 //if playerChoice ==  
function timer(){
attackTime(10);
}