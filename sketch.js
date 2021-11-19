const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var snow= []
var boyImg
var bg
var boy
function preload(){
  bgImage=loadImage("snow3.jpg")
  boyImg=loadAnimation("boy2.png","boy3.png")
}

function setup() {
  createCanvas(1500,750);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(bgImage);  
  Engine.update(engine)

 // boy= createSprite(300,600,10,10)
//  boy.addAnimation("boy_running",boyImg)
//  boy.scale=0.3
//  boy.velocityX=-6


   //rand= random()

  if (frameCount%20===0){
  snow.push(new Snow(random(0,1500),30,100))  
  }
for (var j= 0; j<snow.length; j++){
  snow[j].display();
}
  drawSprites();
}