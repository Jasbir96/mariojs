// left,right space
let input = {
    down: {},
    init() {
        // event listener set 
        window.addEventListener("keydown", (e) => {
            this.down[e.code] = true;
            // console.log(e.code)
        })
        window.addEventListener("keyup", (e) => {
         delete this.down[e.code];
        })
    }
    ,
    update(gameObj) {
    let mario= gameObj.entities.mario
//left 
if(this.isDown("ArrowLeft")){
// go left
mario.posX-=mario.velX;
}

// right 
if(this.isDown("ArrowRight")){
    // go right
mario.posX+=mario.velX;
    }
// space  
 
    }
    ,isDown(key){
        return this.down[key];
    }

}