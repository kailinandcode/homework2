//due Monday 11:59pm, Jan 29th

//LINES: draw 10 random lines
function tenStepLoop() {
  var step = 0;
  while (step < 9) {
  line (random(width), random(height), random(width), random(height));
  step = step + 1;
  }
}

//MORE LINES. a) modify code so every line starts at canva's center
function setup() {
  createCanvas(340, 340);
}

var center = 340/2;

function draw() {
  line (center, center, random(width), random(height));
}
