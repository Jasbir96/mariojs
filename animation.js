let animation={
    update(gameObj){
let mario=gameObj.entities.mario;
mario.currentState(gameObj);

gameObj.entities.goombas.forEach((goomba)=>{
    goomba.currentState.animation(gameObj);
})
    }
}