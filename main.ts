input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    PLAYER = game.createSprite(0, -10)
})
input.onButtonPressed(Button.B, function () {
    let sprite: game.LedSprite = null
    sprite.change(LedSpriteProperty.X, 1)
})
let PLAYER: game.LedSprite = null
basic.showString("mini world")
music.play(music.stringPlayable("- C - C - C - C5 ", 120), music.PlaybackMode.UntilDone)
let RUPES = 0
basic.forever(function () {
    if (true) {
        RUPES += 1
    }
})
basic.forever(function () {
    if (false) {
        RUPES += 1
    }
})
