var ball;
var edgeT,edgeR, edgeB,edgeL;

function setup() {
  createCanvas(450, 400);

  //ball sprite
  ball = createSprite(150, 250, 15, 15);
  ball.shapeColor = "orange";

  //Top edge
  edgeT = createSprite(225, 0, 450, 5);
  edgeT.shapeColor = "gray";

  //Left edge
  edgeL = createSprite(0, 200, 5, 400);
  edgeL.shapeColor = "gray";

  //Right edge
  edgeR = createSprite(450, 200, 5, 400);
  edgeR.shapeColor = "gray";

  //Bottom edge
  edgeB = createSprite(225, 400, 450, 5);
  edgeB.shapeColor = "gray";

}

function draw() {
  background("honeydew");

  //1. check if mouse is pressed
  //2. Move the ball when mouse is pressed
  if (mouseIsPressed) {
    ball.velocityX=4;
    ball.velocityY=4;
    
  }

  ball.bounceOff(edgeL);
  ball.bounceOff(edgeR);
  ball.bounceOff(edgeT);
  ball.bounceOff(edgeB);

  //3. make the ball bounce off the bottom edge
  
  
  drawSprites();
}