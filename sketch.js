var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  

 
}



function setup() {
  createCanvas(600, 600);
  
  monkey = createSprite(80,315,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
 
  survivaltime=0;
}  

function draw(){
background("white");

if (ground.x<0){
ground.x = ground.width /2;
}  
if (keyDown("space")){ 
 monkey.velocityY=-12; 
} 

monkey.velocityY = monkey.velocityY + 0.5;
 monkey.collide(ground);
  
 spawnFood();
 spawnObstacles();
drawSprites();
  
if(obstacleGroup.isTouching(monkey)){
  ground.velocityX = 0;
  monkey.velocityY = 0;
  obstacleGroup.setVelocityXEach(0); 
 bananaGroup.setVelocityXEach(0);
  obstacle Group.setLifetimeEach(-1);
 bananaGroup.setLifetimeEach(-1);
}
  stroke("black"); 
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);  
}
function spawnFood(){
if (frameCount % 80 === 0) {
  banana = createSprite(600,250,40,10);
  banana.y = random(120,200);
  banana.velocityX = -5; 
  //assign lifetime to the variable 
  banana.lifetime = 300;
  monkey.depth = banana.depth + 1; 
  //add image of banana
  banana.addImage(bananaImage);
  banana.scale=0.05;
  //add each banana to the group 
  bananaGroup.add(banana); 
}  
}
function spawnObstacles(){
if(frameCount % 300 === 0) {
  obstacle = createSprite(800,320,10,40);
  obstacle.velocityX = -6;
  //add image to the obstacle
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.15;
  //lifetime to the obstacle
  obstacle.lifetime = 300;
  //add each obstacle to the group
  obstacleGroup.add(obstacle); 
}  
}


