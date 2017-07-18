function setup(){
    createCanvas(500, 400);
    background(153, 93, 32);
}

var x = 2;
var y = 2;
var xPos = 50;
var yPos = 50;


function draw(){
    background (100);
    ellipse(xPos, yPos, 50);
    fill (29, 40, 115);
   
    if(xPos<25 || xPos>475) { x= x*-1;};
    if(yPos<25 || yPos>375) { y= y*-1;};
    
    xPos += x;
    yPos += y;
  
}
