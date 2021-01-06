var bullet ;
var wall;
var thickness=Math.random(22,83)
var speed=Math.random(223,321);
var weight=Math.random(30,52);
var damage;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  bullet=createSprite(50,200,40,10);
  bullet.shapeColor("white")
  wall=createSprite(1200,200,thickness,height/2);
  //wall.shapeColor (80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor ("red");

    }
    if(damage<10 ){
      car.shapeColor ("green");

    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  var bulletRightEdge=lbullet.x+lbullet.width;
  var wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}