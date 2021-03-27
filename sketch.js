var hr;
var mn;
var sc;
var h;
var m;
var s;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  
 
  
  hr = hour();
  mn = minute();
  sc = second();
  translate(200,200)
  rotate(-90);
  //To create ab iterative rotation
  s = map(sc, 0, 60, 0, 360);
  m = map(mn,0,60,0,360)
  h = map(hr % 12,0,12,0,360)

  hrHand();

  mnHand();

  scHand();

  stroke(255,0,255);
  point(0,0)

  
 drawSprites();
}

function hrHand() {
  // Hour Hand
  //fill("white");
  //noFill()
  //arc(0, 0, 260, 260, 0, h);
  push();
  // translate(line.x,line.y)
  angleMode(DEGREES);
  rotate(h);
  stroke("#0000FC");
  strokeWeight(10);
  line(0, 0, 50, 0);
  pop();

  //drawing the arcs
  strokeWeight(10);
  noFill();
  //Hours
  stroke("#0000FC");
  arc(0,0,240,240,0,h);

}

function mnHand() {
  // Minute Hand
  push();
  // translate(line.x,line.y)
  angleMode(DEGREES);
  rotate(m);
  stroke("#00FF00");
  strokeWeight(10);
  line(0, 0, 75, 0);
  pop();

  //drawing the arcs
  strokeWeight(10);
  noFill();
  //Minutes
  stroke("#00FF00");
  arc(0,0,270,270,0,m);
}

function scHand(){
  //drawing seconds hand
  push();
  rotate(s); //rotate the hand based on angle calculated
  var color = (255,0,0);
  stroke(255,0,0);
  strokeWeight(10);
  line(0,0,100,0);
  pop()

  //drawing the arcs
  strokeWeight(10);
  noFill();
  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,s);
}