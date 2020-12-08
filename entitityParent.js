// kis spritesheet se kaun si image ka portion extract karna hai
class Sprite {
    constructor(img, srcX, srcY, srcW, srcH) {
      this.img = img;
      this.srcX = srcX;
      this.srcY = srcY;
      this.srcW = srcW;
      this.srcH = srcH
    }
  }
  // place on the game
  class Entity {
    constructor(sprite, type, posX, posY, width, height) {
      this.sprite = sprite;
      this.type = type;
      // game coordinates
      this.posX = posX;
      this.posY = posY;
      this.width = width;
      this.height = height;
    }
  }