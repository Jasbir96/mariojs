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
    createCoin(gameObj) {
        let coin = new Coin(spriteSheetImage, this.posX + 4, this.posY - 14, 10, 10);
        gameObj.entities.coins.push(coin);
        setTimeout(() => {
            let idx = gameObj.entities.coins.indexOf(coin);
            gameObj.entities.coins.splice(idx, 1);
        }, 300);
    }
    createMushroom(gameObj) {
        let mushroom = new Mushroom(spriteSheetImage, this.posX + 4, this.posY - 15, 15, 15);
        gameObj.entities.mushrooms.push(mushroom);
    }
}