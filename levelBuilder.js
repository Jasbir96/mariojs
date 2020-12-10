class LevelBuilder{

    constructor(level){
this.sceneryEntities=[];

level.ground.forEach((gCord)=>{

    this.sceneryEntities.push(

        new Ground(tilesetImage,gCord[0],gCord[1],gCord[2],gCord[3])
    )
})

level.shrubs.forEach((shrub) => {
    this.sceneryEntities.push(
      new Shrub(tilesetImage, shrub[0], shrub[1], shrub[2], shrub[3]),
    );
  }); 
  level.mountains.forEach((mountain) => {
    this.sceneryEntities.push(
      new Mountain(
        mountainImage, mountain[0], mountain[1], mountain[2], mountain[3]),
    );
  });
  level.pipes.forEach((pipe) => {
  this.sceneryEntities.push(
      new Pipe(tilesetImage, pipe[0], pipe[1], pipe[2], pipe[3]),
    );
  });
  level.smallClouds.forEach((smallCloud) => {
    this.sceneryEntities.push(
      new SmallCloud(
        cloudsImage, smallCloud[0], smallCloud[1], smallCloud[2], smallCloud[3],
    ));
  });
  level.mediumClouds.forEach((mediumCloud) => {
    this.sceneryEntities.push(
      new MediumCloud(
        cloudsImage, mediumCloud[0], mediumCloud[1], mediumCloud[2], mediumCloud[3],
    ));
  });
  level.largeClouds.forEach((largeCloud) => {
    this.sceneryEntities.push(
      new LargeCloud(
        cloudsImage, largeCloud[0], largeCloud[1], largeCloud[2], largeCloud[3],
    ));
  });
  level.stairs.forEach((brick) => {
    this.sceneryEntities.push(
      new Stair(tilesetImage, brick[0], brick[1], brick[2], brick[3]));
  });
  // single entites
  this.sceneryEntities.push(
    new Flag(tilesetImage, level.flag[0], level.flag[1], level.flag[2], level.flag[3]),
  );
  this.sceneryEntities.push(
    new Flagpole(
        tilesetImage, level.flagpole[0], level.flagpole[1], level.flagpole[2], level.flagpole[3]),
  );
  this.sceneryEntities.push( 
    new Castle( 
      castleImage, level.castle[0], level.castle[1], level.castle[2], level.castle[3]),
  );
    }
stock(gameObj){
    // 
this.sceneryEntities.forEach((entity)=>{
    gameObj.entities.scenery.push(entity);
})
}
render(gameObj){
  let camera=gameObj.camera;

  gameObj.entities.scenery.forEach((entity)=>{
        // console.log(entity)
        let entityEnd=entity.posX+entity.width;
        let frameWidth=camera.start+camera.width;
        if(entity.posX>=camera.start&&entityEnd<=frameWidth){
          gameObj.tool.drawImage(
            entity.sprite.img
            , entity.sprite.srcX
            , entity.sprite.srcY,
            entity.sprite.srcW,
            entity.sprite.srcH,
            entity.posX-camera.start,
            entity.posY,
            entity.width,
            entity.height
        )
        }
          
        
    })

}
}