var fairy,f1,f2;
var back,bImg;
var star,sImg,starBody;
//constant names
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

function preload(){
//load the images here
  f1 = loadImage("images/fairy1.png");
  f2 = loadImage("images/fairy2.png");
  bImg = loadImage("images/starnight.png");
  sImg = loadImage("images/star.png");
}

function setup() {
  createCanvas(1000, 700);
  engine=Engine.create();
  world=engine.world;

  var star_options= {
    isStatic:true
     }
     star=Bodies.rectangle(770,30,0,0,star_options);
     World.add(world,star);

  //creating sprites
  back = createSprite(400,375);
  back.addImage(bImg);
  back.scale=1;

  fairy = createSprite(500,500);
  fairy.addImage(f1);
  fairy.scale=0.3;

  star = createSprite(500,60);
  star.addImage(sImg);
  star.scale=0.2;
  star .velocity=1;
   
 }


function draw() {
  background(0);
  Engine.update(engine);

  

  //creating edges sprite
  edges=createEdgeSprites();
  fairy.bounceOff(edges);

 if(keyDown("left")){
    fairy.x-=3;
    fairy.changeImage(f1);
}

if(keyDown("right")){
    fairy.x+=3;
    fairy.changeImage(f2);
}

if(keyDown("down")){
  Matter.Body.setStatic(star,false); 
}

 
   
 drawSprites();
}
