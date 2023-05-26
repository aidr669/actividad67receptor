radio.onReceivedNumber(function (receivedNumber) {
    led.setBrightness(255)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "power") {
        entendido = !(entendido)
        led.setBrightness(125)
        led.enable(entendido)
    }
})
let entendido = false
radio.setGroup(1)
entendido = false
led.enable(entendido)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
