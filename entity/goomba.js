
class Goomba extends Entity {
    constructor(spritesheet, posX, posY, width, height) {
        let img = new Sprite(spritesheet, 115, 5, 16, 16);
        super(img, "goomba", posX, posY, width, height);
        this.velX = 1.1;
        this.velY = 0;
        // states => standing state , walking state,jumping
        // frame
        let self = this;
        //   /frames
        this.animFrame = {
            walking: {
                frames: [
                    new Sprite(spritesheet, 115, 5, 16, 16),
                    new Sprite(spritesheet, 131, 5, 16, 16),
                ],
                counter: 0,
            },
            squashed: new Sprite(spritesheet, 147.5, 5, 16, 16)
        };
        // animation
        this.states = {
            walkingAnim: {
                animation(gameObj) {
                    if (gameObj.animFrame % 6 == 0) {
                        self.sprite = self.animFrame.walking.frames[self.animFrame.walking.counter];
                        self.animFrame.walking.counter++;
                        if (self.animFrame.walking.counter > 1) {
                            self.animFrame.walking.counter = 0;
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
            squashed: new Sprite(spritesheet, 147.5, 5, 16, 16)

        }
        this.currentDirection = "left";
        this.currentState = this.states.walkingAnim;
    }


}