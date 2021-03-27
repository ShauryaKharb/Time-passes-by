function preload() {

    //bgImg = loadImage("assets/bg.png");
    bgImg = loadImage("assets/mariobg.jpg");
  }
  function setup() {
    createCanvas(windowWidth,windowHeight);
    bg = createSprite(width,height-1000,100,100);
    bg.addImage(bgImg)
  
    ground = createSprite(width/2,height-200,width,50);
    hero= createSprite(50,height-300,50,50);
    herocam= createSprite(100,height-150,50,50);
  }
  function draw() {
  background(0)
  bg.scale= 1.85
      
  if(keyDown("UP_ARROW")){
    hero.velocityY=-10
  }
  herocam.x= hero.x+1100
  herocam.y=hero.y-500
  
  hero.velocityY=hero.velocityY + 0.8
  if(keyDown("DOWN_ARROW")){
    hero.y+=5
  }if(keyDown("RIGHT_ARROW")){
    hero.x+=5
  }if(keyDown("LEFT_ARROW")){
    hero.x-=5
  }
  camera.position.x=herocam.x;
  camera.position.y=herocam.y 
  //camera.position.y=herocam.y 
    drawSprites();
  
    hero.collide(ground)
  }
  