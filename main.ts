radio.setGroup(1)
let time = 0
let 리스트 = [
0,
1,
0,
0,
0,
0,
0
]
let number = 0
basic.forever(function () {
    if (50 < smarthome.ReadLightIntensity(AnalogPin.P1)) {
        for (let index = 0; index < 20000; index++) {
            basic.pause(1000)
            time += 1
        }
        if (50 < smarthome.ReadLightIntensity(AnalogPin.P1)) {
            break;
리스트[number + 1] = time
            radio.sendNumber(time)
        }
    }
})
