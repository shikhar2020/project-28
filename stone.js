class Stone {
    constructor(x,y,r) {

        
     this.body = Bodies.circle(x,y,r,{isStatic:false, restitution:0, friction:1, density :1.2});
     World.add(world,this.body);
     this.r = r

     
     this.image = loadImage("sprites/stone.png")
    }

    display() {
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.r);
    }
}