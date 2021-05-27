class Block2{
    constructor(x,y,width,height){
        var options={
           'restitution':1.8,
           'friction':1.0,
           'density':1.0
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.polygon=loadImage("polygon.png")
        this.width=width;
        this.height=height
        World.add(world,this.body)
    }
    display(){
      
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        image(this.polygon,0,0,this.width,this.height);
    
        pop();
    }
}