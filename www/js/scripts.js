window.onload = function () {
	document.addEventListener("deviceready", init, false); 
};

function init() {
    window.addEventListener('deviceorientation', handleOrientation);
}


var r, g, b;
var posx, posy;
var ax, ay;

function setup() {
  frameRate(100)
  var cnv = createCanvas(displayWidth,displayHeight, WEBGL);
  cnv.parent('myCanvas');
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  posx = displayWidth/2;
  posy = displayHeight/2;
	angleMode(DEGREES);
}

function draw() {
    background(0);
    rotateX(ax*10);
    rotateY(ay*10);
	stroke(255);
	fill(r, g, b);
    box(100, 100, 100); 
}


function handleOrientation(event) {   
    
    x = event.beta
    y = event.gamma
    z = event.alpha
    
    posy += x;
    posx += y;
    
    r = map(x, -180, 180, 0, 255, true);
    g = map(y, -90, 90, 0, 255, true);
    b = map(z, 0, 360, 0, 255, true);  
    
    ax = map(x, -180, 180, 90, 180);
    ay = map(y, -90, 90, 90, 180);
    
	
}

