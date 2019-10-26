let throwTheSwtch;

let zombieImage;

let zombieSound;

let x;
let y;

let xspeed;
let yspeed;

let ghost;

let background = graveyard;

function preload() {
  soundFormats('wav');
  zombieSound = loadSound('audio/zombie_sound.wav');

ghostie = loadImage('images/ghost.png');

}

function setup() {
  x = 800;
  y = 800;
  xspeed = random(width);
  yspeed = random(height);

  throwTheSwtch = select('#throwTheSwitch')
  zombieImage = select('#zombie')
  ghost = select('#ghost')


  throwTheSwtch.mousePressed(toggleZombie);
}


function draw() {

                }



}

function toggleZombie() {

  zombieSound.setVolume(0.1);
  zombieSound.play();

  setTimeout(function() {
    zombieImage.show();
  }, 500);

}

function ghostie(){

  image(ghost, x, y, 80, 60);

  x = x + xspeed;
  y = y + yspeed;

  if (x + 80 == width || x == 0){ xspeed =
   -xspeed;
     }

  if (y + 60 == height || y == 0){ yspeed =
   -yspeed;

}
}
