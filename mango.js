class Mango {
    constructor(x,y,r) {
     this.body = Bodies.circle(x,y,r,{isStatic:true, restitution:0});
     this.r = r
     World.add(world,this.body);


     

     
     this.image = loadImage("sprites/mango.png")
    }

    display() {

      var a  = this.body.angle;
      imageMode(CENTER);
push();
      translate(this.body.position.x,this.body.position.y);
      rotate(a)
      image(this.image,0,0,this.r*2,this.r*2);
      pop();
    }
}