function JohnPatch(x, y) {
  
  colorMode(HSB);
  stroke(0, 255, 255);
  rect(x, y, 300, 300);

  for (var i = 20; i <= 150; i = i + 5) {
    var startX = x + 150;
    var startY = y + i ;
    var ELwidth = i;
    var ELheight = 10;
    fill(random(0,360), 150, 85);
    stroke(180, 7, 50);
    ellipse(startX , startY , ELwidth, ELheight);
  }
  
  
}

JohnPatch(10, 10); // draw patch at upper-left
