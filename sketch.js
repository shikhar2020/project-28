
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyimg;

function preload()
{
	boyimg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(650,570,1300,20);

	tree = new Tree(1000,320);

	mango1 = new Mango(780,240,30);
	mango2 = new Mango(840,190,30);
	mango3 = new Mango(860,250,30);
	mango4 = new Mango(940,120,30);
	mango5 = new Mango(920,220,30);
	mango6 = new Mango(980,250,30);
	mango7 = new Mango(1020,180,30);
	mango8 = new Mango(1060,100,30);
	mango9 = new Mango(1080,270,30);
	mango10 = new Mango(1140,210,30);
	mango11 = new Mango(1220,230,30);

	stone = new Stone(230,400,30);

	rope = new Rope(stone.body, {x:160, y:400});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  rope.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);

  
 

  image(boyimg,200,490,200,300)
  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased() {
	rope.fly();
}

function keyPressed() {
	if(keyCode===32) {
		rope.attatch(stone.body);
}
	}

function detectCollision(s,m) {

var sPos = s.body.position;
var mPos = m.body.position;

var dis = dist(sPos.x,sPos.y,mPos.x,mPos.y);

if(dis <= s.r+m.r-10) {
  Matter.Body.setStatic(m.body,false);
}
	
	
	
	
	}


