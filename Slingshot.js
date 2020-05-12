class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1img = loadImage("sprites/sling1.png");
        this.sling2img = loadImage("sprites/sling2.png");
        this.sling3img = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke(48,22,8)
            if (pointA.x<210){
                image(this.sling3img,pointA.x-30,pointA.y-10,15,30)
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
            } else{
                image(this.sling3img,pointA.x+25,pointA.y-10,15,30)
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
            }
        }
        image(this.sling1img,200,20)
        image(this.sling2img,170,20)
    }
    
}