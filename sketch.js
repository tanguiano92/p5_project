let throwTheSwtch;

let zombieImage;

let zombieSound;


function preload() {
  soundFormats('wav');
  zombieSound = loadSound('audio/zombie_sound.wav');

}

function setup() {

  throwTheSwtch = select('#throwTheSwitch')
  zombieImage = select('#zombie')


  throwTheSwtch.mousePressed(toggleZombie);


}


function draw() {

}



function toggleZombie() {

  zombieSound.setVolume(0.1);
  zombieSound.play();

  setTimeout(function() {
    zombieImage.show();
  }, 500);

}
