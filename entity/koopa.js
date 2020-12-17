class Koopa extends Entity {
    constructor(spritesheet, posX, posY, width, height) {
        let img = new Sprite(spritesheet, 253, 29, 16, 24);
        super(img, "koopa", posX, posY, width, height);
        this.velX = 0.5;
        this.velY = 0;
        // states => standing state , walking state,jumping
        // frame
        let self = this;
        this.animFrame = {
            walkRight: {
                frames: [
                    new Sprite(spritesheet, 253, 29, 16, 24),
                    new Sprite(spritesheet, 237, 29, 16, 24),
                ],
                counter: 0

            },
            walkLeft: {
                frames: [
                    new Sprite(spritesheet, 173, 5, 16, 24),
                    new Sprite(spritesheet, 189, 5, 16, 24),
                ],
                counter: 0
            },
            hiding: new Sprite(spritesheet, 237.5, 14, 16, 15)
        }
        this.states = {
            walkingAnim: {
                animation(gameObj) {
                    if (self.currentDirection == "left") {
                        if (gameObj.animFrame % 6 == 0) {
                            self.sprite = self.animFrame.walkLeft.frames[self.animFrame.walkLeft.counter];
                            self.animFrame.walkLeft.counter++;
                            if (self.animFrame.walkLeft.counter > 1) {
                                self.animFrame.walkLeft.counter = 0;
                            }
                        }
                    } else {
                        if (gameObj.animFrame % 6 == 0) {
                            self.sprite = self.animFrame.walkRight.frames[self.animFrame.walkRight.counter];
                            self.animFrame.walkRight.counter++;
                            if (self.animFrame.walkRight.counter > 1) {
                                self.animFrame.walkRight.counter = 0;
                            }
                        }


                    }
                },
                movement() {
                    if (self.currentDirection == "left") {
                        self.posX -= self.velX;
                    } else {

                        self.posX += self.velX;
                    }
                }
            },

            hiding: {
                movement() {
                    self.velX = 0;
                    self.height = 16;
                    self.width = 13;
                },
                animation() {
                    self.sprite = self.animFrame.hiding;
                }

            },
            sliding: {
                movement() {
                    self.height = 16;
                    self.width = 13;
                    if (self.currentDirection == "left") {
                        self.posX -= 2;
                    } else {
                        self.posX += 2;

                    }
                },
                animation() {
                    self.sprite = self.animFrame.hiding;
                }
            }
        }
        this.currentDirection = "right";
        this.currentState = this.states.walkingAnim;
    }


}