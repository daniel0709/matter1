
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1;
var block2;
var block3;
var plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var block1_options ={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var block2_options ={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	var block3_options ={
		restitution:0.1,
		friction:1,
		frictionAir:0.3
	}


	engine = Engine.create();
	world = engine.world;

	
	var plane_options={
		isStatic:true
	}  

  block3 = Bodies.circle(350,50,10,block3_options);
  World.add(world,block3);

  block2 = Bodies.rectangle(110,50,70,50,block2_options);
  World.add(world,block2);

  block1 = Bodies.circle(220,10,10,block1_options);
  World.add(world,block1);

  plane = Bodies.rectangle(400,680,800,20,plane_options);
  World.add(world,plane);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.run(engine);
  Engine.update(engine);
  
 ellipse(block1.position.x,block1.position.y,10);
 rect(block2.position.x,block2.position.y,70,50);
 ellipse(block3.position.x,block3.position.y,10);
  drawSprites();
 
}



