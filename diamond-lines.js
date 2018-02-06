
var locx = width/2
var loxy = 0
var widthx = width/2
var heighty = 0

line (locx, loxy, widthx, heighty)

while (heighty <= width/2){
line (locx, loxy, widthx, heighty); 
  locx = locx - width/20;
  loxy = loxy + height/20;
  widthx = widthx + width/20;
  heighty= heighty + width/20;
}

while (heighty <= width){
line (locx, loxy, widthx, heighty); 
  locx = locx + width/20;
 loxy = loxy + height/20;
  widthx = widthx - width/20;
  heighty= heighty + width/20;
}
