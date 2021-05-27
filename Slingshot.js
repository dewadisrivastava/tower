class Slingshot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:20
    }
    this.pointB=pointB
  
    this.sling=Constraint.create(options);
    World.add(world,this.sling)
}
fly(){
    this.sling.bodyA=null
}
display(){
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB
        strokeWeight(3)
        line(pointA.x+10,pointA.y+30,pointB.x,pointB.y);
        line(pointA.x+10,pointA.y+30,pointB.x-10,pointB.y)
    }
    if(keyDown("space")){
        this.sling.bodyA=Block1.body
    }
}
}