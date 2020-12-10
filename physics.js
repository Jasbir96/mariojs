let physics = {
    update(gameObj) {
        // this.checkCollision(gameObj.entities.mario);
        this.gravity(gameObj.entities.mario);
        this.bgCollision(gameObj);
        this.marioFallingCheck(gameObj);
    },
    gravity(entity) {
        entity.velY += 1.1;
        entity.posY += entity.velY;
    }, 
    checkCollision(entity) {
        if (entity.posY + entity.height >= 180 && entity.velY > 0) {
            entity.posY = 174;
            entity.velY = 0;
            entity.currentState = entity.states.standingAnim;
        }
    }
    ,
    bgCollision(gameObj) {
        let mario = gameObj.entities.mario;
        let scenery = gameObj.entities.scenery;
        scenery.forEach((scene) => {
            if (this.checkRectCollision(scene, mario)) {
                if (scene.type == "pipe" || scene.type == "stair") {
                    this.handleDirec(scene, mario)
                }else if(scene.type=="ground"){
                    if(mario.posY<scene.posY&&mario.posX+mario.width>scene.posX&&scene.posX+scene.posY>mario.posX&&mario.velY>=0){
                        mario.currentState = mario.states.standingAnim;
                        mario.posY = scene.posY - mario.height - 1;
                        mario.velY = 1.1;
                    } 
                }
                // check 
            }

        })
    }
    ,

    checkRectCollision(scene, mario) {
        //x->r2>l1&&l2<r1
        let l1 = scene.posX;
        let l2 = mario.posX;
        let r1 = scene.posX + scene.width;
        let r2 = mario.posX + mario.width;
        let t1 = scene.posY + scene.height;
        let t2 = mario.posY + mario.height;
        let b1 = scene.posY;
        let b2 = mario.posY;
        // y-> t2>b1&&t1>b2
        if (r2 > l1 && l2 < r1 && t2 > b1 && t1 > b2) {
            return true;
        }
    },
    handleDirec(scene,mario){
        // left
        if(mario.posX<scene.posX&&mario.posY>=scene.posY){
           mario.posX=scene.posX-mario.width;
        }
    // right
    if(mario.posX>scene.posX&&mario.posY>=scene.posY){
        mario.posX=scene.posX+scene.width;
     }

    //  top
    if(mario.posY<scene.posY&&mario.posX+mario.width>scene.posX&&scene.posX+scene.posY>mario.posX&&mario.velY>=0){
        mario.currentState = mario.states.standingAnim;
        mario.posY = scene.posY - mario.height - 1;
        mario.velY = 0;

    }
    },

    marioFallingCheck(gameObj){
if(gameObj.entities.mario.posY>=250){
    alert("Game Over");
    
}
    }
    
}