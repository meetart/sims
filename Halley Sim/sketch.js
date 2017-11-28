var comets = []; 
var planets = []; 
var t = 0; 
var theta = 0; 
var power; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
	  for (var i=0; i<1; i++) {
		comets[i] = new Comet();  	  
	  }
	  
	  for (j = 0; j < 2; j++ ) {
		power = pow(20,j+1); 
		console.log(power); 
	  	planets[j] = new Planet(100+power,-2*j+10);
  }

    
  }
  
 function draw() {
  background('black');

  // Drawing the Sun 
  push();
  stroke(0);
  fill('yellow');
  ellipse(width/2,height/2,20,20);
  pop(); 
  
  // Drawing the comet
  for (i = 0; i < comets.length; i++ ) {
    comets[i].display();
    comets[i].center(); 
    comets[i].update(); 
  }
  
  // Drawing the planets
  for (j = 0; j < planets.length; j++ ) {
	push();
	planets[j].center(); 
	planets[j].display();
    planets[j].update();
    pop(); 
    }
  
  
 } 
 
function Comet() {
 
  this.display = function() {
    stroke(0);
    fill('white');
    ellipse(this.x, this.y, 10, 10); 
  }
  
  this.center = function() {
	this.x = width/2;
	this.y = height/2;
  }
  
  this.update = function() {
	 
	this.x = 0.73*width + 0.5*this.x*cos(t); 
	this.y = 0.5*height + 0.2*this.y*sin(t); 
	t = t + .01;   
  }
}  

var Planet = function(distance_, diameter_) {
  this.distance = distance_;
  this.diameter = diameter_;
  this.theta = atan2(mouseY-height/2, mouseX-width/2);
  this.orbitspeed = 30/(Math.pow(distance_,1.5));
  
  this.update = function() {
    // Increment the angle to rotate
    this.theta += this.orbitspeed;
  }
  
  this.center = function() {
	  translate(width/2, height/2); 
	  
  }

  this.display = function() {
    rotate(this.theta);
    stroke(0);
    fill(175);
    ellipse(this.distance,0,this.diameter,this.diameter);
  }

  
 }








  
  
 