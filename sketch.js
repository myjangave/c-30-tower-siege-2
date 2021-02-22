const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,box1,box2,box3,box4,box5,box6,box7;
var boxi1,boxi2,boxi3,boxi4,boxi5;
var boxx1,boxx2,boxx3;
var bbox1;

var box8,box9,box10,box11,box12,box13,box14;
var boxi6,boxi7,boxi8,boxi9,boxi10;
var boxx4,boxx5,boxx6;
var bbox2;

var polygon,slingshot,polyimg;

function preload() {
    polyimg = loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  base1 = new Ground(840,200,320,15);
  base2 = new Ground(440,280,320,15);
 
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Sling(this.polygon, {x:150,y:200});
  

  //base2 layer 1
  box1 = new Box(437,250,40,40);
  box2 = new Box(397,250,40,40);
  box3 = new Box(477,250,40,40);
  box4 = new Box(517,250,40,40);
  box5 = new Box(357,250,40,40);
  box6 = new Box(317,250,40,40);
  box7 = new Box(557,250,40,40);

    //base1 layer 1 part2
    box8 = new Box(717,175,40,40);
    box9 = new Box(757,175,40,40);
    box10 = new Box(797,175,40,40);
    box11 = new Box(837,175,40,40);
    box12 = new Box(877,175,40,40);
    box13 = new Box(917,175,40,40);
    box14 = new Box(957,175,40,40);

  //base2 layer 2
  boxi1 = new Box(357,210,40,40);
  boxi2 = new Box(397,210,40,40);
  boxi3 = new Box(437,210,40,40);
  boxi4 = new Box(477,210,40,40);
  boxi5 = new Box(517,210,40,40);

  //base1 layer 2 part2
  boxi6 = new Box(757,135,40,40);
  boxi7 = new Box(797,135,40,40);
  boxi8 = new Box(837,135,40,40);
  boxi9 = new Box(877,135,40,40);
  boxi10 = new Box(917,135,40,40);

  //base2 layer 3
  boxx1 = new Box(397,170,40,40);
  boxx2 = new Box(437,170,40,40);
  boxx3 = new Box(477,170,40,40);

  //base1 layer 3 part 2
  boxx4 = new Box(797,95,40,40);
  boxx5 = new Box(837,95,40,40);
  boxx6 = new Box(877,95,40,40);


  //base2 layer 4
  bbox1 = new Box(437,130,40,40);

  //base1 layer 4 part 2
  bbox2 = new Box(837,45,40,40);
}

function draw() {
    background(57,46,44);
    Engine.update(engine);
    drawSprites();

    textSize(20);
    fill("white");
    stroke("lightgrey");
    text("Drag the Polygonal Stone and Release it, to launch it towards the blocks",60,20);

    ground.display();
    base1.display();
    base2.display();
    fill("#62C7DE");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("#FFBEC4");
    boxi1.display();
    boxi2.display();
    boxi3.display();
    boxi4.display();
    boxi5.display();
    fill("#01D9C6");
    boxx1.display();
    boxx2.display();
    boxx3.display();
    fill("#807D78");
    bbox1.display();

    fill("#62C7DE");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    fill("#FFBEC4");
    boxi6.display();
    boxi7.display();
    boxi8.display();
    boxi9.display();
    boxi10.display();   
    fill("#01D9C6");
    boxx4.display();
    boxx5.display();
    boxx6.display();
    fill("#807D78");
    bbox2.display();

     imageMode(CENTER);
     image(polyimg,polygon.position.x,polygon.position.y,40,40);
     
     slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased (){
  slingshot.fly();
}

function keyPressed() {
  if(keyCode===32) {
    slingshot.attach(this.polygon);
  }
}

