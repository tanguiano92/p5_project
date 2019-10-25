let throwTheSwtch;

let zombieImage;

function setup(){
noCanvas();

throwTheSwtch = select('#throwTheSwitch')
zombieImage = select('#zombie')
zombieImage.hide();

throwTheSwitch.mousePressed(toggleZombie);

}
function draw(){
	noBackground();
}

function toggleZombie(){

zombieImage.show();

}
