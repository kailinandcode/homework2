//Assignment: Write code that makes an image in the style of Mondrian by drawing lines and colored rectangles.

/*Assignment: Do something different. 
Pick a particular feature of Mondrian's work--perhaps the angles, colors, shapes, or strokes, or something else--
and modify it in your sketch. Give us your own take on Mondrian!*/

//RGB: (31,127,201) -Mondrian Blue
//RGB: (253,237,1) -Mondrian Yellow
//RBG: (246,2,1) -Mondrian Red

//fill('rgb(100,55,0)');

rect(20, 20, 60, 60);
background(255);
colorMode(RGB, 250, 250, 250);

while(true) {
  background(0, 0, 255, 0.1);
  //mondrian rectangles are colored either by: black, white, red, blue, or yellow;
 	if (int(random(0,10)) > 3) {
    fill('rgb(255, 255, 255)');
    var length = random(height);
  	var size = random(width);
  	rect(random(width), random(width), length, size);
  }
  if (int(random(0, 10)) == 1) {
    fill('rgb(246, 2, 1)');
    var length = random(height);
  	var size = random(width);
  	rect(random(width), random(width), length, size);
  }
  if (int(random(0, 10)) == 0) {
    fill('rgb(253, 237, 1)');
    var length = random(height);
  	var size = random(width);
  	rect(random(width), random(width), length, size);
  }
  if (int(random(0, 10)) == 2) {
    fill('rgb(21, 127, 201)');
    var length = random(height);
  	var size = random(width);
  	rect(random(width), random(width), length, size);
  }
  
 
}
rect(random(width), random(height), random(width), random(height))
