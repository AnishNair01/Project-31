class Plinko {

    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:1,
            friction:0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        World.add(world, this.body);   
    }

    display(){

        var pos1 = this.body.position
        push()
        translate(pos1.x,pos1.y);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.r,this.r);
        pop()
    }

}