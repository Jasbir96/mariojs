class Particle extends Entity {
    constructor(tileset, posX, posY, width, height, velX, velY) {
        const sprite = new Sprite(tileset, 25, 6, 10, 7);
        super(sprite, 'particle', posX, posY, width, height);
        this.posX += velX;
        this.velY = velY;

    }
}