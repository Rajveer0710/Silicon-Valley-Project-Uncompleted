let drone, drone_img;
let tree, tree_img;
let backgroundImage
let bird, bird_img; 
let plane, plane_img;
let tornado;
let startButtonImg, startButton;
var gameState = 0;
//var play = 1;


function preload(){
  backgroundImage = loadImage("background.png");
  
  bird_img = loadImage("bird.png");
  drone_img = loadImage("drone.png");
  plane_img = loadImage("plane.png");
  tornado = loadImage("tornado.png");
  tree_img = loadImage("tree.png");
  startButtonImg = loadImage("start.png");
}

function setup(){
  createCanvas(2250, 1200);



//startButton = createButton("");
startButton = createSprite(width/1.87, height/2,20,20);
startButton.addImage(startButtonImg);
startButton.scale = 1;

treeGroup = new Group();
planeGroup = new Group();
birdGroup = new Group();
tornadoGroup = new Group();
}

function draw(){
  background(backgroundImage);
  
  drawSprites();


  if(gameState === 0){
   textSize(30);
   fill("black")
   text("*INSTRUCTIONS*", 150, 200)
   text("1. Press space to make drone fly", 150, 250)
   text("2. Use arrow keys to move in different directions", 150, 280)
   text("3. Don't fly into the trees, birds, planes, and other objects", 150, 310)
   text("4. Every time you get 25 points the difficulty increases", 150, 340 )

   text("*STORY*", 1400, 200)
   text("Your a drone pilot that need to send package to a village", 1400, 250);
   text("suffering from a disease. The package contains a antidote that", 1400, 280);
   text("will save them.", 1400, 310);
   text("You must deliver the package safely.", 1600, 310);

      if(mousePressedOver(startButton))
      {
        gameState = 1;
        startButton.destroy();
            
        /*drone = createSprite(250, 200, 100, 100);
        drone.addImage(drone_img);
        drone.scale = 0.5 
        drone.setCollider("circle", 0, 0, 100)*/
      }
  }



  

 /* if(treeGroup.isTouching(drone)){      
  
    drone.destroy();

    collided.play();

  }  
    if(birdGroup.isTouching(drone)){      
  
    birdGroup[0].destroy();

    collided.play();

  } 
  if(planeGroup.isTouching(drone)){      
  
    drone.destroy();

    collided.play();

  }   */

  if(gameState === 1){

    drone = createSprite(250, 200, 100, 100);
    drone.addImage(drone_img);
    drone.scale = 0.5 
    drone.setCollider("circle", 0, 0, 100)



    if(keyDown("right")){
      drone.x = x+20;
    }

    if(keyDown("left")){
      drone.x = x-20;
    }

    if(keyDown("space")){
      drone.y = y+20;
    }
  spawnTree();
  spawnBird();
  spawnPlane();
 }
  
}


function spawnTree() {
  //write code here to spawn the clouds
   if (frameCount % 40 === 0) {
     tree = createSprite(2300, 1000, 40, 10);
    //tree.x = Math.round(random(100,2000));
    tree.addImage(tree_img);
    tree.scale = 0.9;
    tree.velocityX = -10; 
    
     //assign lifetime to the variable
    tree.lifetime = 300;
    
    //adjust the depth
    //tree.depth = drone.depth;
    //drone.depth = drone.depth + 1;
    
    //adding cloud to the group
   treeGroup.add(tree);
    }
}

function spawnBird() {
  //write code here to spawn the clouds
   if (frameCount % 70 === 0) {
     bird = createSprite(2200,300,40,10);
   bird.y = Math.round(random(40,500));
   bird.x = Math.round(random(200,2000));
    bird.addImage(bird_img);
    bird.scale = 0.2;
    bird.velocityX = -10;
    
     //assign lifetime to the variable
    bird.lifetime = 134;
    
    //adjust the depth
    bird.depth = drone.depth;
    drone.depth = drone.depth + 1;
    
    //adding cloud to the group
   birdGroup.add(bird);
    }
}

function spawnPlane() {
  //write code here to spawn the clouds
   if (frameCount % 80 === 0) {
     plane = createSprite(2250,800,40,10);
    plane.x = Math.round(random(200, 2000));
    plane.y = Math.round(random(40, 300));
    plane.addImage(plane_img);
    plane.scale = 0.8;
    plane.velocityX = -10;
    
     //assign lifetime to the variable
    plane.lifetime = 300;
    
    //adjust the depth
    plane.depth = drone.depth;
    drone.depth = drone.depth + 1;
    
    //adding cloud to the group
   planeGroup.add(plane);
    }
}
