//Fading Circles
/* 
Modify this code to limit the color to a particular range; perhaps you enjoy the warm orange/red colors of Autumn?
Or the bright greens of Spring? Or the blue-tinged twinkles of sun-dappled snow in Winter?
Use this opportunity to explore a color palate. 
Change your circle sizes to match the emotion you would like to convey with your colors.
*/

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(360), 255, 255);
  ellipse(random(width), random(height), random(20, 40));
}
