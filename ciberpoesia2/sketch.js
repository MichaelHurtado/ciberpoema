let button1, button2;
var name=" ";
var texfield;
var x=0;
var y=0;
var stepSize=5.0;
var font='Georgia';
var fontSizeMin=3;
var angleDistortion=0.0;
var counter=0;
function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}
function setup(){
	createCanvas(windowWidth,windowHeight);
	background(255);
	cursor(CROSS);
    x = mouseX;
    y = mouseY;
    textFont(font);
    textAlign(LEFT);
    fill(0);
	//input = createInput();
	//input.position(10,65);
	texfield = createElement('textarea');
	texfield.elt.rows=8;
    texfield.elt.cols=22;
    texfield.position(10,65);
	button1 = createButton('enviar');
	button1.position(190,65);
	button1.mousePressed(greet);
	button2 = createButton('borrar');
	button2.position(190,90);
	button2.mousePressed(erase);
}
function greet(){
	//name=input.value();
	name=texfield.value();
}
function erase(){
	background(255);
}
function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    var d = dist(x, y, mouseX, mouseY);
    textSize(fontSizeMin + d / 2);
    var newLetter = name.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
      if (counter >= name.length) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
}
function mousePressed() {
	x=mouseX;
	y=mouseY;
}