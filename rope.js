class Rope{
    constructor(a,b) {
        var options = {
            bodyA : a,
            pointB : b,
            stiffness :0.01,
            length : 1
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope)

    }
    display() {
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
      

       
    }
    fly() {
        this.rope.bodyA = null;
    }

    attatch(body) {
        this.rope.bodyA = body;
    }
}