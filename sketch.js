var ball;
var ground;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(800, 700);
  
  engine = Engine.create();
	world = engine.world;

  ball = new Ball(100,640);
  ground = new Ground(400,650,800,20);
  box1 = new Dustbin(610,635,200,10);
  box2 = new Dustbin(505,590,10,100);
  box3 = new Dustbin(705,590,10,100);

	//Create the Bodies Here.
    Engine.run(engine);

    
}


function draw() {
  rectMode(CENTER);
  background(0);

 

 
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
}