function setup(){
   createCanvas(800, 800);
   background(153);
}

var x = 350;
var y = 700;
var enemyX = 200;
var enemyY = 200;
var shotY = y;
xPos = 50;
yPos = 50;


function draw(){
   if(keyIsDown(LEFT_ARROW))
   x -= 20;
   // enemyY += 1;
   if(keyIsDown(RIGHT_ARROW))
   x += 20;
   // enemyY += 1;

    if(xPos<10 || xPos>475) { x= x*+1;};
    if(yPos<10 || yPos>375) { y= y*+1;};
    
    xPos += x;
    yPos += y;

   background(153);
   rect(x,y,50,50);
   rect(x + 20,shotY + 20,10,10);



   for(var i = 0; i < 3; i++){
      ellipse(enemyX,enemyY,70,70);
      enemyX += 200;
   }
   enemyX = 200;

   if(keyIsDown(UP_ARROW))
   shotY -= 20;
}