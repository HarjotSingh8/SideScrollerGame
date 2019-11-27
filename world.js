let world = [
  [0, 400, 400],
  [880, 400, 400],
]

let cloud = []

function createCloud() {
  for(let i=0; i<5; i++)
  cloud.push([random(0, 2000), floor(random(0, 4))*100]);
}
function drawCloud() {
  for (let i=0; i<cloud.length; i++) {
    if(playerMotion==0)
    cloud[i][0]-=speed.x
    cloud[i][0]-=cloudSpeed;
    if(cloud[i][0]<-300) {
      cloud[i][0]=random(1280, 1500);
      cloud[i][1]=100*floor(random(0, 4));
    }
    image(im, cloud[i][0], cloud[i][1], 200, 100 );
  }
}

function createWorld() {
  for(let i=0; i<2; i++)
  world.push([random(1280, 2000), floor(random(4, 8))*100, random(400, 1280)]);
}

function drawGrass() {
  for (let i=0; i<world.length; i++) {
    if(playerMotion==0)
    world[i][0]-=speed.x
    if(world[i][0]+world[i][2]<0) {
      world[  i][0]=random(1280, 1500);
      world[i][1]=100*floor(random(3, 7));
      world[i][2]=100*random(4, 12);
    }
    //rect(world[i][0], world[i][1], world[i][2], platformWidth);
    drawGrassPlatform(world[i][0], world[i][1], world[i][2])
  }
}

function drawGrassPlatform(x, y, l) {
  l=x+l;
  for( ;x<l; x+=32) {
    image(grassTexture, x, y-12, min(32, l-x), 32);
  }
}

function drawCliffs() {
  fill(25, 50, 50)
  for (let i=0; i<world.length; i++) {
    if(playerMotion==0)
    world[i][0]-=speed.x
    if(world[i][0]+world[i][2]<0) {
      world[  i][0]=random(1280, 1500);
      world[i][1]=100*floor(random(3, 7));
      world[i][2]=100*random(4, 12);
    }
    //rect(world[i][0], world[i][1], world[i][2], platformWidth);
    rect(world[i][0]+5, world[i][1], world[i][2]-10, windowHeight-world[i][1])
    drawCliffSides(world[i][0]-7, world[i][1], cliffTextureMirror)
    drawCliffSides(world[i][0]+world[i][2]-35, world[i][1], cliffTexture)
  }
}

function drawCliffSides(x, y, im) {
  for( ;y<windowHeight; y+=42) {
    image(im, x, y, 42, 42);
  }
}
