class Box {
    constructor(x,y,width,height) {
       var options ={
          isStatic: false,
          'restitution':0.4,
          'friction':1.0,
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.visibility = 255;
       World.add(world,this.body);    
   }

   display(){

    if (this.body.speed > 6) {
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 2;
        tint(255,this.visibility);
        rect(this.body,this.body.position.x,this.body.position.y,50,50);
        pop();        
    }
    else{
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke(0);
        rect(0,0,this.width,this.height);
        pop();
       } 
    }
};