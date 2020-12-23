class Brick extends Entity {
    constructor(tileset, posX, posY, width, height) {
        const sprite = new Sprite(tileset, 18, 0, 18, 18);
        super(sprite, 'brick', posX, posY, width, height);
    }
    createParticles(gameObj) {
        let l1 = new Particle(tilesetImage, this.posX, this.posY, this.width / 2, this.height / 2, 10, -8);
        let r1 = new Particle(tilesetImage, this.posX, this.posY, this.width / 2, this.height / 2, -20, -8);
        gameObj.entities.particles.push(l1, r1);
        setTimeout(() => {
            let idx = gameObj.entities.particles.indexOf(l1);
            gameObj.entities.particles.splice(idx, 1);
            idx = gameObj.entities.particles.indexOf(r1);
            gameObj.entities.particles.splice(idx, 1);
        }, 300);
    }
}