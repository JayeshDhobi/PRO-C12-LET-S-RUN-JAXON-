var pathImage,path;
var Runner,Runner_running, edges;
var coin,coin_Image,bomb,bomb_Image,energyDrink,energyDrink_Image,power,power_Image;


function preload(){
  //pre-load images
pathImage = loadAnimation("path.png")
Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
coin_Image = loadImage("coin.png")
bomb_Image = loadImage("bomb.png")
energyDrink_Image = loadImage("energyDrink.png")
power_Image = loadImage("power.png")

}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
   path = createSprite(200,200,150,400);
  path.addAnimation("running",pathImage);
  path.velocityY=4;
   path.scale=1.0;

 var Runner = createSprite(200,300,20,40);
Runner.addAnimation("running",Runner_running);
Runner.scale = 0.05;


coin=createSprite(200,200,80,90);
coin.addImage(coin_Image);
coin.scale=0.3;

coin=createSprite(100,200,80,90);
coin.addImage(coin_Image);
coin.scale=0.3;

coin=createSprite(300,200,80,90);
coin.addImage(coin_Image);
coin.scale=0.3;

left_boundary=createSprite(0,300,100,600);
left_boundary.visible=false;


right_boundary=createSprite(0,300,100,600);
right_boundary.visible=false;

}

function draw() {
  background(0);
   
 


   //Moving Background
   path.velocityY=5
   
  if(path.y > 400){
    path.y = height/2;
  
  }

  var select_coin = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_coin == 1) {
      Coin();
    } else if (select_coin == 2){
      createBomb();
    } else if (select_coin == 3){
      createEnergyDrink();
    } else {
      createPower();
    }
    
  }

drawSprites();

}
