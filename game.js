// alert("Js Linked");
// SOLID
const render = {
    init(gameObj) {
        // drawSky
        gameObj.tool.fillStyle = "#3498db";
        gameObj.tool.fillRect(0, 0,
            window.innerWidth, window.innerHeight);
            gameObj.tool.drawImage(castleImage, 40,40,200,150);
    }
}
class Game {
    // game basic setup creation
    init() {
        const canvas = document.querySelector(".board");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        const tool = canvas.getContext("2d");
        let gameObj = {
            tool, canvas
        }
        render.init(gameObj);
    }
    run() {
        // game execution
    }
    reset() {
        location.reload();
    }
}
preload().then(function () {
    console.log(castleImage);
    console.log(cloudsImage)
    console.log(mountainImage)
    console.log(spriteSheetImage)
    console.log(tilesetImage);
    console.log("Now game will start ");
    const game = new Game();


    game.init();
})

// console.log(a);