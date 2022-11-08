radio.onReceivedNumber(function (receivedNumber) {
    if (game2 == 0) {
        if (receivedNumber == 1167) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
            radio.sendNumber(1166)
        }
        if (receivedNumber == 1166) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
            player = 1
            radio.sendNumber(1165)
            game2 = 1
        }
        if (receivedNumber == 1165) {
            basic.showLeds(`
                . . # . .
                . . . . .
                # . . . #
                . . . . .
                . . # . .
                `)
            player = 2
            game2 = 1
        }
    } else if (game2 == 1) {
        if (player == 2) {
            if (receivedNumber == 100) {
                player_pos_1 = -1
            }
            if (receivedNumber == 101) {
                player_pos_1 = 0
            }
            if (receivedNumber == 102) {
                player_pos_1 = 1
            }
        }
        if (player == 1) {
            if (receivedNumber == 200) {
                player_pos2 = -1
            }
            if (receivedNumber == 201) {
                player_pos2 = 0
            }
            if (receivedNumber == 202) {
                player_pos2 = 1
            }
        }
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    if (game2 == 1) {
        if (player == 1) {
            if (player_pos_1 == -1) {
                player_pos_1 += 1
                radio.sendNumber(101)
            } else if (player_pos_1 == 0) {
                player_pos_1 += 1
                radio.sendNumber(102)
            } else {
            	
            }
        } else if (player == 2) {
            if (player_pos2 == -1) {
                player_pos2 += 1
                radio.sendNumber(201)
            } else if (player_pos_1 == 0) {
                player_pos2 += 1
                radio.sendNumber(202)
            } else {
            	
            }
        } else {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (game2 == 1) {
        if (player == 1) {
            if (player_pos_1 == 1) {
                player_pos_1 += -1
                radio.sendNumber(101)
            } else if (player_pos_1 == 0) {
                player_pos_1 += -1
                radio.sendNumber(100)
            } else {
            	
            }
        } else if (player == 2) {
            if (player_pos2 == 1) {
                player_pos2 += -1
                radio.sendNumber(201)
            } else if (player_pos_1 == 0) {
                player_pos2 += -1
                radio.sendNumber(200)
            } else {
            	
            }
        } else {
        	
        }
    }
})
let player_pos2 = 0
let player_pos_1 = 0
let player = 0
let game2 = 0
radio.setTransmitPower(7)
radio.setGroup(241)
basic.pause(100)
radio.sendNumber(1167)
while (game2 == 0) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
}
if (game2 == 1) {
	
}
loops.everyInterval(10, function () {
    if (game2 == 1) {
        if (player_pos_1 == -1) {
            led.unplot(0, 0)
            led.unplot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(0, 4)
        }
        if (player_pos_1 == 0) {
            led.unplot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.unplot(0, 4)
        }
        if (player_pos_1 == 1) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.unplot(0, 3)
            led.unplot(0, 4)
        }
        if (player_pos2 == -1) {
            led.unplot(0, 0)
            led.unplot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.plot(0, 4)
        }
        if (player_pos2 == 0) {
            led.unplot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.plot(0, 3)
            led.unplot(0, 4)
        }
        if (player_pos2 == 1) {
            led.plot(0, 0)
            led.plot(0, 1)
            led.plot(0, 2)
            led.unplot(0, 3)
            led.unplot(0, 4)
        }
    }
})
basic.forever(function () {
	
})
