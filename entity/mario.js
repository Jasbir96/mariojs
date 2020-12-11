
class Mario extends Entity {
  constructor(spritesheet, posX, posY, width, height) {
    let img = new Sprite(spritesheet, 650, 3, 17, 19);
    super(img, "mario", posX, posY, width, height);
    this.velX = 2;
    this.velY = 0;
    // states => standing state , walking state,jumping
    // frame
    let self = this;
    this.animFrame = {
      walkRight: {
        frames: [
          new Sprite(spritesheet, 667, 5, 16, 16),
          new Sprite(spritesheet, 683, 5, 16, 16),
          new Sprite(spritesheet, 699, 5, 16, 16),
        ],
        counter:0
       
      },
      walkLeft: {
        frames: [
          new Sprite(spritesheet, 844, 21, 16, 16),
          new Sprite(spritesheet, 828, 21, 16, 16),
          new Sprite(spritesheet, 812, 21, 16, 16),
        ],
        counter:0
      },
      standRight: new Sprite(spritesheet, 651, 5, 16, 16),
      standLeft: new Sprite(spritesheet, 860, 21, 16, 16),
      jumpRight: new Sprite(spritesheet, 731, 5, 16, 16),
      jumpLeft: new Sprite(spritesheet, 778, 22, 16, 16),
    }
    this.states = {
      walkingAnim(gameObj) {
        
        if (self.currentDirection == "left") {
          if(gameObj.animFrame%6==0){
            self.sprite=self.animFrame.walkLeft.frames[self.animFrame.walkLeft.counter];
            self.animFrame.walkLeft.counter++;
            if(self.animFrame.walkLeft.counter>2){
              self.animFrame.walkLeft.counter=0;
            }
          }
        } else {
          if(gameObj.animFrame%6==0){
            self.sprite=self.animFrame.walkRight.frames[self.animFrame.walkRight.counter];
            self.animFrame.walkRight.counter++;
            if(self.animFrame.walkRight.counter>2){
              self.animFrame.walkRight.counter=0;
            }
          }
          
        
      }
      },
      standingAnim() {
        if (self.currentDirection == "left") {
          self.sprite = self.animFrame.standLeft;
        } else {
          
          self.sprite = self.animFrame.standRight;
        }
      },
      jumpingAnim() {
        if (self.currentDirection == "left") {
          self.sprite = self.animFrame.jumpLeft;
          
        } else {
          
          self.sprite = self.animFrame.jumpRight;
        }
      }
    }
    this.currentDirection ="right";
    this.currentState=this.states.standingAnim;
  }


}