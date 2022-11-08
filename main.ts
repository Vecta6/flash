basic.forever(function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        led.plot(0, 4)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        led.unplot(0, 4)
        basic.pause(900)
    }
})
