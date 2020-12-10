// left,right space
let input = {
    down: {},
    pressed:{},
    init() {
        // event listener set 
        window.addEventListener("keydown", (e) => {
            this.down[e.code] = true;
            // console.log(e.code)
        })
        window.addEventListener("keyup", (e) => {
         delete this.down[e.code];
         delete this.pressed[e.code];
        })
    }
    ,
    update(gameObj) {
    let mario= gameObj.entities.mario
//left 
if(this.isDown("ArrowLeft")){
// go left
mario.posX-=mario.velX;
mario.currentDirection = "left";
mario.currentState=mario.states.walkingAnim;

}
// right 
if(this.isDown("ArrowRight")){
    // go right
    mario.posX+=mario.velX;
    mario.currentDirection = "right";
mario.currentState=mario.states.walkingAnim;
}
// space  
// console.log(mario.velY);
if(this.isPressed("Space")){
if(mario.velY==1.1){
    mario.velY-=14;
mario.currentState=mario.states.jumpingAnim;
}
}

    }
    ,isDown(key){
        return this.down[key];
    },
    isPressed(key){
        if(this.pressed[key]){
              return false;
        }else if(this.down[key]){
            return true;
        }
    }

}