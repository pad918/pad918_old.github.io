//Global valuse for physics
var Rockets = [];
var gravity=0.01;
var partickles=50;
var airResistance=3;//0.02
var storlek=1.5;
var returned=0;
var time=0;
var pang;
//setup *********
function preload(){
	pang = loadSound("firework.wav");
}
function setup() {
  createCanvas(1920, 1080);
    background(51);
    strokeWeight(3);
	
}

//Function to create new rocket
function mousePressed() {
  Rockets.push(new Rocket(mouseX,height,Rockets.length));
}
//Main loop **************
function draw() {
    background(51,50);
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
//Rocket function
function Rocket(x,y,id){
    this.x=x;
    this.y=y;
    this.explotion=0;
    this.ySpeed=random(-2.7*storlek,-1.7*storlek);
    //************render**************
    this.rita = function(){
        fill(50,100,180);
        stroke(0);
        if(this.ySpeed<-storlek/2){
        strokeWeight(0.4);
        rect(this.x, this.y, 3.5*storlek, 12.5*storlek);
        fill(200,0,0);
        rect(this.x, this.y+10.5*storlek, 3.5*storlek, 2*storlek);
        }
        //**********ExplotionRender *****************
        else{
            this.explotion++;
            if(this.explotion>1){
                for(var i =0; i<partickles;i++){
                strokeWeight(3*storlek);
                stroke(random(255),100,210,this.glow[i]);
                point(this.skitX[i],this.skitY[i]);
                this.accelY[i]+=gravity;
                this.accelY[i]-=(this.accelY[i]/100)*airResistance;
                this.accelX[i]-=(this.accelX[i]/100)*airResistance;
                this.skitY[i]+=this.accelY[i];
                this.skitX[i]+=this.accelX[i];
                this.glow[i]-=random(1, 5);
                if(this.glow[i]==0){
                }
                }
            }
        }
    }
    this.fysik = function(){

        this.ySpeed+=gravity;
        this.y+=this.ySpeed;
    }
    this.explode = function(){
        if(this.explotion==1){
			pang.play();
            this.skitX = [partickles];
            this.skitY = [partickles];
            this.accelY = [partickles];
            this.accelX = [partickles];
            this.partColor = [partickles];
            this.glow = [partickles];
            for(var i = 0; i<partickles;i++){
                this.skitY[i]=this.y;
                this.skitX[i]=this.x;
                this.glow[i] = 255;
                this.accelY[i]=random(-4*storlek,4*storlek);
                this.accelX[i]=random(-4*storlek,4*storlek);
                this.partColor[i] = random(0,1);
            }   
        }
    }
    this.slut = function(lol){
        //console.error(lol);
        this.lysande=0;
        for(var i=0; i<partickles;i+=10){
            if(this.glow[i]>0){
                this.lysande++;
            }
        }
        if(this.lysande==0){
            Rockets.splice(lol, 1);
            console.error(lol);
        }
    }
}