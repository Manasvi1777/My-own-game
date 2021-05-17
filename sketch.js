const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, body;
var bg, player;
gameState="FORM";

function preload() {
 
  
  bg= loadImage("bg.jpeg");
  bishop = loadImage("11 (1).png");
  rook = loadImage("9 (1).png");
  knight = loadImage("10 (1).png");
  queen = loadImage("0(1).png");
 
  
}

function setup() {
  createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;
  
}

function draw() {
  background(bg);
  
  drawSprites()
}