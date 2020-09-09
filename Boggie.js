class Boggie{
    constructor(x,y,w,h){
var factors= {
    isStatic:false
}
this.body= Bodies.rectangle(x,y,w,h,factors);
this.w = w;
this.h=h;
this.image=loadImage("images/coach.png");
World.add(myWorld,this.body);
Matter.Body.setMass(this.body,this.body.mass*5);
    }
    show(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);

    }
}