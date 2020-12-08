// background entities
class Ground extends Entity{
    constructor(spritesheet, posX, posY, width, height) {
        // pomle pixel
        let img = new Sprite(spritesheet, 0, 0, 16, 16);
        super(img, "ground", posX, posY, width, height);
    }
}
class Pipe extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 0, 180, 35, 35);
  
      super( sprite,'pipe', xPos, yPos, width, height);
    }
  }
  class Stair extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 0, 18, 18, 18);
  
      super( sprite,'stair', xPos, yPos, width, height);
    }
  }
  class Shrub extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 198.5, 162.5, 53, 17);
      super( sprite,'shrub', xPos, yPos, width, height);
    }
  }
  class Mountain extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 0, 0, 90, 39);
  
      super( sprite,'mountain', xPos, yPos, width, height);
    }
  }
  class SmallCloud extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 64.5, 0, 33, 24);
  
      super( sprite,'cloud', xPos, yPos, width, height);
    }
  }
  class MediumCloud extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 0, 24.5, 48, 24);
  
      super( sprite,'cloud', xPos, yPos, width, height);
    }
  }
  class LargeCloud extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 0, 0, 64, 24);
  
      super( sprite,'cloud', xPos, yPos, width, height);
    }
  }
  class Flag extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 289, 153, 16, 27);
  
      super( sprite,'flag', xPos, yPos, width, height);
    }
  }
  class Flagpole extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 289, 163, 16, 18);
  
      super( sprite,'flag', xPos, yPos, width, height);
    }
  }
  class Castle extends Entity {
    constructor(tileset, xPos, yPos, width, height) {
      const sprite = new Sprite(tileset, 0, 0, 80, 80);
  
      super( sprite,'flag', xPos, yPos, width, height);
    }
  }
  
  