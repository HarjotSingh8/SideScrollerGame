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
    if(cloud[i][0]<-844*2/3) {
      cloud[i][0]=random(1280, 1500);
      cloud[i][1]=100*floor(random(0, 4));
    }
    image(im, cloud[i][0], cloud[i][1], 844*2/3, 426*2/3);
  }
}

function createWorld() {
  for(let i=0; i<2; i++)
  world.push([random(1280, 2000), floor(random(4, 8))*100, random(400, 1280)]);
}
function drawWorld() {
  for (let i=0; i<world.length; i++) {
    if(playerMotion==0)
    world[i][0]-=speed.x
    if(world[i][0]+world[i][2]<0) {
      world[i][0]=random(1280, 1500);
      world[i][1]=100*floor(random(3, 7));
      world[i][2]=100*random(4, 12);
    }
    rect(world[i][0], world[i][1], world[i][2], platformWidth);
  }
}
