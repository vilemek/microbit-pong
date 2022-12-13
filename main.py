player_pos_1 = 0
player_pos2 = 0
gamp = 0
bx = 0
by = 0
dirx = 0
diry = 0
bx1 = 0
by1 = 0

def on_button_pressed_a():
    global player_pos_1
    if player_pos_1 < 1:
        player_pos_1 += 1
    else:
        player_pos_1 = -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global player_pos2
    if player_pos2 < 1:
        player_pos2 += 1
    else:
        player_pos2 = -1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global gamp, bx, by, dirx, diry
    if gamp == 0:
        gamp = -1
        bx = 2
        by = 2
        while dirx == 0:
            dirx = randint(-1, 1)
        while diry == 0:
            diry = randint(-1, 1)
        gamp = 5
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_every_interval():
    global bx1, by1, bx, diry, dirx, by, gamp
    if gamp == 1:
        bx1 = bx
        by1 = by
        led.unplot(bx, by)
        if dirx == 1:
            bx += 1
        elif dirx == -1:
            bx += -1
        else:
            pass
        if bx1 + dirx == 4:
            if led.point(bx + dirx, by + diry):
                if diry == 1:
                    diry = -1
                elif diry == -1:
                    diry = 1
                if dirx == 1:
                    dirx = -1
                elif dirx == -1:
                    dirx = 1
            else:
                pass
        if diry == 1:
            if by + diry >= 5:
                diry = -1
            by += 1
        elif diry == -1:
            if by + diry <= -1:
                diry = -1
            by += -1
        else:
            pass
        if bx >= 4:
            dirx = -1
        elif bx <= 0:
            dirx = 1
        if by >= 5:
            by = 4
            diry = -1
        elif by <= -1:
            by = 0
            diry = 1
        led.plot(bx, by)
    elif gamp == 5:
        led.plot(2, 2)
        basic.pause(1000)
        gamp = 1
    else:
        pass
loops.every_interval(2500, on_every_interval)

def on_every_interval2():
    if player_pos_1 == -1:
        led.plot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.unplot(0, 3)
        led.unplot(0, 4)
    if player_pos_1 == 0:
        led.unplot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.unplot(0, 4)
    if player_pos_1 == 1:
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
    if player_pos2 == -1:
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.unplot(4, 3)
        led.unplot(4, 4)
    if player_pos2 == 0:
        led.unplot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.unplot(4, 4)
    if player_pos2 == 1:
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
loops.every_interval(25, on_every_interval2)

def on_forever():
    pass
basic.forever(on_forever)
