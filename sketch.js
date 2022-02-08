const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;

function preload(){
backgroundimage=loadImage("./assets/background.gif")
towerimage=loadImage("./assets/tower.png")
}
function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;
tower=new Tower(150,350,100,680)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  image(backgroundimage,0,0,width,height);
  Engine.update(engine);
  
tower.Display()
 
}

