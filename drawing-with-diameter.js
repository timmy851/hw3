function setup() { 
  createCanvas(400, 400);
} 

var diameter = 30;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == '1') {
    fill(244, 158, 66);
  } else if (key == '2') {
    fill(229, 45, 125);
  } else if (key == '3') {
    fill(141, 37, 252); 
  }
}
