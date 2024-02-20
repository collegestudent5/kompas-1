let kompasrichting = 0
basic.forever(function () {
    kompasrichting = input.compassHeading()
})
basic.forever(function () {
    if (kompasrichting > 45 && kompasrichting < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (kompasrichting < 225 && kompasrichting > 135) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (kompasrichting > 225 && kompasrichting < 315) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (false) {
    	
    }
})
