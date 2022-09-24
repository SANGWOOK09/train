radio.set_group(1)
time = 0
리스트 = [0, 1, 0, 0, 0, 0, 0]
number = 0

def on_forever():
    global time
    if 50 < smarthome.read_light_intensity(AnalogPin.P1):
        for index in range(20000):
            basic.pause(1000)
            time += 1
        if 50 < smarthome.read_light_intensity(AnalogPin.P1):
            break
            리스트[number + 1] = time
            radio.send_number(time)
basic.forever(on_forever)
