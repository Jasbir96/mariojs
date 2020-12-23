class Block extends Entity {
    constructor(content, tileset, posX, posY, width, height) {
        const sprite = new Sprite(tileset, 433, 1, 17, 17);
        super(sprite, 'block', posX, posY, width, height);
        this.content = content;
        let self = this;
        this.animFrame = {
            empty: new Sprite(tilesetImage, 486, 0, 18, 18),
            full: new Sprite(tilesetImage, 433, 1, 17, 17)
        }
        this.states = {
            fullAnim() {
                self.sprite = self.animFrame.full;
            },
            emptyAnim() {
                self.sprite = self.animFrame.empty;
            }
        }
        this.currentState = this.states.fullAnim;
    }
}