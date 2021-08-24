var snow3Img, snow4Img;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(snow3Img);  
  drawSprites();
}
function preload(){
snow3Img = loadImage("snow3.jpg");
snow4Img = loadImage("snow4.webp")
}