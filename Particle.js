class Particle {

    constructor(x,y,radius){
        var options = {
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        this.color = color(random(0,255),random(0,255), random(0,255));
        World.add(world, this.body);   
    }

    display(){

        var pos1 = this.body.position
        var angle = this.body.angle

        push()
        translate(pos1.x,pos1.y);
        rotate(angle)
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop()
    }

}