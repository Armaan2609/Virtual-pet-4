//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var food;
var foodStock;
var writeStock;
//var foodObj;
var lastFed,fedTime,feed,adFood;
var gameState;
var bedroom;
var garden;
var washroom;
var readState;



function preload()
{
	//load images here
  dogImage1=loadImage("images/Dog.png");
  happyDog=loadImage("images/happyDog.png");
  sadDog=loadImage("images/dogImg.png");
bedroomImg=loadImage("images/Bed Room.png");
gardenImg=loadImage("images/Garden.png");
 washroomImg=loadImage("images/Wash Room.png");
  
milkBottle2=loadImage("images/Milk.png");
livingroomImg=loadImage("images/Living Room.png");
}

function setup() {
  database = firebase.database();
	createCanvas(400, 600);

  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });

  food=new Food();

  foodStock=database.ref("food");
  foodStock.on("value",readStock);


  dog=createSprite(200,500);
  dog.addImage(dogImage1);
  dog.scale=0.2;

  
  

 
   

  foodStock=database.ref("Food");
  foodStock.on("value",readStock)
  

 
}



function draw() {  
background("green");

food.display();
writeStock(food);

if(foodS==0){
  dog.addImage(happyDog);
  milkBottle2.visible=false;
}else{
  dog.addImage(sadDog);
  milkBottle2.visible=true;
}
if(gameState===1){
    dog.addImage(happyDog);
    dog.scale=0.175;
    dog.y=250;
  }
  if(gameState===2){
    dog.addImage(sadDog);
    dog.scale=0.175;
    milkBottle2.visible=false;
    dog.y=250;
  }

  

 
  

  drawSprites();
  

}

function readStock(data){
  foodS=data.val();
  food.updateFoodStock(foodS);
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

function feedDog(){
  dog.addImage(happyDog);

  food.updateFoodStock(food.getFoodStock()-1);
  database.ref("/").update({
    Food:food.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function update(state){
  database.ref('/').update({
    gameState:state
  })
}