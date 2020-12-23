let animation = {
    update(gameObj) {
        let mario = gameObj.entities.mario;
        mario.currentState(gameObj);

        gameObj.entities.goombas.forEach((goomba) => {
            goomba.currentState.animation(gameObj);
        })
        gameObj.entities.koopas.forEach((koopa) => {
            koopa.currentState.animation(gameObj);
        })
        gameObj.entities.blocks.forEach((block) => {
            block.currentState(gameObj);
        })
        gameObj.entities.coins.forEach((coin) => {
            coin.currentState.animation(gameObj);
        })
    }
}