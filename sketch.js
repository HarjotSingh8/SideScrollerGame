let bgcl;
let player;
let speed;
let playerMotion=1;
let gravity=0.5;
let platformWidth=10;
let decel=0.5;
let maxSpeed=10;
let cloudSpeed=2
let img;

function setup() {
  bgcl=color(97,137, 244);
  player=new Player()
  speed = createVector()
  createCanvas(windowWidth, windowHeight)
  frameRate(800);
  noStroke();
  createWorld();
  createCloud();
  world.push([0, 600, random(1280, 2000)]);
  im = createImg('https://www.pngix.com/pngfile/big/0-6829_free-png-download-cloud-png-images-background-png.png');
  im.hide()
  background(bgcl);

}

function draw() {
  //img.hide()
  //console.log(player.st)
  background(bgcl);
  input();
  checkMotion();
  calcSpeed();
  drawCloud();
  drawWorld();
  //calcSpeed();
  //drawCloud();
  player.display();
  if(player.loc.y>800) {
    player.loc.y=400;
    speed.y=0
  }
  let fps = frameRate();
fill(255);
stroke(0);
text("FPS: " + fps.toFixed(2), 10, 10);
  //rect(0, 400, 120, 5);
}
function checkMotion() {
  if(player.loc.x>800) {
    playerMotion=0;
  }
  if(playerMotion==0 && speed.x<0) {
    playerMotion=1;
  }
}
function calcSpeed() {
  if(accl==0 && player.onGround) {
    if(abs(speed.x)<decel)
      speed.x=0;
    if(speed.x>0) {
      speed.x-=decel;
    }
    if(speed.x<0){
      speed.x+=decel;
    }
  }
  else {
      speed.x+=accl;
  }
  /*if(speed.x>maxSpeed) {
    speed.x=maxSpeed
  }
  else
  if(speed.x<-maxSpeed) {
    speed.x=-maxSpeed
  }*/
  if(player.state==0 && player.onGround==1) {
    if(speed.x>maxSpeed/2) {
      speed.x=maxSpeed/2
    }
    else
    if(speed.x<-maxSpeed/2) {
      speed.x=-maxSpeed/2
    }
  }
  else {
    if(speed.x>maxSpeed) {
      speed.x=maxSpeed
    }
    else
    if(speed.x<-maxSpeed) {
      speed.x=-maxSpeed
    }
  }
}
function input() {
  if(keyIsDown(RIGHT_ARROW)) {
    accl=1;
  }
  else if(keyIsDown(LEFT_ARROW)) {
    accl=-1;
  }
  else {
    accl=0;
  }
  //else {
    //speed.x=0;
  //}

  if(keyIsDown(UP_ARROW)) {
    if(player.onGround==1)
    speed.y=-15
  }
  if(keyIsDown(DOWN_ARROW)) {
    player.state=0;
  }
  else {
    player.state=1;
  }
}
