// You could have multiple flags like: start, launch to indicate the state of the game.

const Engine= Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world; 
var ground;
var tanker;
var canonball, shooter;
var pole;
//var shoot;

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(10,390,800,10);
    tanker = new Tanker(70,340,70,30);
    canonball = new CanonBall(70,370);
    shooter = new Shooter(75,340,30,15);
    pole = new Tanker(75,340,5,15);
}

function draw() {
background(0);
Engine.update(engine);
ground.display();
tanker.display();
canonball.display();
shooter.display();
//shoot.display();
pole.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}