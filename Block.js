class Block {
  constructor(x,y,width,height){
      var options={
         
      }
      
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.polygon=loadImage("block.png")
      this.width=width;
      this.height=height
      World.add(world,this.body)
      this.visibility=255
  }
  display(){
    console.log(this.body.speed)
   if(this.body.speed<8){
    var pos=this.body.position;
    var angle=this.body.angle;
   push ()
    translate(pos.x,pos.y);
    rotate(angle);
    fill("yellow");
    image(this.polygon,0,0,this.width,this.height)
    pop()
   }
   else{
     World.remove(world,this.body)
     push();
     this.visibility=this.visibility-5
     tint(255,this.visibility)
     image(this.polygon,this.body.position.x,this.body.position.y,this.width,this.height)
     pop()
   }
  }
}