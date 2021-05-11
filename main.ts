RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    if (input.lightLevel() > 40) {
        RingbitCar.forward()
    } else {
        RingbitCar.turnleft()
    }
})
