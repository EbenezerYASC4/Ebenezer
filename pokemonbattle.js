var input; 

function setup(){
    createCanvas(750, 600);
    background(150);
    input = createInput();      // Create input box
    input.position(20, 440);     // Set x,y position of input box
    
    button = createButton('submit');                // Create button with text 'submit'
    button.position(input.x + input.width, 440);     // Set x,y position of submit button
    button.mousePressed(doSomething);               // Do something when button pressed  
}    

function doSomething() {
    var name = input.value();   // Get input value
    console.log(name);          // DO ANYTHING - For example, console.log input value
    input.value('');            // Make input box blank again
}
 
 function draw(){
    rect(0, 399,399,200);
    text("Hey welcome to our game, would you like to start?", 50, 410,410,200)
    textSize(13);
    rect(350, 399,399,200);
}


//if playerChoice ==