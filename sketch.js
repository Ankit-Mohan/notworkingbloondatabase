var bloon, database;
var position;

function setup() {
  database = firebase.database();
  bloonim = loadImage("Hot Air Ballon-02.png")
  console.log(database);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bloon = createSprite(250,250,10,10);
  bloon.shapeColor = "red";
  bloon.setImage(bloonim)

}

function draw() {
  background(255,255,255);  
  drawSprites();
}