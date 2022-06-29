scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.showLongText("Bravo, tu as trouvé la sortie, mais tu n'as pas gagné.", DialogLayout.Bottom)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.showLongText("Top : https://www.jigidi.com/solve/", DialogLayout.Bottom)
    game.showLongText("9lyb47se/stt-wizards/", DialogLayout.Bottom)
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . c b c c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . . b b 5 b 5 5 5 5 b 5 b b . . 
    . . b 5 5 b b 5 5 b b 5 5 b . . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c e f f f f e c . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`niveau1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(19)
music.spooky.playUntilDone()
