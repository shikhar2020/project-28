class Tree {
    constructor(x,y) {
     this.body = Bodies.rectangle(x,y,200,200,{isStatic:true});
     World.add(world,this.body);

     this.w = 600;
     this.h = 600;
     this.image = loadImage("sprites/tree.png")
    }

    display() {
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,600,600);
    }
}