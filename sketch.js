const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var boy1;
var tree1;
var stone1;
var sling1;
var m1, m2, m3, m4, m5, m6;

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(700, 650, 1400, 5);
	boy1 = new Im(200, 570, 300, 300);
	tree1 = new Tree(1000, 400, 500, 500);
	stone1 = new Stone(100, 500, 50, 50);
  sling1 = new SlingShot(stone1.body,{x: 100, y: 500});
  m1 = new Mango(1000, 200, 50, 50);
  m2 = new Mango(1000, 250, 50, 50);
  m3 = new Mango(950, 225, 50, 50);
  m4 = new Mango(1100, 300, 50, 50);
  m5 = new Mango(1050, 250, 50, 50);
  m6 = new Mango(900, 300, 50, 50);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(stone1, m1);
  detectCollision(stone1, m2);
  detectCollision(stone1, m3);
  detectCollision(stone1, m4);
  detectCollision(stone1, m5);
  detectCollision(stone1, m6);

  ground1.display();
  boy1.display();
  tree1.display();
  stone1.display();
  sling1.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  
  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
    sling1.fly();
}

function detectCollision(lStone, lMango) {
mangoBodyPosition = lMango.body.position;
stoneBodyPosition = lStone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

if (distance<=lMango.radius+lStone.radius) {
  Matter.Body.setStatic(lMango.body, false);
 }
}


