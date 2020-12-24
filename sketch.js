const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var divisionHeight = 300;

function preload(){
}

var particles = []
var plinkos = []
var divisions = []

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    ground1 = new Ground(240,795,800,5);

    

    for (var k = 0; k <= width; k = k+ 80){
      divisions.push(new Division(k,height - divisionHeight/2 , 10 , height/2));
    }

    // for(var l = 40; l <= width; l = l+50){
    //   plinkos.push(new Plinko(l,75,10));
    // }

    // for(var l = 15; l <= width-10; l = l+50){
    //   plinkos.push(new Plinko(l,175,10));
    // }

    // for(var l = 40; l <= width; l = l+50){
    //   plinkos.push(new Plinko(l,275,10));
    // }

    // for(var l = 15; l <= width-10;  l= +50){
    //   plinkos.push(new Plinko(l,375,10));
    // }
    
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10));
    }
    

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background(0);

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10),10,15))
  }

   ground1.display();

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for (var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  
  // for (var l = 0; l < plinkos.length; l++ ){
  //   plinkos[l].display();
  // }
  
}