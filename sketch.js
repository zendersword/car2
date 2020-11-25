var speed,weight,width,car,wall;

function setup() {
  createCanvas(1600,400);
speed=223;
weight=random(400,1500);
width=random(20,90)
car = createSprite(50, 200, 50, 50);;
car.velocityX=speed;

wall=createSprite(1200,200,width,height/2)
wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  
 if(wall.x-car.x < (wall.width+car.width)/2){

car.velocityX=0;
var deformation=0.5 * weight * speed * speed/(width*width*width)
if(deformation>141){
  wall.shapeColor=color(255,0,0)
}

if(deformation<140){
  wall.shapeColor=color(0,255,0)
}
 }


  drawSprites();
}