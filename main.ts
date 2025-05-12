radio.setGroup(121)
radio.setTransmitPower(7)
basic.showString("Hi")
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 800) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        radio.sendNumber(12)
        basic.pause(1000)
        radio.sendNumber(0)
    }
})
