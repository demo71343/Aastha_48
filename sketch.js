var sTrack
var mainCharacter,mainCharacterImage;
var testVar1 = false;
var testVar2 = false;
var testVar3 = false;
var testVar4 = false;

var gameState = "start";

function preload (){
sTrack = loadImage ("swimming track.jpg");
mainCharacterImage  = loadImage("3.jpg");
char1Image  = loadImage("1.jpg");
char2Image  = loadImage("2.jpg");
char3Image  = loadImage("4.jpg");
sound = loadSound("game sound.mp3")

}






function setup() {
  createCanvas(1400,600);

  mainCharacter =  createSprite(1300, 225, 25, 25);
  mainCharacter.addImage(mainCharacterImage);
  mainCharacter.scale = 0.20;
 

  character1=  createSprite(1300, 80, 25, 25);
  character1.addImage(char1Image);
  character1.scale = 0.20;
  
  character2=  createSprite(1300, 500, 25, 25);
  character2.addImage(char2Image);
  character2.scale = 0.20;

  character3=  createSprite(1300, 370, 25, 25);
  character3.addImage(char3Image);
  character3.scale = 0.10;


  boundary1 =  createSprite(700, 190, 1400, 10);
  boundary1.visible = false;

  boundary2 =  createSprite(700, 270, 1400, 10);
  boundary2.visible = false;

  endLine =  createSprite(50, 300, 10, 600);
  endLine.visible = false;
  
  sound.loop()
}

function draw() {
  background(sTrack);
  if(gameState === "start"){
    textSize(20);
    text("Press UP Arrow to start the Game", 500,300);
    
  }
  
  if(keyDown(UP_ARROW)){
    mainCharacter.x = mainCharacter.x-5;
    gameState = "play";
    if(mainCharacter.isTouching(boundary1)||mainCharacter.isTouching(boundary2)){
      mainCharacter.x = mainCharacter.x-3;
      
    }
  }
  if(keyDown(DOWN_ARROW)){
    mainCharacter.x = mainCharacter.x+5;
  }
  if(keyDown(LEFT_ARROW)){
    mainCharacter.y = mainCharacter.y-5;
  }
  if(keyDown(RIGHT_ARROW)){
    mainCharacter.y = mainCharacter.y+5;
  }

  if(mainCharacter.isTouching(boundary1)||mainCharacter.isTouching(boundary2)){
    textSize(20);
    fill ("yellow");
    text("Mind the top and bottom lines",600,190);
    mainCharacter.collide(boundary1);
    mainCharacter.collide(boundary2);

    mainCharacter.x = mainCharacter.x-3;

  }


  if(mainCharacter.isTouching(endLine)||character1.isTouching(endLine)||
  character2.isTouching(endLine)|| character3.isTouching(endLine) ){
    textSize(40);
    fill ("red");
    text("GAME OVER!!!!!",500,190);
    mainCharacter.visible = false;

    character2.visible = false;
    character1.visible = false;
    character3.visible = false;
    sound.stop()
  }


  if (mainCharacter.isTouching(endLine)){
    testVar1 = true; 
    text("mainCharacter won",500,230);
  }else if (character1.isTouching(endLine)){
    testVar2 = true; 
    
    text("mainCharacter lost,gameOver",500,230);
  }else if (character2.isTouching(endLine)){
    testVar3 = true; 
   
    text("mainCharacter lost,gameOver",500,230);
  }else if (character3.isTouching(endLine)){
    testVar4 = true; 
   
    text("mainCharacter lost,gameOver",500,230);
  }

  drawSprites();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    
   


    character1.velocityX = -2.5;

    
    character2.velocityX = -3;



    character3.velocityX = -3;

  
  }
}
 
