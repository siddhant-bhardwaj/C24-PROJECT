class Shooter{
    constructor(){
    var options={
        
    
    }
    this.body= Bodies.rectangle(150,335,30,15,options);
    this.width=30;
    this.height=15;
   // this.body.angle=angle;
   // Matter.Body.setAngle(this.body,angle);
    World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
       pos.x=mouseX;
        pos.y=mouseY;
       var angle = this.body.angle;
      //  push();
        translate(pos.x, pos.y);
        //rotate(angle);
        rectMode(CENTER);
        fill("orange");
        rect(0, 0, this.width, this.height);
       // pop();
    
    }
       }
