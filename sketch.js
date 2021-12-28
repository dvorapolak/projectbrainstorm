const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImage, frog1, frog2, frog3, frog4, frog5 ;
var frog1I, frog2I, frog3I, frog4I, frog5I;

function preload()
{
	frog1I=loadImage("angryfrog.PNG")
	frog2I=loadImage("cheffrog.PNG")
	frog3I=loadImage("happyfrog.PNG")
	frog4I=loadImage("hungryfrog.PNG")
	frog5I=loadImage("unhappyfrog.PNG")
	//backgroundImage=loadImage("enter name here")
}

function setup() {
	createCanvas(2170, 1100);
	

	frog1 = createSprite(100, 900, 10,10);
	frog1.addImage(frog1I)
	frog1.scale=0.3

	frog2 = createSprite(300, 900, 10,10);
	frog2.addImage(frog2I)
	frog2.scale=0.3

	frog3 = createSprite(500, 900, 10,10);
	frog3.addImage(frog3I)
	frog3.scale=0.3

	frog4 = createSprite(700, 900, 10,10);
	frog4.addImage(frog4I)
	frog4.scale=0.3

    frog5 = createSprite(900, 900, 10,10);
	frog5.addImage(frog5I)
	frog5.scale= 0.3


}


function draw() {
  background(0)
  drawSprites();
 
}

//function keyPressed() {
// if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  //}
//}



