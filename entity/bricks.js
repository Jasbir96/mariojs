class Brick extends Entity {
    constructor(tileset, posX, posY, width, height) {
        const sprite = new Sprite(tileset, 18, 0, 18, 18);
        super(sprite, 'brick', posX, posY, width, height);
    }
}