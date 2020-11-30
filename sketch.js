//Create variables here
var  dog;
var dogImage,dogImage2;
var happyDog;
var database;
var foodS;
var foodStock;
var milk; 
var milk1;
var bones=20,bone;
var dogfo=20,wa=20


function preload(){
//load images here
dogImage=loadImage("dogImg.png");
dogImage2=loadImage("dogImg1.png");
dogfoodimg=loadImage("dogfood.png");
milk=loadImage("bowl.png");
bone=loadImage("bone.png")
dof=loadImage("emo (2).png")
water=loadImage("water.png")
wate=loadImage("wate.png")
}

function setup() {
	createCanvas(1300, 580);


  database = firebase.database();
  console.log(database);

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  foodStock.set(20);

  ground=createSprite(200,600,5555,300)
  ground.shapeColor="lightgreen"

  milk1 = createSprite(966,440,10,10);
  milk1.addImage(milk);
  milk1.scale = 0.1;
  milk1.visible = false;

  dog=createSprite(1049,375);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  bon=createSprite(950,445)
  bon.addImage(bone)
  bon.scale=0.15
  bon.visible=false

  dogfood = createSprite(950,445);
  dogfood.addImage(dogfoodimg);
  dogfood.scale = 0.2;
  dogfood.visible=false

  df = createSprite(390,230);
  df.addImage(dof);
  df.scale = 0.09;

  wat=createSprite(950,445)
  wat.addImage(water)
  wat.scale=0.04
  wat.visible=false

  w=createSprite(390,280)
  w.addImage(wate)
  w.scale=0.025

}


function draw() { 
  background("#CAD9F1");
  
  

  if(foodS !== 0){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage2);
    milk1.visible = true;
   }
   if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage);
    milk1.visible = false;
   }
  }

  if(foodS == 0){
    dog.addImage(dogImage);
    foodS = 20;
  }

  if(keyWentDown(DOWN_ARROW)){
    bones=bones-1
    dog.addImage(dogImage2);
    bon.visible=true
   }
   if(keyWentUp(DOWN_ARROW)){
    bones=bones-1
    dog.addImage(dogImage);
    bon.visible=false
   }
   if(bones==0){
     bones=20
   }
   
   if(keyWentDown(LEFT_ARROW)){
    dogfo=dogfo-1
    dog.addImage(dogImage2);
    dogfood.visible=true
    bon.visible=false
   }
   if(keyWentUp(LEFT_ARROW)){
    dogfo=dogfo-1
    dog.addImage(dogImage);
    dogfood.visible=false
    bon.visible=false
   }
   if(dogfo==0){
     dogfo=20
   }

   if(keyWentDown(RIGHT_ARROW)){
    wa=wa-1
    dog.addImage(dogImage2);
    wat.visible=true
    bon.visible=false
   }
   if(keyWentUp(RIGHT_ARROW)){
    wa=wa-1
    dog.addImage(dogImage);
    wat.visible=false
    bon.visible=false
   }
   if(wa==0){
    wa=20
   }
  

 
  //add styles here
  drawSprites();
  textSize(37);
  fill(color(random(200,500)),color(random(400,1000)));
  text("Press up/down/left/right arrow key to feed your pet  ",50,50);
 // fill("black");
  text(" Remaining 🥛: "+foodS,170,140);
  text(" Remaining 🦴: "+bones,170,190);
  text(" Remaining      :"+dogfo,170,240)
  text(" Remaining        :"+wa,170,290)
}





function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}

