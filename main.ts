let player_pos_1 = 0
let player_pos2 = 0
let gamp = 0
let bx = 0
let by = 0
let dirx = 0
let diry = 0
let bx1 = 0
let by1 = 0
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
        bx1 = bx
        by1 = by
        led.unplot(bx, by)
        if (dirx == 1) {
            bx += 1
        } else if (dirx == -1) {
            bx += -1
        } else {
        	
        }
        if (bx == 3 || bx == 1) {
            if (led.point(bx1 + dirx, by1 + diry)) {
                if (diry == 1) {
                    diry = -1
                } else if (diry == -1) {
                    diry = 1
                }
                if (dirx == 1) {
                    dirx = -1
                } else if (dirx == -1) {
                    dirx = 1
                }
            } else {
            	
            }
        }
        if (diry == 1) {
            if (by + diry >= 5) {
                diry = -1
            }
            by += 1
        } else if (diry == -1) {
            if (by + diry <= -1) {
                diry = -1
            }
            by += -1
        } else {
        	
        }
        if (bx >= 4) {
            dirx = -1
        } else if (bx <= 0) {
            dirx = 1
        }
        if (by >= 5) {
            by = 4
            diry = -1
        } else if (by <= -1) {
            by = 0
            diry = 1
        }
        led.plot(bx, by)
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
