let player_pos_1 = 0
let player_pos2 = 0
let gamp = 0
let bx = 0
let by = 0
let dirx = 0
let diry = 0
input.onButtonPressed(Button.A, function () {
    if (player_pos_1 < 1) {
        player_pos_1 += 1
    } else {
        player_pos_1 = -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (player_pos2 < 1) {
        player_pos2 += 1
    } else {
        player_pos2 = -1
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (gamp == 0) {
        gamp = -1
        bx = 2
        by = 2
        while (dirx == 0) {
            dirx = randint(-1, 1)
        }
        while (diry == 0) {
            diry = randint(-1, 1)
        }
        gamp = 5
    }
})
loops.everyInterval(2500, function () {
    if (gamp == 1) {
        led.unplot(bx, by)
        if (dirx == 1) {
            bx += 1
            if (bx == 3) {
                if (led.point(bx + dirx, by + diry)) {
                    dirx = -1
                    if (diry == 1) {
                        diry = -1
                    } else if (diry == -1) {
                        diry = 1
                    } else {
                    	
                    }
                } else {
                    gamp = 0
                }
            }
        } else if (dirx == 1) {
            bx += -1
            if (bx == 1) {
                if (led.point(bx + dirx, by + diry)) {
                    dirx = 1
                    if (diry == 1) {
                        diry = -1
                    } else if (diry == -1) {
                        diry = 1
                    } else {
                    	
                    }
                } else {
                    gamp = 0
                }
            }
        } else {
        	
        }
        if (diry == 1) {
            by += 1
            if (by == 5) {
                diry = -1
                by = 4
            }
        } else if (diry == -1) {
            by += -1
            if (by == -1) {
                diry = 1
                by = 0
            }
            led.plot(bx, by)
        } else {
        	
        }
    } else if (gamp == 5) {
        led.plot(2, 2)
        basic.pause(1000)
        gamp = 1
    } else {
    	
    }
})
loops.everyInterval(25, function () {
    if (player_pos_1 == -1) {
        led.plot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.unplot(0, 3)
        led.unplot(0, 4)
    }
    if (player_pos_1 == 0) {
        led.unplot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.unplot(0, 4)
    }
    if (player_pos_1 == 1) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
    }
    if (player_pos2 == -1) {
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.unplot(4, 3)
        led.unplot(4, 4)
    }
    if (player_pos2 == 0) {
        led.unplot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.unplot(4, 4)
    }
    if (player_pos2 == 1) {
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
    }
})
basic.forever(function () {
	
})
