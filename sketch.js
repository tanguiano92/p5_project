let throwTheSwtch;

let haaunt;

let zombieImage;

let zombieSound;

let ghostImage;

function preload() {
  soundFormats('wav');
  zombieSound = loadSound('audio/zombie_sound.wav');

}

function setup() {

  throwTheSwtch = select('#throwTheSwitch')
  zombieImage = select('#zombie')

  haaunt = select('#haunt')
  ghostImage = select('#ghost')


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

function ghostie(){


}
