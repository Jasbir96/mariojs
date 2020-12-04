// alert("Js Linked");
// SOLID
const render = {
    init(gameObj) {
        // drawSky
        gameObj.tool.fillStyle = "#3498db";
        gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);
        // gameObj.tool.drawImage(castleImage, 40,40,200,150);
        let mario = gameObj.entities.mario;
        //    console.log(mario);
        gameObj.tool.drawImage(
            mario.sprite.img
            , mario.sprite.srcX
            , mario.sprite.srcY,
            mario.sprite.srcW,
            mario.sprite.srcH,
            mario.posX,
            mario.posY,
            mario.width,
            mario.height
        )
    },
    update(gameObj) {
        // drawSky
        let mario = gameObj.entities.mario;
        //    console.log(mario);
        gameObj.tool.clearRect(0,0,window.innerWidth,window.innerHeight);
        gameObj.tool.fillStyle = "#3498db";
        gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);
        gameObj.tool.drawImage(
            mario.sprite.img
            , mario.sprite.srcX
            , mario.sprite.srcY,
            mario.sprite.srcW,
            mario.sprite.srcH,
            mario.posX,
            mario.posY,
            mario.width,
            mario.height
        )

    }
}

class Game {
    // game basic setup creation
    init() {
        preload()
            .then(() => {
                const canvas = document.querySelector(".board");
                canvas.height = window.innerHeight;
                canvas.width = window.innerWidth;
                const tool = canvas.getContext("2d");
                let entities = {}
                let gameObj = {
                    tool, canvas,
                    entities
                }
                tool.scale(2.5, 2.5);
                let mario = new Mario(spriteSheetImage, 175, 200, 18, 18);
                gameObj.entities.mario = mario;
                render.init(gameObj);
                input.init();
                this.update(gameObj);
            })
    }
    update(gameObj) {
        // game execution
        function gameloop() {
            // console.log("Hello",Math.random());
            input.update(gameObj);
            render.update(gameObj)
            requestAnimationFrame(gameloop);
        }
        gameloop();
    }
    reset() {
        location.reload();
    }
}
const game = new Game();
game.init();
// .then(function () {
//     console.log(castleImage);
//     console.log(cloudsImage)
//     console.log(mountainImage)
//     console.log(spriteSheetImage)
//     console.log(tilesetImage);
//     console.log("Now game will start ");


// })

// console.log(a);