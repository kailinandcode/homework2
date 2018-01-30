//Fading Circles
/* 
Modify this code to limit the color to a particular range; perhaps you enjoy the warm orange/red colors of Autumn?
Or the bright greens of Spring? Or the blue-tinged twinkles of sun-dappled snow in Winter?
Use this opportunity to explore a color palate. 
Change your circle sizes to match the emotion you would like to convey with your colors.
*/

/*
background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(360), 255, 255);
  ellipse(random(width), random(height), random(20, 40));
}
*/

//to change into pink-purple range!
background(255);
colorMode(RGB, 250, 100, 80);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(360), 25, 255);
  ellipse(random(width), random(height), random(20, 40));
}

//to change into green-yellow range like the spring grass!
background(255);
colorMode(RGB, 250, 50, 80);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(360), 125, 0);
  ellipse(random(width), random(height), random(20, 40));
}

//to change into black-gray neutral scheme:
background(255);
colorMode(HSB, 250, 50, 180);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(360), 75, 0);
  ellipse(random(width), random(height), random(20, 40));
}
