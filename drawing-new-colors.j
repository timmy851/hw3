function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(244, 158, 66);
  } else if (key == 'G') {
    fill(229, 45, 125);
  } else if (key == 'B') {
    fill(141, 37, 252); 
  } else if (key == 'A') {
    fill(33, 186, 122); 
  } else if (key == 'C') {
    fill(237, 95, 7); 
  } else if (key == 'F') {
    fill(54, 147, 28); 
  }
}
