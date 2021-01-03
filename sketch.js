
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0;
var database;
var form;
var game;

var player;
var playerCount;
var allPlayers;


function setup() {
	database = firebase.database();
	canvas = createCanvas(windowWidth,windowHeight);
	game = new Game();
  game.getState();
  game.start();
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(gameState);

  drawSprites();
}



