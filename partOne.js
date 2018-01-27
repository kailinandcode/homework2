//due Monday 11:59pm, Jan 29th

//LINES: draw 10 random lines
function tenStepLoop() {
  var step = 0;
  while (step < 9) {
  line (random(width), random(height), random(width), random(height));
  step = step + 1;
  }
}

//MORE LINES. 
//a) modify code so every line starts at canva's center
function setup() {
  createCanvas(340, 340);
}

var center = 340/2;

function draw() {
  line (center, center, random(width), random(height));
}

//b) modify code so every line ends at the top-right quadrant of the canvas
function draw() {
   line (center, center, random(center, 340), random(center, 0));
}

//c. modify code so that all lines have a slope of 2
function draw() {
  while(true) {
    var randomX2 = int(random(center, 340));
    var randomY2 = int(random(center, 0));
    if ((randomY2 - center) * 2 == (randomX2 - center)) {
      line (center, center, randomX2, randomY2);
    }
  }
}

