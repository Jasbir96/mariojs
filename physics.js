let physics = {
    update(gameObj) {
        // this.checkCollision(gameObj.entities.mario);
        this.gravity(gameObj.entities.mario);
        gameObj.entities.goombas.forEach((goomba)=>{
            this.gravity(goomba);
        })
        this.bgEntityCollision(gameObj);
        this.marioFallingCheck(gameObj);
    },
    gravity(entity) {
        entity.velY += 1.1;
        entity.posY += entity.velY;
    },

    bgEntityCollision(gameObj) {
        let mario = gameObj.entities.mario;
        let goombas = gameObj.entities.goombas;
        this.bgCollision(mario, gameObj);
        goombas.forEach((goomba) => {
            this.bgCollision(goomba, gameObj);
        })
    },
    bgCollision(entity, gameObj) {
        let scenery = gameObj.entities.scenery;
        scenery.forEach((scene) => {
            if (this.checkRectCollision(scene, entity)) {
                if (scene.type == "pipe" || scene.type == "stair") {
                    this.handleDirec(scene, entity)
                } else if (scene.type == "ground") {
                    if (entity.posY < scene.posY && entity.posX + entity.width > scene.posX && scene.posX + scene.posY > entity.posX && entity.velY >= 0) {
                        if (entity.type == "mario") {

                            entity.currentState = entity.states.standingAnim;
                        } else if (entity.type == "goomba") {
                            entity.currentState = entity.states.walkingAnim;

                        }
                        entity.posY = scene.posY - entity.height - 1;
                        entity.velY = 1.1;
                    }
                }
                // check 
            }

        })
    }
    ,

    checkRectCollision(scene, entity) {
        //x->r2>l1&&l2<r1
        let l1 = scene.posX;
        let l2 = entity.posX;
        let r1 = scene.posX + scene.width;
        let r2 = entity.posX + entity.width;
        let t1 = scene.posY + scene.height;
        let t2 = entity.posY + entity.height;
        let b1 = scene.posY;
        let b2 = entity.posY;
        // y-> t2>b1&&t1>b2
        if (r2 > l1 && l2 < r1 && t2 > b1 && t1 > b2) {
            return true;
        }
    },
    handleDirec(scene, entity) {
        // left
        if (entity.posX < scene.posX && entity.posY >= scene.posY) {
            entity.posX = scene.posX - entity.width;
            if (entity.type == "goomba") {
                entity.currentDirection = entity.currentDirection == "left" ? "right" : "left";
            }
        }
        // right
        if (entity.posX > scene.posX && entity.posY >= scene.posY) {
            entity.posX = scene.posX + scene.width;
            if (entity.type == "goomba") {
                entity.currentDirection = entity.currentDirection == "left" ? "right" : "left";
            }
        }

        //  top
        if (entity.posY < scene.posY && entity.posX + entity.width > scene.posX && scene.posX + scene.posY > entity.posX && entity.velY >= 0) {
            entity.currentState = entity.states.standingAnim;
            entity.posY = scene.posY - entity.height - 1;
            entity.velY = 0;

        }
    },

    marioFallingCheck(gameObj) {
        if (gameObj.entities.mario.posY >= 250) {
            // alert("Game Over");
            gameObj.reset();
        }
    },
    checkCollision(entity) {
        if (entity.posY + entity.height >= 180 && entity.velY > 0) {
            entity.posY = 174;
            entity.velY = 0;
            entity.currentState = entity.states.standingAnim;
        }
    }


}