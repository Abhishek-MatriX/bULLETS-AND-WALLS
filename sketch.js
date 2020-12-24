var wall,thickness

var bullet,speed,weight


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(10,200,50,10)
  bullet.shapeColor="purple"
 
 thicknes=random(22,83)

wall=createSprite(1200,200,thickness,200)
wall.shapeColor="white"

speed=random(223,321)
 weight=random(30,52)
}

function draw() {
  background(0);  

 bullet.velocityX=speed;
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


  if (damage>10)
  {
    wall.shapeColor="red"
  }

  if (damage<10)
  {
    wall.shapeColor="green/"
  }





}










  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false

}
