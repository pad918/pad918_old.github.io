function Rocket(x,y,id,color){
    this.x=x;
    this.y=y;
    this.color=color;
    this.explotion=0;
    this.ySpeed=random(-2.7*storlek*speed,-1.7*storlek*speed);
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
                stroke(this.red[i],this.green[i],this.blue[i],this.glow[i]); //********partickel color****************
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
            this.red = [partickles];
            this.green = [partickles];
            this.blue = [partickles];
            this.r=random(0,10);
            for(var i = 0; i<partickles;i++){
                this.skitY[i]=this.y;
                this.skitX[i]=this.x;
                this.glow[i] = 255;
                if(this.color==1){
                    this.red[i]=random(50,100);
                    this.green[i]=random(58,250);
                    this.blue[i]=random(100,150);
                }
                if(this.color==2){
                    console.error("HEJ!");
                    this.red[i]=random(150,250);
                    this.green[i]=random(50,150);
                    this.blue[i]=random(50,150);
                }
                if(this.color==3){
                    console.error("HEJ!");
                    this.red[i]=random(50,100);
                    this.green[i]=random(50,150);
                    this.blue[i]=random(150,250);
                }
                if(this.color==4){
                    console.error("HEJ!");
                    this.red[i]=random(200,255);
                    this.green[i]=random(70,115);
                    this.blue[i]=random(160,200);
                }
                this.accelY[i]=random(-explotionForce*storlek, explotionForce*storlek);
                this.accelX[i]=random(-explotionForce*storlek, explotionForce*storlek);
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