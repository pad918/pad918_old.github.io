function HTMLengang(){
    this.skriv = function(){
        createP('');
        namep=createP();
        namep1=createP();
        //TextTNels=createP();
        //namep2=createP();
        console.error(this.ja);
        namep.html("Size, Partickles, ExplotionForce");
        storlekSlider=createSlider(0,20,10);
        particklesSlider=createSlider(0,100,50);
        explotionForceSlider=createSlider(0,10,7);
        createP('');
        namep1.html("Air_Resistance, Speed, Gravity");
        airResistanceSlider=createSlider(0,10,8);
        speedSlider = createSlider(0,30,10);
        gravitySlider=createSlider(0,30,10);
    }
    this.update = function(){
        storlek=storlekSlider.value()/10;
        gravity=gravitySlider.value()/1000;
        partickles=particklesSlider.value();
        explotionForce=explotionForceSlider.value();
        airResistance=airResistanceSlider.value();
        speed=speedSlider.value()/10;
    }
};