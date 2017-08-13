//Global valuse for physics
var Rockets = [];
var speed=1; //speed of th rocket on launch
var gravity = 0.01;
var partickles = 50;
var airResistance = 3;//0.02
var storlek = 1;
var returned = 0;
var time = 0;
var pang;
var namep;
var TextTNels;
var explotionForce = 4;
var Mina;
var COLOR;
var color1=2;
//setup *********
function preload() {
	pang = loadSound("firework.wav");
}
function setup() {
  createCanvas(1000, 400);
    Mina = new HTMLengang();
    COLOR = new randomColor;
    background(51);
    strokeWeight(3);
    Mina.skriv();
}

//Function to create new rocket
function mousePressed() {
    COLOR.createColor();
    Rockets.push(new Rocket(mouseX,height,Rockets.length, color1));
}
//Main loop **************
function draw() {
    Mina.update();
    background(51,50);
    fill(150);
    text(Date(), 10, 10);
    time++;
    for(var i = 0; i<Rockets.length;i++){
        Rockets[i].rita();
        Rockets[i].fysik();
        Rockets[i].explode();
        if(Rockets[i].explotion>10){
            if(time%2==0){
            Rockets[i].slut(i);
            }
        }
    }
}

function randomColor(){
    this.createColor = function(){
        color1=floor(random(1,5));
    }
}


