let throwTheSwtch;

let zombieImage;

function setup(){
noCanvas();

throwTheSwtch = select('#throwTheSwitch')
zombieImage = select('#zombie')


throwTheSwtch.mousePressed(toggleZombie);

}
function draw(){

}

function toggleZombie(){

zombieImage.show();

}
