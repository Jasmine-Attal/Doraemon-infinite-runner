var road,roadImg;
var dog, dogImg, dogsGroup;
var doraemon, doraemonImg;
var nobita, nobitaImg;
var gian, gianImg; 
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
//v//ar welcomeSound;
//var mastiSound;
function preload(){
roadImg= loadImage("road.jpg");
  dogsGroup = new Group(dog);
  dogImg = loadImage("angrydog.png");
   invisibleBlockGroup = new Group(invisibleBlock);
  doraemonImg = loadImage("doraemon running.png");
  //mastiSound = loadSound("mastiSound.mp3")
//welcomeSound = loadSound("Cute Nobita Doremon - Cartoon - Hindi Title Song.mp");
  nobitaImg = loadImage("nobita1.png")
  gianImg = loadImage("gin2.png");
  
}

function setup() {
  
 road = createSprite(200,100);
  road.addImage("road", roadImg);
  road.velocityX = -2 ; 
  road.scale = 3;
  
  doraemon = createSprite(390,262);
  doraemon.addImage("doraemon", doraemonImg);
  doraemon.scale = 0.09
  
  nobita = createSprite(435,255);
  nobita.addImage("nobita",nobitaImg);
  nobita.scale = 0.3
  
  gian = createSprite(50,235);
  gian.addImage("gian",gianImg);
  gian.scale = 0.3
}

function draw() {
 createCanvas(570,400);
  background("Green");
  
  //welcomeSound.loop();
  if(gameState=== "play"){
  if(road.x<145){
    road.x= 200;
  }
  
  if(keyDown("up_arrow")){
    nobita.y = -1 
    doraemon.y = -1
  }
    //if(keyDown("space")){
     // nobita.y = nobita.y+2
    //doraemon.y = doraemon.y+2
    //}
    
    if(keyDown("space")){
    nobita.velocityY = -5;
      doraemon.velocityY = -5;
    }
    //if(keyDown("space")){
      
  //}
   doraemon.velocityY = doraemon.velocityY+0.2;
    nobita.velocityY= nobita.velocityY+0.2;
  
  if(dogsGroup.isTouching(nobita)){
     //mastiSound.loop()
  
    nobita.velocityY = 0;
    doraemon.velocityY = 0;
    road.velocityX = 0;
    nobita.destroy();
    doraemon.destroy();
    dogsGroup.destroy();
    gameState="end";
  }
    if(invisibleBlockGroup.isTouching(nobita)|| nobita.y>600){
    nobita.destroy();
      doraemon.destroy();
      gian.destroy();
      dogsGroup.destroy();
    gameState="end";
  }
    //stroke("red");
    //fill("red")
    //textSize(30);
   // textFont("gigi")
    //text("oh no! you lost. press enter to play again",60,200);
  }
     if(gameState=== "end"){
    stroke("yellow")
    fill ("red")
    textFont("gigi")
    textSize(30)
    text("Game Over",200,250)
       if(keyDown("enter")){
        gameState === "play"
       }
  }
  
  //if(dog.isTouching(nobita)){ 
   // (gameState === "end");
    // }
  spawnDogs();
  drawSprites();

}
function spawnDogs(){
  if(frameCount % 300 === 0){
   var dog = createSprite(0,Math.round(random(220, 360)), 10, 10);
   dog.addImage(dogImg);
  dog.velocityX = 1
  dog.scale = 0.15
  var invisibleBlock= createSprite(0,Math.round(random(220, 360)), 1, 1);
    invisibleBlock.width = 10;
    invisibleBlock.x=dog.x
    
    invisibleBlock.height = 2;
    invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
     invisibleBlock.x = dog.x;
    invisibleBlock.velocityX = 1;
    invisibleBlock.y= dog.y;
    invisibleBlock.lifetime = 400;
   dog.lifetime =400;
  dogsGroup.add(dog);
}
}