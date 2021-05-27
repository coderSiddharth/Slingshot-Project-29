
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20
var ground1,ground2,launcher;
var gamestate="onsling";
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


	


function setup() {
	createCanvas(1600, 800);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	polygon=new Polygon(150,350,30);
	block1=new Box(570,240)
	block2=new Box(590,240)
	block3=new Box(610,240)
	block4=new Box(630,240)
	block5=new Box(650,240)
	block6=new Box(670,240)
	block7=new Box(690,240)
	block8=new Box(620,190)
	block9=new Box(640,190)
	block10=new Box(660,190)
	block11=new Box(600,190)
	block12=new Box(610,140)
	block13=new Box(630,140)
	block14=new Box(650,140)
	block15=new Box(630,100)
	

	ground1=new Ground(650,290,200,3)
    
	slingshot=new Sling(polygon.body,{x:220,y:250})
	
	Engine.run(engine);
  
}

console.log("press backspace to reset mango position")

function draw() {
  rectMode(CENTER);
  background("white");
 

  
  polygon.display();
  ground1.display();

  slingshot.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
fill("green")
  block8.display();
  block9.display();
  block10.display()
  block11.display();
  fill("blue")
  block12.display();
  block13.display();
  block14.display();
  fill("grey");
  block15.display();
  


  

  drawSprites();
 
}


function mouseDragged() 
{
	if(gamestate!=="launched"){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
 
    }}

	function mouseReleased(){
		slingshot.fly();
		gamestate="launched";
		
		
	}
	
	function keyPressed(){
		if(keyCode === 32){
			slingshot.attach(polygon.body);
			Matter.Body.setPosition(polygon.body,{x:150, y:300});
		gamestate="onsling";
		
	
		
		}
	}









