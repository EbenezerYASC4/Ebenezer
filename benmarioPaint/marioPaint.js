function setup(){
   createCanvas(600,600);
   background(229, 227, 227);

}
function mouseDragged(){
  for(var i =0; i<100; i++){
    var r = random(50);
    stroke(r*5);
    line(50,i,50+r,i);
}  
 rect(mouseX, mouseY,60,50);
}