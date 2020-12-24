const movement = {
    update(gameObj) {
        gameObj.entities.goombas.forEach((goomba) => {
            goomba.currentState.movement(gameObj);
        })
        gameObj.entities.koopas.forEach((koopa) => {
            koopa.currentState.movement(gameObj);
        })
        gameObj.entities.coins.forEach((coin) => {
            coin.currentState.movement(gameObj);
        })
        gameObj.entities.mushrooms.forEach((mushroom) => {
            mushroom.currentState.movement(gameObj);
        })
    }
}