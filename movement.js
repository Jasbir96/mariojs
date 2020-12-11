const movement = {
    update(gameObj) {
        gameObj.entities.goombas.forEach((goomba) => {
            goomba.currentState.movement(gameObj);
        })
    }
}