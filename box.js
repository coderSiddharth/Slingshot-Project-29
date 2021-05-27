class Box{

constructor(x,y){

 var options = {
  
    isStatic:true,
    restitution:0.1,
    friction:1,
    density:2

  

 }
this.x=x;
this.y=y;
this.body = Bodies.rectangle(this.x,this.y,20,40);
World.add(world,this.body);


}
display(){

var pos = this.body.position;


push();
translate(pos.x,pos.y);
rectMode(CENTER)
strokeWeight(1);

rect(0,0,20,40)
pop();
}

}