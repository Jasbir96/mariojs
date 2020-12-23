class Coin extends Entity {
    constructor(tileset, posX, posY, width, height) {
        const sprite = new Sprite(tileset, 5, 5, 10, 14);
        super(sprite, 'coin', posX, posY, width, height);
        const self = this;
        this.animFrames = {
            spin: {
                frames: [
                    new Sprite(spriteSheetImage, 5, 5, 10, 14),
                    new Sprite(spriteSheetImage, 21, 5, 10, 14),
                    new Sprite(spriteSheetImage, 37, 5, 10, 14),
                    new Sprite(spriteSheetImage, 53, 5, 10, 14),
                ],
                currentFrame: 0
            }
        }
        this.states = {
            spinning: {
                animation(gameObj) {
                    if (gameObj.animFrames % 3 == 0) {
                        self.sprite = self.animFrames.spin.frames[self.animFrames.spin.currentFrame];
                        self.animFrames.spin.currentFrame++;
                        if (self.animFrames.spin.currentFrame > 4) {
                            self.animFrames.spin.currentFrame = 0;
                        }
                    }
                }, movement() {
                    self.posY += self.velY;
                }
            }
        }
        this.currentState = this.states.spinning;
        this.velY = -0.7;

    }


}