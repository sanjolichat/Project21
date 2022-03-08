
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(50, 10, 10, ball_options)
	World.add(world, ball)

	ground = new Ground(200,400,2200,15);
	leftSide = new Ground(1000, 350, 15, 120);
	rightSide = new Ground(1100, 350, 15, 120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(10);
  
  ellipse(ball.position.x, ball.position.y, 10)

  ground.show()
  leftSide.show()
  rightSide.show()

  drawSprites();
}
 
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:1,y:1},{x:2, y:0})
	}
}



