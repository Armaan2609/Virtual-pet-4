class Food{
    constructor(){
        this.foodStock=0;
        this.image=loadImage("images/Milk.png");
        this.lastFed

    }

    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }

   

    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }
    }
  
    getFoodStock(){
        return this.foodStock;
    }

   

    display(){
     var x=80,y=100;
     
     image(this.image,720,220,70,70);
     
     if(this.foodStock!=0){
      for (var i=0;i<this.foodStock;i++){
          if(i%10==0){
              x=80
              y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
      } 
     }
     
     var button=createButton("Feed the Dog");
     button.position(380,125);
     if(button.mousePressed(function(){
         foodS=foodS-1;
         gameState=1;
         database.ref('/').update({'gameState':gameState})
     }));

     var button=createButton("Add Food");
     button.position(505,125);
     if(button.mousePressed(function(){
         foodS=foodS+1;
         gameState=2;
         database.ref('/').update({'gameState':gameState})
     }));

     var Bath= createButton("I want to take bath");
Bath.position(600,125);
if(Bath.mousePressed(function(){
  gameState=3;
  database.ref('/').update({'gameState':gameState});
}));
if(gameState===3){
  dog.addImage(washroomImg);
  dog.scale=1;
  milkBottle2.visible=false;
}

var Sleep=createButton("I am very sleepy");
Sleep.position(360,155);
if(Sleep.mousePressed(function(){
    gameState=4;
    database.ref('/').update({'gameState':gameState});
}));
if(gameState===4){
    dog.addImage(bedroomImg);
    dog.scale=1;
    milkBottle2.visible=false;
}

     var Play=createButton("Lets play !");
Play.position(515,155);
if(Play.mousePressed(function(){
  gameState=5;
  database.ref('/').update({'gameState':gameState})
}));
if(gameState===5){
  dog.addImage(livingroomImg);
  dog.scale=1;
  milkBottle2.visible=false;
}

var PlayInGarden=createButton("Lets play in park");
PlayInGarden.position(625,155);
if(PlayInGarden.mousePressed(function(){
gameState=6;
database.ref('/').update({'gameState':gameState});
}));
if(gameState===6){
dog.y=175;
dog.addImage(gardenImg);
dog.scale=1;
milkBottle2.visible=false;
}
  


    }

   

   

}