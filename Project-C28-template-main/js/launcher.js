class Launcher{
    constructor(body,anchor){
    var options={
       bodyA:body,
       pointB:anchor,
       stiffness:0.004,
        length:1
    }
    this.bodyA=body
    this.pointB=anchor
    this.launch= Constraint.create(options);
    World.add(world,this.launch);
}
display(){
   if (this.launch.bodyA){
   var pointA=this.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}

fly()
{
    this.launch.bodyA=null;
}
attach(body){
this.launch.bodyA=body;
}
}
