const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine, world;
var object;
function setup() {
  engine= Engine.create();
  world= engine.world;

  createCanvas(800,400);

  var prop={

    isStatic:true

  }
  object= Bodies.rectangle(400,200,50,50,prop)
  World.add(world,object);

  console.log(object);






  
}

function draw() {
  background("black"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  
}