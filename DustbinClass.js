class Dustbin{
    constructor(xforleftbinPart,yforleftbinPart){
        var options = {isStatic : true};
        this.leftbinPart = Bodies.rectangle(xforleftbinPart,yforleftbinPart,15,155,options);
        this.rightbinPart = Bodies.rectangle(xforleftbinPart + 134,yforleftbinPart,15,155,options);
        this.basebinPart = Bodies.rectangle(xforleftbinPart + 67,yforleftbinPart + 70,160,10,options);

        World.add(world,this.leftbinPart);
        World.add(world,this.rightbinPart);
        World.add(world,this.basebinPart);

        this.xforleftbinPart = xforleftbinPart;
        this.yforleftbinPart = yforleftbinPart;

        this.imagefordustbin = loadImage("dustbingreen.png");

    }

    display(){
        imageMode(CENTER);
        rectMode(CENTER);

        fill("yellow");
        rect(this.leftbinPart.position.x,this.leftbinPart.position.y,15,155);
        rect(this.rightbinPart.position.x,this.rightbinPart.position.y,15,155);

        image(this.imagefordustbin,this.basebinPart.position.x,this.basebinPart.position.y - 70,160,155);
  
    }
}