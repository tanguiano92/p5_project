let throwTheSwtch;

let zombieImage;

let zombieSound;

function preload() {
  soundFormats('wav');
  zombieSound = loadSound('audio/zombie_sound.wav');

  zombieImage = loadImage('images/zombie.png');
}

function setup() {
  noCanvas();

  throwTheSwtch = select('#throwTheSwitch')
  zombieImage = select('#zombie')


  throwTheSwtch.mousePressed(toggleZombie);


}

function draw() {

image(zombieImage, 0, 0);

}

function toggleZombie() {

  zombieSound.setVolume(0.1);
  zombieSound.play();

  setTimeout(function() {
    zombieImage.show();
  }, 500);

}
