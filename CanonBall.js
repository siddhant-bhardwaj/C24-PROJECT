class CanonBall {
  constructor(x, y) {
      var options = {
      isStatic: true
      
     }
     this.body= Bodies.rectangle(x,y,80,30,options);
     this.width=80;
     this.height=30;
     World.add(world,this.body);
    }

    display(){
      var pos =this.body.position;
      /*  pos.x=mouseX;
        pos.y=mouseY;*/
      var angle = this.body.angle;
      //push();
      //rotate(angle);
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
      //pop();
      
     

    }
}

