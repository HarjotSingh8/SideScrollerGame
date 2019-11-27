

class Player {
  constructor() {
    this.loc = createVector(200,400);
    this.width=10;
    this.crouchHeight=10;
    this.standHeight=20;
    this.state=1; //1 is standing, 0 is crouch;
    this.onGround=0;
  }
  calcGravity() {
    //if(speed.y<9)
    speed.y=speed.y+gravity;
  }
  collisionDetection() {
    this.onGround=0;
    if(this.st=1) {
      for (let i=0; i<world.length; i++) {
        //rect(world[i][0], world[i][1], world[i][2], platformWidth);
        if(this.loc.x>world[i][0] && this.loc.x<world[i][0]+world[i][2]) {
          if(this.loc.y>world[i][1]-platformWidth && this.loc.y<world[i][1]+platformWidth) {

            if(speed.y>0) {
              this.loc.y-=this.loc.y-(world[i][1]-platformWidth);
              speed.y=0;
              this.onGround=1;
            }
          }
        }
      }
    }
    else {
      for (let i=0; i<world.length; i++) {
        //rect(world[i][0], world[i][1], world[i][2], platformWidth);
        if(this.loc.x>world[i][0] && this.loc.x<world[i][0]+world[i][2]) {
          if(this.loc.y>world[i][1]-platformWidth && this.loc.y<world[i][1]+platformWidth && speed.y<0) {
            if(speed.y>0) {
              this.loc.y-=this.loc.y-(world[i][1]-platformWidth);
              speed.y=0;
              this.onGround=1;
            }
          }
        }
      }
    }
  }
  display(){
    fill(200, 200, 200)
    if(playerMotion==1) {
      this.loc.x+=speed.x;
    }
    this.loc.y+=speed.y;
    this.calcGravity();
    this.collisionDetection();
    if(this.state==1) {
      ellipse(this.loc.x, this.loc.y, this.width, this.standHeight);
    }
    else {
      ellipse(this.loc.x, this.loc.y+5, this.width, this.crouchHeight);
    }
    //console.log(this.st)
  }
}
