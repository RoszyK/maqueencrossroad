let strip: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
basic.showString("Good Morning !")
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    }
})
