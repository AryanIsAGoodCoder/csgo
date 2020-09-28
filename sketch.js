var car , wall;
var speed , weight;
var deformation;
var lethal,average,good,not_bad;

var NUM = 2250; 

function setup() {
  createCanvas(1600,400)
  
  speed = random(25,75);
  speed = Math.round(speed);

  weight = random(200,400);
  weight = Math.round(weight);

  deformation = 0.5*weight*speed*speed/NUM;
  deformation = Math.round(deformation);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,400);
  
  wall.shapeColor = "blue";
  car.shapeColor = "white";

  lethal = createSprite(800,380, 1600,40);
  average = createSprite(800,20,1600,40);
  good = createSprite(20,200,40,400);
  not_bad = createSprite(1580,200,40,400);
  
  lethal.visible = false;
  average.visible = false;
  good.visible = false;
  not_bad.visible = false;

  car.velocityX = speed;

}

function draw() {
  background(0,233,255);

  console.log("This is cars velocity" + car.velocityX);
  console.log("This is weight"+ weight);
  console.log("This is deformation number" + deformation);  


  textSize(25);
  fill(0,0,0);
  text("Speed : "+ speed,100,90);
  text("Weight : "+ weight,100,120);
  text("Deformation : "+ deformation,100,150);

  text("Deformation Formula = 0.5 x weight x speed x speed ",500,90);
  text("_________________________",750,100);
  text("0.5",900,130);

  text("Red = Lethal",1200,90);
  text("Yellow = Average",1200,120);
  text("Green = Good",1200,150);
  
  text("press F5 to test again",100,350);
  
  if ( car.isTouching(wall) && deformation >= 180 ) 
  {
    lethal.visible = true;
    average.visible = true;
    good.visible = true;
    not_bad.visible = true;

    lethal.shapeColor = "red";
    average.shapeColor = "red";
    good.shapeColor = "red";
    not_bad.shapeColor = "red";
  } else if (car.isTouching(wall) && deformation >80) 
      {
        lethal.visible = true;
        average.visible = true;
        good.visible = true;
        not_bad.visible = true;

        lethal.shapeColor = "yellow";
        average.shapeColor = "yellow";
        good.shapeColor = "yellow";
        not_bad.shapeColor = "yellow";
           

        
      } else if (car.isTouching(wall) && deformation < 80) 
          { 
            lethal.visible = true;
            average.visible = true;
            good.visible = true;
            not_bad.visible = true;

            lethal.shapeColor = "green";
            average.shapeColor = "green";
            good.shapeColor = "green";
            not_bad .shapeColor = "green";
          }

  car.collide(wall);
  drawSprites();

}