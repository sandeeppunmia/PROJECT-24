class Ball {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1,
      }
      this.body = Bodies.circle(x,y,40,options);
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("pink");
      ellipse(0,0,40,40);
      pop();
    }
  }
  