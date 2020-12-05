let physics={
    update(gameObj){
        this.checkCollision(gameObj.entities.mario);
        this.gravity(gameObj.entities.mario)
    },
    gravity(entity){
entity.velY+=1.1;
entity.posY+=entity.velY;
    },
    checkCollision(entity){
if(entity.posY+entity.height>=200&&entity.velY>0){
    entity.posY=182;
    entity.velY=0;
}

    }
}