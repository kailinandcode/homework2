//Assignment: Write code that makes an image in the style of Mondrian by drawing lines and colored rectangles.

/*Assignment: Do something different. 
Pick a particular feature of Mondrian's work--perhaps the angles, colors, shapes, or strokes, or something else--
and modify it in your sketch. Give us your own take on Mondrian!*/

//RGB: (31,127,201) -Mondrian Blue
//RGB: (253,237,1) -Mondrian Yellow
//RBG: (246,2,1) -Mondrian Red
//RBG: (0, 0, 0) -White
//RBG: (255, 255, 255) -Black

//synatx: fill('rgb(100,55,0)');

rect(20, 20, 60, 60);
background(255);
colorMode(RGB, 250, 250, 250);
//the thickness of each rectangle
strokeWeight(2);

function drawRect() {
  var length = random(height);
  	var size = random(width);
  	rect(random(width), random(width), length, size);
}

while(true) {
  background(0, 0, 255, 0.1);
  //mondrian rectangles are colored either by: black, white, red, blue, or yellow;
  //most of the rectangles are white
 	if (int(random(0,9)) > 3) {
    fill('rgb(255, 255, 255)');
    drawRect();
  }
  //few are red
  if (int(random(0, 9)) == 1) {
    fill('rgb(246, 2, 1)');
 		drawRect();
  }
  //few are yellow
  if (int(random(0, 9)) == 0) {
    fill('rgb(253, 237, 1)');
    drawRect();
  }
  //few are blue
  if (int(random(0, 9)) == 2) {
    fill('rgb(21, 127, 201)');
    drawRect();
  }
  //few are black
  if (int(random(0, 9)) == 3) {
    fill('rgb(255, 255, 255)');
    drawRect();
  }
}

/* Making Changes to the Mondrian Style */
//assigning a different stroke color for each shade of the rectangles: 
//white rectangles have red strokes, red rectangles are outlined with black, yellow rectangles are filled with blue...etc

rect(20, 20, 60, 60);
background(255);
colorMode(RGB, 250, 250, 250);
//the thickness of each rectangle
strokeWeight(3);

function drawRect() {
  var length = random(height);
  	var size = random(width);
  	rect(random(width), random(width), length, size);
}

while(true) {
  background(0, 0, 255, 0.1);
  //mondrian rectangles are colored either by: black, white, red, blue, or yellow;
  //most of the rectangles are white
 	if (int(random(0,9)) > 3) {
    fill('rgb(255, 255, 255)');
    stroke(246, 2, 1);
    drawRect();
  }
  //few are red
  if (int(random(0, 9)) == 1) {
    fill('rgb(246, 2, 1)');
    stroke(255, 255, 255);
 		drawRect();
  }
  //few are yellow
  if (int(random(0, 9)) == 0) {
    fill('rgb(253, 237, 1)');
    stroke(21, 127, 201);
    drawRect();
  }
  //few are blue
  if (int(random(0, 9)) == 2) {
    fill('rgb(21, 127, 201)');
    stroke(0, 0, 0);
    drawRect();
  }
  //few are black
  if (int(random(0, 9)) == 3) {
    fill('rgb(255, 255, 255)');
    stroke(246, 2, 1);
    drawRect();
  }
}

