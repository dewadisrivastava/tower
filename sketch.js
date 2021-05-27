const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,stand1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18
var Block1,slingshot,ground1,stand2

function preload(){
 
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  block1=new Block(460,200,30,30);
  block2=new Block(470,200,30,30);
  block3=new Block(490,200,30,30);
  block4=new Block(500,200,30,30);
  block5=new Block(500,200,30,30);
  block6=new Block(470,190,30,30);
  block7=new Block(485,190,30,30);
  block8=new Block(500,190,30,30);
  block9=new Block(480,180,30,30);
  block10=new Block(490,180,30,30);
  block11=new Block(500,170,30,30);
  block12=new Block(515,170,30,30);
  stand1=new Stand(450,310,250,10);
  stand2=new Stand(740,280,250,10)

  Block1=new Block2(100,200,60,60);
  slingshot=new Slingshot(Block1.body,{x:100,y:200})
  ground1=new Ground(400,400,10,10)
 
  block13=new Block(700,170,30,30);
  block14=new Block(690,170,30,30);
  block15=new Block(715,170,30,30);
  block16=new Block(690,160,30,30);
  block17=new Block(695,160,30,30);
  block18=new Block(705,150,30,30);


}
function draw() {
  background("white");
  Engine.update(engine)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  stand1.display()
  Block1.display()
slingshot.display()
ground1.display()
stand2.display()
block13.display() 
block14.display() 
block15.display() 
block16.display() 
block17.display() 
block18.display()  
  
text("drag the launcher to hit",100,50)
}

function mouseDragged(){
  Matter.Body.setPosition(Block1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly()
}
