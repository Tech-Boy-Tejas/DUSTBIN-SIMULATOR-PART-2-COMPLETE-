
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,20);
	dustbin = new Dustbin(563,605);
	paper = new Paper(100,400);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("yellow");

  fill("black");
  text("PRESS UP ARROW TO JUMP FORWARD",300,100);
  text("PRESS DOWN ARROW TO JUMP BACKWARD",300,120);


  paper.display();
  dustbin.display();
  ground.display();
  

}
function keyPressed(){
	if(keyCode === UP_ARROW){
	    Body.applyForce(paper.body,paper.body.position,{x :140, y : -140});
	}
	if(keyCode === DOWN_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x : -140, y : -140});
	}
}


