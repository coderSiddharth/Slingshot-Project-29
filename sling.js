class Sling{

constructor(bodyA,pointB){
var options={
bodyA : bodyA,
pointB : pointB,
stiffness: 0.02,
length:20
}
this.pointB=pointB;
this.chain = Constraint.create(options);
        World.add(world, this.chain);
}

attach(body){

    this.chain.bodyA=body;
  
      }

 fly(){

this.chain.bodyA=null;

 }

 display(){
     if(this.chain.bodyA){
     var pointA = this.chain.bodyA.position;
     var pointB = this.pointB;
 
     line(pointA.x, pointA.y, pointB.x, pointB.y);
 }
}}

