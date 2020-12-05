// kis spritesheet se kaun si image ka portion extract karna hai
class Sprite{
    constructor(img,srcX,srcY,srcW,srcH){
this.img=img;
this.srcX=srcX;
this.srcY=srcY;
this.srcW=srcW;
this.srcH=srcH
    }
}
// place on the game
class Entity {
    constructor(sprite,type, posX,posY,width,height){
        this.sprite=sprite;
        this.type=type;
        // game coordinates
        this.posX=posX;
        this.posY=posY;
        this.width=width;
        this.height=height;
    }
}
class Mario extends Entity{
constructor(spritesheet,posX,posY,width,height){
    let img=new Sprite(spritesheet,650,3,17,19);
    super(img,"mario",posX,posY,width,height);
    this.velX=1.8;
    this.velY=0;
}
}