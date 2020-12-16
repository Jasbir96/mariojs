
let physics = {
    update(gameObj) {
        // this.checkCollision(gameObj.entities.mario);
        this.gravity(gameObj.entities.mario);
        gameObj.entities.goombas.forEach((goomba) => {
            this.gravity(goomba);
        })
        gameObj.entities.koopas.forEach((koopa) => {
            this.gravity(koopa);
        })
        this.entityMarioCol(gameObj);
        this.bgEntityCollision(gameObj);
        this.marioFallingCheck(gameObj);
    },
    gravity(entity) {
        entity.velY += 1.1;
        entity.posY += entity.velY;
    },

    entityMarioCol(gameObj) {
        let { goombas, mario } = gameObj.entities;
        goombas.forEach((goomba) => {
            if (this.checkRectCollision(goomba, mario)) {
                this.handleCollision(mario, goomba, gameObj);
            }
        })
    },
    handleCollision(mario, entity, gameObj) {
        if (entity.type == "goomba") {
            // left
            if (mario.posX > entity.posX && mario.posY == 175.2) {
                // console.log(mario.posY, "left");
                mario.posX = entity.posX - mario.width;
                if (entity.currentState != entity.states.squashed) {
                    this.marioDeath(gameObj, mario);

                }
            }
            // right
            if (mario.posX < entity.posX && mario.posY == 175.2) {
                // console.log(mario.posY, "right");

                mario.posX = entity.posX + mario.width;
                if (entity.currentState != entity.states.squashed) {
                    this.marioDeath(gameObj, mario);
                }
            }
            // top
            if (mario.posY < entity.posY && (mario.posX < entity.posX + entity.width && (mario.posX + mario.width > entity.posX))) {
                if (entity.currentState != entity.states.squashed && mario.pointer != "dead") {
                    this.enemyDeath(gameObj, entity, mario);
                }
            }
        }
    },
    enemyDeath(gameObj, entity, mario) {
        entity.pointer = "squashed";
        entity.currentState = entity.states.squashed;

        setTimeout(() => {
            let idx = gameObj.entities.goombas.indexOf(entity);
            delete gameObj.entities.goombas[idx];
        }, 200);
    },
    marioDeath(gameObj, mario) {
        mario.velX = 0;
        mario.currentState = mario.states.dead;
        mario.velY = -14;
        mario.pointer = "dead";
        gameObj.userControl = false;
        setTimeout(() => {
            gameObj.reset();
        }, 3000);
    },
    bgEntityCollision(gameObj) {
        let mario = gameObj.entities.mario;
        let goombas = gameObj.entities.goombas;
        let koopas = gameObj.entities.koopas;
        this.bgCollision(mario, gameObj);
        goombas.forEach((goomba) => {
            this.bgCollision(goomba, gameObj);
        })
        koopas.forEach((koopa) => {
            this.bgCollision(koopa, gameObj);
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
                        }
                        if (entity.pointer != "dead") {

                            entity.posY = scene.posY - entity.height - 1;
                            entity.velY = 1.1;
                        }

                    }
                }
                // check 
            }

        })
    }
    ,
    checkRectCollision(entity1, entity2) {
        //x->r2>l1&&l2<r1
        let l1 = entity1.posX;
        let l2 = entity2.posX;
        let r1 = entity1.posX + entity1.width;
        let r2 = entity2.posX + entity2.width;
        let t1 = entity1.posY + entity1.height;
        let t2 = entity2.posY + entity2.height;
        let b1 = entity1.posY;
        let b2 = entity2.posY;
        // y-> t2>b1&&t1>b2
        if (r2 > l1 && l2 < r1 && t2 > b1 && t1 > b2) {
            return true;
        }
    },
    handleDirec(scene, entity) {
        // left
        if (entity.posX < scene.posX && entity.posY >= scene.posY) {
            entity.posX = scene.posX - entity.width;
            if (entity.type == "goomba" || entity.type == "koopa") {
                entity.currentDirection = entity.currentDirection == "left" ? "right" : "left";
            }
        }
        // right
        if (entity.posX > scene.posX && entity.posY >= scene.posY) {
            entity.posX = scene.posX + scene.width;
            if (entity.type == "goomba" || entity.type == "koopa") {
                entity.currentDirection = entity.currentDirection == "left" ? "right" : "left";
            }
        }

        //  top
        if (entity.posY < scene.posY && entity.posX + entity.width > scene.posX && scene.posX + scene.posY > entity.posX && entity.velY >= 0) {
            if (entity.type == "mario") {

                entity.currentState = entity.states.standingAnim;
            }
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