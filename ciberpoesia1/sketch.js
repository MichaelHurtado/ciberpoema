let button1, button2;
var name=" ";
var texfield;
function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}
function setup(){
	createCanvas(windowWidth,windowHeight);
	background(255);
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
function draw(){
	
}
function touchMoved() {
	fill(0)
    .strokeWeight(0)
    .textSize(20);
	textFont('Helvetica');
	text(name,mouseX,mouseY);  
}